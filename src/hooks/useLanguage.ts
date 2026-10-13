import { useState, useEffect, useCallback } from 'react';
import type { Lang } from '../content';
import { CONTENT } from '../content';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('de');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'de' || saved === 'ru') {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'de' ? 'ru' : 'de'));
  }, []);

  const setLanguage = useCallback((l: Lang) => {
    setLang(l);
  }, []);

  return { lang, toggleLang, setLanguage, t: CONTENT[lang] };
}
