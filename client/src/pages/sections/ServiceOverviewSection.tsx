import { TableProperties, Calendar, LayoutDashboard } from "lucide-react";

export const ServiceOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        
        <div className="max-w-4xl space-y-10">
          <div className="space-y-3 text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tighter">
              Soluções de <span className="text-[#25D366]">Integração e Automação.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Conecte suas ferramentas e deixe o trabalho repetitivo no automático.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#25D366]/30 transition-colors group">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <TableProperties className="w-6 h-6 text-[#25D366]" />
              </div>
              <div className="flex-1 pt-1.5 space-y-1">
                <h3 className="font-bold text-slate-900 text-lg leading-none">Conexão de Dados</h3>
                <p className="text-sm text-slate-600 leading-tight">
                  WhatsApp integrado ao Google Sheets, CRM ou APIs. Elimine o erro manual e a cópia de pedidos.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#25D366]/30 transition-colors group">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-[#25D366]" />
              </div>
              <div className="flex-1 pt-1.5 space-y-1">
                <h3 className="font-bold text-slate-900 text-lg leading-none">Agenda Automática</h3>
                <p className="text-sm text-slate-600 leading-tight">
                  Marcação integrada à Google Agenda, com envio de lembretes automáticos para reduzir as faltas.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#25D366]/30 transition-colors group">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <LayoutDashboard className="w-6 h-6 text-[#25D366]" />
              </div>
              <div className="flex-1 pt-1.5 space-y-1">
                <h3 className="font-bold text-slate-900 text-lg leading-none">Inteligência Operacional</h3>
                <p className="text-sm text-slate-600 leading-tight">
                  Dashboard com métricas e qualificação de leads via IA para organizar o fluxo da sua operação.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
