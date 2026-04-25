import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Chatbot para WhatsApp",
    category: "IA, Automação, Google Sheets/Agenda",
    imageSrc: "/figmaAssets/image.png",
    imageAlt: "Chatbot WhatsApp",
    imageClassName: "object-cover",
  },
  {
    title: "Relatórios Inteligentes",
    category: "Automação, IA, WhatsApp",
    imageSrc: "/figmaAssets/image-9.svg",
    imageAlt: "Relatórios IA",
    imageClassName: "object-cover",
  },
  {
    title: "Projeto de Robótica (CTI)",
    category: "IA Generativa, Multimodalidade",
    imageSrc: "/figmaAssets/image-1.png",
    imageAlt: "Robótica CTI",
    imageClassName: "object-cover",
  },
  {
    title: "Estágio CPQD",
    category: "Chatbots, Langgraph, FastAPI, Docker",
    imageSrc: "/figmaAssets/image-8.svg",
    imageAlt: "CPQD",
    imageClassName: "object-cover",
  },
  {
    title: "Estágio Eldorado",
    category: "Testes, Relatórios, Google Drive",
    imageSrc: "/figmaAssets/image-2.png",
    imageAlt: "Eldorado",
    imageClassName: "object-cover",
  },
];

export const PortfolioGallerySection = (): JSX.Element => {
  return (
    <section className="w-full bg-grey">
      <div className="w-full bg-[#e3eafc]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-6 pb-[142px] pt-[50px] sm:px-10 lg:px-[124px]">
          <header className="flex w-full max-w-[810px] flex-col items-center justify-center gap-6 text-center">
            <h2 className="mt-[-1.00px] w-fit whitespace-nowrap font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-4xl-font-bold-font-style)]">
              Experiências & Projetos
            </h2>
            <p className="max-w-[810px] font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-dark [font-style:var(--text-base-font-normal-font-style)]">
              Veja alguns projetos acadêmicos, experiências de estágio e soluções de automação/IA que já desenvolvi. Para mais detalhes, acesse meu GitHub ou entre em contato!
            </p>
          </header>
        </div>
      </div>
      <div className="mx-auto mt-[-100px] w-full max-w-[1440px] px-6 pb-16 sm:px-10 lg:px-[124px]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-16 xl:gap-y-16">
          {portfolioItems.map((item) => (
            <article key={item.title} className="w-full">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col gap-8 p-0">
                  <button
                    type="button"
                    className="group flex w-full flex-col gap-8 text-left"
                    aria-label={item.title}
                  >
                    <img
                      className={`h-[198.33px] w-full ${item.imageClassName}`}
                      alt={item.imageAlt}
                      src={item.imageSrc}
                    />
                    <div className="flex w-full items-end justify-between gap-4">
                      <div className="flex min-w-0 flex-col items-start gap-4">
                        <h3 className="mt-[-1.00px] self-stretch font-text-xl-font-bold text-[length:var(--text-xl-font-bold-font-size)] font-[number:var(--text-xl-font-bold-font-weight)] leading-[var(--text-xl-font-bold-line-height)] tracking-[var(--text-xl-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-xl-font-bold-font-style)]">
                          {item.title}
                        </h3>
                        <p className="w-[242px] max-w-full font-text-sm-font-normal text-[length:var(--text-sm-font-normal-font-size)] font-[number:var(--text-sm-font-normal-font-weight)] leading-[var(--text-sm-font-normal-line-height)] tracking-[var(--text-sm-font-normal-letter-spacing)] text-dark [font-style:var(--text-sm-font-normal-font-style)]">
                          {item.category}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="#2471a3"
                        className="h-7 w-7 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                      </svg>
                    </div>
                  </button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
