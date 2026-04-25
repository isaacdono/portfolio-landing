import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Educational Platform",
    category: "Web Design / Usability Testing",
    imageSrc: "/figmaAssets/image.png",
    imageAlt: "Educational Platform",
    imageClassName: "object-cover",
  },
  {
    title: "Travel App Design",
    category: "UX Research / App Design",
    imageSrc: "/figmaAssets/image-9.svg",
    imageAlt: "Travel App Design",
    imageClassName: "object-cover",
  },
  {
    title: "Personal Page",
    category: "Web Design",
    imageSrc: "/figmaAssets/image-1.png",
    imageAlt: "Personal Page",
    imageClassName: "object-cover",
  },
  {
    title: "Furniture Mobile App",
    category: "App Design",
    imageSrc: "/figmaAssets/image-8.svg",
    imageAlt: "Furniture Mobile App",
    imageClassName: "object-cover",
  },
  {
    title: "Coffee House Landing Page",
    category: "UX Research / Web Design",
    imageSrc: "/figmaAssets/image-2.png",
    imageAlt: "Coffee House Landing Page",
    imageClassName: "object-cover",
  },
  {
    title: "Home Services Page",
    category: "Web Design / Marketing",
    imageSrc: "/figmaAssets/image-3.png",
    imageAlt: "Home Services Page",
    imageClassName: "object-cover",
  },
];

export const PortfolioGallerySection = (): JSX.Element => {
  return (
    <section className="w-full bg-grey">
      <div className="w-full bg-[#ffd3d0]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-6 pb-[142px] pt-[50px] sm:px-10 lg:px-[124px]">
          <header className="flex w-full max-w-[810px] flex-col items-center justify-center gap-6 text-center">
            <h2 className="mt-[-1.00px] w-fit whitespace-nowrap font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-4xl-font-bold-font-style)]">
              My Portfolio
            </h2>
            <p className="max-w-[810px] font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-dark [font-style:var(--text-base-font-normal-font-style)]">
              Explore my design services, from user interface and experience to
              prototyping and testing. Let&#39;s craft exceptional digital
              experiences together.
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
                      <img
                        className="h-auto w-auto shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        alt="Vuesax linear send"
                        src="/figmaAssets/vuesax-linear-send.svg"
                      />
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
