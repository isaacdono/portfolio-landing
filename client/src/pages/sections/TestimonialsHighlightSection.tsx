import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonial = {
  title: "Testimonials",
  quote:
    "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
  name: "John Smith",
  role: "CEO of XYZ Company",
  image: "/figmaAssets/image-4.png",
  decoration: "/figmaAssets/background.svg",
  navigation: [
    {
      alt: "Previous testimonial",
      src: "/figmaAssets/vuesax-linear-arrow-right-3.svg",
    },
    {
      alt: "Next testimonial",
      src: "/figmaAssets/vuesax-linear-arrow-right.svg",
    },
  ],
};

export const TestimonialsHighlightSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#e3eafc] px-6 pb-16 pt-[72px] md:px-12 lg:px-[124px] lg:pt-[90px]">
      <img
        className="pointer-events-none absolute left-1/2 top-[-61px] h-[122px] w-[122px] -translate-x-1/2"
        alt="Background"
        src={testimonial.decoration}
      />
      <div className="mx-auto flex w-full max-w-[1192px] flex-col items-center gap-8">
        <header className="flex flex-col items-center">
          <h2 className="text-center font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-4xl-font-bold-font-style)]">
            {testimonial.title}
          </h2>
        </header>
        <div className="grid w-full grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-4 md:gap-8">
          {
            testimonial.navigation.map((item, _index) => (
              <Button
                key={item.src}
                type="button"
                variant="ghost"
                size="icon"
                className="h-auto w-10 rounded-full p-0 text-dark hover:bg-transparent"
                aria-label={item.alt}
              >
                <img className="h-10 w-10" alt={item.alt} src={item.src} />
              </Button>
            ))[0]
          }

          <blockquote className="mx-auto w-full max-w-[768px] text-center font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-dark [font-style:var(--text-base-font-normal-font-style)]">
            {testimonial.quote}
          </blockquote>
          {
            testimonial.navigation.map((item, index) => (
              <Button
                key={`${item.src}-${index}`}
                type="button"
                variant="ghost"
                size="icon"
                className="h-auto w-10 rounded-full p-0 text-dark hover:bg-transparent"
                aria-label={item.alt}
              >
                <img className="h-10 w-10" alt={item.alt} src={item.src} />
              </Button>
            ))[1]
          }
        </div>
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <Avatar className="h-[70px] w-[70px]">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <p className="text-center [font-family:'Montserrat',Helvetica] text-base font-normal leading-6 tracking-[0] text-dark">
            <span className="font-text-base-font-bold text-[length:var(--text-base-font-bold-font-size)] font-[number:var(--text-base-font-bold-font-weight)] leading-[var(--text-base-font-bold-line-height)] tracking-[var(--text-base-font-bold-letter-spacing)] [font-style:var(--text-base-font-bold-font-style)]">
              {testimonial.name}
            </span>
            <span>{` / ${testimonial.role}`}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
