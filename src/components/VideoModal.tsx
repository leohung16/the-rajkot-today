"use client";

interface Props {
  youtubeId?: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ youtubeId, title, onClose }: Props) {
  if (!youtubeId) return null;
  const src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`;
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
          <iframe
            title={title}
            src={src}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-sm rounded border px-4 py-2 bg-white/90 hover:bg-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}


