import type { Content } from '../content';
import { ABOUT_IMAGE } from '../content';
import { useReveal } from '../hooks/useReveal';

type Props = { t: Content };

export function About({ t }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="leistungen" ref={ref} className="py-20 sm:py-28 lg:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Photographer portrait"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorive frame */}
            <div className="absolute inset-0 border border-taupe/30 max-w-md mx-auto translate-x-3 translate-y-3 -z-0 hidden sm:block pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="reveal font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-graphite leading-tight">
              {t.about.title}
            </h2>
            <div className="reveal reveal-delay-1 mt-6 w-12 h-px bg-taupe" />
            <div className="mt-8 space-y-5">
              <p className="reveal reveal-delay-1 text-graphite/80 text-base sm:text-lg leading-relaxed font-light">
                {t.about.p1}
              </p>
              <p className="reveal reveal-delay-2 text-graphite/80 text-base sm:text-lg leading-relaxed font-light">
                {t.about.p2}
              </p>
              <p className="reveal reveal-delay-3 text-graphite/80 text-base sm:text-lg leading-relaxed font-light">
                {t.about.p3}
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="reveal reveal-delay-3 mt-10 px-8 py-3.5 border border-graphite text-graphite text-xs tracking-[0.15em] uppercase font-medium hover:bg-graphite hover:text-milk transition-all duration-400"
            >
              {t.about.btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
