import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FooterNavigationSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white px-6 py-16 border-t border-slate-100">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          Vamos automatizar seu atendimento?
        </h2>
        <p className="text-lg text-slate-500 font-medium">
          Fale comigo no WhatsApp para analisarmos o seu processo atual.
        </p>

        <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
          <Button className="h-14 rounded-xl bg-slate-900 !text-white px-10 text-lg font-bold hover:bg-teal-600 transition-colors shadow-lg">
            Conversar no WhatsApp
            <MessageCircle className="ml-2 h-6 w-6" />
          </Button>
        </a>

        <p className="mt-8 text-xs text-slate-400 font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Isaac Oliveira • Engenharia de Computação UNICAMP
        </p>
      </div>
    </footer>
  );
};
