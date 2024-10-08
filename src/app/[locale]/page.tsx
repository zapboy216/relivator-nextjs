import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { siteConfig } from "~/app";
import { HomeFeaturedItems } from "~/components/Commerce/FeaturedStoreItems";
import { Features } from "~/components/Common/features";
import HomeBottomSection from "~/components/Marketing/BottomSection";
import HomeHeroSection from "~/components/Marketing/HeroSection";
import HomeMainSection from "~/components/Marketing/MainSection";
import { AccordionSection } from "~/components/Sections/Questions/AccordionSection";
import { Shell } from "~/components/Wrappers/ShellVariants";

export async function generateMetadata() {
  const t = await getTranslations();

  const metadata: Metadata = {
    title: `${t("metadata.title.home")} - ${siteConfig.appNameDesc}`,
  };

  return metadata;
}

// @see https://github.com/blefnk/relivator
export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <Shell
        className={`
          px-10

          2xl:px-32

          lg:20
        `}
      >
        <HomeFeaturedItems />
        <HomeMainSection />
        <Features />
        <AccordionSection />
        <HomeBottomSection />
      </Shell>
    </>
  );
}
