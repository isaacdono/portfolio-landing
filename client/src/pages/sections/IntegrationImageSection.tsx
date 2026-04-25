export const IntegrationImageSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h3 className="text-xs font-black text-[#25D366] uppercase tracking-[0.2em]">Tecnologia de Ponta</h3>
            <p className="text-lg text-slate-600 font-medium max-w-xl">
              Utilizo o n8n e outras ferramentas avançadas para orquestrar fluxos complexos e integrar dezenas de sistemas simultaneamente.
            </p>
          </div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50">
            <img 
              src="figmaAssets/workflow2-1.png" 
              alt="Fluxo de Automação n8n" 
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            {/* Overlay sutil para integração visual */}
            <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-[2.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
