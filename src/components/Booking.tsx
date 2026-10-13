import { useState } from 'react';
import { Instagram, MessageCircle, Send } from 'lucide-react';
import type { Content } from '../content';
import { CONTACTS } from '../content';
import { useReveal } from '../hooks/useReveal';

type Props = { t: Content };

export function Booking({ t }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend configured — redirect to Instagram as primary contact
    window.open(CONTACTS.instagram, '_blank');
  };

  const whatsappUrl = CONTACTS.whatsapp
    ? `https://wa.me/${CONTACTS.whatsapp.replace(/[^0-9]/g, '')}`
    : null;

  return (
    <section id="kontakt" ref={ref} className="py-20 sm:py-28 lg:py-32 bg-beige">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="reveal font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-graphite leading-tight text-balance">
            {t.booking.title}
          </h2>
          <div className="reveal reveal-delay-1 mt-4 w-12 h-px bg-taupe mx-auto" />
          <p className="reveal reveal-delay-2 mt-6 text-warm text-sm sm:text-base font-light max-w-lg mx-auto">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Social buttons */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={CONTACTS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3.5 bg-graphite text-milk text-xs tracking-[0.15em] uppercase font-medium hover:bg-taupe transition-colors duration-400 w-full sm:w-auto justify-center"
          >
            <Instagram size={18} />
            {t.booking.instagram}
          </a>
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 border border-graphite text-graphite text-xs tracking-[0.15em] uppercase font-medium hover:bg-graphite hover:text-milk transition-all duration-400 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              {t.booking.whatsapp}
            </a>
          ) : (
            <button
              disabled
              className="flex items-center gap-3 px-7 py-3.5 border border-cream-400 text-warm/50 text-xs tracking-[0.15em] uppercase font-medium cursor-not-allowed w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              {t.booking.whatsapp}
            </button>
          )}
        </div>

        {/* Form */}
        <div className="reveal reveal-delay-3 max-w-2xl mx-auto">
          <p className="text-center text-xs text-warm italic font-light mb-8 leading-relaxed">
            {t.booking.formRedirectNote}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label={t.booking.formName}>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="form-input"
                />
              </FormField>
              <FormField label={t.booking.formEmail}>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="form-input"
                />
              </FormField>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label={t.booking.formType}>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="form-input"
                >
                  <option value="" disabled>—</option>
                  {t.booking.formTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </FormField>
              <FormField label={t.booking.formDate}>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="form-input"
                />
              </FormField>
            </div>
            <FormField label={t.booking.formMessage}>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="form-input resize-none"
              />
            </FormField>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-graphite text-milk text-xs tracking-[0.15em] uppercase font-medium hover:bg-taupe transition-colors duration-400"
              >
                <Send size={16} />
                {t.booking.formSubmit}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #D8CCC0;
          padding: 0.6rem 0;
          font-size: 0.875rem;
          color: #292725;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .form-input:focus {
          border-bottom-color: #B7A797;
        }
        .form-input::placeholder {
          color: #B7A797;
        }
      `}</style>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs text-warm tracking-[0.08em] uppercase mb-1">{label}</span>
      {children}
    </label>
  );
}
