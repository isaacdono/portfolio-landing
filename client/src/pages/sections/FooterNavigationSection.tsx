import { Button } from "@/components/ui/button";

const leftLinks = ["About", "Services"];
const rightLinks = ["Portfolio", "Blog"];
const socialLinks = [
  { name: "Instagram", src: "/figmaAssets/-social-links.svg" },
];

export const FooterNavigationSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-dark px-6 py-10 sm:px-10 md:px-16 lg:px-24 xl:px-[120px] 2xl:px-[300px]">
      <div className="mx-auto flex w-full max-w-[840px] flex-col items-center gap-10 sm:gap-12 md:gap-16">
        <nav
          aria-label="Footer navigation"
          className="flex w-full flex-col items-center justify-center gap-8 md:grid md:grid-cols-[1fr_auto_1fr] md:items-end md:gap-6"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-self-start">
            {leftLinks.map((link) => (
              <li key={link}>
                <Button
                  variant="link"
                  className="h-auto p-0 font-text-xl-font-bold text-[length:var(--text-xl-font-bold-font-size)] font-[number:var(--text-xl-font-bold-font-weight)] leading-[var(--text-xl-font-bold-line-height)] tracking-[var(--text-xl-font-bold-letter-spacing)] text-white no-underline hover:text-white/80 hover:no-underline [font-style:var(--text-xl-font-bold-font-style)]"
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-label="SJ Design"
            className="inline-flex items-start justify-center gap-1"
          >
            <span className="relative mt-[-1.00px] whitespace-nowrap text-4xl font-normal leading-[54px] tracking-[-7.92px] text-transparent [font-family:'Inter',Helvetica]">
              <span className="font-semibold tracking-[-2.85px] text-white">
                S
              </span>
              <span className="font-semibold tracking-[-2.85px] text-[#fc3314]">
                J
              </span>
            </span>
            <span className="relative mt-[-1.00px] whitespace-nowrap font-text-4xl-font-semibold text-[length:var(--text-4xl-font-semibold-font-size)] font-[number:var(--text-4xl-font-semibold-font-weight)] leading-[var(--text-4xl-font-semibold-line-height)] tracking-[var(--text-4xl-font-semibold-letter-spacing)] text-red [font-style:var(--text-4xl-font-semibold-font-style)]">
              Design
            </span>
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-self-end">
            {rightLinks.map((link) => (
              <li key={link}>
                <Button
                  variant="link"
                  className="h-auto p-0 font-text-xl-font-bold text-[length:var(--text-xl-font-bold-font-size)] font-[number:var(--text-xl-font-bold-font-weight)] leading-[var(--text-xl-font-bold-line-height)] tracking-[var(--text-xl-font-bold-letter-spacing)] text-white no-underline hover:text-white/80 hover:no-underline [font-style:var(--text-xl-font-bold-font-style)]"
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <section
          aria-label="Social media"
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          <p className="mt-[-1.00px] whitespace-nowrap text-center text-base font-normal leading-6 tracking-[0] text-white [font-family:'Montserrat',Helvetica]">
            Follow me on social media:
          </p>
          {socialLinks.map((item) => (
            <img
              key={item.name}
              className="h-auto max-w-full"
              alt={item.name}
              src={item.src}
            />
          ))}
        </section>
      </div>
    </footer>
  );
};
