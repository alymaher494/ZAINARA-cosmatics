// Bilingual content for Zainara Cosmetics (DE / AR)
// Brand: Zainara Cosmetics, Roßdorf, Germany

export type ServiceItem = {
  name: { de: string; ar: string };
  price: string; // price string as shown (e.g. "80 €" or "ab 75 €")
  note?: { de: string; ar: string };
};

export type ServiceCategory = {
  id: string;
  icon: string; // lucide icon name handled in component
  image: string;
  title: { de: string; ar: string };
  desc: { de: string; ar: string };
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    id: "laser",
    icon: "Sparkles",
    image: "/images/service-laser.jpg",
    title: { de: "Laser-Haarentfernung", ar: "إزالة الشعر بالليزر" },
    desc: {
      de: "Dauerhafte, sanfte Haarentfernung mit modernster Lasertechnologie für Gesicht und Körper.",
      ar: "إزالة شعر دائمة ولطيفة بأحدث تقنيات الليزر للوجه والجسم.",
    },
    items: [
      { name: { de: "Ganzkörper", ar: "كامل الجسم" }, price: "170 €" },
      { name: { de: "Intimbereich + Bikinizone + Pofalte", ar: "المنطقة الحساسة + خط البكيني + طيّة المؤخرة" }, price: "50 €" },
      { name: { de: "Bauch", ar: "البطن" }, price: "35 €" },
      { name: { de: "Brust", ar: "الصدر" }, price: "25 €" },
      { name: { de: "Po", ar: "المؤخرة" }, price: "25 €" },
      { name: { de: "Rücken", ar: "الظهر" }, price: "50 €" },
      { name: { de: "Intimbereich", ar: "المنطقة الحساسة" }, price: "35 €" },
      { name: { de: "Bikinizone", ar: "خط البكيني" }, price: "30 €" },
      { name: { de: "Beine komplett", ar: "كامل الساقين" }, price: "70 €" },
      { name: { de: "Oberschenkel", ar: "الفخذ العلوي" }, price: "40 €" },
      { name: { de: "Unterschenkel", ar: "الفخذ السفلي" }, price: "40 €" },
      { name: { de: "Arme komplett", ar: "كامل الذراعين" }, price: "60 €" },
      { name: { de: "Oberarme", ar: "الذراع العلوي" }, price: "30 €" },
      { name: { de: "Unterarme", ar: "الذراع السفلي" }, price: "30 €" },
      { name: { de: "Achseln", ar: "الإبط" }, price: "35 €" },
      { name: { de: "Gesicht", ar: "الوجه" }, price: "40 €" },
      { name: { de: "Koteletten", ar: "الجانب" }, price: "20 €" },
      { name: { de: "Kinn", ar: "الذقن" }, price: "20 €" },
      { name: { de: "Oberlippe", ar: "الشفة العليا" }, price: "20 €" },
    ],
  },
  {
    id: "facial",
    icon: "Droplet",
    image: "/images/service-facial.jpg",
    title: { de: "Gesichtsbehandlungen", ar: "علاجات الوجه" },
    desc: {
      de: "Tiefenreinigung, Feuchtigkeit und Strahlkraft mit der exklusiven AquaFacial-Methode.",
      ar: "تنظيف عميق وترطيب ونضارة بطريقة أكوا فيشيال الحصرية.",
    },
    items: [
      { name: { de: "AquaFacial Basic (40 Min.)", ar: "أكوا فيشيال أساسي (40 دقيقة)" }, price: "89 €" },
      { name: { de: "AquaFacial Classic (60 Min.)", ar: "أكوا فيشيال كلاسيك (60 دقيقة)" }, price: "99 €" },
      { name: { de: "AquaFacial Deluxe (90 Min.)", ar: "أكوا فيشيال ديلوكس (90 دقيقة)" }, price: "130 €" },
      { name: { de: "AquaFacial + Microneedling", ar: "أكوا فيشيال + مايكرونيدلينج" }, price: "150 €" },
      { name: { de: "AquaFacial für den Rücken", ar: "أكوا فيشيال للظهر" }, price: "150 €" },
    ],
  },
  {
    id: "microneedling",
    icon: "Flower2",
    image: "/images/service-microneedling.jpg",
    title: { de: "Microneedling", ar: "مايكرونيدلينج" },
    desc: {
      de: "Kollagen-Aufbau und Hautverjüngung für ein strafferes, ebenmäßigeres Hautbild.",
      ar: "تحفيز الكولاجين وتجديد البشرة للحصول على مظهر مشدود وأكثر تجانساً.",
    },
    items: [
      { name: { de: "Gesicht", ar: "الوجه" }, price: "80 €" },
      { name: { de: "Gesicht + Hals", ar: "الوجه + الرقبة" }, price: "99 €" },
      { name: { de: "Gesicht + Hals + Dekolleté", ar: "الوجه + الرقبة + الصدر" }, price: "150 €" },
      { name: { de: "Rücken", ar: "الظهر" }, price: "140 €" },
    ],
  },
  {
    id: "rf-microneedling",
    icon: "Waves",
    image: "/images/service-microneedling.jpg",
    title: { de: "Radiofrequenz-Microneedling", ar: "مايكرونيدلينج بترددات الراديو" },
    desc: {
      de: "Hochfrequenz-Wärme für intensiven Kollagenaufbau und sichtbare Hautstraffung.",
      ar: "حرارة عالية التردد لبناء كولاجين مكثف وشدة بصرية للبشرة.",
    },
    items: [
      { name: { de: "Gesicht", ar: "الوجه" }, price: "120 €" },
      { name: { de: "Gesicht + Hals", ar: "الوجه + الرقبة" }, price: "135 €" },
      { name: { de: "Gesicht + Hals + Dekolleté", ar: "الوجه + الرقبة + الصدر" }, price: "150 €" },
      { name: { de: "Narbenbehandlung am Körper", ar: "علاج الندب على الجسم" }, price: "ab 75 €" },
      { name: { de: "Dehnungsstreifen", ar: "علامات التمدد" }, price: "ab 100 €" },
    ],
  },
  {
    id: "permanent",
    icon: "Brush",
    image: "/images/service-permanent.jpg",
    title: { de: "Permanent Make-up", ar: "المكياج الدائم" },
    desc: {
      de: "Wachen Sie jeden Tag perfekt gestylt auf – mikrofeine Haarstriche für Ihre Brauen und volle lashes.",
      ar: "استيقظي كل يوم بإطلالة مثالية – خطوط شعر دقيقة الميكرو لحواجبك ورموش ممتلئة.",
    },
    items: [
      { name: { de: "Microblading inkl. Nachbehandlung", ar: "مايكروبلادينج شاملاً المعالجة اللاحقة" }, price: "250 €", note: { de: "Haltbarkeit: bis zu 2 Jahre", ar: "المدة: حتى سنتين" } },
      { name: { de: "Powder Brows inkl. Nachbehandlung", ar: "باودر براوز شاملاً المعالجة اللاحقة" }, price: "250 €", note: { de: "Haltbarkeit: bis zu 2 Jahre", ar: "المدة: حتى سنتين" } },
      { name: { de: "Augenbrauenlifting inkl. Färben", ar: "رفع الحواجب شامل الصبغ" }, price: "45 €", note: { de: "Haltbarkeit: bis zu 4 Wochen", ar: "المدة: حتى 4 أسابيع" } },
      { name: { de: "Wimpernlifting inkl. Färben", ar: "رفع الرموش شامل الصبغ" }, price: "45 €", note: { de: "Haltbarkeit: bis zu 4 Wochen", ar: "المدة: حتى 4 أسابيع" } },
      { name: { de: "Augenbrauen zupfen", ar: "نتف الحواجب" }, price: "15 €" },
      { name: { de: "Augenbrauen zupfen und färben", ar: "نتف وصبغ الحواجب" }, price: "28 €" },
      { name: { de: "Gesichtshaarentfernung mit Fadentechnik", ar: "إزالة شعر الوجه بالخيط" }, price: "40 €" },
    ],
  },
  {
    id: "weitere",
    icon: "Leaf",
    image: "/images/service-peeling.jpg",
    title: { de: "Weitere Behandlungen", ar: "علاجات إضافية" },
    desc: {
      de: "BioRePeel, BB Glow, Green Peel, Kristallpeeling und Zahnbleaching für Ihr vollständes Beauty-Erlebnis.",
      ar: "بيو ري بيل و بي بي جلو و غرين بيل و كريستال بيلينج وتبييض الأسنان لتجربة جمال متكاملة.",
    },
    items: [
      { name: { de: "BioRePeel", ar: "بيو ري بيل" }, price: "80 €" },
      { name: { de: "BB Glow", ar: "بي بي جلو" }, price: "70 €" },
      { name: { de: "Green Peel Classic inkl. Nachbehandlung", ar: "غرين بيل كلاسيك شاملاً المعالجة اللاحقة" }, price: "299 €" },
      { name: { de: "Green Peel Energy", ar: "غرين بيل إنرجي" }, price: "130 €" },
      { name: { de: "Kristallpeeling", ar: "كريستال بيلينج" }, price: "60 €" },
      { name: { de: "Zahnbleaching 30 Min.", ar: "تبييض الأسنان 30 دقيقة" }, price: "60 €" },
      { name: { de: "Zahnbleaching 60 Min.", ar: "تبييض الأسنان 60 دقيقة" }, price: "99 €" },
    ],
  },
];

