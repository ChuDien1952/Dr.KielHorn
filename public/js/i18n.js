/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   i18n.js — Bilingual: English + German
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
      title: 'Your Dentist in<br>Winsen (Luhe) —<br><em>With Heart &amp; Expertise</em>',
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
      desc2: 'Especially for anxious patients — your comfort always comes first.',
      title3: 'Modern Technology',
      desc3: 'Digital X-ray, 3D planning and gentle treatment procedures.',
      title4: 'Short Wait Times',
      desc4: 'Flexible appointments — also early mornings. We respect your time.'
    },
    services: {
      eyebrow: 'What We Do For You',
      title: 'Our Services in Winsen (Luhe)',
      desc: 'From prevention to aesthetic dentistry — we guide you towards a healthy, radiant smile.',
      more: 'Learn more →',
      cta: 'Discover all 8 Services →',
      svc1: { title: 'Prevention & Cleaning', desc: 'Regular professional cleaning and early detection keep your teeth healthy for life.' },
      svc2: { title: 'Implantology', desc: 'Permanent tooth replacements that look and feel natural, using premium implant systems.' },
      svc3: { title: 'Dentures', desc: 'Custom-fitted partial and full dentures for a natural appearance and comfortable fit.' },
      svc4: { title: 'Oral Surgery', desc: 'Tooth extractions, wisdom tooth removal, and surgical procedures in a gentle manner.' },
      svc5: { title: "Children's Dentistry", desc: 'Fun, fear-free dental care for children — building healthy habits from an early age.' },
      svc6: { title: 'Anxious Patients', desc: 'Special techniques and a calming environment for patients who fear the dentist.' },
      svc7: { title: 'Aesthetic Dentistry', desc: 'Veneers, whitening, and cosmetic corrections for your perfect confident smile.' },
      svc8: { title: 'Tooth Preservation', desc: 'Fillings, root canal treatments, and inlays to save and strengthen your natural teeth.' },
      cta_question: 'Have Questions About Our Services?',
      cta_desc: 'We are happy to advise you personally and create an individual treatment plan — transparent, clear, and without hidden costs.',
      cta_call: '04171 / 71212 — Call Now',
      cta_faq: 'Frequently Asked Questions (FAQ)'
    },
    team: {
      eyebrow: 'Our Team',
      title: 'Experienced Professionals Here for You',
      doctor: {
        role: 'Principal Dentist & Practice Owner',
        name: 'Dr. Christopher Kielhorn',
        desc1: 'Dr. Christopher Kielhorn has been practicing dentistry in Winsen (Luhe) for over 20 years, continuing a family tradition of dental excellence. His approach combines clinical precision with genuine patient empathy.',
        desc2: 'After his dental studies, Dr. Kielhorn completed numerous advanced trainings in implantology, aesthetic dentistry, and anxious patient care. With over 20 years of experience and a 4.9-star Google rating, he is one of the most respected dentists in the Harburg district.',
        desc3: 'He is known for his calm, empathetic manner and his ability to put even anxious patients at ease. "No tooth and no patient is too complicated for me," he says — and means it.',
        cred1: 'Specialist in Implantology',
        cred2: '20+ Years Experience',
        cred3: '2nd Generation Dentist',
        cred4: '4.9★ Patient Rating',
        cred5: 'Aesthetic Dentistry',
        cred6: 'Anxious Patient Care',
        cta: 'Book Appointment with Dr. Kielhorn'
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
        desc: 'Dentists, hygienists, assistants, and coordinators — all with one goal: your well-being and a healthy, beautiful smile.'
      },
      cta: 'Meet Our Entire Team →',
      values: {
        eyebrow: 'What Makes Us Special',
        title: 'Our Values &amp; <em style="color:var(--primary);font-style:italic">Guiding Principles</em>',
        v1_title: 'Compassionate Care',
        v1_desc: 'We listen before we act. Every patient is seen as a person — not a case. Trust is built through respect and genuine interest.',
        v2_title: 'Clinical Excellence',
        v2_desc: 'Regular training for all team members and cutting-edge technology ensure the highest treatment quality — always at the forefront of science.',
        v3_title: 'Transparency & Honesty',
        v3_desc: 'We explain every treatment step clearly and provide transparent cost estimates. You decide informed — that is our promise.'
      },
      team_cta: {
        title: 'Get to Know Us in Person',
        desc: 'Book an appointment today — we look forward to welcoming you and your family.',
        phone: '04171 / 71212 — Call Now'
      }
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
      cta: 'Discover Our Practice →'
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
      r1: { name: 'Maria S.', text: 'Absolutely the best dental practice I have ever visited. Dr. Kielhorn is incredibly gentle and professional. I used to fear the dentist — not anymore!', date: 'March 2025' },
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
      address: 'Niedersachsenstraße 13a<br>21423 Winsen (Luhe)',
      phone_label: 'Phone',
      phone: '04171 / 71212',
      email_label: 'Email',
      email: 'info@zahnarzt-kielhorn-winsen.de',
      cta_page: 'Book Appointment Online →',
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
      services: { hero: { h1: 'Our Services — <em>Your Smile in the Best Hands</em>', desc: 'From prevention to aesthetic dentistry — comprehensive dental care tailored individually to you.', back: 'Back to Homepage' } },
      team:     { hero: { h1: 'Our Team — <em>Experienced, Dedicated, Compassionate</em>', desc: 'Behind every healthy smile is a team working with passion and expertise. Get to know us.', back: 'Back to Homepage' } },
      praxis:   { hero: { h1: 'Our Practice — <em>Modern, Welcoming, Trustworthy</em>', desc: 'A practice with tradition — combining modern medicine with personal care since 1980.', back: 'Back to Homepage' } },
      faq:      { hero: { h1: 'Frequently Asked Questions — <em>All Answers at a Glance</em>', desc: 'Questions about our services, treatments, or appointments? We have the answers.', back: 'Back to Homepage' } },
      contact:  { hero: { h1: 'Contact — <em>We Look Forward to Your Visit</em>', desc: 'Book an appointment or send us your questions — we are here for you.', back: 'Back to Homepage' } },
      prophylaxe:        { hero: { h1: 'Prevention — <em>Prevention Is Better than Cure</em>', desc: 'Regular professional cleaning and preventive care keep your teeth healthy for life.', back: 'All Services' } },
      implantologie:     { hero: { h1: 'Implantology — <em>Fixed Tooth Replacement Like Real Teeth</em>', desc: 'Premium implants for a permanent, natural-looking smile that lasts a lifetime.', back: 'All Services' } },
      zahnersatz:        { hero: { h1: 'Dentures — <em>Natural Replacement for Better Quality of Life</em>', desc: 'High-quality crowns, bridges, and dentures from our own in-house laboratory.', back: 'All Services' } },
      oralchirurgie:     { hero: { h1: 'Oral Surgery — <em>Gentle Surgical Procedures</em>', desc: 'From wisdom tooth removal to bone augmentation — performed with care and expertise.', back: 'All Services' } },
      kinderzahnheilkunde: { hero: { h1: "Children's Dentistry — <em>Focused on Children's Special Needs</em>", desc: 'Child-friendly dental care — playful, gentle, and completely without fear.', back: 'All Services' } },
      angstpatienten:    { hero: { h1: 'Anxious Patients — <em>With Understanding and Empathy</em>', desc: 'No pressure, no rush — we take your fears seriously and go at your own pace.', back: 'All Services' } },
      aesthetik:         { hero: { h1: 'Aesthetic Dentistry — <em>Your Radiant Smile, Our Passion</em>', desc: 'Bleaching, veneers, and smile design for your most confident, beautiful smile.', back: 'All Services' } },
      zahnerhaltung:     { hero: { h1: 'Tooth Preservation — <em>Keeping Natural Teeth Healthy</em>', desc: 'Modern, gentle methods to protect and preserve your natural teeth long-term.', back: 'All Services' } }
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
      hours: 'Öffnungszeiten',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Termin buchen'
    },
    hero: {
      tag: 'Zahnarztpraxis in Winsen (Luhe)',
      title: 'Ihr Zahnarzt in<br>Winsen (Luhe) —<br><em>Mit Herz &amp; Kompetenz</em>',
      desc: 'Moderne Zahnmedizin, persönliche Betreuung und ein Team, dem Ihr Wohlbefinden wirklich am Herzen liegt. Dr. Christopher Kielhorn und sein Team freuen sich auf Ihren Besuch.',
      cta1: 'Termin buchen',
      cta2: 'Jetzt anrufen',
      card1_title: 'Nächster Termin',
      card1_sub: 'Heute noch verfügbar',
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
      title1: 'Exzellente Qualität',
      desc1: 'Modernste zahnmedizinische Behandlungen nach neuesten Methoden.',
      title2: 'Einfühlsame Betreuung',
      desc2: 'Besonders für Angstpatienten — Ihr Komfort steht immer an erster Stelle.',
      title3: 'Moderne Technologie',
      desc3: 'Digitales Röntgen, 3D-Planung und schonende Behandlungsverfahren.',
      title4: 'Kurze Wartezeiten',
      desc4: 'Flexible Termine — auch früh morgens. Wir respektieren Ihre Zeit.'
    },
    services: {
      eyebrow: 'Was Wir Für Sie Tun',
      title: 'Unsere Leistungen in Winsen (Luhe)',
      desc: 'Von der Vorsorge bis zur ästhetischen Zahnheilkunde — wir begleiten Sie zu einem gesunden, strahlenden Lächeln.',
      more: 'Mehr erfahren →',
      svc1: { title: 'Prophylaxe & Reinigung', desc: 'Regelmäßige professionelle Zahnreinigung und Früherkennungsuntersuchungen halten Ihre Zähne lebenslang gesund.' },
      svc2: { title: 'Implantologie', desc: 'Dauerhafter Zahnersatz, der natürlich aussieht und sich anfühlt — mit hochwertigen Implantatsystemen.' },
      svc3: { title: 'Zahnersatz', desc: 'Individuell angepasste Teil- und Vollprothesen für ein natürliches Aussehen und optimalen Tragekomfort.' },
      svc4: { title: 'Oralchirurgie', desc: 'Zahnentfernungen, Weisheitszähne und chirurgische Eingriffe — schonend und professionell durchgeführt.' },
      svc5: { title: 'Kinderzahnheilkunde', desc: 'Spielerische, angstfreie Zahnpflege für Kinder — gesunde Gewohnheiten von klein auf aufbauen.' },
      svc6: { title: 'Angstpatienten', desc: 'Besondere Techniken und eine beruhigende Atmosphäre für Patienten mit Zahnarztangst.' },
      svc7: { title: 'Ästhetische Zahnheilkunde', desc: 'Veneers, Bleaching und kosmetische Korrekturen für Ihr strahlendes Lächeln.' },
      svc8: { title: 'Zahnerhaltung', desc: 'Füllungen, Wurzelbehandlungen und Inlays, um Ihre natürlichen Zähne zu erhalten und zu stärken.' },
      cta: 'Alle 8 Leistungen entdecken →',
      cta_question: 'Haben Sie Fragen zu unseren Leistungen?',
      cta_desc: 'Wir beraten Sie gerne persönlich und erstellen einen individuellen Behandlungsplan — transparent, verständlich und ohne versteckte Kosten.',
      cta_call: '04171 / 71212 — Jetzt anrufen',
      cta_faq: 'Häufige Fragen (FAQ)'
    },
    team: {
      eyebrow: 'Unser Team',
      title: 'Erfahrene Fachkräfte, die für Sie da sind',
      doctor: {
        role: 'Inhaber & Leitender Zahnarzt',
        name: 'Dr. Christopher Kielhorn',
        desc1: 'Dr. Christopher Kielhorn führt die Zahnarztpraxis in Winsen (Luhe) bereits in zweiter Generation und verbindet dabei die jahrzehntelange Tradition seines Vaters mit modernsten Behandlungsmethoden. Sein Credo: Jeder Patient verdient eine Behandlung auf höchstem Niveau — verbunden mit echter menschlicher Wärme.',
        desc2: 'Nach seinem Studium der Zahnmedizin absolvierte Dr. Kielhorn zahlreiche Fortbildungen in den Bereichen Implantologie, Ästhetische Zahnheilkunde und Angstpatientenbehandlung. Mit über 20 Jahren Berufserfahrung und einer 4,9-Sterne-Bewertung bei Google ist er einer der angesehensten Zahnärzte im Landkreis Harburg.',
        desc3: 'Er ist bekannt für seine ruhige, einfühlsame Art und die Fähigkeit, auch ängstlichen Patienten die Angst zu nehmen. "Kein Zahn und kein Patient ist mir zu kompliziert", sagt er — und meint es ernst.',
        cred1: 'Spezialist für Implantologie',
        cred2: '20+ Jahre Erfahrung',
        cred3: 'Zahnarzt in 2. Generation',
        cred4: '4,9★ Patientenbewertung',
        cred5: 'Ästhetische Zahnheilkunde',
        cred6: 'Angstpatientenbehandlung',
        cta: 'Termin bei Dr. Kielhorn buchen'
      },
      staff: {
        role_dentist: 'Zahnärztin',
        role_hygienist: 'Dentalhygienikerin',
        role_assistant: 'Zahnmedizinische Fachangestellte',
        role_reception: 'Patientenkoordinatorin',
        role_technician: 'Zahntechniker'
      },
      overview: {
        title: 'Unser 10-köpfiges Team für Sie',
        desc: 'Zahnärzte, Hygieniker, Assistenten und Koordinatoren — alle mit einem Ziel: Ihr Wohlbefinden und ein gesundes, schönes Lächeln.'
      },
      cta: 'Unser gesamtes Team kennenlernen →',
      values: {
        eyebrow: 'Was uns ausmacht',
        title: 'Unsere Werte &amp; <em style="color:var(--primary);font-style:italic">Leitgedanken</em>',
        v1_title: 'Einfühlsame Behandlung',
        v1_desc: 'Wir hören zu, bevor wir handeln. Jeder Patient wird als Mensch gesehen — nicht als Fall. Vertrauen entsteht durch Respekt und echtes Interesse.',
        v2_title: 'Fachliche Exzellenz',
        v2_desc: 'Regelmäßige Fortbildungen aller Teammitglieder und der Einsatz modernster Technik sichern höchste Behandlungsqualität — immer auf aktuellem Stand der Wissenschaft.',
        v3_title: 'Transparenz & Ehrlichkeit',
        v3_desc: 'Wir erklären jeden Behandlungsschritt verständlich und erstellen transparente Kostenpläne. Sie entscheiden informiert — das ist unser Versprechen.'
      },
      team_cta: {
        title: 'Lernen Sie uns persönlich kennen',
        desc: 'Vereinbaren Sie noch heute einen Termin — wir freuen uns darauf, Sie und Ihre Familie zu begleiten.',
        phone: '04171 / 71212 — Jetzt anrufen'
      }
    },
    practice: {
      eyebrow: 'Unsere Praxis',
      title: 'Moderne Ausstattung, Herzliche Atmosphäre',
      desc: 'Unsere Praxis verbindet modernste Zahntechnologie mit einer einladenden, angenehmen Umgebung.',
      feat1: { title: 'Digitales Röntgen', desc: '90 % weniger Strahlung als herkömmliches Röntgen' },
      feat2: { title: '3D-Planung', desc: 'Präzise Implantat- und Behandlungsplanung' },
      feat3: { title: 'Schmerzfreie Behandlung', desc: 'Neueste Anästhesie- und Sedierungsverfahren' },
      feat4: { title: 'Hygienestandards', desc: 'Zertifizierte Sterilisation und Infektionskontrolle' },
      lab_title: 'Eigenes Labor',
      quote: 'Unser Ziel sind nicht nur gesunde Zähne, sondern selbstbewusste Lächeln, die ein Leben lang halten.',
      quote_author: 'Dr. Christopher Kielhorn',
      cta: 'Praxis entdecken →'
    },
    hours: {
      eyebrow: 'Öffnungszeiten',
      title: 'Wir Sind Für Sie Da',
      mon: 'Montag',
      tue: 'Dienstag',
      wed: 'Mittwoch',
      thu: 'Donnerstag',
      fri: 'Freitag',
      sat: 'Samstag',
      sun: 'Sonntag',
      closed: 'Geschlossen',
      emergency: {
        title: 'Zahnärztlicher Notfall?',
        desc: 'Bei akuten Zahnschmerzen außerhalb unserer Öffnungszeiten rufen Sie bitte unsere Notfallnummer an oder wenden Sie sich an den zahnärztlichen Notfalldienst.',
        cta: 'Notfallnummer: 04171 / 71212'
      }
    },
    reviews: {
      eyebrow: 'Patientenbewertungen',
      title: 'Was Unsere Patienten Sagen',
      score_label: 'Basierend auf 127 Google-Bewertungen',
      r1: { name: 'Maria S.', text: 'Absolut die beste Zahnarztpraxis, die ich je besucht habe. Dr. Kielhorn ist unglaublich einfühlsam und professionell. Ich hatte früher Angst vor dem Zahnarzt — das ist jetzt vorbei!', date: 'März 2025' },
      r2: { name: 'Thomas B.', text: 'Wunderbares Team, kurze Wartezeiten und hervorragende Ergebnisse. Meine Implantate sehen völlig natürlich aus. Ich empfehle die Praxis jedem weiter.', date: 'Februar 2025' },
      r3: { name: 'Anna K.', text: 'Meine Kinder freuen sich jetzt tatsächlich auf ihre Zahnarzttermine. Das Team ist so herzlich und geduldig. Wir gehen nirgendwo anders hin.', date: 'Januar 2025' }
    },
    process: {
      eyebrow: 'Ihr Erster Besuch',
      title: 'Einfach, Schritt für Schritt',
      step1: { title: 'Online oder telefonisch buchen', desc: 'Wählen Sie einen passenden Termin über unsere Website oder rufen Sie 04171 / 71212 an.' },
      step2: { title: 'Erstberatung', desc: 'Wir hören zu, untersuchen und besprechen Ihre Zahngesundheitsziele.' },
      step3: { title: 'Behandlungsplanung', desc: 'Ein individueller, transparenter Plan, abgestimmt auf Ihre Bedürfnisse und Ihr Budget.' },
      step4: { title: 'Langfristige Betreuung', desc: 'Regelmäßige Kontrolltermine, damit Ihr Lächeln dauerhaft gesund bleibt.' }
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Wir Freuen Uns Auf Ihren Besuch',
      address_label: 'Adresse',
      address: 'Niedersachsenstraße 13a<br>21423 Winsen (Luhe)',
      phone_label: 'Telefon',
      phone: '04171 / 71212',
      email_label: 'E-Mail',
      email: 'info@zahnarzt-kielhorn-winsen.de',
      cta_page: 'Online Termin buchen →',
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
        success: 'Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.'
      }
    },
    footer: {
      tagline: 'Qualitäts-Zahnmedizin mit persönlicher Note in Winsen (Luhe).',
      nav_title: 'Navigation',
      services_title: 'Leistungen',
      legal_title: 'Rechtliches',
      links: {
        home: 'Startseite',
        services: 'Leistungen',
        team: 'Team',
        practice: 'Praxis',
        hours: 'Öffnungszeiten',
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
      services: { hero: { h1: 'Unsere Leistungen — <em>Ihr Lächeln in besten Händen</em>', desc: 'Von der Vorsorge über Implantate bis zur ästhetischen Zahnheilkunde — umfassende Zahnmedizin auf höchstem Niveau, individuell auf Sie abgestimmt.', back: 'Zurück zur Startseite' } },
      team:     { hero: { h1: 'Unser Team — <em>Erfahren, Engagiert, Einfühlsam</em>', desc: 'Hinter jedem gesunden Lächeln steckt ein Team, das mit Leidenschaft und Fachkompetenz arbeitet. Lernen Sie uns kennen.', back: 'Zurück zur Startseite' } },
      praxis:   { hero: { h1: 'Unsere Praxis — <em>Modern, Herzlich, Vertrauensvoll</em>', desc: 'Eine Praxis mit Geschichte — moderne Medizin verbunden mit persönlicher Betreuung seit 1980.', back: 'Zurück zur Startseite' } },
      faq:      { hero: { h1: 'Häufig gestellte Fragen — <em>Alle Antworten auf einen Blick</em>', desc: 'Fragen zu unseren Leistungen, Behandlungen oder Terminen? Wir haben die Antworten für Sie.', back: 'Zurück zur Startseite' } },
      contact:  { hero: { h1: 'Kontakt — <em>Wir freuen uns auf Sie</em>', desc: 'Vereinbaren Sie einen Termin oder senden Sie uns Ihre Fragen — wir sind für Sie da.', back: 'Zurück zur Startseite' } },
      prophylaxe:        { hero: { h1: 'Prophylaxe — <em>Vorbeugen ist besser als Heilen</em>', desc: 'Regelmäßige professionelle Zahnreinigung und Vorsorge für lebenslang gesunde Zähne.', back: 'Alle Leistungen' } },
      implantologie:     { hero: { h1: 'Implantologie — <em>Fester Zahnersatz wie echte Zähne</em>', desc: 'Premium-Implantate für ein dauerhaftes, natürlich aussehendes Lächeln, das ein Leben lang hält.', back: 'Alle Leistungen' } },
      zahnersatz:        { hero: { h1: 'Zahnersatz — <em>Natürlicher Ersatz für mehr Lebensqualität</em>', desc: 'Hochwertige Kronen, Brücken und Prothesen aus unserem eigenen Praxislabor.', back: 'Alle Leistungen' } },
      oralchirurgie:     { hero: { h1: 'Oralchirurgie — <em>Schonende chirurgische Eingriffe</em>', desc: 'Von der Weisheitszahnentfernung bis zum Knochenaufbau — in erfahrenen Händen.', back: 'Alle Leistungen' } },
      kinderzahnheilkunde: { hero: { h1: 'Kinderzahnheilkunde — <em>Wir konzentrieren uns auf die speziellen Bedürfnisse von Kindern</em>', desc: 'Kinderfreundliche Zahnmedizin — spielerisch, sanft und ganz ohne Angst.', back: 'Alle Leistungen' } },
      angstpatienten:    { hero: { h1: 'Angstpatienten — <em>Mit Verständnis und Einfühlungsvermögen</em>', desc: 'Kein Druck, keine Hektik — wir nehmen Ihre Ängste ernst und gehen in Ihrem Tempo vor.', back: 'Alle Leistungen' } },
      aesthetik:         { hero: { h1: 'Ästhetische Zahnheilkunde — <em>Ihr strahlendes Lächeln, unsere Leidenschaft</em>', desc: 'Bleaching, Veneers und Smile Design für Ihr schönstes, selbstbewusstes Lächeln.', back: 'Alle Leistungen' } },
      zahnerhaltung:     { hero: { h1: 'Zahnerhaltung — <em>Natürliche Zähne erhalten</em>', desc: 'Moderne, schonende Verfahren zum langfristigen Schutz und Erhalt Ihrer natürlichen Zähne.', back: 'Alle Leistungen' } }
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
const LANG_FLAG_SRCS = { en: 'https://flagcdn.com/w20/gb.png', de: 'https://flagcdn.com/w20/de.png' };
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
