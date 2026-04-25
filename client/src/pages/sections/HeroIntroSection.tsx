import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Table, Calendar, Layout, Zap } from "lucide-react";

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white pt-12 pb-16 md:pt-20 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Texto à Esquerda */}
          <div className="flex-1 space-y-8 text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[0.95] tracking-tighter">
              Integro sistemas e <span className="text-[#25D366]">automatizo processos</span> para sua empresa escalar.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed">
              Crio automações para conectar WhatsApp, planilhas, agenda, CRM, APIs e tarefas internas, reduzindo trabalho manual e organizando a operação do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 rounded-xl bg-[#25D366] !text-black px-8 text-lg font-bold hover:bg-[#25D366] border-0 shadow-lg transition-transform hover:scale-[1.02]">
                  Automatizar meu negócio
                  <ArrowRight className="ml-2 h-5 w-5 !text-black" />
                </Button>
              </a>
            </div>
          </div>

          {/* Ilustração de Grafo de Fluxos */}
          <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center">
            <svg viewBox="0 0 500 400" className="w-full h-full max-w-[600px]">
              <g className="stroke-slate-200 stroke-[2] fill-none">
                <path d="M100,200 L250,200" className="animate-pulse" />
                <path d="M400,200 L250,200" />
                <path d="M250,100 L250,200" />
                <path d="M250,300 L250,200" />
                <path d="M100,200 C150,100 200,100 250,100" />
                <path d="M400,200 C350,300 300,300 250,300" />
              </g>

              {/* Centro */}
              <g transform="translate(220, 170)">
                <rect width="60" height="60" rx="16" className="fill-slate-900" />
                <Zap className="text-white w-6 h-6" x="18" y="18" />
              </g>

              {/* Nós */}
              <g transform="translate(60, 175)">
                <rect width="50" height="50" rx="12" className="fill-white stroke-slate-100" />
                <MessageSquare className="text-[#25D366] w-5 h-5" x="15" y="15" />
                <text x="25" y="65" textAnchor="middle" className="text-[10px] font-bold fill-slate-400 uppercase tracking-widest">WhatsApp</text>
              </g>

              <g transform="translate(225, 60)">
                <rect width="50" height="50" rx="12" className="fill-white stroke-slate-100" />
                <Table className="text-[#25D366] w-5 h-5" x="15" y="15" />
                <text x="25" y="-10" textAnchor="middle" className="text-[10px] font-bold fill-slate-400 uppercase tracking-widest">Planilhas</text>
              </g>

              <g transform="translate(390, 175)">
                <rect width="50" height="50" rx="12" className="fill-white stroke-slate-100" />
                <Layout className="text-[#25D366] w-5 h-5" x="15" y="15" />
                <text x="25" y="65" textAnchor="middle" className="text-[10px] font-bold fill-slate-400 uppercase tracking-widest">CRM</text>
              </g>

              <g transform="translate(225, 290)">
                <rect width="50" height="50" rx="12" className="fill-white stroke-slate-100" />
                <Calendar className="text-[#25D366] w-5 h-5" x="15" y="15" />
                <text x="25" y="70" textAnchor="middle" className="text-[10px] font-bold fill-slate-400 uppercase tracking-widest">Agenda</text>
              </g>

              <circle cx="370" cy="100" r="4" className="fill-[#25D366]" />
              <circle cx="130" cy="300" r="4" className="fill-slate-300" />
              <path d="M370,100 L280,170" className="stroke-slate-200 stroke-[1]" strokeDasharray="4" />
            </svg>

            <div className="absolute top-1/4 right-0 bg-white p-3 rounded-xl shadow-lg border border-slate-50 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                <p className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">Fluxo Ativo: API Integrada</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
