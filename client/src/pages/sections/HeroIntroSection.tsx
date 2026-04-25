import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Texto à Esquerda */}
          <div className="flex-1 space-y-8 text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[0.95] tracking-tighter">
              Integro sistemas e <span className="text-teal-600">automatizo processos</span> para sua empresa escalar.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed">
              Crio automações para conectar WhatsApp, planilhas, agenda, CRM, APIs e tarefas internas, reduzindo trabalho manual e organizando a operação do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 rounded-xl bg-slate-900 !text-white px-8 text-lg font-bold hover:bg-teal-600 transition-colors">
                  Automatizar meu negócio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Mockup de Celular à Direita (Mantendo como um exemplo de canal integrado) */}
          <div className="flex-1 w-full max-w-[400px] lg:max-w-none relative">
            <div className="relative mx-auto w-[280px] md:w-[320px] h-[580px] md:h-[640px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
              <div className="bg-[#075e54] p-4 pt-10 text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div>
                  <p className="text-xs font-bold leading-none">Sistema de Automação</p>
                  <p className="text-[10px] opacity-80">Processando fluxos...</p>
                </div>
              </div>
              
              <div className="p-4 space-y-4 bg-[#f0f2f5] h-full font-sans overflow-y-auto">
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[90%] border-l-4 border-blue-500">
                  <p className="text-[10px] font-bold text-blue-600 uppercase">Novo Lead via Site</p>
                  <p className="text-xs text-slate-800 font-medium">Salvando na planilha de vendas...</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[90%] border-l-4 border-teal-500">
                  <p className="text-[10px] font-bold text-teal-600 uppercase">WhatsApp</p>
                  <p className="text-xs text-slate-800 italic">"Agendamento confirmado para às 14h."</p>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[90%] border-l-4 border-purple-500">
                  <p className="text-[10px] font-bold text-purple-600 uppercase">Google Agenda</p>
                  <p className="text-xs text-slate-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Bloco de horário reservado.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[90%] border-l-4 border-orange-500">
                  <p className="text-[10px] font-bold text-orange-600 uppercase">CRM Integrado</p>
                  <p className="text-xs text-slate-800">Status do cliente atualizado com sucesso.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
