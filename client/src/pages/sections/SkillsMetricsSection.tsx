import { Card, CardContent } from "@/components/ui/card";

const leftColumnSkills = [
  { name: "Python / Node.js", value: 85 },
  { name: "n8n / Automações", value: 90 },
  { name: "APIs & Integrações", value: 80 },
];

const rightColumnSkills = [
  { name: "IA / Machine Learning", value: 75 },
  { name: "Cloud / Docker", value: 70 },
  { name: "Google Sheets/Drive/Agenda", value: 85 },
];

const skillLabelClassName =
  "font-text-base-font-bold font-[number:var(--text-base-font-bold-font-weight)] text-[#1f1f1f] text-[length:var(--text-base-font-bold-font-size)] tracking-[var(--text-base-font-bold-letter-spacing)] leading-[var(--text-base-font-bold-line-height)] [font-style:var(--text-base-font-bold-font-style)]";

type SkillItemProps = {
  name: string;
  value: number;
};

const SkillItem = ({ name, value }: SkillItemProps): JSX.Element => {
  return (
    <article className="flex flex-col items-start gap-2">
      <h3 className={`${skillLabelClassName}`}>{name}</h3>
      <div className="flex w-full items-center gap-4">
        <div
          className="h-[5px] flex-1 overflow-hidden bg-medium-grey"
          role="progressbar"
          aria-label={name}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
        >
          <div className="h-full bg-[#1f1f1f]" style={{ width: `${value}%` }} />
        </div>
        <span className={`${skillLabelClassName} shrink-0 whitespace-nowrap`}>
          {value}%
        </span>
      </div>
    </article>
  );
};

export const SkillsMetricsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-grey px-6 py-[72px] sm:px-10 lg:px-[188px] lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1064px] flex-col items-center gap-12 lg:gap-16">
        <header className="flex w-full max-w-[810px] flex-col items-center gap-6 text-center">
          <h2 className="mt-[-1.00px] font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-4xl-font-bold-font-style)]">
            Habilidades Técnicas
          </h2>
          <p className="font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] tracking-[var(--text-base-font-normal-letter-spacing)] text-[#1f1f1f] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
            Experiência prática em automações, integração de plataformas, agentes de IA, backend, cloud e ferramentas Google. Sempre aprendendo e pronto para novos desafios!
          </p>
        </header>
        {/* Espaço reservado para imagens */}
        <div className="flex w-full flex-wrap items-center justify-center gap-8 min-h-[200px]">
          {/* Adicione imagens aqui */}
        </div>
      </div>
    </section>
  );
};
