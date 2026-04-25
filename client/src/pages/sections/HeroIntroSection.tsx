import { Button } from "@/components/ui/button";



export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#e3eafc]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 pt-6 md:pt-10">
        <header className="relative w-full px-5 md:px-10 lg:px-[124px]">
          <div className="absolute left-1/2 top-[-76px] hidden h-[146px] w-[146px] -translate-x-1/2 rounded-full bg-[#2471a3] md:block" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
              <Button className="h-auto rounded-none bg-[#2471a3] px-6 py-3 text-lg font-bold text-white hover:bg-[#1f1f1f]/90">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center gap-8 px-5 md:px-10 lg:flex-row lg:items-end lg:gap-12 lg:px-[124px]">
          <article className="flex w-full flex-1 flex-col items-start gap-8 pt-4 md:pt-8 lg:self-stretch lg:pt-16 lg:pb-20">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1f1f1f] max-w-2xl">
              Automatize seu atendimento no WhatsApp e ganhe mais tempo no dia a dia
            </h1>
            <p className="text-lg text-[#1f1f1f] max-w-xl">
              Você pode usar automações, chatbots e IA para responder clientes mais rápido, organizar agendamentos, reduzir tarefas manuais e melhorar sua operação. Eu crio soluções sob medida para restaurantes, salões, consultórios e pequenas empresas.
            </p>
            <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
              <Button className="h-auto rounded bg-[#2471a3] px-8 py-3 text-lg font-bold text-white hover:bg-[#1f1f1f]/90">
                Falar no WhatsApp
              </Button>
            </a>
            <p className="text-base text-[#274472] max-w-xl mt-2">
              Atendimento, agendamentos, confirmações, lembretes, integrações e relatórios automatizados para o seu negócio.
            </p>
          </article>
          <div className="relative flex w-full max-w-[691px] flex-1 items-end justify-center">
            <div className="relative h-[320px] w-full sm:h-[420px] md:h-[487px]">
              <img
                className="absolute left-[16.5%] top-[34.5%] w-[34.2%] max-w-[236px]"
                alt="Shape"
                src="/figmaAssets/shape-117.png"
              />
              <img
                className="absolute left-[15.3%] top-[22%] w-[18.8%] max-w-[130px]"
                alt="Shape"
                src="/figmaAssets/shape-73.png"
              />
              <div className="absolute left-0 top-5 w-full whitespace-nowrap font-bold leading-none tracking-[0] text-[#ffffff80] [-webkit-text-stroke:3.54px_#2471a3] [font-family:'Inter',Helvetica] text-[180px] sm:text-[260px] md:text-[475.2px]">
                IA
              </div>
              <img
                className="absolute left-[17.4%] top-0 h-full max-h-[487px] w-[66.1%] max-w-[457px] object-contain"
                alt="Element"
                src="/figmaAssets/8384950-1.png"
              />
              <img
                className="absolute left-[66%] top-[78.4%] w-[7.6%] max-w-[52px]"
                alt="Frame"
                src="/figmaAssets/frame-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
