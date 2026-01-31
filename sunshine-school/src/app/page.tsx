import HeroSection from "@/components/sections/HeroSection";
import TrustSignals from "@/components/sections/TrustSignals";
import ProgramsGrid from "@/components/sections/ProgramsGrid";
import SocialCards from "@/components/sections/SocialCards";
import MapSection from "@/components/sections/MapSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { getImages } from "@/lib/utils";

export default function Home() {
  const heroImages = getImages('hero');
  const socialImages = getImages('gallery'); // Consolidated: Use gallery images for social cards too

  return (
    <>
      {/* Hero Section */}
      <HeroSection images={heroImages} />
      <TrustSignals />
      <ProgramsGrid />

      {/* Social Media Cards */}
      <SocialCards images={socialImages} />

      {/* Map & Location */}
      <MapSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <ContactCTA />
    </>
  );
}
