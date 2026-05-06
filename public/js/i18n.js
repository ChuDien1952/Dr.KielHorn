/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   i18n.js â€” Bilingual: English + German
   Dr. Kielhorn Dental Practice Website
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

const TRANSLATIONS = {
  en: {
    header: {
      subtitle: 'Zahnarztpraxis Â· Winsen (Luhe)'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Team',
      practice: 'Practice',
      hours: 'Hours',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book Appointment'
    },
    hero: {
      tag: 'Dental Practice in Winsen (Luhe)',
      title: 'Your Dentist in<br>Winsen (Luhe) â€”<br><em>With Heart &amp; Expertise</em>',
      desc: 'Modern dentistry, personal care, and a team that truly cares about your well-being. Dr. Christopher Kielhorn and his team look forward to welcoming you.',
      cta1: 'Book Appointment',
      cta2: 'Call Now',
      card1_title: 'Next Appointment',
      card1_sub: 'Available today',
      card2_title: 'Pain-Free',
      card2_sub: 'Cutting-edge methods',
      scroll: 'Discover more',
      trust: {
        rating: '4.9 / 5 Rating',
        tradition: 'Family Tradition',
        patients: 'Patients'
      }
    },
    benefits: {
      title1: 'Excellent Quality',
      desc1: 'State-of-the-art dental treatments using the latest methods.',
      title2: 'Compassionate Care',
      desc2: 'Especially for anxious patients â€” your comfort always comes first.',
      title3: 'Modern Technology',
      desc3: 'Digital X-ray, 3D planning and gentle treatment procedures.',
      title4: 'Short Wait Times',
      desc4: 'Flexible appointments â€” also early mornings. We respect your time.'
    },
    services: {
      eyebrow: 'What We Do For You',
      title: 'Our Services in Winsen (Luhe)',
      desc: 'From prevention to aesthetic dentistry â€” we guide you towards a healthy, radiant smile.',
      more: 'Learn more â†’',
      cta: 'Discover all 8 Services â†’',
      svc1: { title: 'Prevention & Cleaning', desc: 'Regular professional cleaning and early detection keep your teeth healthy for life.' },
      svc2: { title: 'Implantology', desc: 'Permanent tooth replacements that look and feel natural, using premium implant systems.' },
      svc3: { title: 'Dentures', desc: 'Custom-fitted partial and full dentures for a natural appearance and comfortable fit.' },
      svc4: { title: 'Oral Surgery', desc: 'Tooth extractions, wisdom tooth removal, and surgical procedures in a gentle manner.' },
      svc5: { title: "Children's Dentistry", desc: 'Fun, fear-free dental care for children â€” building healthy habits from an early age.' },
      svc6: { title: 'Anxious Patients', desc: 'Special techniques and a calming environment for patients who fear the dentist.' },
      svc7: { title: 'Aesthetic Dentistry', desc: 'Veneers, whitening, and cosmetic corrections for your perfect confident smile.' },
      svc8: { title: 'Tooth Preservation', desc: 'Fillings, root canal treatments, and inlays to save and strengthen your natural teeth.' }
    },
    team: {
      eyebrow: 'Our Team',
      title: 'Experienced Professionals, Caring Hands',
      doctor: {
        role: 'Principal Dentist & Practice Owner',
        name: 'Dr. Christopher Kielhorn',
        desc1: 'Dr. Christopher Kielhorn has been practicing dentistry in Winsen (Luhe) for over 20 years, continuing a family tradition of dental excellence. His approach combines clinical precision with genuine patient empathy.',
        desc2: 'Specializing in implantology, aesthetic dentistry, and anxious patient care, he ensures every patient leaves with a smile â€” literally.',
        cred1: 'Specialist in Implantology',
        cred2: '20+ Years Experience',
        cred3: '2nd Generation Dentist',
        cred4: '4.9â˜… Patient Rating'
      },
      staff: {
        role_dentist: 'Associate Dentist',
        role_hygienist: 'Dental Hygienist',
        role_assistant: 'Dental Assistant',
        role_reception: 'Patient Coordinator',
        role_technician: 'Dental Technician'
      },
      overview: {
        title: 'A 10-Person Team Ready for You',
        desc: 'Dentists, hygienists, assistants, and coordinators â€” all with one goal: your well-being and a healthy, beautiful smile.'
      },
      cta: 'Meet Our Entire Team â†’'
    },
    practice: {
      eyebrow: 'Our Practice',
      title: 'Modern Equipment, Warm Atmosphere',
      desc: 'Our practice combines cutting-edge dental technology with a welcoming, comfortable environment.',
      feat1: { title: 'Digital X-Ray', desc: '90% less radiation than conventional X-ray' },
      feat2: { title: '3D Planning', desc: 'Precise implant and treatment planning' },
      feat3: { title: 'Pain-Free Treatment', desc: 'Latest anaesthesia and sedation options' },
      feat4: { title: 'Hygienic Standards', desc: 'Certified sterilisation and infection control' },
      lab_title: 'In-House Laboratory',
      quote: 'Our goal is not just healthy teeth, but confident smiles that last a lifetime.',
      quote_author: 'Dr. Christopher Kielhorn',
      cta: 'Discover Our Practice â†’'
    },
    hours: {
      eyebrow: 'Opening Hours',
      title: 'We Are Here For You',
      mon: 'Monday',
      tue: 'Tuesday',
      wed: 'Wednesday',
      thu: 'Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'Closed',
      emergency: {
        title: 'Dental Emergency?',
        desc: 'For urgent dental pain outside opening hours, please call our emergency line or visit the nearest emergency dental service.',
        cta: 'Emergency Line: 04171 / 71212'
      }
    },
    reviews: {
      eyebrow: 'Patient Reviews',
      title: 'What Our Patients Say',
      score_label: 'Based on 127 Google reviews',
      r1: { name: 'Maria S.', text: 'Absolutely the best dental practice I have ever visited. Dr. Kielhorn is incredibly gentle and professional. I used to fear the dentist â€” not anymore!', date: 'March 2025' },
      r2: { name: 'Thomas B.', text: 'Wonderful team, short wait times, and excellent results. My implants look completely natural. Highly recommended to everyone.', date: 'February 2025' },
      r3: { name: 'Anna K.', text: 'My children actually look forward to their dental appointments now. The team is so warm and patient. We won\'t go anywhere else.', date: 'January 2025' }
    },
    process: {
      eyebrow: 'Your First Visit',
      title: 'Simple, Step by Step',
      step1: { title: 'Book Online or by Phone', desc: 'Choose a convenient time via our website or call 04171 / 71212.' },
      step2: { title: 'First Consultation', desc: 'We listen, examine, and discuss your dental goals and health.' },
      step3: { title: 'Treatment Planning', desc: 'A personalised, transparent plan tailored to your needs and budget.' },
      step4: { title: 'Ongoing Care', desc: 'Regular check-ups to keep your smile healthy for years to come.' }
    },
    contact: {
      eyebrow: 'Contact Us',
      title: 'We Look Forward to Your Visit',
      address_label: 'Address',
      address: 'NiedersachsenstraÃŸe 13a<br>21423 Winsen (Luhe)',
      phone_label: 'Phone',
      phone: '04171 / 71212',
      email_label: 'Email',
      email: 'info@zahnarzt-kielhorn-winsen.de',
      cta_page: 'Book Appointment Online â†’',
      form: {
        title: 'Send Us a Message',
        note: 'We usually respond within 24 hours.',
        name: 'Your Name',
        email_label: 'Email Address',
        email: 'Email Address',
        phone_label: 'Phone Number',
        phone: 'Phone Number',
        message_label: 'Your Message',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! We will get back to you shortly.'
      }
    },
    footer: {
      tagline: 'Quality dental care with a personal touch in Winsen (Luhe).',
      nav_title: 'Navigation',
      services_title: 'Services',
      legal_title: 'Legal',
      links: {
        home: 'Home',
        services: 'Services',
        team: 'Team',
        practice: 'Practice',
        hours: 'Hours',
        faq: 'FAQ',
        contact: 'Contact'
      },
      services_links: {
        prevention: 'Prevention',
        implantology: 'Implantology',
        dentures: 'Dentures',
        surgery: 'Oral Surgery',
        children: "Children's Dentistry",
        anxiety: 'Anxious Patients'
      },
      legal_links: {
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
        accessibility: 'Accessibility'
      },
      copyright: 'Â© 2025 Zahnarztpraxis Dr. Christopher Kielhorn. All rights reserved.'
    },
    pages: {
      services: { hero: { h1: 'Our Services â€” <em>Your Smile in the Best Hands</em>', desc: 'From prevention to aesthetic dentistry â€” comprehensive dental care tailored individually to you.', back: 'Back to Homepage' } },
      team:     { hero: { h1: 'Our Team â€” <em>Experienced, Dedicated, Compassionate</em>', desc: 'Behind every healthy smile is a team working with passion and expertise. Get to know us.', back: 'Back to Homepage' } },
      praxis:   { hero: { h1: 'Our Practice â€” <em>Modern, Welcoming, Trustworthy</em>', desc: 'A practice with tradition â€” combining modern medicine with personal care since 1980.', back: 'Back to Homepage' } },
      faq:      { hero: { h1: 'Frequently Asked Questions â€” <em>All Answers at a Glance</em>', desc: 'Questions about our services, treatments, or appointments? We have the answers.', back: 'Back to Homepage' } },
      contact:  { hero: { h1: 'Contact â€” <em>We Look Forward to Your Visit</em>', desc: 'Book an appointment or send us your questions â€” we are here for you.', back: 'Back to Homepage' } },
      prophylaxe:        { hero: { h1: 'Prevention â€” <em>Prevention Is Better than Cure</em>', desc: 'Regular professional cleaning and preventive care keep your teeth healthy for life.', back: 'All Services' } },
      implantologie:     { hero: { h1: 'Implantology â€” <em>Fixed Tooth Replacement Like Real Teeth</em>', desc: 'Premium implants for a permanent, natural-looking smile that lasts a lifetime.', back: 'All Services' } },
      zahnersatz:        { hero: { h1: 'Dentures â€” <em>Natural Replacement for Better Quality of Life</em>', desc: 'High-quality crowns, bridges, and dentures from our own in-house laboratory.', back: 'All Services' } },
      oralchirurgie:     { hero: { h1: 'Oral Surgery â€” <em>Gentle Surgical Procedures</em>', desc: 'From wisdom tooth removal to bone augmentation â€” performed with care and expertise.', back: 'All Services' } },
      kinderzahnheilkunde: { hero: { h1: "Children's Dentistry â€” <em>Focused on Children's Special Needs</em>", desc: 'Child-friendly dental care â€” playful, gentle, and completely without fear.', back: 'All Services' } },
      angstpatienten:    { hero: { h1: 'Anxious Patients â€” <em>With Understanding and Empathy</em>', desc: 'No pressure, no rush â€” we take your fears seriously and go at your own pace.', back: 'All Services' } },
      aesthetik:         { hero: { h1: 'Aesthetic Dentistry â€” <em>Your Radiant Smile, Our Passion</em>', desc: 'Bleaching, veneers, and smile design for your most confident, beautiful smile.', back: 'All Services' } },
      zahnerhaltung:     { hero: { h1: 'Tooth Preservation â€” <em>Keeping Natural Teeth Healthy</em>', desc: 'Modern, gentle methods to protect and preserve your natural teeth long-term.', back: 'All Services' } }
    }
  },

  de: {
    header: {
      subtitle: 'Zahnarztpraxis Â· Winsen (Luhe)'
    },
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      team: 'Team',
      practice: 'Praxis',
      hours: 'Ã–ffnungszeiten',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Termin buchen'
    },
    hero: {
      tag: 'Zahnarztpraxis in Winsen (Luhe)',
      title: 'Ihr Zahnarzt in<br>Winsen (Luhe) â€”<br><em>Mit Herz &amp; Kompetenz</em>',
      desc: 'Moderne Zahnmedizin, persÃ¶nliche Betreuung und ein Team, dem Ihr Wohlbefinden wirklich am Herzen liegt. Dr. Christopher Kielhorn und sein Team freuen sich auf Ihren Besuch.',
      cta1: 'Termin buchen',
      cta2: 'Jetzt anrufen',
      card1_title: 'NÃ¤chster Termin',
      card1_sub: 'Heute noch verfÃ¼gbar',
      card2_title: 'Schmerzfrei',
      card2_sub: 'Modernste Methoden',
      scroll: 'Mehr entdecken',
      trust: {
        rating: '4,9 / 5 Bewertung',
        tradition: 'Familientradition',
        patients: 'Patienten'
      }
    },
    benefits: {
      title1: 'Exzellente QualitÃ¤t',
      desc1: 'Modernste zahnmedizinische Behandlungen nach neuesten Methoden.',
      title2: 'EinfÃ¼hlsame Betreuung',
      desc2: 'Besonders fÃ¼r Angstpatienten â€” Ihr Komfort steht immer an erster Stelle.',
      title3: 'Moderne Technologie',
      desc3: 'Digitales RÃ¶ntgen, 3D-Planung und schonende Behandlungsverfahren.',
      title4: 'Kurze Wartezeiten',
      desc4: 'Flexible Termine â€” auch frÃ¼h morgens. Wir respektieren Ihre Zeit.'
    },
    services: {
      eyebrow: 'Was Wir FÃ¼r Sie Tun',
      title: 'Unsere Leistungen in Winsen (Luhe)',
      desc: 'Von der Vorsorge bis zur Ã¤sthetischen Zahnheilkunde â€” wir begleiten Sie zu einem gesunden, strahlenden LÃ¤cheln.',
      more: 'Mehr erfahren â†’',
      svc1: { title: 'Prophylaxe & Reinigung', desc: 'RegelmÃ¤ÃŸige professionelle Zahnreinigung und FrÃ¼herkennungsuntersuchungen halten Ihre ZÃ¤hne lebenslang gesund.' },
      svc2: { title: 'Implantologie', desc: 'Dauerhafter Zahnersatz, der natÃ¼rlich aussieht und sich anfÃ¼hlt â€” mit hochwertigen Implantatsystemen.' },
      svc3: { title: 'Zahnersatz', desc: 'Individuell angepasste Teil- und Vollprothesen fÃ¼r ein natÃ¼rliches Aussehen und optimalen Tragekomfort.' },
      svc4: { title: 'Oralchirurgie', desc: 'Zahnentfernungen, WeisheitszÃ¤hne und chirurgische Eingriffe â€” schonend und professionell durchgefÃ¼hrt.' },
      svc5: { title: 'Kinderzahnheilkunde', desc: 'Spielerische, angstfreie Zahnpflege fÃ¼r Kinder â€” gesunde Gewohnheiten von klein auf aufbauen.' },
      svc6: { title: 'Angstpatienten', desc: 'Besondere Techniken und eine beruhigende AtmosphÃ¤re fÃ¼r Patienten mit Zahnarztangst.' },
      svc7: { title: 'Ã„sthetische Zahnheilkunde', desc: 'Veneers, Bleaching und kosmetische Korrekturen fÃ¼r Ihr strahlendes LÃ¤cheln.' },
      svc8: { title: 'Zahnerhaltung', desc: 'FÃ¼llungen, Wurzelbehandlungen und Inlays, um Ihre natÃ¼rlichen ZÃ¤hne zu erhalten und zu stÃ¤rken.' },
      cta: 'Alle 8 Leistungen entdecken â†’'
    },
    team: {
      eyebrow: 'Unser Team',
      title: 'Erfahrene Profis, FÃ¼rsorgliche HÃ¤nde',
      doctor: {
        role: 'Zahnarzt & Praxisinhaber',
        name: 'Dr. Christopher Kielhorn',
        desc1: 'Dr. Christopher Kielhorn praktiziert seit Ã¼ber 20 Jahren Zahnmedizin in Winsen (Luhe) und setzt damit eine familiÃ¤re Zahnarzt-Tradition fort. Seine Arbeit verbindet klinische PrÃ¤zision mit echtem EinfÃ¼hlungsvermÃ¶gen.',
        desc2: 'Mit Spezialisierung auf Implantologie, Ã¤sthetische Zahnheilkunde und die Betreuung von Angstpatienten sorgt er dafÃ¼r, dass jeder Patient mit einem LÃ¤cheln die Praxis verlÃ¤sst.',
        cred1: 'Spezialist fÃ¼r Implantologie',
        cred2: '20+ Jahre Erfahrung',
        cred3: 'Zahnarzt in 2. Generation',
        cred4: '4,9â˜… Patientenbewertung'
      },
      staff: {
        role_dentist: 'ZahnÃ¤rztin',
        role_hygienist: 'Dentalhygienikerin',
        role_assistant: 'Zahnmedizinische Fachangestellte',
        role_reception: 'Patientenkoordinatorin',
        role_technician: 'Zahntechniker'
      },
      overview: {
        title: 'Unser 10-kÃ¶pfiges Team fÃ¼r Sie',
        desc: 'ZahnÃ¤rzte, Hygieniker, Assistenten und Koordinatoren â€” alle mit einem Ziel: Ihr Wohlbefinden und ein gesundes, schÃ¶nes LÃ¤cheln.'
      },
      cta: 'Unser gesamtes Team kennenlernen â†’'
    },
    practice: {
      eyebrow: 'Unsere Praxis',
      title: 'Moderne Ausstattung, Herzliche AtmosphÃ¤re',
      desc: 'Unsere Praxis verbindet modernste Zahntechnologie mit einer einladenden, angenehmen Umgebung.',
      feat1: { title: 'Digitales RÃ¶ntgen', desc: '90 % weniger Strahlung als herkÃ¶mmliches RÃ¶ntgen' },
      feat2: { title: '3D-Planung', desc: 'PrÃ¤zise Implantat- und Behandlungsplanung' },
      feat3: { title: 'Schmerzfreie Behandlung', desc: 'Neueste AnÃ¤sthesie- und Sedierungsverfahren' },
      feat4: { title: 'Hygienestandards', desc: 'Zertifizierte Sterilisation und Infektionskontrolle' },
      lab_title: 'Eigenes Labor',
      quote: 'Unser Ziel sind nicht nur gesunde ZÃ¤hne, sondern selbstbewusste LÃ¤cheln, die ein Leben lang halten.',
      quote_author: 'Dr. Christopher Kielhorn',
      cta: 'Praxis entdecken â†’'
    },
    hours: {
      eyebrow: 'Ã–ffnungszeiten',
      title: 'Wir Sind FÃ¼r Sie Da',
      mon: 'Montag',
      tue: 'Dienstag',
      wed: 'Mittwoch',
      thu: 'Donnerstag',
      fri: 'Freitag',
      sat: 'Samstag',
      sun: 'Sonntag',
      closed: 'Geschlossen',
      emergency: {
        title: 'ZahnÃ¤rztlicher Notfall?',
        desc: 'Bei akuten Zahnschmerzen auÃŸerhalb unserer Ã–ffnungszeiten rufen Sie bitte unsere Notfallnummer an oder wenden Sie sich an den zahnÃ¤rztlichen Notfalldienst.',
        cta: 'Notfallnummer: 04171 / 71212'
      }
    },
    reviews: {
      eyebrow: 'Patientenbewertungen',
      title: 'Was Unsere Patienten Sagen',
      score_label: 'Basierend auf 127 Google-Bewertungen',
      r1: { name: 'Maria S.', text: 'Absolut die beste Zahnarztpraxis, die ich je besucht habe. Dr. Kielhorn ist unglaublich einfÃ¼hlsam und professionell. Ich hatte frÃ¼her Angst vor dem Zahnarzt â€” das ist jetzt vorbei!', date: 'MÃ¤rz 2025' },
      r2: { name: 'Thomas B.', text: 'Wunderbares Team, kurze Wartezeiten und hervorragende Ergebnisse. Meine Implantate sehen vÃ¶llig natÃ¼rlich aus. Ich empfehle die Praxis jedem weiter.', date: 'Februar 2025' },
      r3: { name: 'Anna K.', text: 'Meine Kinder freuen sich jetzt tatsÃ¤chlich auf ihre Zahnarzttermine. Das Team ist so herzlich und geduldig. Wir gehen nirgendwo anders hin.', date: 'Januar 2025' }
    },
    process: {
      eyebrow: 'Ihr Erster Besuch',
      title: 'Einfach, Schritt fÃ¼r Schritt',
      step1: { title: 'Online oder telefonisch buchen', desc: 'WÃ¤hlen Sie einen passenden Termin Ã¼ber unsere Website oder rufen Sie 04171 / 71212 an.' },
      step2: { title: 'Erstberatung', desc: 'Wir hÃ¶ren zu, untersuchen und besprechen Ihre Zahngesundheitsziele.' },
      step3: { title: 'Behandlungsplanung', desc: 'Ein individueller, transparenter Plan, abgestimmt auf Ihre BedÃ¼rfnisse und Ihr Budget.' },
      step4: { title: 'Langfristige Betreuung', desc: 'RegelmÃ¤ÃŸige Kontrolltermine, damit Ihr LÃ¤cheln dauerhaft gesund bleibt.' }
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Wir Freuen Uns Auf Ihren Besuch',
      address_label: 'Adresse',
      address: 'NiedersachsenstraÃŸe 13a<br>21423 Winsen (Luhe)',
      phone_label: 'Telefon',
      phone: '04171 / 71212',
      email_label: 'E-Mail',
      email: 'info@zahnarzt-kielhorn-winsen.de',
      cta_page: 'Online Termin buchen â†’',
      form: {
        title: 'Schreiben Sie Uns',
        note: 'Wir antworten in der Regel innerhalb von 24 Stunden.',
        name: 'Ihr Name',
        email_label: 'E-Mail-Adresse',
        email: 'E-Mail-Adresse',
        phone_label: 'Telefonnummer',
        phone: 'Telefonnummer',
        message_label: 'Ihre Nachricht',
        message: 'Ihre Nachricht',
        submit: 'Nachricht senden',
        success: 'Vielen Dank! Wir melden uns so schnell wie mÃ¶glich bei Ihnen.'
      }
    },
    footer: {
      tagline: 'QualitÃ¤ts-Zahnmedizin mit persÃ¶nlicher Note in Winsen (Luhe).',
      nav_title: 'Navigation',
      services_title: 'Leistungen',
      legal_title: 'Rechtliches',
      links: {
        home: 'Startseite',
        services: 'Leistungen',
        team: 'Team',
        practice: 'Praxis',
        hours: 'Ã–ffnungszeiten',
        faq: 'FAQ',
        contact: 'Kontakt'
      },
      services_links: {
        prevention: 'Prophylaxe',
        implantology: 'Implantologie',
        dentures: 'Zahnersatz',
        surgery: 'Oralchirurgie',
        children: 'Kinderzahnheilkunde',
        anxiety: 'Angstpatienten'
      },
      legal_links: {
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        accessibility: 'Barrierefreiheit'
      },
      copyright: 'Â© 2025 Zahnarztpraxis Dr. Christopher Kielhorn. Alle Rechte vorbehalten.'
    },
    pages: {
      services: { hero: { h1: 'Unsere Leistungen â€” <em>Ihr LÃ¤cheln in besten HÃ¤nden</em>', desc: 'Von der Vorsorge Ã¼ber Implantate bis zur Ã¤sthetischen Zahnheilkunde â€” umfassende Zahnmedizin auf hÃ¶chstem Niveau, individuell auf Sie abgestimmt.', back: 'ZurÃ¼ck zur Startseite' } },
      team:     { hero: { h1: 'Unser Team â€” <em>Erfahren, Engagiert, EinfÃ¼hlsam</em>', desc: 'Hinter jedem gesunden LÃ¤cheln steckt ein Team, das mit Leidenschaft und Fachkompetenz arbeitet. Lernen Sie uns kennen.', back: 'ZurÃ¼ck zur Startseite' } },
      praxis:   { hero: { h1: 'Unsere Praxis â€” <em>Modern, Herzlich, Vertrauensvoll</em>', desc: 'Eine Praxis mit Geschichte â€” moderne Medizin verbunden mit persÃ¶nlicher Betreuung seit 1980.', back: 'ZurÃ¼ck zur Startseite' } },
      faq:      { hero: { h1: 'HÃ¤ufig gestellte Fragen â€” <em>Alle Antworten auf einen Blick</em>', desc: 'Fragen zu unseren Leistungen, Behandlungen oder Terminen? Wir haben die Antworten fÃ¼r Sie.', back: 'ZurÃ¼ck zur Startseite' } },
      contact:  { hero: { h1: 'Kontakt â€” <em>Wir freuen uns auf Sie</em>', desc: 'Vereinbaren Sie einen Termin oder senden Sie uns Ihre Fragen â€” wir sind fÃ¼r Sie da.', back: 'ZurÃ¼ck zur Startseite' } },
      prophylaxe:        { hero: { h1: 'Prophylaxe â€” <em>Vorbeugen ist besser als Heilen</em>', desc: 'RegelmÃ¤ÃŸige professionelle Zahnreinigung und Vorsorge fÃ¼r lebenslang gesunde ZÃ¤hne.', back: 'Alle Leistungen' } },
      implantologie:     { hero: { h1: 'Implantologie â€” <em>Fester Zahnersatz wie echte ZÃ¤hne</em>', desc: 'Premium-Implantate fÃ¼r ein dauerhaftes, natÃ¼rlich aussehendes LÃ¤cheln, das ein Leben lang hÃ¤lt.', back: 'Alle Leistungen' } },
      zahnersatz:        { hero: { h1: 'Zahnersatz â€” <em>NatÃ¼rlicher Ersatz fÃ¼r mehr LebensqualitÃ¤t</em>', desc: 'Hochwertige Kronen, BrÃ¼cken und Prothesen aus unserem eigenen Praxislabor.', back: 'Alle Leistungen' } },
      oralchirurgie:     { hero: { h1: 'Oralchirurgie â€” <em>Schonende chirurgische Eingriffe</em>', desc: 'Von der Weisheitszahnentfernung bis zum Knochenaufbau â€” in erfahrenen HÃ¤nden.', back: 'Alle Leistungen' } },
      kinderzahnheilkunde: { hero: { h1: 'Kinderzahnheilkunde â€” <em>Wir konzentrieren uns auf die speziellen BedÃ¼rfnisse von Kindern</em>', desc: 'Kinderfreundliche Zahnmedizin â€” spielerisch, sanft und ganz ohne Angst.', back: 'Alle Leistungen' } },
      angstpatienten:    { hero: { h1: 'Angstpatienten â€” <em>Mit VerstÃ¤ndnis und EinfÃ¼hlungsvermÃ¶gen</em>', desc: 'Kein Druck, keine Hektik â€” wir nehmen Ihre Ã„ngste ernst und gehen in Ihrem Tempo vor.', back: 'Alle Leistungen' } },
      aesthetik:         { hero: { h1: 'Ã„sthetische Zahnheilkunde â€” <em>Ihr strahlendes LÃ¤cheln, unsere Leidenschaft</em>', desc: 'Bleaching, Veneers und Smile Design fÃ¼r Ihr schÃ¶nstes, selbstbewusstes LÃ¤cheln.', back: 'Alle Leistungen' } },
      zahnerhaltung:     { hero: { h1: 'Zahnerhaltung â€” <em>NatÃ¼rliche ZÃ¤hne erhalten</em>', desc: 'Moderne, schonende Verfahren zum langfristigen Schutz und Erhalt Ihrer natÃ¼rlichen ZÃ¤hne.', back: 'Alle Leistungen' } }
    }
  }
};

