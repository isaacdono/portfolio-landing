import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FooterNavigationSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white px-6 py-40 border-t border-slate-100 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-12 text-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
            VAMOS ESCALAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">SEU NEGÓCIO?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
            Fale comigo no WhatsApp e descubra como a automação pode liberar seu tempo e aumentar suas vendas.
          </p>
        </div>

        <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
          <Button className="h-20 rounded-[2.5rem] bg-slate-900 !text-white px-16 text-2xl font-black hover:bg-teal-600 hover:scale-105 transition-all group shadow-2xl border-0">
            COMEÇAR AGORA
            <MessageCircle className="ml-3 h-8 w-8 !text-white" />
          </Button>
        </a>

        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="flex gap-8 text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Email</a>
          </div>
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} Isaac Oliveira • Engenharia de Computação UNICAMP
          </p>
        </div>
      </div>
    </footer>
  );
};
