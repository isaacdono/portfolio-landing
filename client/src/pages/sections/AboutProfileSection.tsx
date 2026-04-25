import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "502", label: "Projects Done" },
  { value: "10+", label: "Years of Experience" },
  { value: "273+", label: "Clients Served" },
];

export const AboutProfileSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-dark px-6 py-16 md:px-10 lg:px-20 xl:px-[188px]">
      <div className="mx-auto flex w-full max-w-[1064px] flex-col items-center gap-8">
        <header className="flex w-full max-w-[810px] flex-col items-center gap-6 text-center">
          <h2 className="mt-[-1.00px] font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-white [font-style:var(--text-4xl-font-bold-font-style)]">
            About Me
          </h2>
          <p className="font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-white [font-style:var(--text-base-font-normal-font-style)]">
            I&apos;m Sara Jones, a UI/UX designer dedicated to crafting
            intuitive and visually stunning digital experiences. With a passion
            for user-centric design, I transform ideas into functional and
            beautiful interfaces. Let&apos;s collaborate and shape the future of
            design together.
          </p>
        </header>
        <Card className="w-full border-0 bg-transparent shadow-none">
          <CardContent className="relative z-10 p-0">
            <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-16">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <p className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-[64px] font-bold leading-[96px] tracking-[0] text-pink whitespace-nowrap">
                    {stat.value}
                  </p>
                  <h3 className="font-text-lg-font-bold text-[length:var(--text-lg-font-bold-font-size)] font-[number:var(--text-lg-font-bold-font-weight)] leading-[var(--text-lg-font-bold-line-height)] tracking-[var(--text-lg-font-bold-letter-spacing)] text-white [font-style:var(--text-lg-font-bold-font-style)]">
                    {stat.label}
                  </h3>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="pointer-events-none absolute bottom-[-117px] left-1/2 h-[234px] w-[234px] -translate-x-1/2 rounded-full bg-red" />
    </section>
  );
};
