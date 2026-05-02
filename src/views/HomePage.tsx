import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SellerBanner } from "@/components/home/SellerBanner";
import { StorySection } from "@/components/home/StorySection";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { OrganicBackdrop } from "@/components/visual";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-namkeenly-cream via-namkeenly-wheat/40 to-namkeenly-cream">
      <OrganicBackdrop variant="marketplace" />
      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <TrustBadges />
        <CategoryShowcase />
        <FeaturedProducts />
        <SellerBanner />
        <StorySection />
      </main>
      <SiteFooter />
    </div>
  );
}
