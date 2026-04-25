import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    imageSrc: "/figmaAssets/image-7.svg",
    imageAlt: "Typography Tips for Design Success",
    imageClassName: "w-full h-[202.15px] object-cover",
    meta: "August 15, 2023 / UX",
    title: "Typography Tips for Design Success",
    description:
      "Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.",
  },
  {
    imageSrc: "/figmaAssets/image-5.png",
    imageAlt: "Color Psychology in UX",
    imageClassName: "w-full h-[197px] object-cover",
    meta: "August 15, 2023 / UX",
    title: "Color Psychology in UX",
    description:
      "Explore how color choices impact user emotions and decision-making in UX design.",
  },
  {
    imageSrc: "/figmaAssets/image-6.png",
    imageAlt: "Boosting UX with Microinteractions",
    imageClassName: "w-full h-[197px] object-cover",
    meta: "August 15, 2023 / UX",
    title: "Boosting UX with Microinteractions",
    description:
      "Discover the power of microinteractions in enhancing user experience and engagement.",
  },
];

// export const InsightsBlogSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-grey px-6 py-[90px] sm:px-10 lg:px-[124px]">
      <div className="mx-auto flex w-full max-w-[1192px] flex-col items-center gap-12">
        <header className="flex w-full max-w-[799px] flex-col items-center gap-4 text-center">
          <h2 className="mt-[-1.00px] self-stretch font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-dark [font-style:var(--text-4xl-font-bold-font-style)]">
            Design Insights and Inspiration
          </h2>
          <p className="self-stretch font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-dark [font-style:var(--text-base-font-normal-font-style)]">
            Discover industry insights, expert tips, and design inspiration.
            Stay updated with the latest trends in web design and user
            experience.
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {posts.map((post) => (
            <article key={post.title} className="flex h-full">
              <Card className="flex h-full w-full flex-col gap-0 rounded-none border-0 bg-white shadow-none">
                <CardContent className="flex h-full flex-col p-0">
                  <img
                    className={post.imageClassName}
                    alt={post.imageAlt}
                    src={post.imageSrc}
                  />
                  <div className="flex h-full flex-col justify-between gap-4 px-4 pb-4 pt-8">
                    <div className="flex flex-col items-start gap-2">
                      <p className="mt-[-1.00px] w-full font-text-xs-font-normal text-[length:var(--text-xs-font-normal-font-size)] font-[number:var(--text-xs-font-normal-font-weight)] leading-[var(--text-xs-font-normal-line-height)] tracking-[var(--text-xs-font-normal-letter-spacing)] text-dark [font-style:var(--text-xs-font-normal-font-style)]">
                        {post.meta}
                      </p>
                      <h3 className="self-stretch font-text-base-font-bold text-[length:var(--text-base-font-bold-font-size)] font-[number:var(--text-base-font-bold-font-weight)] leading-[var(--text-base-font-bold-line-height)] tracking-[var(--text-base-font-bold-letter-spacing)] text-dark [font-style:var(--text-base-font-bold-font-style)]">
                        {post.title}
                      </h3>
                      <p className="self-stretch font-text-sm-font-normal text-[length:var(--text-sm-font-normal-font-size)] font-[number:var(--text-sm-font-normal-font-weight)] leading-[var(--text-sm-font-normal-line-height)] tracking-[var(--text-sm-font-normal-letter-spacing)] text-dark [font-style:var(--text-sm-font-normal-font-style)]">
                        {post.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex w-fit items-center gap-2 text-left"
                      aria-label={`Read more about ${post.title}`}
                    >
                      <span className="mt-[-1.00px] whitespace-nowrap font-text-xs-font-bold text-[length:var(--text-xs-font-bold-font-size)] font-[number:var(--text-xs-font-bold-font-weight)] leading-[var(--text-xs-font-bold-line-height)] tracking-[var(--text-xs-font-bold-letter-spacing)] text-dark [font-style:var(--text-xs-font-bold-font-style)]">
                        Read More
                      </span>
                      <img
                        className="h-4 w-4"
                        alt="Arrow right"
                        src="/figmaAssets/vuesax-linear-arrow-right-1.svg"
                      />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
