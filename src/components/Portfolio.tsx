import { useState, useMemo, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Content, PortfolioImage } from '../content';
import { PORTFOLIO_IMAGES } from '../content';
import { useReveal } from '../hooks/useReveal';

type Props = { t: Content };
type Category = 'all' | PortfolioImage['category'];

export function Portfolio({ t }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t.portfolio.categories.all },
    { key: 'portraits', label: t.portfolio.categories.portraits },
    { key: 'couples', label: t.portfolio.categories.couples },
    { key: 'weddings', label: t.portfolio.categories.weddings },
    { key: 'lifestyle', label: t.portfolio.categories.lifestyle },
    { key: 'events', label: t.portfolio.categories.events },
  ];

  const filteredImages = useMemo(
    () =>
      activeCategory === 'all'
        ? PORTFOLIO_IMAGES
        : PORTFOLIO_IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length)),
    [filteredImages.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredImages.length)),
    [filteredImages.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section id="portfolio" ref={ref} className="py-20 sm:py-28 lg:py-32 bg-milk">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-graphite tracking-wide">
            {t.portfolio.title}
          </h2>
          <div className="reveal reveal-delay-1 mt-4 w-12 h-px bg-taupe mx-auto" />
          <p className="reveal reveal-delay-2 mt-6 text-warm text-sm sm:text-base font-light max-w-md mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Category filter */}
        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 lg:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs tracking-[0.08em] uppercase transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'text-graphite border-b border-graphite'
                  : 'text-warm hover:text-graphite border-b border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery — masonry layout preserving natural proportions */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 lg:gap-5 [&>*]:mb-3 sm:[&>*]:mb-4 lg:[&>*]:mb-5">
          {filteredImages.map((img, index) => (
            <GalleryItem
              key={`${img.src}-${index}`}
              img={img}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-milk/70 hover:text-milk transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-milk/70 hover:text-milk transition-colors"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={filteredImages[lightboxIndex].src}
            alt=""
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 sm:right-8 text-milk/70 hover:text-milk transition-colors"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-milk/50 text-xs tracking-[0.2em]">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryItem({
  img,
  index,
  onClick,
}: {
  img: PortfolioImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <div
      className="reveal break-inside-avoid group relative overflow-hidden cursor-pointer bg-cream-200"
      style={{ transitionDelay: `${Math.min(index * 40, 300)}ms` }}
      onClick={onClick}
    >
      <img
        src={img.src}
        alt=""
        loading="lazy"
        className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
    </div>
  );
}
