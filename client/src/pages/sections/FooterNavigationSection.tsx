import { Button } from "@/components/ui/button";



export const FooterNavigationSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-dark px-6 py-10 sm:px-10 md:px-16 lg:px-24 xl:px-[120px] 2xl:px-[300px]">
      <div className="mx-auto flex w-full max-w-[840px] flex-col items-center gap-10 sm:gap-12 md:gap-16">
        <a href="https://wa.me/5512997704762" target="_blank" rel="noopener noreferrer">
          <Button className="h-auto rounded-none bg-[#1f1f1f] px-8 py-3 text-[length:var(--text-base-font-bold-font-size)] font-[number:var(--text-base-font-bold-font-weight)] leading-[var(--text-base-font-bold-line-height)] tracking-[var(--text-base-font-bold-letter-spacing)] text-white hover:bg-[#1f1f1f]/90 md:px-14 [font-family:var(--text-base-font-bold-font-family)] [font-style:var(--text-base-font-bold-font-style)]">
            Contate pelo WhatsApp
          </Button>
        </a>
      </div>
    </footer>
  );
};
