export type Lang = 'de' | 'ru';

export const CONTACTS = {
  instagram: 'https://www.instagram.com/taisonchik_ph/',
  instagramHandle: '@taisonchik_ph',
  whatsapp: '', // TODO: Add WhatsApp number here, e.g. '+491234567890'
  location: 'Wolfsburg, Germany',
  locationDe: 'Wolfsburg, Deutschland',
  locationRu: 'Вольфсбург, Германия',
  email: '', // TODO: Add email address if needed
};

export type PortfolioImage = {
  src: string;
  category: 'portraits' | 'couples' | 'weddings' | 'lifestyle' | 'events';
};

// Real photographs provided by @taisonchik_ph.
// Images are stored locally in /public/portfolio/.
// To replace or add more photos, place new images in /public/portfolio/ and update this array.
export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  { src: '/portfolio/Изображение_JPEG-49BB-AFF1-F2-0.jpeg', category: 'portraits' },
  { src: '/portfolio/Изображение_JPEG-49BB-AFF1-F2-1.jpeg', category: 'portraits' },
  { src: '/portfolio/Изображение_JPEG-49BB-AFF1-F2-2.jpeg', category: 'couples' },
  { src: '/portfolio/photo_04.jpg', category: 'portraits' },
  { src: '/portfolio/photo_05.jpg', category: 'couples' },
  { src: '/portfolio/photo_06.jpg', category: 'lifestyle' },
  { src: '/portfolio/photo_07.jpg', category: 'portraits' },
  { src: '/portfolio/photo_08.jpg', category: 'lifestyle' },
  { src: '/portfolio/photo_09.jpg', category: 'portraits' },
  { src: '/portfolio/photo_13.jpg', category: 'portraits' },
  { src: '/portfolio/photo_14.jpg', category: 'couples' },
  { src: '/portfolio/photo_15.jpg', category: 'portraits' },
  { src: '/portfolio/photo_16.jpg', category: 'portraits' },
];

// Hero image
export const HERO_IMAGE_MAIN = '/portfolio/Изображение_PNG_14.png';
export const HERO_IMAGE_SMALL = '/portfolio/photo_07.jpg';

// About section image
export const ABOUT_IMAGE = '/portfolio/photo_13.jpg';

export type Content = {
  nav: {
    portfolio: string;
    services: string;
    prices: string;
    contact: string;
    booking: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    btnPortfolio: string;
    btnBooking: string;
    location: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      portraits: string;
      couples: string;
      weddings: string;
      lifestyle: string;
      events: string;
    };
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    btn: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    noteTitle: string;
    noteText: string;
    services: Array<{
      title: string;
      price: string;
      travel?: string;
      description: string;
      note?: string;
      bullets?: string[];
      btn?: string;
      note2?: string;
    }>;
  };
  booking: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formType: string;
    formDate: string;
    formMessage: string;
    formSubmit: string;
    whatsapp: string;
    instagram: string;
    formRedirectNote: string;
    formTypes: string[];
  };
  footer: {
    tagline: string;
    location: string;
    instagram: string;
    nav: {
      portfolio: string;
      services: string;
      prices: string;
      contact: string;
      impressum: string;
      datenschutz: string;
    };
    impressumTitle: string;
    impressumPlaceholder: string;
    datenschutzTitle: string;
    datenschutzPlaceholder: string;
    copyright: string;
  };
};

