import { Instagram } from 'lucide-react';
import type { Content, Lang } from '../content';
import { CONTACTS } from '../content';

type Props = { t: Content; lang: Lang };

export function Footer({ t, lang }: Props) {
  const navLinks = [
    { label: t.footer.nav.portfolio, href: '#portfolio' },
    { label: t.footer.nav.services, href: '#leistungen' },
    { label: t.footer.nav.prices, href: '#preise' },
    { label: t.footer.nav.contact, href: '#kontakt' },
  ];

  const legalLinks = [
    { label: t.footer.nav.impressum, id: 'impressum' },
    { label: t.footer.nav.datenschutz, id: 'datenschutz' },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite text-milk">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-2xl tracking-[0.15em] font-light">
                TAISONCHIK PH
              </h3>
              <p className="mt-3 text-milk/60 text-sm font-light italic">
                {t.footer.tagline}
              </p>
              <p className="mt-6 text-milk/50 text-xs tracking-[0.1em] uppercase">
                {lang === 'de' ? CONTACTS.locationDe : CONTACTS.locationRu}
              </p>
              <a
                href={CONTACTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-milk/60 text-sm hover:text-milk transition-colors"
              >
                <Instagram size={16} />
                {CONTACTS.instagramHandle}
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-milk/40 mb-5">
                {lang === 'de' ? 'Navigation' : 'Навигация'}
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-milk/70 text-sm font-light hover:text-milk transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-milk/40 mb-5">
                {lang === 'de' ? 'Rechtliches' : 'Правовая информация'}
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo('#' + link.id)}
                      className="text-milk/70 text-sm font-light hover:text-milk transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-milk/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-milk/40 text-xs">
            © {new Date().getFullYear()} TAISONCHIK PH. {t.footer.copyright}
          </p>
          <p className="text-milk/30 text-[10px] tracking-[0.2em] uppercase">
            Wolfsburg, Deutschland
          </p>
        </div>
      </div>

      {/* Legal sections */}
      <div className="border-t border-milk/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
          <div id="impressum" className="mb-12 scroll-mt-24">
            <h4 className="font-serif text-xl text-milk/90 font-light mb-4">
              {t.footer.impressumTitle}
            </h4>
            <p className="text-milk/50 text-sm leading-relaxed font-light">
              {t.footer.impressumPlaceholder}
            </p>
          </div>
          <div id="datenschutz" className="scroll-mt-24">
            <h4 className="font-serif text-xl text-milk/90 font-light mb-4">
              {t.footer.datenschutzTitle}
            </h4>
            <p className="text-milk/50 text-sm leading-relaxed font-light">
              {t.footer.datenschutzPlaceholder}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
