import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactDetails = [
  {
    iconSrc: "/figmaAssets/bxs-phone-call.svg",
    iconAlt: "Bxs phone call",
    content: "+1205 5872 321",
    href: "tel:+12055872321",
    wrap: "whitespace-nowrap",
  },
  {
    iconSrc: "/figmaAssets/ic-sharp-email.svg",
    iconAlt: "Ic sharp email",
    content: "contact@sarajonesdesign.com",
    href: "mailto:contact@sarajonesdesign.com",
    wrap: "break-all sm:break-normal",
  },
  {
    iconSrc: "/figmaAssets/carbon-location-filled.svg",
    iconAlt: "Carbon location",
    content: "1234 Design Street,Creativeville, Webland,Imaginary State, 98765",
    href: undefined,
    wrap: "",
  },
];

const _socialIcons = [
  { alt: "Social icon 1", src: "/figmaAssets/social-icons.svg#icon-1" },
  { alt: "Social icon 2", src: "/figmaAssets/social-icons.svg#icon-2" },
  { alt: "Social icon 3", src: "/figmaAssets/social-icons.svg#icon-3" },
  { alt: "Social icon 4", src: "/figmaAssets/social-icons.svg#icon-4" },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-pink">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 md:px-16 lg:flex-row lg:items-start lg:gap-[60px] lg:px-[124px] lg:py-[124px]">
        <div className="flex min-w-0 flex-1 flex-col items-start justify-between gap-12 self-stretch">
          <div className="flex w-full flex-col items-start gap-16">
            <header className="flex w-full flex-col items-start gap-4">
              <h2 className="mt-[-1.00px] self-stretch font-text-4xl-font-bold text-[length:var(--text-4xl-font-bold-font-size)] font-[number:var(--text-4xl-font-bold-font-weight)] leading-[var(--text-4xl-font-bold-line-height)] tracking-[var(--text-4xl-font-bold-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-4xl-font-bold-font-style)]">
                Get in Touch
              </h2>
              <p className="self-stretch font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-dark [font-style:var(--text-base-font-normal-font-style)]">
                Have a question or a project in mind? I&apos;d love to hear from
                you. Let&apos;s chat and make something amazing together.
              </p>
            </header>
            <address className="flex w-full not-italic flex-col items-start gap-8">
              {contactDetails.map((item) => {
                const textClassName = `mt-[-1.00px] font-text-base-font-normal text-[length:var(--text-base-font-normal-font-size)] font-[number:var(--text-base-font-normal-font-weight)] leading-[var(--text-base-font-normal-line-height)] tracking-[var(--text-base-font-normal-letter-spacing)] text-[#1f1f1f] [font-style:var(--text-base-font-normal-font-style)] ${item.wrap}`;

                return (
                  <div
                    key={item.content}
                    className="flex w-full items-start gap-4"
                  >
                    <img
                      className="h-6 w-6 shrink-0"
                      alt={item.iconAlt}
                      src={item.iconSrc}
                    />
                    {item.href ? (
                      <a href={item.href} className={textClassName}>
                        {item.content}
                      </a>
                    ) : (
                      <p className={`flex-1 ${textClassName}`}>
                        {item.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </address>
          </div>
          <nav aria-label="Social media">
            <img
              className="h-auto w-[120px] max-w-full"
              alt="Social icons"
              src="/figmaAssets/social-icons.svg"
            />
          </nav>
        </div>
        <form className="flex flex-1 flex-col items-start justify-center gap-8">
          <div className="flex w-full flex-col items-start gap-6">
            <Input
              type="text"
              defaultValue=""
              placeholder="First name"
              aria-label="First name"
              className="h-[52px] w-full rounded-none border-0 bg-white px-4 py-3.5 font-text-sm-font-normal text-[length:var(--text-sm-font-normal-font-size)] font-[number:var(--text-sm-font-normal-font-weight)] leading-[var(--text-sm-font-normal-line-height)] tracking-[var(--text-sm-font-normal-letter-spacing)] text-[#1f1f1f] placeholder:text-dark-grey focus-visible:ring-0 focus-visible:ring-offset-0 [font-style:var(--text-sm-font-normal-font-style)]"
            />
            <Input
              type="email"
              defaultValue=""
              placeholder="Email"
              aria-label="Email"
              className="h-[52px] w-full rounded-none border-0 bg-white px-4 py-3.5 font-text-sm-font-normal text-[length:var(--text-sm-font-normal-font-size)] font-[number:var(--text-sm-font-normal-font-weight)] leading-[var(--text-sm-font-normal-line-height)] tracking-[var(--text-sm-font-normal-letter-spacing)] text-[#1f1f1f] placeholder:text-dark-grey focus-visible:ring-0 focus-visible:ring-offset-0 [font-style:var(--text-sm-font-normal-font-style)]"
            />
            <Input
              type="tel"
              defaultValue=""
              placeholder="Phone number"
              aria-label="Phone number"
              className="h-[52px] w-full rounded-none border-0 bg-white px-4 py-3.5 font-text-sm-font-normal text-[length:var(--text-sm-font-normal-font-size)] font-[number:var(--text-sm-font-normal-font-weight)] leading-[var(--text-sm-font-normal-line-height)] tracking-[var(--text-sm-font-normal-letter-spacing)] text-[#1f1f1f] placeholder:text-dark-grey focus-visible:ring-0 focus-visible:ring-offset-0 [font-style:var(--text-sm-font-normal-font-style)]"
            />
            <Textarea
              defaultValue=""
              placeholder="Your message"
              aria-label="Your message"
              className="min-h-[120px] w-full resize-none rounded-none border-0 bg-white px-4 py-[13px] font-text-sm-font-normal text-[length:var(--text-sm-font-normal-font-size)] font-[number:var(--text-sm-font-normal-font-weight)] leading-[var(--text-sm-font-normal-line-height)] tracking-[var(--text-sm-font-normal-letter-spacing)] text-[#1f1f1f] placeholder:text-dark-grey focus-visible:ring-0 focus-visible:ring-offset-0 [font-style:var(--text-sm-font-normal-font-style)]"
            />
          </div>
          <Button
            type="submit"
            className="h-auto rounded-none bg-[#1f1f1f] px-14 py-3 font-text-base-font-bold text-[length:var(--text-base-font-bold-font-size)] font-[number:var(--text-base-font-bold-font-weight)] leading-[var(--text-base-font-bold-line-height)] tracking-[var(--text-base-font-bold-letter-spacing)] text-white [font-style:var(--text-base-font-bold-font-style)] hover:bg-[#1f1f1f]/90"
          >
            Send Message
          </Button>
        </form>
      </div>
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[221px] w-[221px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fc3314] lg:block" />
    </section>
  );
};
