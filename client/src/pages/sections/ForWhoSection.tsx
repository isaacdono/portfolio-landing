import { motion } from "framer-motion";

export const ForWhoSection = (): JSX.Element => (
  <section className="w-full py-32 bg-slate-50 relative overflow-hidden">
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[124px] relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter">
            O resultado <br />
            <span className="text-teal-600 font-serif italic">em números.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
            Mais do que tecnologia, entrego organização e tempo livre para você focar no crescimento da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "Atendimento", value: "Instantâneo", sub: "24h por dia" },
            { label: "Trabalho Manual", value: "-90%", sub: "Menos repetição" },
            { label: "Organização", value: "Total", sub: "Agenda sincronizada" },
            { label: "Leads Perdidos", value: "Zero", sub: "Respostas em segundos" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <p className="text-xs font-black text-teal-600 uppercase tracking-widest mb-3">{item.label}</p>
              <p className="text-3xl font-black text-slate-900 mb-1">{item.value}</p>
              <p className="text-sm text-slate-400 font-bold">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);