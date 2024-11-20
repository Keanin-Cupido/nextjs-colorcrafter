import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { RecentPalettes } from "@/components/recent-palettes";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <Features />
      <RecentPalettes />
    </div>
  );
}