/* â”€â”€ Utility: resolve dot-notation key â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function getKey(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

/* â”€â”€ Apply translations to DOM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = getKey(t, key);
    if (val === null) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  /* placeholder-only elements */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = getKey(t, key);
    if (val) el.placeholder = val;
  });
}

/* â”€â”€ Update switcher UI â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const LANG_FLAG_SRCS = { en: 'https://flagcdn.com/w20/us.png', de: 'https://flagcdn.com/w20/de.png' };
const LANG_ALTS      = { en: 'EN', de: 'DE' };

function updateSwitcherUI(lang) {
  const flagImg = document.getElementById('langFlagImg');
  if (flagImg) {
    flagImg.src = LANG_FLAG_SRCS[lang] || LANG_FLAG_SRCS.de;
    flagImg.alt = LANG_ALTS[lang] || lang.toUpperCase();
  }

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang === 'en' ? 'en' : 'de';
}

/* â”€â”€ Set language (main entry point) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let _langTimer = null;
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'de';
  updateSwitcherUI(lang);
  localStorage.setItem('lang', lang);

  clearTimeout(_langTimer);
  document.body.style.transition = 'opacity .15s ease';
  document.body.style.opacity = '0';
  _langTimer = setTimeout(() => {
    applyTranslations(lang);
    document.body.style.opacity = '1';
  }, 150);
}

/* â”€â”€ Dropdown toggle â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initLangSwitcher() {
  const switcher = document.getElementById('langSwitcher');
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  if (!switcher || !btn || !dropdown) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('open');
    dropdown.classList.toggle('open', !isOpen);
    switcher.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  dropdown.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      setLanguage(opt.dataset.lang);
      dropdown.classList.remove('open');
      switcher.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    switcher.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  dropdown.addEventListener('click', e => e.stopPropagation());
}

/* â”€â”€ Bootstrap on DOM ready â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  let saved = localStorage.getItem('lang') || 'de';
  if (saved === 'vi' || !TRANSLATIONS[saved]) saved = 'de';
  localStorage.setItem('lang', saved);
  window.currentLang = saved;
  applyTranslations(saved);
  updateSwitcherUI(saved);
});