export const t = {
  de: {
    nav: {
      home: "Start",
      about: "Über uns",
      services: "Behandlungen",
      gallery: "Galerie",
      location: "Standort",
      booking: "Termin",
      book: "Termin buchen",
    },
    hero: {
      badge: "Roßdorf · Darmstadt",
      title1: "ZAINARA",
      title2: "COSMETICS",
      tagline: "Laser & Beauty-Hair Removal",
      subtitle:
        "Premium Kosmetikstudio in Roßdorf. Laser-Haarentfernung, AquaFacial, Microneedling, Permanent Make-up & mehr – für Ihre natürliche, strahlende Schönheit.",
      cta1: "Termin buchen",
      cta2: "Behandlungen ansehen",
      stats: [
        { value: "30+", label: "Behandlungen" },
        { value: "2 Jahre", label: "Haltbarkeit Microblading" },
        { value: "100%", label: "Individuelle Beratung" },
      ],
    },
    about: {
      label: "Über die Gründerin",
      title: "Natürliche Schönheit, mit Hingabe kultiviert.",
      paragraphs: [
        "Willkommen bei Zainara Cosmetics – Ihrem Ort für ganzheitliche, auf Sie abgestimmte Beauty-Behandlungen in Roßdorf. Mit Leidenschaft, Fachwissen und modernster Technologie vereinen wir medizinische Präzision mit der Wärme eines Wohlfühl-Studios.",
        "Von der dauerhaften Laser-Haarentfernung über hochwertige Gesichtsbehandlungen bis zum Permanent Make-up: Jede Behandlung beginnt mit einer ausführlichen Beratung und endet mit einem Ergebnis, das Sie jeden Tag neu strahlen lässt.",
        "Mein Versprechen an Sie: hochwertige Produkte, sauberste Hygiene und eine individuelle Betreuung, die Ihre natürliche Schönheit perfekt in Szene setzt.",
      ],
      founderName: "Zainara",
      founderRole: "Gründerin & Beauty-Expertin",
      points: [
        "Zertifizierte Laser- & Permanent Make-up-Spezialistin",
        "Modernste Geräte & klinische Hygiene",
        "Persönliche Beratung in DE / AR",
      ],
    },
    services: {
      label: "Behandlungen & Preise",
      title: "Unser Behandlungsangebot",
      subtitle:
        "Von der dauerhaften Haarentfernung bis zum strahlenden Hautbild – entdecken Sie unsere Leistungen mit transparenter Preisliste.",
      all: "Alle Behandlungen",
      from: "ab",
      viewPrices: "Preisliste ansehen",
      book: "Diese Behandlung buchen",
    },
    gallery: {
      label: "Ergebnisse",
      title: "Echte Ergebnisse, echte Ausstrahlung",
      subtitle:
        "Ein Einblick in die Resultate unserer Kundinnen – von perfekten Brauen bis zu strahlender Haut.",
      items: [
        { title: "Microblading", desc: "Natürliche Haarstriche für definierte Brauen" },
        { title: "Lash & Brow Lift", desc: "Geschwungene Wimpern & definierte Brauen" },
        { title: "AquaFacial Glow", desc: "Tiefengereinigte, strahlende Haut" },
      ],
    },
    location: {
      label: "Standort & Erreichbarkeit",
      title: "Zentral in Roßdorf, nah bei Darmstadt",
      subtitle:
        "Sie finden uns in der Darmstädter Straße 50 in Roßdorf – verkehrsgünstig gelegen zwischen Darmstadt und Dieburg.",
      addressLabel: "Adresse",
      address: "Darmstädter Str. 50, 64380 Roßdorf",
      phoneLabel: "Telefon",
      phone: "01577 3435692",
      instagramLabel: "Instagram",
      instagram: "@zainara-cosmetic",
      hoursLabel: "Öffnungszeiten",
      hours: [
        { day: "Mo – Fr", time: "09:00 – 19:00" },
        { day: "Samstag", time: "10:00 – 16:00" },
        { day: "Sonntag", time: "Geschlossen" },
      ],
      areas: "Wir betreuen Kundinnen aus Roßdorf, Darmstadt, Dieburg, Ober-Ramstadt und der gesamten Region.",
      directions: "Route planen",
    },
    booking: {
      label: "Termin anfragen",
      title: "Vereinbaren Sie Ihren Termin",
      subtitle:
        "Senden Sie uns Ihre Anfrage – wir melden uns innerhalb von 24 Stunden zur Bestätigung bei Ihnen.",
      name: "Name",
      namePh: "Ihr Name",
      phone: "Telefon",
      phonePh: "Ihre Telefonnummer",
      email: "E-Mail (optional)",
      emailPh: "ihre@email.de",
      service: "Behandlung",
      servicePh: "Bitte Behandlung wählen",
      date: "Wunschdatum",
      time: "Wunschzeit",
      message: "Nachricht (optional)",
      messagePh: "Wünsche oder Fragen…",
      submit: "Anfrage senden",
      success: "Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.",
      error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      whatsapp: "Direkt per WhatsApp",
    },
    faq: {
      label: "Häufige Fragen",
      title: "Gut zu wissen",
      items: [
        {
          q: "Wie lange hält die Laser-Haarentfernung?",
          a: "Für ein dauerhaftes Ergebnis sind in der Regel 6–10 Sitzungen im Abstand von 4–8 Wochen nötig. Die genaue Anzahl hängt von Haut- und Haartyp ab.",
        },
        {
          q: "Ist eine Beratung vor der Behandlung möglich?",
          a: "Ja, jede Behandlung beginnt mit einer persönlichen und kostenlosen Beratung, um die passende Methode für Ihren Hauttyp zu finden.",
        },
        {
          q: "Wie lange hält Permanent Make-up?",
          a: "Microblading und Powder Brows halten bis zu 2 Jahre. Augenbrauen- und Wimpernlifting halten bis zu 4 Wochen.",
        },
        {
          q: "Bieten Sie Beratung auf Arabisch an?",
          a: "Ja, wir bieten persönliche Beratung sowohl auf Deutsch als auch auf Arabisch an.",
        },
        {
          q: "Wie bereite ich mich auf den Termin vor?",
          a: "Bitte kommen Sie mit sauberer Haut, ohne Make-up. Vor der Laser-Haarentfernung sollten Sie die Stelle 2 Tage nicht rasieren.",
        },
      ],
    },
    footer: {
      tagline: "Laser & Beauty-Hair Removal · Gesichtsbehandlungen · Permanent Make-up · Körperbehandlungen",
      address: "Darmstädter Str. 50, 64380 Roßdorf",
      phone: "01577 3435692",
      quick: "Schnellzugriff",
      contact: "Kontakt",
      follow: "Folgen Sie uns",
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      gallery: "المعرض",
      location: "الموقع",
      booking: "الحجز",
      book: "احجزي موعد",
    },
    hero: {
      badge: "روسدورف · دارمشتات",
      title1: "زينارة",
      title2: "للتجميل",
      tagline: "الليزر وإزالة الشعر والجمال",
      subtitle:
        "صالون تجميل فاخر في روسدورف. إزالة الشعر بالليزر، أكوا فيشيال، مايكرونيدلينج، المكياج الدائم والمزيد – من أجل جمالك الطبيعي المشرق.",
      cta1: "احجزي موعد",
      cta2: "تصفحي الخدمات",
      stats: [
        { value: "+30", label: "خدمة" },
        { value: "سنتان", label: "مدة المايكروبلادينج" },
        { value: "100%", label: "استشارة شخصية" },
      ],
    },
    about: {
      label: "عن المؤسِّسة",
      title: "جمال طبيعي، يُعتنى بشغف.",
      paragraphs: [
        "أهلاً بكِ في زينارة كوزمتكس – مكانك المتكامل لعلاجات التجميل المُصمَّمة خصيصاً لكِ في روسدورف. بشغف وخبرة وأحدث التقنيات، نمزج بين الدقة الطبية ودفء الصالون المريح.",
        "من إزالة الشعر بالليزر الدائمة، مروراً بعلاجات الوجه الفاخرة، وصولاً إلى المكياج الدائم: كل خدمة تبدأ باستشارة مفصّلة وتنتهي بنتيجة تجعلكِ تشعين كل يوم.",
        "وعدنا لكِ: منتجات عالية الجودة، أعلى معايير النظافة، واهتمام شخصي يُبرز جمالكِ الطبيعي بأجمل صورة.",
      ],
      founderName: "زينارة",
      founderRole: "المؤسِّسة وخبيرة التجميل",
      points: [
        "أخصائية مُعتمدة في الليزر والمكياج الدائم",
        "أحدث الأجهزة ونظافة سريرية",
        "استشارة شخصية بالألمانية والعربية",
      ],
    },
    services: {
      label: "الخدمات والأسعار",
      title: "خدماتنا",
      subtitle:
        "من إزالة الشعر الدائمة إلى بشرة مشرقة – اكتشفي خدماتنا بقائمة أسعار شفّافة.",
      all: "كل الخدمات",
      from: "من",
      viewPrices: "عرض قائمة الأسعار",
      book: "احجزي هذه الخدمة",
    },
    gallery: {
      label: "النتائج",
      title: "نتائج حقيقية، إشراقة حقيقية",
      subtitle:
        "لمحة من نتائج عميلاتنا – من الحواجب المثالية إلى البشرة المشرقة.",
      items: [
        { title: "مايكروبلادينج", desc: "خطوط شعر طبيعية لحواجب محددة" },
        { title: "رفع الرموش والحواجب", desc: "رموش مُحدَّبة وحواجب مُعرَّفة" },
        { title: "إشراقة أكوا فيشيال", desc: "بشرة نظيفة ومشرقة" },
      ],
    },
    location: {
      label: "الموقع وسهولة الوصول",
      title: "في وسط روسدورف، قرب دارمشتات",
      subtitle:
        "تجديننا في Darmstädter Straße 50 بروسدورف – موقع مُيسَّر بين دارمشتات وديبورغ.",
      addressLabel: "العنوان",
      address: "Darmstädter Str. 50, 64380 Roßdorf",
      phoneLabel: "الهاتف",
      phone: "01577 3435692",
      instagramLabel: "إنستجرام",
      instagram: "@zainara-cosmetic",
      hoursLabel: "ساعات العمل",
      hours: [
        { day: "الإثنين – الجمعة", time: "09:00 – 19:00" },
        { day: "السبت", time: "10:00 – 16:00" },
        { day: "الأحد", time: "مغلق" },
      ],
      areas: "نخدم عميلاتنا من روسدورف ودارمشتات وديبورغ وأوبر-رامشتات وكامل المنطقة.",
      directions: "احصلي على الاتجاهات",
    },
    booking: {
      label: "اطلبي موعد",
      title: "احجزي موعدك",
      subtitle:
        "أرسلي لنا طلبك – سنتواصل معك خلال 24 ساعة للتأكيد.",
      name: "الاسم",
      namePh: "اسمك",
      phone: "الهاتف",
      phonePh: "رقم هاتفك",
      email: "البريد الإلكتروني (اختياري)",
      emailPh: "your@email.com",
      service: "الخدمة",
      servicePh: "اختاري الخدمة",
      date: "التاريخ المُفضّل",
      time: "الوقت المُفضّل",
      message: "رسالة (اختياري)",
      messagePh: "أمنياتك أو أسئلتك…",
      submit: "إرسال الطلب",
      success: "شكراً لك! تم إرسال طلبك. سنتواصل معك قريباً.",
      error: "حدث خطأ. حاولي مرة أخرى أو اتصلي بنا.",
      whatsapp: "مباشرة عبر واتساب",
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "مُهم أن تعرفي",
      items: [
        {
          q: "كم تستمر إزالة الشعر بالليزر؟",
          a: "للحصول على نتيجة دائمة، يلزم عادةً 6–10 جلسات بفاصل 4–8 أسابيع. يعتمد العدد الدقيق على نوع البشرة والشعر.",
        },
        {
          q: "هل توجد استشارة قبل الخدمة؟",
          a: "نعم، كل خدمة تبدأ باستشارة شخصية ومجانية لإيجاد الطريقة المُناسبة لنوع بشرتك.",
        },
        {
          q: "كم يدوم المكياج الدائم؟",
          a: "يدوم المايكروبلادينج وباودر براوز حتى سنتين. يدوم رفع الحواجب والرموش حتى 4 أسابيع.",
        },
        {
          q: "هل تقدمون الاستشارة بالعربية؟",
          a: "نعم، نقدم استشارة شخصية بالألمانية والعربية معاً.",
        },
        {
          q: "كيف أستعد للموعد؟",
          a: "احضري ببشرة نظيفة بدون مكياج. قبل إزالة الشعر بالليزر لا تُزيلي الشعر من المنطقة لمدة يومين.",
        },
      ],
    },
    footer: {
      tagline: "الليزر وإزالة الشعر والجمال · علاجات الوجه · المكياج الدائم · علاجات الجسم",
      address: "Darmstädter Str. 50, 64380 Roßdorf",
      phone: "01577 3435692",
      quick: "روابط سريعة",
      contact: "تواصلي معنا",
      follow: "تابعينا",
      rights: "جميع الحقوق محفوظة.",
      imprint: "بيان النشر",
      privacy: "الخصوصية",
    },
  },
} as const;

export type Dict = (typeof t)["de"];
