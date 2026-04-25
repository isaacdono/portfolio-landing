import { motion } from "framer-motion";
import { ArrowRight, Inbox, Cpu, HardDrive } from "lucide-react";

export const AutomationFlowSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-slate-900 text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        <div className="flex flex-col gap-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              Como funciona a <span className="text-[#25D366]">automação na prática.</span>
            </h2>
            <p className="text-slate-400 font-medium">
              Transformo fluxos manuais e desorganizados em sistemas lineares e eficientes.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="flex-1 w-full p-8 rounded-3xl bg-white/5 border border-white/10 relative z-10">
              <Inbox className="w-8 h-8 text-[#25D366] mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">1. Captura</h3>
              <p className="text-sm text-slate-400">Dados vindos de WhatsApp, formulários, APIs ou e-mails.</p>
            </div>

            <ArrowRight className="hidden md:block w-6 h-6 text-slate-700" />

            {/* Step 2 */}
            <div className="flex-1 w-full p-8 rounded-3xl bg-white/5 border border-[#25D366]/30 relative z-10">
              <Cpu className="w-8 h-8 text-[#25D366] mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">2. Processamento</h3>
              <p className="text-sm text-slate-400">IA e lógica de automação filtram, calculam e organizam a informação.</p>
            </div>

            <ArrowRight className="hidden md:block w-6 h-6 text-slate-700" />

            {/* Step 3 */}
            <div className="flex-1 w-full p-8 rounded-3xl bg-white/5 border border-white/10 relative z-10">
              <HardDrive className="w-8 h-8 text-[#25D366] mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">3. Entrega</h3>
              <p className="text-sm text-slate-400">Dados salvos em Planilhas, CRM, Agenda ou sistemas internos.</p>
            </div>

            {/* Background Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
