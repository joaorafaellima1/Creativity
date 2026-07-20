import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/company";

export function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-4 right-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Creativity Tecnologia pelo WhatsApp"
      data-analytics-event="floating_whatsapp_click"
    >
      <MessageCircle aria-hidden className="h-6 w-6" />
    </a>
  );
}
