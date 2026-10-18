import { CTABand } from "@/components/sections/CTABand";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { PracticeAreasPreview } from "@/components/sections/PracticeAreasPreview";
import { Principles } from "@/components/sections/Principles";
import { Stats } from "@/components/sections/Stats";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <PracticeAreasPreview />
      <Principles />
      <Stats />
      <TeamPreview />
      <LatestArticles articles={getAllArticles().slice(0, 3)} />
      <CTABand />
    </>
  );
}
