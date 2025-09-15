import { getLatestArticles, getTrendingArticles } from "@/data/api";
import { getAllArticlesAsync } from "@/data/api.server";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import BreakingTicker from "@/components/BreakingTicker";
import HomeHero from "@/components/HomeHero";
import CategorySection from "@/components/CategorySection";
import ReelsRow from "@/components/ReelsRow";
import LocalizedText from "@/components/LocalizedText";
import AdSlot from "@/components/AdSlot";
import { Fragment } from "react";
import WeatherWidget from "@/components/WeatherWidget";
import ArticleCard from "@/components/ArticleCard";

export default async function Home() {
  // Merge dynamic (admin-added) and static articles
  const all = await getAllArticlesAsync();
  const latest = all.slice(0, 6);
  const trending = all.filter((a) => a.isTrending).slice(0, 5);
  return (
    <div className="py-4 sm:py-6 lg:py-8">
      <BreakingTicker />
      <div className="my-4 px-4 sm:px-0">
        <AdSlot id="home_top" width={970} height={250} />
      </div>
      <div className="px-4 sm:px-0">
        <HomeHero />
      </div>
      <div className="rule my-6" />
      <div className="px-4 sm:px-0">
        <ReelsRow />
        <FeaturedCarousel />
      </div>

      <div className="mt-8 lg:mt-10 grid gap-6 lg:gap-10 lg:grid-cols-3 px-4 sm:px-0">
        <section className="lg:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold mb-4"><LocalizedText id="latest" /></h2>
          <div className="grid gap-4 sm:gap-6">
            {latest.map((a, i) => (
              <Fragment key={`${a.id}-${i}`}>
                <ArticleCard article={a} />
                {i > 0 && i % 5 === 0 && (
                  <AdSlot id={`home_infeed_${i}`} width={300} height={250} />
                )}
              </Fragment>
            ))}
          </div>
        </section>
        <aside className="lg:col-span-1">
          <h3 className="text-base sm:text-lg font-semibold mb-4"><LocalizedText id="trending" /></h3>
          <div className="grid gap-3 sm:gap-4">
            {trending.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
          <div className="mt-6 sm:mt-8">
            <WeatherWidget />
          </div>
          <div className="mt-6 sm:mt-8 hidden lg:block sticky top-24">
            <AdSlot id="sidebar_sticky" width={300} height={600} />
          </div>
        </aside>
        </div>

      <div className="px-4 sm:px-0">
        <CategorySection slug="politics" title="Politics" />
        <CategorySection slug="business" title="Business & Economy" />
        <CategorySection slug="sports" title="Sports" />
        <CategorySection slug="entertainment" title="Entertainment" />
        <CategorySection slug="technology" title="Technology" />
      </div>
    </div>
  );
}
