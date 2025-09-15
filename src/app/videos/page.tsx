import { getAllVideos } from "@/data/api";
import VideoCard from "@/components/VideoCard";

export const metadata = {
  title: "Videos | The Rajkot Today",
};

export default function VideosPage() {
  const items = getAllVideos();
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Videos</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ article, media }, idx) => (
          <VideoCard key={`${article.id}-${idx}`} article={article} media={media} />
        ))}
      </div>
    </div>
  );
}


