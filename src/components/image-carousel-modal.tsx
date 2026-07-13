import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  open: boolean;
  onClose: () => void;
  initialIndex?: number;
};

export function ImageCarouselModal({ images, open, onClose, initialIndex = 0 }: Props) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, images.length, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Close (Esc)"
      >
        <X className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (i - 1 + images.length) % images.length);
        }}
        className="absolute left-4 md:left-8 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (i + 1) % images.length);
        }}
        className="absolute right-4 md:right-8 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div
        className="relative flex flex-col items-center justify-center gap-4 max-w-6xl w-full px-16 md:px-24"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Image ${index + 1} of ${images.length}`}
          className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
        />
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <span>
            {index + 1} / {images.length}
          </span>
          <span className="text-white/40">·</span>
          <span className="text-white/60">Esc to close · ← → to navigate</span>
        </div>
        <div className="flex gap-2 overflow-x-auto max-w-full pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn(
                "h-14 w-20 flex-shrink-0 rounded overflow-hidden ring-2 transition",
                i === index ? "ring-primary-glow" : "ring-transparent opacity-50 hover:opacity-100"
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
