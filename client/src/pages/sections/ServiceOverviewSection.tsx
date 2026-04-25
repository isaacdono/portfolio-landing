import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Automações e Integrações",
    description:
      "Automatize processos e conecte plataformas (Google Sheets, APIs, bancos de dados) usando n8n, Python e Node.js.",
    icon: (
      <img
        className="h-[53.97px] w-[47.98px]"
        alt="Automação"
        src="/figmaAssets/vector-blue.svg"
      />
    ),
  },
  {
    title: "Chatbots e IA",
    description:
      "Desenvolvimento de chatbots inteligentes para WhatsApp, atendimento automatizado, agentes de IA e integração com IA generativa.",
    icon: (
      <div className="inline-flex h-[54px] items-center">
        <div className="h-11 w-11 rounded-full border-2 border-solid border-[#2471a3]" />
        <div className="-ml-[22px] h-11 w-11 rounded-full border-2 border-solid border-[#2471a3]" />
        <div className="-ml-[22px] h-11 w-11 rounded-full border-2 border-solid border-[#2471a3]" />
      </div>
    ),
  },
  {
    title: "Backend e APIs",
    description:
      "Criação de backends robustos, APIs REST/GraphQL, integrações com bancos de dados e serviços em nuvem (AWS, GCP, Azure).",
    icon: (
      <div
        className="h-[54px] w-[54px] bg-[url(/figmaAssets/search-status.png)] bg-[100%_100%] bg-no-repeat"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Cloud e Relatórios Inteligentes",
    description:
      "Implantação de soluções em cloud, automação de relatórios e dashboards inteligentes enviados direto para seu WhatsApp ou e-mail.",
    icon: (
      <div className="flex h-[54px] w-[54px] items-center justify-center">
        <img
          className="h-12 w-[48.11px]"
          alt="Cloud"
          src="/figmaAssets/vuesax-linear-task-blue.svg"
        />
      </div>
    ),
  },
];

export const ServiceOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white px-6 py-16 sm:px-10 lg:px-[124px]">
      <div className="mx-auto flex w-full max-w-[1192px] flex-col items-center justify-center gap-8">
        <header className="flex w-full max-w-[810px] flex-col items-center gap-6 text-center">
          <h2 className="font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-4xl-font-bold-font-style)]">
            Serviços
          </h2>
          <p className="font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-dark [font-style:var(--text-base-font-normal-font-style)]">
            Soluções sob medida em automações, IA, integrações, chatbots, backend e cloud para transformar o seu negócio.
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="h-full border-0 bg-transparent shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-6 p-4">
                <div className="shrink-0">{service.icon}</div>
                <h3 className="w-full font-text-lg-font-bold text-[length:var(--text-lg-font-bold-font-size)] font-[number:var(--text-lg-font-bold-font-weight)] leading-[var(--text-lg-font-bold-line-height)] tracking-[var(--text-lg-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-lg-font-bold-font-style)]">
                  {service.title}
                </h3>
                <p className="w-full font-text-sm-font-normal text-[length:var(--text-sm-font-normal-font-size)] font-[number:var(--text-sm-font-normal-font-weight)] leading-[var(--text-sm-font-normal-line-height)] tracking-[var(--text-sm-font-normal-letter-spacing)] text-dark [font-style:var(--text-sm-font-normal-font-style)]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
