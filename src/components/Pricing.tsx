import { Check } from 'lucide-react';
import type { Content } from '../content';
import { useReveal } from '../hooks/useReveal';

type Props = { t: Content };

export function Pricing({ t }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="preise" ref={ref} className="py-20 sm:py-28 lg:py-32 bg-milk">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-graphite tracking-wide">
            {t.pricing.title}
          </h2>
          <div className="reveal reveal-delay-1 mt-4 w-12 h-px bg-taupe mx-auto" />
          <p className="reveal reveal-delay-2 mt-6 text-warm text-sm sm:text-base font-light max-w-md mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.pricing.services.map((service, index) => (
            <div
              key={index}
              className={`reveal group relative bg-cream-50 border border-cream-200 p-8 lg:p-10 transition-all duration-500 hover:border-taupe/50 hover:shadow-[0_8px_30px_rgba(139,129,120,0.08)] ${
                index === 3 ? 'md:col-span-2 bg-beige/60' : ''
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-graphite leading-tight">
                  {service.title}
                </h3>
              </div>

              <div className="mb-5">
                <span className="font-serif text-xl sm:text-2xl text-taupe font-medium">
                  {service.price}
                </span>
                {service.travel && (
                  <span className="block mt-1 text-sm text-warm font-light">
                    {service.travel}
                  </span>
                )}
              </div>

              <p className="text-graphite/70 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                {service.description}
              </p>

              {service.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-graphite/80 text-sm font-light">
                      <Check size={16} className="mt-0.5 text-taupe shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {service.note && (
                <p className="mt-5 text-xs text-warm italic font-light leading-relaxed border-l border-taupe/30 pl-4">
                  {service.note}
                </p>
              )}

              {service.note2 && (
                <p className="mt-4 text-xs text-taupe tracking-[0.1em] uppercase font-medium">
                  {service.note2}
                </p>
              )}

              {service.btn && (
                <button
                  onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-7 px-6 py-3 border border-graphite text-graphite text-xs tracking-[0.15em] uppercase font-medium hover:bg-graphite hover:text-milk transition-all duration-400"
                >
                  {service.btn}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Important note */}
        <div className="reveal reveal-delay-4 mt-10 lg:mt-12 border border-taupe/30 bg-beige/50 px-8 py-7 max-w-3xl mx-auto text-center">
          <h4 className="font-serif text-lg text-graphite font-medium mb-2">
            {t.pricing.noteTitle}
          </h4>
          <p className="text-graphite/70 text-sm leading-relaxed font-light">
            {t.pricing.noteText}
          </p>
        </div>
      </div>
    </section>
  );
}
