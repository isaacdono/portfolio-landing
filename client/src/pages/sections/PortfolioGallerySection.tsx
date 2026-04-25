import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Chatbot para WhatsApp",
    category: "Automação Comercial",
    imageSrc: "/figmaAssets/image.png",
  },
  {
    title: "Relatórios IA",
    category: "Inteligência de Dados",
    imageSrc: "/figmaAssets/image-9.svg",
  },
  {
    title: "Agente Multimodal",
    category: "IA Generativa",
    imageSrc: "/figmaAssets/image-1.png",
  },
];

export const PortfolioGallerySection = (): JSX.Element => {
  return (
    <section className="w-full py-32 bg-white noise-bg">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        
        {/* Bio Section - Light High End Style */}
        <div className="relative mb-40 p-12 md:p-24 rounded-[4rem] bg-slate-50 border border-slate-100 overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 -skew-x-12 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-[3.5rem] bg-slate-900 flex items-center justify-center text-white text-6xl font-black shadow-2xl">
                IO
              </div>
              <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-white rounded-3xl border border-slate-100 flex items-center justify-center text-3xl shadow-lg">🚀</div>
            </div>
            
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                  Isaac Oliveira
                </h2>
                <p className="text-teal-600 font-bold uppercase tracking-[0.3em] text-sm">Engenheiro de Computação • UNICAMP</p>
              </div>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                Especialista em construir <span className="text-slate-900 underline decoration-teal-500 underline-offset-8">sistemas inteligentes</span> que eliminam o trabalho manual e escalam negócios reais.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["UNICAMP", "Node.js", "Python", "IA", "n8n"].map(tag => (
                  <span key={tag} className="px-6 py-2 rounded-2xl bg-white border border-slate-100 text-slate-500 text-sm font-bold shadow-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-slate-100 pb-12 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              TRABALHOS <br />
              <span className="text-teal-600 italic font-serif">SELECIONADOS.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-sm">
              Projetos técnicos focados em performance e automação inteligente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl transition-all duration-700 hover:shadow-2xl hover:border-teal-500/30">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-12 left-12 right-12">
                    <p className="text-teal-400 text-xs font-black uppercase tracking-[0.2em] mb-4">{item.category}</p>
                    <h3 className="text-3xl font-bold text-white leading-tight">{item.title}</h3>
                  </div>

                  <div className="absolute top-10 right-10 p-5 rounded-3xl bg-white text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 shadow-2xl">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
