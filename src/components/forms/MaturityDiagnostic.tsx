"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, RotateCcw } from "lucide-react";
import { createWhatsappUrl } from "@/config/company";
import { trackEvent } from "@/lib/analytics";

const questions = [
  ["Dados", "Os indicadores importantes vêm de fontes integradas e confiáveis?"],
  ["Gestão", "A liderança acompanha indicadores com frequência definida?"],
  ["Processos", "As rotinas críticas têm responsáveis e etapas documentadas?"],
  ["Relatórios", "Relatórios recorrentes são atualizados sem trabalho manual excessivo?"],
  ["Cloud", "Aplicações e arquivos têm arquitetura, acesso e custo sob governança?"],
  ["Segurança", "A empresa controla identidades, dispositivos, backup e recuperação?"],
  ["Microsoft", "As licenças contratadas são revisadas por perfil e adoção?"],
  ["Integrações", "ERP, CRM, planilhas e sistemas trocam dados de forma estável?"],
  ["BI", "Os painéis respondem perguntas de negócio e orientam ação?"],
  ["IA", "A empresa já tem casos de uso priorizados e dados adequados para IA?"],
  ["Automação", "Tarefas repetitivas são medidas antes de serem automatizadas?"],
  ["Evolução", "Existe uma agenda contínua de melhoria e adoção de tecnologia?"],
] as const;

const levels = [
  ["Operação Manual", "A rotina depende de pessoas reunindo informações e apagando urgências."],
  ["Tecnologia Fragmentada", "Há boas ferramentas, mas dados, processos e responsabilidades ainda não estão conectados."],
  ["Ambiente Integrado", "A base está organizada e pronta para ampliar governança, automação e uso gerencial."],
  ["Gestão Orientada por Dados", "Indicadores já orientam decisões; o próximo ganho vem de previsão, IA e escala."],
  ["Operação Inteligente", "Tecnologia, dados e gestão trabalham de forma contínua, mensurável e evolutiva."],
] as const;

export function MaturityDiagnostic() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [submitted, setSubmitted] = useState(false);
  const completed = answers.every(Boolean);
  const total = answers.reduce((sum, answer) => sum + answer, 0);
  const index = Math.min(4, Math.max(0, Math.ceil(total / questions.length) - 1));
  const priorities = useMemo(
    () => answers.map((score, question) => ({ score, question })).sort((a, b) => a.score - b.score).slice(0, 3),
    [answers],
  );

  function calculate() {
    if (!completed) return;
    setSubmitted(true);
    trackEvent("diagnostic_complete", { maturity_level: levels[index][0] });
    window.setTimeout(() => document.getElementById("resultado-diagnostico")?.scrollIntoView({ behavior: "smooth" }), 50);
  }

  if (submitted) {
    const message = `Olá, concluí o diagnóstico da Creativity. Meu nível estimado foi: ${levels[index][0]}. Prioridades: ${priorities.map((item) => questions[item.question][0]).join(", ")}. Gostaria de conversar sobre os próximos passos.`;
    return (
      <section className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm md:p-9" id="resultado-diagnostico" aria-live="polite">
        <p className="text-sm font-semibold uppercase text-blue-600">Resultado estimado</p>
        <div className="mt-4 flex flex-col gap-6 border-b border-neutral-200 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-neutral-500">Nível {index + 1} de 5</p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-950 md:text-4xl">{levels[index][0]}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">{levels[index][1]}</p>
          </div>
          <div className="flex gap-2" aria-label={`Nível ${index + 1} de 5`}>
            {levels.map((level, levelIndex) => (
              <span className={`h-3 w-10 rounded-sm ${levelIndex <= index ? "bg-blue-600" : "bg-neutral-200"}`} key={level[0]} />
            ))}
          </div>
        </div>
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-neutral-950">Pontos mais estruturados</h3>
            <ul className="mt-4 grid gap-3">
              {answers.map((score, question) => ({ score, question })).sort((a, b) => b.score - a.score).slice(0, 3).map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-neutral-600" key={questions[item.question][0]}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden />
                  <span><strong className="text-neutral-900">{questions[item.question][0]}:</strong> {questions[item.question][1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-950">Três prioridades sugeridas</h3>
            <ol className="mt-4 grid gap-3">
              {priorities.map((item, priorityIndex) => (
                <li className="flex gap-3 text-sm leading-6 text-neutral-600" key={questions[item.question][0]}>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-sm bg-neutral-950 text-xs font-semibold text-white">{priorityIndex + 1}</span>
                  <span><strong className="text-neutral-900">{questions[item.question][0]}.</strong> Estruturar esta frente antes de ampliar a complexidade.</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-7 rounded-md bg-neutral-100 p-4 text-sm leading-6 text-neutral-600">Este diagnóstico é orientativo e não substitui uma análise técnica do ambiente, dos riscos e dos objetivos do negócio.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700" data-analytics-event="diagnostic_whatsapp" href={createWhatsappUrl(message)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden /> Conversar sobre o resultado
          </a>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100" onClick={() => { setAnswers(Array(questions.length).fill(0)); setSubmitted(false); }} type="button">
            <RotateCcw className="h-4 w-4" aria-hidden /> Refazer diagnóstico
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-9">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-sm font-semibold uppercase text-blue-600">12 perguntas · cerca de 4 minutos</p>
        <h2 className="mt-2 text-2xl font-semibold text-neutral-950">Avalie o cenário atual da empresa</h2>
        <p className="mt-2 text-sm leading-6 text-neutral-600">Responda de 1 (ainda não acontece) a 5 (acontece de forma consistente).</p>
      </div>
      <div className="divide-y divide-neutral-200">
        {questions.map(([area, question], index) => (
          <fieldset className="grid gap-4 py-6 lg:grid-cols-[1fr_auto] lg:items-center" key={area}>
            <legend className="sr-only">{area}: {question}</legend>
            <div>
              <span className="text-xs font-semibold uppercase text-blue-600">{area}</span>
              <p className="mt-1 text-sm font-medium leading-6 text-neutral-900">{question}</p>
            </div>
            <div className="grid grid-cols-5 gap-2" aria-label={`Nota para ${area}`}>
              {[1, 2, 3, 4, 5].map((score) => (
                <label className={`grid h-11 w-full min-w-11 cursor-pointer place-items-center rounded-md border text-sm font-semibold transition lg:w-11 ${answers[index] === score ? "border-blue-600 bg-blue-600 text-white" : "border-neutral-300 bg-white text-neutral-700 hover:border-blue-400"}`} key={score}>
                  <input className="sr-only" type="radio" name={`question-${index}`} value={score} checked={answers[index] === score} onChange={() => setAnswers((current) => current.map((answer, answerIndex) => answerIndex === index ? score : answer))} />
                  {score}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">{answers.filter(Boolean).length} de {questions.length} respondidas</p>
        <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white enabled:hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-neutral-300" disabled={!completed} onClick={calculate} type="button">
          Ver meu resultado <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <p className="mt-4 text-xs leading-5 text-neutral-500">As respostas ficam somente neste navegador. Nenhum dado é enviado automaticamente. Consulte nossa <Link className="underline hover:text-neutral-900" href="/politica-de-privacidade">Política de Privacidade</Link>.</p>
    </section>
  );
}

