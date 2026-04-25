import { motion } from "framer-motion";
import { MessageCircle, CalendarDays, Share2, LineChart, Cpu, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Chatbots de Alta Conversão",
    description: "IA que não parece robô. Tira dúvidas, apresenta cardápio e qualifica leads 24h por dia no WhatsApp.",
    icon: <Bot className="w-12 h-12 text-teal-600" />,
    className: "md:col-span-2 md:row-span-2 bg-slate-50 border-slate-100",
  },
  {
    title: "Agendamento Inteligente",
    description: "Sincronização em tempo real com sua agenda Google.",
    icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
    className: "bg-white border-slate-100",
  },
  {
    title: "Integrações",
    description: "WhatsApp + Sheets + CRM.",
    icon: <Share2 className="w-8 h-8 text-slate-500" />,
    className: "bg-white border-slate-100",
  },
  {
    title: "Automação de Processos",
    description: "Sistemas robustos usando Node.js, n8n e Python para escalar sua operação.",
    icon: <Cpu className="w-10 h-10 text-teal-600" />,
    className: "md:col-span-2 bg-white border-slate-100 shadow-sm",
  },
];

export const ServiceOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-32 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[124px]">
        
        <div className="flex flex-col gap-6 mb-20 text-center items-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            SOLUÇÕES <br />
            <span className="text-teal-600 italic font-serif">PROFISSIONAIS.</span>
          </h2>
          <div className="h-1.5 w-24 bg-teal-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3rem] border group flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-teal-200 ${service.className}`}
            >
              <div className="space-y-8">
                <div className="p-5 rounded-3xl bg-white shadow-sm w-fit group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-teal-600 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Saber mais <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
