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
      praxis: {
        hero: { h1: 'Our Practice — <em>Modern, Welcoming, Trustworthy</em>', desc: 'A practice with tradition — combining modern medicine with personal care since 1980.', back: 'Back to Homepage' },
        history: {
          label: 'Our History',
          h2: 'A Practice with <em>Tradition</em>',
          p1: 'Founded by Dr. Wilhelm Heinrich Kielhorn and Ingrid Schierz-Kielhorn, now passionately continued by their son Dr. Christopher Kielhorn. For over 40 years, we have been caring for patients in Winsen (Luhe) and the surrounding region.',
          p2: 'What began as a small practice in 1980 is today a modern treatment centre with its own laboratory, digital X-ray, and 3D diagnostics.',
          t1_year: '1980', t1_h3: 'Founding of the Practice', t1_p: 'Dr. Wilhelm Heinrich Kielhorn and Ingrid Schierz-Kielhorn open the dental practice in Winsen (Luhe) — with the aspiration to treat patients like friends.',
          t2_year: '1990s – 2010s', t2_h3: 'Growth &amp; Modernisation', t2_p: 'Continuous expansion: own dental laboratory, new treatment rooms, and entry into digital dentistry with state-of-the-art equipment.',
          t3_year: '2023', t3_h3: 'Handover to the 2nd Generation', t3_p: 'Dr. Christopher Kielhorn takes over the practice, combining decades of family tradition with modern treatment methods and fresh energy.',
          t4_year: 'Today', t4_h3: 'Modern Treatment Centre', t4_p: 'Digital X-ray, 3D diagnostics, own laboratory and a dedicated team — for the highest quality and genuine human warmth.'
        },
        gallery: {
          label: 'Our Facilities',
          h2: 'Modern Spaces — <em>For Your Comfort</em>',
          caption: 'Modern treatment rooms for optimal comfort — your health in the best environment'
        },
        lab: {
          label: 'Our Laboratory',
          h2: 'In-House Dental Lab — <em>Highest Quality</em>',
          p: 'We operate a modern in-house laboratory — for the highest quality and speed. Short distances mean faster results, more personalised coordination, and better fit.',
          c1_h4: 'Fast Results', c1_p: 'Adjustments and repairs done immediately, without external waiting time — we deliver when you need it.',
          c2_h4: 'High Quality', c2_p: 'Direct control and monitoring by our team — highest precision with every piece of work.',
          c3_h4: 'Individual Customisation', c3_p: 'Every prosthesis crafted exactly to your wishes and needs — for a perfect result.',
          c4_h4: 'Short Distances', c4_p: 'Direct contact between dentist and dental technician — for optimal coordination and best results.'
        },
        anfahrt: {
          label: 'How to Find Us',
          h2: 'Directions &amp; <em>Opening Hours</em>',
          addr_h3: 'Practice Address',
          parking: 'Free parking spaces directly in front of the practice',
          hours_h3: 'Opening Hours',
          mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat_sun: 'Sat / Sun', closed: 'Closed',
          btn: 'Book Appointment'
        },
        cta: {
          h2: 'Get to Know Us in Person',
          p: 'Book an appointment today — we look forward to welcoming you and your family.',
          btn1: '04171 / 71212 — Call Now',
          btn2: 'Meet Our Team'
        }
      },
      faq: {
        hero: { h1: 'Frequently Asked Questions — <em>All Answers at a Glance</em>', desc: 'Questions about our services, treatments, or appointments? We have the answers.', back: 'Back to Homepage' },
        sidebar: {
          categories: 'Categories',
          nav1: 'General', nav2: "Children's Dentistry", nav3: 'Anxious Patients',
          nav4: 'Prevention', nav5: 'Implantology', nav6: 'Aesthetics',
          box_title: 'Question not listed?', box_p: 'Simply give us a call — we\'re happy to help.'
        },
        g1: {
          title: 'General',
          q1: 'How can I make an appointment?',
          a1: '<p>You can call us on <strong>04171 / 71212</strong>. We are available: Mon, Tue, Thu 08–13 &amp; 14–18/17, Wed &amp; Fri 08–13. Alternatively, send us a message via the <a href="contact.html">contact form</a>.</p>',
          q2: 'Where is the practice? Is there parking?',
          a2: '<p>We are located at <strong>Niedersachsenstraße 13a, 21423 Winsen (Luhe)</strong>. Free parking spaces are directly in front of the practice — no need to worry about parking.</p>',
          q3: 'Which health insurance is accepted?',
          a3: '<p>We treat both publicly and privately insured patients. All major statutory health insurers are accepted. We are happy to advise you personally on cost coverage.</p>'
        },
        g2: {
          title: "Children's Dentistry",
          q1: 'From what age should my child visit the dentist?',
          a1: '<p>Ideally as soon as the first baby tooth appears — usually between the <strong>6th and 12th month</strong> of life. Early visits help your child feel comfortable at the dentist.</p>',
          q2: 'Are baby teeth really that important?',
          a2: '<p>Yes! Baby teeth are <strong>placeholders for permanent teeth</strong> and are important for speech, chewing, and jaw growth. If lost too early, permanent teeth may be misaligned.</p>',
          q3: 'How do I prepare my child for a dental visit?',
          a3: '<p>Speak positively about the dentist. Explain playfully that the dentist counts and cleans the teeth. Avoid words like "injection" or "pain". Our team is specially trained in caring for children.</p>'
        },
        g3: {
          title: 'Anxious Patients',
          q1: 'What can I do if I am very anxious about the dentist?',
          a1: '<p>Start with a <strong>consultation appointment only</strong> — without treatment. Together we will find a step-by-step approach. Dr. Kielhorn is known for his empathetic care of anxious patients.</p>',
          q2: 'Is treatment under sedation safe?',
          a2: '<p>Yes, sedation is a safe and proven method. You will be professionally monitored throughout the entire treatment. Many patients describe it as very pleasant and relaxing.</p>',
          q3: 'How long does the anaesthetic take to wear off?',
          a3: '<p>A local anaesthetic wears off after approximately <strong>2–3 hours</strong>. During this time, avoid eating to prevent accidentally injuring yourself. We will inform you of everything important beforehand.</p>'
        },
        g4: {
          title: 'Prevention',
          q1: 'How often should I come for prevention?',
          a1: '<p>Professional cleaning is recommended <strong>every 6 months</strong>. With higher risk of caries or gum disease, every 3–4 months may be advisable. We advise you individually.</p>',
          q2: 'Is professional cleaning painful?',
          a2: '<p>No, professional cleaning is <strong>generally pain-free</strong>. With sensitive teeth or inflamed gums, mild pressure may occur. Let us know — we adapt the treatment to your needs.</p>',
          q3: 'Does health insurance cover the costs?',
          a3: '<p>Many insurers subsidise prevention by <strong>30–100 euros per year</strong>. Supplementary private insurance often covers the full cost. Please ask us for details.</p>'
        },
        g5: {
          title: 'Implantology',
          q1: 'Does placing an implant hurt?',
          a1: '<p>No, the procedure is performed under <strong>local anaesthetic</strong> and is pain-free. Minor swelling may occur afterwards, subsiding within a few days. Sedation is available on request.</p>',
          q2: 'How long do implants last?',
          a2: '<p>With good oral hygiene and regular check-ups, implants can last <strong>a lifetime</strong>. Studies confirm success rates of over <strong>95% after 10 years</strong>.</p>',
          q3: 'Am I suitable for implants?',
          a3: '<p><strong>Most people</strong> can receive implants. We assess your individual situation — bone density, health, and other factors — in a comprehensive consultation. Simply book an appointment.</p>'
        },
        g6: {
          title: 'Aesthetic Dentistry',
          q1: 'How long does bleaching last?',
          a1: '<p>Depending on habits (coffee, tea, red wine, smoking), bleaching lasts <strong>1–3 years</strong>. With occasional top-up treatments, you can extend the result significantly.</p>',
          q2: 'How long do veneers last?',
          a2: '<p>With good care and regular check-ups, veneers last <strong>10–15 years or longer</strong>. Our ceramic veneers from our own laboratory are particularly durable and lifelike.</p>'
        },
        cta: {
          h2: 'Your question wasn\'t listed?',
          p: 'No problem — we are happy to answer your questions personally. Call us or send us a message.',
          btn1: '04171 / 71212 — Call Now', btn2: 'Send Message'
        }
      },
      contact: {
        hero: { h1: 'Contact — <em>We Look Forward to Your Visit</em>', desc: 'Book an appointment or send us your questions — we are here for you.', back: 'Back to Homepage' },
        info: {
          addr_h3: 'Address', phone_h3: 'Phone', hours_h3: 'Opening Hours',
          mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat_sun: 'Sat / Sun', closed: 'Closed',
          emergency_h3: 'Acute Toothache?',
          emergency_p: 'For severe pain — please call immediately. We will help you quickly and straightforwardly.',
          emergency_link: '04171 / 71212 — Call Now',
          parking: '<strong>Free parking</strong> directly in front of the practice — convenient and stress-free.'
        },
        form: {
          title: 'Send Appointment Request',
          desc: 'Fill in the form — we will get back to you as soon as possible. Fields marked with * are required.',
          success: 'Thank you! Your request has been received. We will be in touch shortly.',
          fname: 'First Name *', fname_ph: 'John',
          lname: 'Last Name *', lname_ph: 'Smith',
          phone_label: 'Phone *', phone_ph: '04171 / ...',
          email_label: 'E-Mail (optional)', email_ph: 'john@example.com',
          concern: 'Concern', concern_ph: 'Please select...',
          o1: 'Initial Examination', o2: 'Teeth Cleaning', o3: 'Implantology',
          o4: 'Dentures', o5: 'Aesthetics', o6: 'Anxious Patient', o7: 'Prevention', o8: 'Other',
          message_label: 'Message', message_ph: 'Your message...',
          privacy: 'I have read the <a href="datenschutz.html">Privacy Policy</a> and agree. *',
          submit: 'Send Request'
        },
        map: { label: 'Directions', h2: 'How to Find Us' }
      },
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
      praxis: {
        hero: { h1: 'Unsere Praxis — <em>Modern, Herzlich, Vertrauensvoll</em>', desc: 'Eine Praxis mit Geschichte — moderne Medizin verbunden mit persönlicher Betreuung seit 1980.', back: 'Zurück zur Startseite' },
        history: {
          label: 'Unsere Geschichte',
          h2: 'Eine Praxis mit <em>Tradition</em>',
          p1: 'Gegründet von Dr. Wilhelm Heinrich Kielhorn und Ingrid Schierz-Kielhorn, heute mit Herzblut weitergeführt von ihrem Sohn Dr. Christopher Kielhorn. Seit über 40 Jahren versorgen wir Patienten in Winsen (Luhe) und der gesamten Region.',
          p2: 'Was 1980 als kleine Praxis begann, ist heute ein modernes Behandlungszentrum mit eigenem Labor, digitalem Röntgen und 3D-Diagnostik.',
          t1_year: '1980', t1_h3: 'Gründung der Praxis', t1_p: 'Dr. Wilhelm Heinrich Kielhorn und Ingrid Schierz-Kielhorn eröffnen die Zahnarztpraxis in Winsen (Luhe) — mit dem Anspruch, Patienten wie Freunde zu behandeln.',
          t2_year: '1990er – 2010er', t2_h3: 'Wachstum &amp; Modernisierung', t2_p: 'Kontinuierliche Erweiterung: eigenes Dentallabor, neue Behandlungsräume und der Einstieg in die digitale Zahnmedizin mit modernsten Geräten.',
          t3_year: '2023', t3_h3: 'Übergabe an die 2. Generation', t3_p: 'Dr. Christopher Kielhorn übernimmt die Praxis und verbindet die jahrzehntelange Familientradition mit modernsten Behandlungsmethoden und frischem Elan.',
          t4_year: 'Heute', t4_h3: 'Modernes Behandlungszentrum', t4_p: 'Digitales Röntgen, 3D-Diagnostik, eigenes Labor und ein engagiertes Team — für höchste Qualität und echte menschliche Wärme.'
        },
        gallery: {
          label: 'Einrichtung',
          h2: 'Moderne Räume — <em>für Ihren Komfort</em>',
          caption: 'Moderne Behandlungsräume für optimalen Komfort — Ihre Gesundheit in bester Umgebung'
        },
        lab: {
          label: 'Unser Labor',
          h2: 'Eigenes Dentallabor — <em>höchste Qualität</em>',
          p: 'Wir betreiben ein modernes eigenes Labor — für höchste Qualität und Schnelligkeit. Kurze Wege bedeuten: schnellere Ergebnisse, persönlichere Abstimmung, bessere Passgenauigkeit.',
          c1_h4: 'Schnelle Ergebnisse', c1_p: 'Anpassungen und Reparaturen sofort, ohne externe Wartezeit — wir liefern, wenn Sie es brauchen.',
          c2_h4: 'Hohe Qualität', c2_p: 'Direkte Kontrolle und Überwachung durch unser Team — höchste Präzision bei jedem Werkstück.',
          c3_h4: 'Individuelle Anpassung', c3_p: 'Jeder Zahnersatz genau nach Ihren Wünschen und Bedürfnissen gefertigt — für ein perfektes Ergebnis.',
          c4_h4: 'Kurze Wege', c4_p: 'Direkter Kontakt zwischen Zahnarzt und Zahntechniker — für optimale Abstimmung und beste Ergebnisse.'
        },
        anfahrt: {
          label: 'So finden Sie uns',
          h2: 'Anfahrt &amp; <em>Öffnungszeiten</em>',
          addr_h3: 'Praxisadresse',
          parking: 'Kostenfreie Parkplätze direkt vor der Praxis',
          hours_h3: 'Öffnungszeiten',
          mon: 'Montag', tue: 'Dienstag', wed: 'Mittwoch', thu: 'Donnerstag', fri: 'Freitag', sat_sun: 'Sa / So', closed: 'Geschlossen',
          btn: 'Termin vereinbaren'
        },
        cta: {
          h2: 'Lernen Sie uns persönlich kennen',
          p: 'Vereinbaren Sie noch heute einen Termin — wir freuen uns darauf, Sie und Ihre Familie zu begleiten.',
          btn1: '04171 / 71212 — Jetzt anrufen',
          btn2: 'Unser Team kennenlernen'
        }
      },
      faq: {
        hero: { h1: 'Häufig gestellte Fragen — <em>Alle Antworten auf einen Blick</em>', desc: 'Fragen zu unseren Leistungen, Behandlungen oder Terminen? Wir haben die Antworten für Sie.', back: 'Zurück zur Startseite' },
        sidebar: {
          categories: 'Kategorien',
          nav1: 'Allgemein', nav2: 'Kinderzahnheilkunde', nav3: 'Angstpatienten',
          nav4: 'Prophylaxe', nav5: 'Implantologie', nav6: 'Ästhetik',
          box_title: 'Frage nicht dabei?', box_p: 'Rufen Sie uns einfach an — wir helfen gerne.'
        },
        g1: {
          title: 'Allgemein',
          q1: 'Wie kann ich einen Termin vereinbaren?',
          a1: '<p>Sie können telefonisch unter <strong>04171 / 71212</strong> anrufen. Wir sind für Sie da: Mo, Di, Do 08–13 &amp; 14–18/17 Uhr, Mi &amp; Fr 08–13 Uhr. Alternativ können Sie uns auch über das <a href="contact.html">Kontaktformular</a> eine Nachricht schicken.</p>',
          q2: 'Wo finde ich die Praxis? Gibt es Parkplätze?',
          a2: '<p>Wir befinden uns in der <strong>Niedersachsenstraße 13a, 21423 Winsen (Luhe)</strong>. Kostenfreie Parkplätze befinden sich direkt vor der Praxis — Sie müssen sich also keine Sorgen ums Parken machen.</p>',
          q3: 'Welche Krankenkassen werden akzeptiert?',
          a3: '<p>Wir behandeln sowohl gesetzlich als auch privat Versicherte. Alle großen gesetzlichen Krankenkassen werden akzeptiert. Bei Fragen zur Kostenübernahme beraten wir Sie gerne im persönlichen Gespräch.</p>'
        },
        g2: {
          title: 'Kinderzahnheilkunde',
          q1: 'Ab welchem Alter sollte mein Kind zum Zahnarzt?',
          a1: '<p>Idealerweise sobald der erste Milchzahn durchbricht — meist zwischen dem <strong>6. und 12. Lebensmonat</strong>. Frühe Besuche helfen Ihrem Kind, den Zahnarzt als vertraute und positive Umgebung kennen zu lernen.</p>',
          q2: 'Sind Milchzähne wirklich so wichtig?',
          a2: '<p>Ja! Milchzähne sind <strong>Platzhalter für die bleibenden Zähne</strong> und wichtig für Sprachentwicklung, Kauen und Kieferwachstum. Werden Milchzähne frühzeitig verloren, können sich bleibende Zähne falsch positionieren.</p>',
          q3: 'Wie bereite ich mein Kind auf den Zahnarztbesuch vor?',
          a3: '<p>Sprechen Sie positiv über den Zahnarzt. Erklären Sie spielerisch, dass der Zahnarzt die Zähne zählt und sauber macht. Vermeiden Sie Wörter wie "Spritze" oder "Schmerz". Unser Team ist speziell auf die Betreuung von Kindern eingestellt.</p>'
        },
        g3: {
          title: 'Angstpatienten',
          q1: 'Was kann ich tun, wenn ich große Angst vor dem Zahnarzt habe?',
          a1: '<p>Vereinbaren Sie zunächst einen <strong>Termin nur für ein Gespräch</strong> — ohne Behandlung. Gemeinsam finden wir einen Weg Schritt für Schritt. Dr. Kielhorn ist bekannt für seinen einfühlsamen Umgang mit ängstlichen Patienten.</p>',
          q2: 'Ist eine Behandlung unter Sedierung sicher?',
          a2: '<p>Ja, Sedierung ist eine sichere und erprobte Methode. Sie werden während der gesamten Behandlung professionell überwacht. Viele Patienten beschreiben die Sedierung als sehr angenehm und entspannend.</p>',
          q3: 'Wie lange dauert es, bis die Betäubung nachlässt?',
          a3: '<p>Eine lokale Betäubung lässt nach etwa <strong>2–3 Stunden</strong> nach. In dieser Zeit sollten Sie möglichst nichts essen, um sich nicht unbeabsichtigt zu verletzen. Wir informieren Sie vor der Behandlung über alles Wichtige.</p>'
        },
        g4: {
          title: 'Prophylaxe',
          q1: 'Wie oft sollte ich zur Prophylaxe?',
          a1: '<p>Empfohlen wird eine professionelle Zahnreinigung <strong>alle 6 Monate</strong>. Bei erhöhtem Karies- oder Parodontitisrisiko kann eine Behandlung alle 3–4 Monate sinnvoll sein. Wir beraten Sie individuell.</p>',
          q2: 'Ist die Prophylaxe schmerzhaft?',
          a2: '<p>Nein, die professionelle Zahnreinigung ist <strong>in der Regel schmerzfrei</strong>. Bei empfindlichen Zähnen oder entzündetem Zahnfleisch kann ein leichtes Druckgefühl entstehen. Sprechen Sie uns an — wir passen die Behandlung an Ihre Bedürfnisse an.</p>',
          q3: 'Übernimmt die Krankenkasse die Kosten?',
          a3: '<p>Viele Krankenkassen bezuschussen die Prophylaxe mit <strong>30–100 Euro pro Jahr</strong>. Die genaue Übernahme hängt von Ihrer Kasse ab. Private Zusatzversicherungen übernehmen die Kosten häufig vollständig. Sprechen Sie uns gerne an.</p>'
        },
        g5: {
          title: 'Implantologie',
          q1: 'Tut das Setzen eines Implantats weh?',
          a1: '<p>Nein, der Eingriff erfolgt unter <strong>örtlicher Betäubung</strong> und ist schmerzfrei. Nach dem Eingriff kann eine leichte Schwellung auftreten, die sich innerhalb weniger Tage zurückbildet. Auf Wunsch bieten wir auch eine Sedierung an.</p>',
          q2: 'Wie lange halten Implantate?',
          a2: '<p>Bei guter Mundhygiene und regelmäßigen Kontrollen können Implantate <strong>ein Leben lang halten</strong>. Wissenschaftliche Studien belegen Erfolgsraten von über <strong>95% nach 10 Jahren</strong>.</p>',
          q3: 'Bin ich für Implantate geeignet?',
          a3: '<p>Die <strong>meisten Menschen</strong> können Implantate erhalten. Wir prüfen Ihre individuelle Situation — Knochendichte, allgemeiner Gesundheitszustand und weitere Faktoren — in einem umfassenden Beratungsgespräch. Vereinbaren Sie einfach einen Termin.</p>'
        },
        g6: {
          title: 'Ästhetische Zahnheilkunde',
          q1: 'Wie lange hält ein Bleaching?',
          a1: '<p>Je nach Lebensgewohnheiten (Kaffee, Tee, Rotwein, Rauchen) hält ein Bleaching <strong>1–3 Jahre</strong>. Mit gelegentlichen Auffrischungsbehandlungen können Sie das Ergebnis deutlich verlängern.</p>',
          q2: 'Wie lange halten Veneers?',
          a2: '<p>Bei guter Pflege und regelmäßigen Kontrollen halten Veneers <strong>10–15 Jahre oder länger</strong>. Unsere hochwertigen Keramikveneers aus dem eigenen Labor sind besonders langlebig und naturgetreu.</p>'
        },
        cta: {
          h2: 'Ihre Frage war nicht dabei?',
          p: 'Kein Problem — wir beantworten Ihre Fragen gerne persönlich. Rufen Sie uns an oder schicken Sie uns eine Nachricht.',
          btn1: '04171 / 71212 — Jetzt anrufen', btn2: 'Nachricht senden'
        }
      },
      contact: {
        hero: { h1: 'Kontakt — <em>Wir freuen uns auf Sie</em>', desc: 'Vereinbaren Sie einen Termin oder senden Sie uns Ihre Fragen — wir sind für Sie da.', back: 'Zurück zur Startseite' },
        info: {
          addr_h3: 'Adresse', phone_h3: 'Telefon', hours_h3: 'Sprechzeiten',
          mon: 'Montag', tue: 'Dienstag', wed: 'Mittwoch', thu: 'Donnerstag', fri: 'Freitag', sat_sun: 'Sa / So', closed: 'Geschlossen',
          emergency_h3: 'Akute Zahnschmerzen?',
          emergency_p: 'Bei starken Schmerzen — bitte sofort anrufen. Wir helfen Ihnen schnell und unkompliziert.',
          emergency_link: '04171 / 71212 — Jetzt anrufen',
          parking: '<strong>Kostenfreie Parkplätze</strong> direkt vor der Praxis — bequem und ohne Parkstress.'
        },
        form: {
          title: 'Terminanfrage senden',
          desc: 'Füllen Sie das Formular aus — wir melden uns schnellstmöglich bei Ihnen. Felder mit * sind Pflichtfelder.',
          success: 'Vielen Dank! Ihre Anfrage ist bei uns eingegangen. Wir melden uns in Kürze.',
          fname: 'Vorname *', fname_ph: 'Max',
          lname: 'Nachname *', lname_ph: 'Mustermann',
          phone_label: 'Telefon *', phone_ph: '04171 / ...',
          email_label: 'E-Mail (optional)', email_ph: 'max@beispiel.de',
          concern: 'Anliegen', concern_ph: 'Bitte auswählen...',
          o1: 'Erstuntersuchung', o2: 'Zahnreinigung', o3: 'Implantologie',
          o4: 'Zahnersatz', o5: 'Ästhetik', o6: 'Angstpatient', o7: 'Prophylaxe', o8: 'Sonstiges',
          message_label: 'Nachricht', message_ph: 'Ihre Nachricht...',
          privacy: 'Ich habe die <a href="datenschutz.html">Datenschutzerklärung</a> gelesen und stimme zu. *',
          submit: 'Anfrage absenden'
        },
        map: { label: 'Anfahrt', h2: 'So finden Sie uns' }
      },
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
