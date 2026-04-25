import { Card, CardContent } from "@/components/ui/card";
import { ForWhoSection } from "./sections/ForWhoSection";
// import { ContactFormSection } from "./sections/ContactFormSection";
import { FooterNavigationSection } from "./sections/FooterNavigationSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
// import { InsightsBlogSection } from "./sections/InsightsBlogSection";
import { PortfolioGallerySection } from "./sections/PortfolioGallerySection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { SkillsMetricsSection } from "./sections/SkillsMetricsSection";
import { TestimonialsHighlightSection } from "./sections/TestimonialsHighlightSection";

import { AutomationFlowSection } from "./sections/AutomationFlowSection";

import { IntegrationImageSection } from "./sections/IntegrationImageSection";

const sections = [
  { id: "hero-intro", Component: HeroIntroSection },
  { id: "service-overview", Component: ServiceOverviewSection },
  { id: "integration-image", Component: IntegrationImageSection },
  { id: "portfolio-gallery", Component: PortfolioGallerySection },
  { id: "footer-navigation", Component: FooterNavigationSection },
];

export const LandingLtr = (): JSX.Element => {
  return (
    <main data-id="landing-ltr" className="w-full bg-white text-dark">
      <Card className="w-full border-0 rounded-none bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="flex w-full flex-col items-stretch">
            {sections.map(({ id, Component }) => (
              <section key={id} data-id={id} className="relative w-full">
                <Component />
              </section>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
