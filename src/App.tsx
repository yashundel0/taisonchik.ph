import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <div className="min-h-screen bg-milk">
      <Header lang={lang} t={t} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Portfolio t={t} />
        <About t={t} />
        <Pricing t={t} />
        <Booking t={t} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}

export default App;
