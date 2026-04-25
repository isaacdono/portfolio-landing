import { Button } from "@/components/ui/button";

const navItems = ["About", "Services", "Portfolio", "Blog"];

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#ffd3d0]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 pt-6 md:pt-10">
        <header className="relative w-full px-5 md:px-10 lg:px-[124px]">
          <div className="absolute left-1/2 top-[-76px] hidden h-[146px] w-[146px] -translate-x-1/2 rounded-full bg-[#fc3314] md:block" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <a
              href="#"
              className="inline-flex items-start gap-1 self-start"
              aria-label="SJ Design"
            >
              <div className="relative mt-[-1.00px] w-fit text-3xl font-normal leading-[45px] tracking-[-6.60px] text-transparent whitespace-nowrap [font-family:'Inter',Helvetica]">
                <span className="font-semibold tracking-[-1.98px] text-[#1f1f1f]">
                  S
                </span>
                <span className="font-semibold tracking-[-1.98px] text-[#fc3314]">
                  J
                </span>
              </div>
              <div className="relative mt-[-1.00px] w-fit font-text-3xl-font-semibold text-[length:var(--text-3xl-font-semibold-font-size)] font-[number:var(--text-3xl-font-semibold-font-weight)] leading-[var(--text-3xl-font-semibold-line-height)] tracking-[var(--text-3xl-font-semibold-letter-spacing)] whitespace-nowrap text-[#fc3314] [font-style:var(--text-3xl-font-semibold-font-style)]">
                Design
              </div>
            </a>
            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center gap-6 md:gap-8"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative mt-[-1.00px] w-fit whitespace-nowrap text-lg font-bold leading-[23.4px] tracking-[0] text-dark [font-family:'Montserrat',Helvetica]"
                >
                  {item}
                </a>
              ))}
            </nav>
            <Button className="h-auto rounded-none bg-[#1f1f1f] px-6 py-3 text-[length:var(--text-base-font-bold-font-size)] font-[number:var(--text-base-font-bold-font-weight)] leading-[var(--text-base-font-bold-line-height)] tracking-[var(--text-base-font-bold-letter-spacing)] text-white hover:bg-[#1f1f1f]/90 [font-family:var(--text-base-font-bold-font-family)] [font-style:var(--text-base-font-bold-font-style)]">
              Let&apos;s Talk
            </Button>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center gap-8 px-5 md:px-10 lg:flex-row lg:items-end lg:gap-12 lg:px-[124px]">
          <article className="flex w-full flex-1 flex-col items-start gap-12 pt-4 md:pt-8 lg:self-stretch lg:pt-16 lg:pb-20">
            <div className="flex w-full flex-col items-start gap-4">
              <p className="relative self-stretch text-xl font-normal leading-[30px] tracking-[0] text-[#1f1f1f] [font-family:'Montserrat',Helvetica]">
                UX Designer
              </p>
              <h1 className="relative self-stretch text-transparent [font-family:'Montserrat',Helvetica] text-[40px] font-normal leading-[44px] tracking-[0] md:text-5xl md:leading-[48px]">
                <span className="font-bold leading-[1.15] text-[#1f1f1f] md:leading-[72px]">
                  Hi There, I&apos;m <br />
                </span>
                <span className="font-bold leading-[1.15] text-[#fc3314] md:leading-[72px]">
                  Sarah Jones
                </span>
              </h1>
              <p className="relative max-w-[560px] self-stretch font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-dark [font-style:var(--text-base-font-normal-font-style)]">
                Welcome to my portfolio of captivating digital experiences.
                Explore my work and let&#39;s create something extraordinary
                together.
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5">
              <Button className="h-auto rounded-none bg-[#1f1f1f] px-8 py-3 text-[length:var(--text-base-font-bold-font-size)] font-[number:var(--text-base-font-bold-font-weight)] leading-[var(--text-base-font-bold-line-height)] tracking-[var(--text-base-font-bold-letter-spacing)] text-white hover:bg-[#1f1f1f]/90 md:px-14 [font-family:var(--text-base-font-bold-font-family)] [font-style:var(--text-base-font-bold-font-style)]">
                Hire Me
              </Button>
              <Button
                variant="outline"
                className="h-auto w-auto min-w-[177px] rounded-none border-[#1f1f1f] bg-white px-9 py-3 text-[length:var(--text-base-font-bold-font-size)] font-[number:var(--text-base-font-bold-font-weight)] leading-[var(--text-base-font-bold-line-height)] tracking-[var(--text-base-font-bold-letter-spacing)] text-[#1f1f1f] hover:bg-white/90 [font-family:var(--text-base-font-bold-font-family)] [font-style:var(--text-base-font-bold-font-style)]"
              >
                Portfolio
              </Button>
            </div>
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
              <div className="absolute left-0 top-5 w-full whitespace-nowrap font-bold leading-none tracking-[0] text-[#ffffff80] [-webkit-text-stroke:3.54px_#fc3314] [font-family:'Inter',Helvetica] text-[180px] sm:text-[260px] md:text-[475.2px]">
                UX
              </div>
              <div className="absolute left-[44.4%] top-5 w-[43.8%] whitespace-nowrap font-bold leading-none tracking-[0] text-[#fc3314] [-webkit-text-stroke:3.54px_#fc3314] [font-family:'Inter',Helvetica] text-[180px] sm:text-[260px] md:text-[475.2px]">
                X
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