export const CONTENT: Record<Lang, Content> = {
  de: {
    nav: {
      portfolio: 'Portfolio',
      services: 'Leistungen',
      prices: 'Preise',
      contact: 'Kontakt',
      booking: 'Shooting anfragen',
    },
    hero: {
      title1: 'ECHTE MOMENTE.',
      title2: 'ECHTE EMOTIONEN.',
      subtitle: 'Fotografie, die Geschichten erzählt und Erinnerungen für immer bewahrt.',
      btnPortfolio: 'Portfolio entdecken',
      btnBooking: 'Shooting anfragen',
      location: 'WOLFSBURG, DEUTSCHLAND',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Eine Auswahl meiner Arbeiten – Momente, die bleiben.',
      categories: {
        all: 'Alle',
        portraits: 'Porträts',
        couples: 'Paare / Love Stories',
        weddings: 'Hochzeiten',
        lifestyle: 'Lifestyle',
        events: 'Events',
      },
    },
    about: {
      title: 'Hi, ich bin deine Fotografin.',
      p1: 'Ich liebe es, echte Emotionen, besondere Begegnungen und die kleinen Details festzuhalten, die einen Moment einzigartig machen.',
      p2: 'Mein Ziel ist es, eine entspannte Atmosphäre zu schaffen, in der du dich wohlfühlst und ganz du selbst sein kannst.',
      p3: 'Gemeinsam schaffen wir Erinnerungen, die auch Jahre später noch Gefühle wecken.',
      btn: 'Lass uns gemeinsam Erinnerungen schaffen',
    },
    pricing: {
      title: 'Preise',
      subtitle: 'Transparente Preise – ohne versteckte Kosten.',
      noteTitle: 'Wichtiger Hinweis',
      noteText: 'Die Mindestbuchungsdauer für Fotoshootings beträgt eine Stunde. Auch bei einer kürzeren tatsächlichen Shootingdauer wird der volle Stundensatz berechnet.',
      services: [
        {
          title: 'Studio- / Homeshooting',
          price: '70 € / Stunde',
          description: 'Ein Fotoshooting im Studio oder bei dir zu Hause – in entspannter Atmosphäre und mit viel Liebe zum Detail.\n\nBei einem einstündigen Shooting erhältst du alle Originalbilder sowie 15 professionell bearbeitete Fotos.',
          note: 'Shootings unter einer Stunde sind nicht möglich. Auch wenn das Shooting nur 30 Minuten dauert, wird der volle Stundensatz berechnet.',
        },
        {
          title: 'Outdoor- / Mobiles Shooting',
          price: '70 € / Stunde',
          travel: '+10 € pro 20 km',
          description: 'Outdoor-Shootings an besonderen Orten deiner Wahl. Ob in der Natur, in der Stadt oder an deinem Lieblingsort – wir schaffen gemeinsam einzigartige Erinnerungen.',
          note: 'Zusätzliche Anfahrtskosten: 10 € pro 20 km.',
        },
        {
          title: 'Kleine Reels / Videos',
          price: '10 € / Video',
          description: 'Kurze, kreative Videos und Reels für deine Social-Media-Kanäle.',
          note2: '1 Video = 10 €',
        },
        {
          title: 'Hochzeitsfotografie',
          price: 'Nach Absprache',
          description: 'Hochzeitsfotografie mit individueller Herangehensweise an deinen besonderen Tag.',
          bullets: [
            'Individuelle Planung und Beratung.',
            'Team aus 2 Fotografen.',
            'Individuelle Preisgestaltung.',
          ],
          btn: 'Hochzeit anfragen',
        },
        {
          title: 'Eventfotografie',
          price: '150 € / Stunde',
          description: 'Professionelle fotografische Begleitung von Events und besonderen Veranstaltungen.',
          note: 'Ab einer Buchung von 3 Stunden besteht die Möglichkeit, mit einem Team aus 2 Fotografen zu arbeiten.',
        },
      ],
    },
    booking: {
      title: 'Lass uns deine Geschichte festhalten.',
      subtitle: 'Du hast eine Idee für ein Shooting? Schreib mir und wir planen gemeinsam deine Fotosession.',
      formName: 'Name',
      formEmail: 'E-Mail',
      formType: 'Art des Shootings',
      formDate: 'Wunschdatum',
      formMessage: 'Nachricht',
      formSubmit: 'Anfrage senden',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      formRedirectNote: 'Um deine Anfrage direkt abzusenden, erreichst du mich am schnellsten über Instagram oder WhatsApp.',
      formTypes: [
        'Studio- / Homeshooting',
        'Outdoor- / Mobiles Shooting',
        'Kleine Reels / Videos',
        'Hochzeitsfotografie',
        'Eventfotografie',
      ],
    },
    footer: {
      tagline: 'Fotografie mit Gefühl.',
      location: 'Wolfsburg, Germany',
      instagram: 'Instagram: @taisonchik_ph',
      nav: {
        portfolio: 'Portfolio',
        services: 'Leistungen',
        prices: 'Preise',
        contact: 'Kontakt',
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
      },
      impressumTitle: 'Impressum',
      impressumPlaceholder: 'Angaben gemäß § 5 TMG / § 55 Abs. 2 RStV. Die rechtlichen Angaben werden in Kürze ergänzt.',
      datenschutzTitle: 'Datenschutzerklärung',
      datenschutzPlaceholder: 'Datenschutzerklärung gemäß DSGVO. Die rechtlichen Angaben werden in Kürze ergänzt.',
      copyright: 'Alle Rechte vorbehalten.',
    },
  },
  ru: {
    nav: {
      portfolio: 'Портфолио',
      services: 'Услуги',
      prices: 'Цены',
      contact: 'Контакты',
      booking: 'Записаться на фотосессию',
    },
    hero: {
      title1: 'НАСТОЯЩИЕ МОМЕНТЫ.',
      title2: 'ИСКРЕННИЕ ЭМОЦИИ.',
      subtitle: 'Фотографии, которые рассказывают истории и сохраняют воспоминания навсегда.',
      btnPortfolio: 'Смотреть портфолио',
      btnBooking: 'Записаться на фотосессию',
      location: 'ВОЛЬФСБУРГ, ГЕРМАНИЯ',
    },
    portfolio: {
      title: 'Портфолио',
      subtitle: 'Избранные работы — моменты, которые остаются.',
      categories: {
        all: 'Все',
        portraits: 'Портреты',
        couples: 'Пары / Love Stories',
        weddings: 'Свадьбы',
        lifestyle: 'Lifestyle',
        events: 'Мероприятия',
      },
    },
    about: {
      title: 'Привет, я твой фотограф.',
      p1: 'Я люблю сохранять настоящие эмоции, особенные встречи и маленькие детали, которые делают каждый момент уникальным.',
      p2: 'Моя цель — создать непринуждённую атмосферу, в которой ты будешь чувствовать себя комфортно и сможешь оставаться собой.',
      p3: 'Вместе мы создадим воспоминания, которые будут согревать даже спустя годы.',
      btn: 'Давай вместе создавать воспоминания',
    },
    pricing: {
      title: 'Цены',
      subtitle: 'Прозрачные цены — без скрытых платежей.',
      noteTitle: 'Важное примечание',
      noteText: 'Минимальная продолжительность бронирования фотосессии — один час. Даже если фактическая съёмка длится меньше часа, оплачивается полный час работы.',
      services: [
        {
          title: 'Студийная / домашняя фотосессия',
          price: '70 € / час',
          description: 'Фотосессия в студии или у тебя дома — в комфортной атмосфере и с вниманием к каждой детали.\n\nЗа один час фотосессии ты получишь все исходные фотографии и 15 профессионально обработанных снимков.',
          note: 'Фотосессии продолжительностью менее одного часа не проводятся. Даже если съёмка занимает всего 30 минут, оплачивается полный час.',
        },
        {
          title: 'Выездная фотосессия',
          price: '70 € / час',
          travel: '+10 € за 20 км',
          description: 'Выездные фотосессии на красивых локациях по твоему выбору. На природе, в городе или в особенном для тебя месте — вместе создадим уникальные воспоминания.',
          note: 'Доплата за дорогу: 10 € за каждые 20 км.',
        },
        {
          title: 'Короткие Reels и видео',
          price: '10 € / видео',
          description: 'Короткие, креативные видео и Reels для твоих социальных сетей.',
          note2: '1 видео = 10 €',
        },
        {
          title: 'Свадебная фотография',
          price: 'По договорённости',
          description: 'Свадебная фотография с индивидуальным подходом к вашему особенному дню.',
          bullets: [
            'Индивидуальное планирование и консультация.',
            'Команда из двух фотографов.',
            'Стоимость обсуждается индивидуально.',
          ],
          btn: 'Обсудить свадебную съёмку',
        },
        {
          title: 'Фотосъёмка мероприятий',
          price: '150 € / час',
          description: 'Профессиональная фотосъёмка мероприятий и важных событий.',
          note: 'При бронировании от трёх часов возможна работа команды из двух фотографов.',
        },
      ],
    },
    booking: {
      title: 'Давай сохраним твою историю.',
      subtitle: 'У тебя есть идея для фотосессии? Напиши мне, и мы вместе спланируем съёмку.',
      formName: 'Имя',
      formEmail: 'E-Mail',
      formType: 'Тип съёмки',
      formDate: 'Желаемая дата',
      formMessage: 'Сообщение',
      formSubmit: 'Отправить запрос',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      formRedirectNote: 'Чтобы отправить заявку быстрее, напиши мне напрямую в Instagram или WhatsApp.',
      formTypes: [
        'Студийная / домашняя фотосессия',
        'Выездная фотосессия',
        'Короткие Reels и видео',
        'Свадебная фотография',
        'Фотосъёмка мероприятий',
      ],
    },
    footer: {
      tagline: 'Фотография с душой.',
      location: 'Вольфсбург, Германия',
      instagram: 'Instagram: @taisonchik_ph',
      nav: {
        portfolio: 'Портфолио',
        services: 'Услуги',
        prices: 'Цены',
        contact: 'Контакты',
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
      },
      impressumTitle: 'Impressum',
      impressumPlaceholder: 'Сведения в соответствии с § 5 TMG / § 55 Abs. 2 RStV. Юридическая информация будет добавлена в ближайшее время.',
      datenschutzTitle: 'Политика конфиденциальности',
      datenschutzPlaceholder: 'Политика конфиденциальности согласно GDPR. Юридическая информация будет добавлена в ближайшее время.',
      copyright: 'Все права защищены.',
    },
  },
};
