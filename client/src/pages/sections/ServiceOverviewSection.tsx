import { TableProperties, Calendar, Share2, Zap, LayoutDashboard, MessageSquare } from "lucide-react";

export const ServiceOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        
        <div className="max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tighter leading-none">
              Soluções de <br />
              <span className="text-[#25D366]">Integração e Automação.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Conecte suas ferramentas e deixe o trabalho repetitivo no automático.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                <TableProperties className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">WhatsApp + Planilhas</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Envie dados do WhatsApp direto para Google Sheets ou Excel em tempo real. Ideal para controle de pedidos, leads e orçamentos sem erro humano.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">Agenda e Reservas</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Automação de marcação de horários integrada à sua Google Agenda, com envio automático de confirmações e lembretes para evitar faltas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                <Share2 className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">Sincronização de CRM</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mantenha seu CRM sempre atualizado com os dados vindos de chats, formulários ou outras APIs, garantindo que sua equipe comercial tenha a informação certa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">Dashboards Operacionais</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Criação de painéis de controle e relatórios automáticos que consolidam dados de diferentes sistemas para facilitar sua tomada de decisão.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">Atendimento Inteligente</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Triagem de clientes via chat com qualificação de leads antes de passar para o atendimento humano, otimizando o tempo da sua equipe.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">Integração via APIs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Desenvolvimento de conexões personalizadas entre qualquer sistema que possua uma API, criando fluxos de trabalho únicos para sua empresa.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
