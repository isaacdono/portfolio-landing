import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white noise-bg">
      {/* Soft Background Blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px]" />

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[124px] z-10 pt-20 pb-20">
        <div className="flex flex-col items-center text-center space-y-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-100 text-teal-600 text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            Especialista em Automações IA
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-[-0.05em] text-slate-900"
          >
            AUTOMATIZE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-teal-600">SEU NEGÓCIO.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium"
          >
            Crio assistentes inteligentes que gerenciam seu WhatsApp 24/7. Liberte seu tempo em <span className="text-slate-900 font-bold">restaurantes, clínicas e salões</span> com soluções sob medida.
          </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
                <Button className="h-16 rounded-full bg-slate-900 !text-white px-12 text-lg font-bold hover:bg-teal-600 hover:scale-105 transition-all group shadow-xl border-0">
                  Falar no WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform !text-white" />
                </Button>
              </a>
            </div>

          {/* Floating UI Elements */}
          <div className="hidden lg:block relative w-full h-20">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 glass-card p-5 rounded-3xl flex items-center gap-4 border-slate-200 shadow-lg"
            >
              <div className="h-12 w-12 rounded-2xl bg-teal-500 flex items-center justify-center text-white font-bold">✓</div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-bold uppercase">Status</p>
                <p className="text-sm font-bold text-slate-900">Atendimento Ativo</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 bottom-0 glass-card p-5 rounded-3xl flex items-center gap-4 border-slate-200 shadow-lg"
            >
              <div className="h-12 w-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-bold font-serif italic">i</div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-bold uppercase">Chatbot</p>
                <p className="text-sm font-bold text-slate-900">Agendamento Feito</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
