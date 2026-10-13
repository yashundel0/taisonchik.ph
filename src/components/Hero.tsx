import type { Content } from '../content';
import { HERO_IMAGE_MAIN, HERO_IMAGE_SMALL } from '../content';

type Props = { t: Content };

export function Hero({ t }: Props) {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_MAIN}
          alt="Photography hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-in-slow">
          <h1 className="font-serif text-milk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-[0.05em] text-balance">
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>
          <p className="mt-6 sm:mt-8 text-milk/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-milk text-graphite text-xs tracking-[0.15em] uppercase font-medium hover:bg-transparent hover:text-milk hover:border hover:border-milk/60 transition-all duration-400"
            >
              {t.hero.btnPortfolio}
            </button>
            <button
              onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 border border-milk/40 text-milk text-xs tracking-[0.15em] uppercase font-medium hover:bg-milk hover:text-graphite transition-all duration-400"
            >
              {t.hero.btnBooking}
            </button>
          </div>
        </div>
      </div>

      {/* Location at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both', opacity: 0 }}>
        <p className="text-milk/60 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
          {t.hero.location}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 z-10 hidden md:block animate-fade-in"
        style={{ animationDelay: '1s', animationFillMode: 'both', opacity: 0 }}
      >
        <div className="w-px h-12 bg-milk/30 mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-milk/80 animate-[fadeIn_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
