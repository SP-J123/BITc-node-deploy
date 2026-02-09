import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { PlansPreview } from "@/components/home/PlansPreview";
import { BusinessSection } from "@/components/home/BusinessSection";
import { CoverageSection } from "@/components/home/CoverageSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TechBadges } from "@/components/home/TechBadges";
import { CTASection } from "@/components/home/CTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
  description: siteConfig.company.description,
  alternates: {
    canonical: siteConfig.urls.base,
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${siteConfig.urls.base}/#organization`,
            name: siteConfig.company.legalName,
            alternateName: siteConfig.company.name,
            description: siteConfig.company.description,
            url: siteConfig.urls.base,
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.pincode,
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 10:00-19:00",
            sameAs: [
              siteConfig.social.facebook,
              siteConfig.social.twitter,
              siteConfig.social.instagram,
              siteConfig.social.linkedin,
            ],
            areaServed: {
              "@type": "State",
              name: "Gujarat",
              containedIn: {
                "@type": "Country",
                name: "India",
              },
            },
            priceRange: "₹₹",
          }),
        }}
      />

      <HeroSection />
      <TrustIndicators />
      <PlansPreview />
      <BusinessSection />
      <CoverageSection />
      <TestimonialsSection />
      <TechBadges />
      <CTASection />
    </>
  );
}
