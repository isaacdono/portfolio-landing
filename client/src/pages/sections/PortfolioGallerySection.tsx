export const PortfolioGallerySection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Espaço para Foto */}
          <div className="shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-slate-200 overflow-hidden border-4 border-slate-900 shadow-xl">
              <img 
                src="/figmaAssets/20260411_093054.jpg.jpeg" 
                alt="Isaac Oliveira" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Texto e Tags */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-[#25D366] tracking-tight">Isaac Oliveira</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Estudante de Engenharia de Computação na <span className="font-bold text-slate-900 underline decoration-[#25D366] underline-offset-4">UNICAMP</span>. 
              Trabalho com automação de processos, integrações de sistemas e IA aplicada para reduzir tarefas manuais e organizar operações.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Google Workspace", "Python", "WhatsApp", "n8n", "APIs"].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
