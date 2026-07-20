import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  role?: string;
  phone?: string;
  email?: string;
  segment?: string;
  employees?: string;
  erp?: string;
  need?: string;
  message?: string;
  consent?: boolean;
  website?: string;
  startedAt?: number;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(payload: ContactPayload) {
  const required = [
    payload.name,
    payload.company,
    payload.phone,
    payload.email,
    payload.segment,
    payload.need,
    payload.message,
  ];

  if (required.some((value) => !value || value.trim().length < 2)) {
    return "Preencha os campos obrigatórios.";
  }

  if (!payload.email || !isValidEmail(payload.email)) {
    return "Informe um e-mail válido.";
  }

  if (!payload.consent) {
    return "O consentimento é obrigatório.";
  }

  if (payload.website) {
    return "ok";
  }

  if (payload.startedAt && Date.now() - payload.startedAt < 2000) {
    return "ok";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validationError = validate(payload);

    if (validationError === "ok") {
      return NextResponse.json({ ok: true });
    }

    if (validationError) {
      return NextResponse.json({ ok: false, message: validationError }, { status: 400 });
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "creativity-site",
          receivedAt: new Date().toISOString(),
          payload,
        }),
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Contato recebido com sucesso.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Não foi possível processar a solicitação." },
      { status: 500 },
    );
  }
}
