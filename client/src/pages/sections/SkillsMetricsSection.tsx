import { Card, CardContent } from "@/components/ui/card";

const leftColumnSkills = [
  { name: "Interaction Design", value: 60 },
  { name: "Usability Testing", value: 70 },
  { name: "User Research", value: 45 },
];

const rightColumnSkills = [
  { name: "Figma", value: 95 },
  { name: "Prototyping", value: 80 },
  { name: "Information Architecture", value: 50 },
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
          <h2 className="mt-[-1.00px] font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-[#1f1f1f] leading-[var(--text-4xl-font-bold-line-height)] [font-style:var(--text-4xl-font-bold-font-style)]">
            Core Design Skills
          </h2>
          <p className="font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] tracking-[var(--text-base-font-normal-letter-spacing)] text-[#1f1f1f] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
            I excel in essential design skills, creating visually stunning and
            functional digital experiences. From UI design to UX research, my
            passion is to craft effective and memorable digital solutions.
          </p>
        </header>
        <Card className="w-full border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-[120px]">
              <div className="flex flex-col gap-2">
                {leftColumnSkills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    value={skill.value}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {rightColumnSkills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    value={skill.value}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
