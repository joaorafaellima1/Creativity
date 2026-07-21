"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const stages = [
  { name: "Infraestrutura", description: "Capacidade, dispositivos, servidores, armazenamento e redes dimensionados para a operação." },
  { name: "Cloud", description: "Serviços e licenças organizados para desempenho, produtividade e controle de custos." },
  { name: "Segurança", description: "Identidade, acessos, backup e continuidade protegendo pessoas, dados e processos." },
  { name: "Dados", description: "Fontes integradas, tratadas e governadas para eliminar versões conflitantes." },
  { name: "BI", description: "Indicadores e dashboards transformando dados em prioridades de gestão." },
  { name: "IA", description: "Assistentes, agentes e análises aplicados sobre contexto e dados autorizados." },
  { name: "Evolução", description: "Suporte, medição, otimização e novas entregas acompanhando o crescimento." },
];

export function TechnologyJourney() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-10 rounded-lg border border-white/15 bg-white/5 p-4 sm:p-6">
      <div className="flex gap-2 overflow-x-auto pb-4" aria-label="Etapas da jornada tecnológica">
        {stages.map((stage, index) => (
          <button
            className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${active === index ? "bg-white text-black" : "border border-white/20 text-neutral-300 hover:bg-white/10"}`}
            type="button"
            key={stage.name}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >{stage.name}</button>
        ))}
      </div>
      <div className="grid gap-7 border-t border-white/15 pt-7 sm:grid-cols-[0.25fr_1fr] sm:items-center">
        <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#0b5cff] text-sm font-semibold text-white">0{active + 1}</span>{active < stages.length - 1 ? <ArrowRight aria-hidden className="h-5 w-5 text-neutral-500" /> : <CheckCircle2 aria-hidden className="h-5 w-5 text-cyan-300" />}</div>
        <div><h3 className="text-2xl font-semibold text-white">{stages[active].name}</h3><p className="mt-2 max-w-3xl text-sm leading-7 text-neutral-400">{stages[active].description}</p></div>
      </div>
    </div>
  );
}
