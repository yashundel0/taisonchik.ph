import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { Lang, Content } from '../content';

type Props = {
  lang: Lang;
  t: Content;
  onToggleLang: () => void;
};

export function Header({ lang, t, onToggleLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.services, href: '#leistungen' },
    { label: t.nav.prices, href: '#preise' },
    { label: t.nav.contact, href: '#kontakt' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-milk/95 backdrop-blur-md border-b border-cream-200 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`font-serif text-lg sm:text-xl tracking-[0.15em] transition-colors duration-500 ${
              scrolled ? 'text-graphite' : 'text-milk'
            }`}
          >
            TAISONCHIK PH
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs tracking-[0.1em] uppercase transition-colors duration-300 hover:opacity-60 ${
                  scrolled ? 'text-graphite' : 'text-milk'
                }`}
              >
                {link.label}
              </button>
            ))}
            <LangSwitcher lang={lang} onToggle={onToggleLang} scrolled={scrolled} />
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <LangSwitcher lang={lang} onToggle={onToggleLang} scrolled={scrolled} />
            <button
              onClick={() => setMenuOpen(true)}
              className={`transition-colors ${scrolled ? 'text-graphite' : 'text-milk'}`}
              aria-label="Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-milk transition-transform duration-400 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-cream-200">
          <span className="font-serif text-lg tracking-[0.15em] text-graphite">TAISONCHIK PH</span>
          <button onClick={() => setMenuOpen(false)} className="text-graphite" aria-label="Close">
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 mt-20">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-serif text-2xl text-graphite hover:opacity-50 transition-opacity"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

function LangSwitcher({
  lang,
  onToggle,
  scrolled,
}: {
  lang: Lang;
  onToggle: () => void;
  scrolled: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1 text-xs tracking-[0.1em] font-medium transition-colors hover:opacity-60 ${
        scrolled ? 'text-graphite' : 'text-milk'
      }`}
      aria-label="Switch language"
    >
      <span className={lang === 'de' ? 'opacity-100' : 'opacity-40'}>DE</span>
      <span className="opacity-30">/</span>
      <span className={lang === 'ru' ? 'opacity-100' : 'opacity-40'}>RU</span>
    </button>
  );
}
