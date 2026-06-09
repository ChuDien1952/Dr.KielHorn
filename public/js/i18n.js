/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   i18n.js — Bilingual: English + German
   Kielhorn Dental Practice Website
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

const TRANSLATIONS = {
  en: {
    header: {
      subtitle: 'Zahnarztpraxis • Winsen (Luhe)'
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
      desc: 'Modern dentistry, personal care, and a team that truly cares about your well-being. Christopher Kielhorn and his team look forward to welcoming you.',
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
        role: 'Dentist & Practice Owner',
        name: 'Christopher Kielhorn',
        desc1: 'Christopher Kielhorn is a dentist and practice owner in Winsen (Luhe), continuing a family tradition of dental excellence into the second generation. He holds a DMD (Doctor of Dental Medicine) and has completed advanced curricula in Periodontology and Endodontology.',
        desc2: 'With over 20 years of experience, he combines clinical precision with genuine patient empathy. His specialty training in implantology, aesthetic dentistry, and anxious patient care makes him one of the most respected dentists in the Harburg district, with a 4.9-star Google rating.',
        desc3: 'He is known for his calm, empathetic manner and his ability to put even anxious patients at ease. "No tooth and no patient is too complicated for me," he says — and means it.',
        cred1: 'Specialist in Implantology',
        cred2: '20+ Years Experience',
        cred3: '2nd Generation Dentist',
        cred4: '4.9★ Patient Rating',
        cred5: 'Aesthetic Dentistry',
        cred6: 'Anxious Patient Care',
        cred7: 'DMD · Doctor of Dental Medicine',
        cred8: 'Curriculum: Periodontology & Endodontology',
        cta: 'Book an Appointment'
      },
      staff: {
        role_dentist: 'Associate Dentist',
        role_hygienist: 'Dental Hygienist',
        role_assistant: 'Dental Assistant',
        role_reception: 'Patient Coordinator',
        role_technician: 'Dental Technician'
      },
      overview: {
        title: 'Our Team Ready for You',
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
      quote_author: 'Christopher Kielhorn',
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
      r1: { name: 'Maria S.', text: 'Absolutely the best dental practice I have ever visited. Kielhorn is incredibly gentle and professional. I used to fear the dentist — not anymore!', date: 'March 2025' },
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
        anxiety: 'Anxious Patients',
        aesthetics: 'Aesthetics',
        preservation: 'Tooth Preservation'
      },
      legal_links: {
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
        accessibility: 'Accessibility'
      },
      copyright: '© 2025 Zahnarztpraxis Kielhorn. All rights reserved.'
    },
    svc_sidebar: {
      call: 'Call Now',
      msg: 'Send Message',
      hours_h3: 'Opening Hours',
      related_h3: 'Related Services',
      more_h3: 'More Services',
      mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday',
      sat_sun: 'Sat / Sun', closed: 'Closed',
      img_caption: 'Dental Practice Kielhorn • Winsen (Luhe)'
    },
    svc_names: {
      prophylaxe: 'Prevention', prophylaxe_full: 'Prevention & Dental Cleaning',
      implantologie: 'Implantology', zahnersatz: 'Dentures', oralchirurgie: 'Oral Surgery',
      kinderzahnheilkunde: "Children's Dentistry", angstpatienten: 'Anxious Patients',
      aesthetik: 'Aesthetics', aesthetik_full: 'Aesthetic Dentistry',
      zahnerhaltung: 'Tooth Preservation'
    },
    pages: {
      services: { hero: { h1: 'Our Services — <em>Your Smile in the Best Hands</em>', desc: 'From prevention to aesthetic dentistry — comprehensive dental care tailored individually to you.', back: 'Back to Homepage' } },
      team:     { hero: { h1: 'Our Team — <em>Experienced, Dedicated, Compassionate</em>', desc: 'Behind every healthy smile is a team working with passion and expertise. Get to know us.', back: 'Back to Homepage' } },
      praxis: {
        hero: { h1: 'Our Practice — <em>Modern, Welcoming, Trustworthy</em>', desc: 'A practice with tradition — combining modern medicine with personal care since 1980.', back: 'Back to Homepage' },
        history: {
          label: 'Our History',
          h2: 'A Practice with <em>Tradition</em>',
          p1: 'Founded by Wilhelm Heinrich Kielhorn and Ingrid Schierz-Kielhorn, now passionately continued by their son Christopher Kielhorn. For over 40 years, we have been caring for patients in Winsen (Luhe) and the surrounding region.',
          p2: 'What began as a small practice in 1980 is today a modern treatment centre with its own laboratory, digital X-ray, and 3D diagnostics.',
          t1_year: '1980', t1_h3: 'Founding of the Practice', t1_p: 'Wilhelm Heinrich Kielhorn and Ingrid Schierz-Kielhorn open the dental practice in Winsen (Luhe) — with the aspiration to treat patients like friends.',
          t2_year: '1990s – 2010s', t2_h3: 'Growth &amp; Modernisation', t2_p: 'Continuous expansion: own dental laboratory, new treatment rooms, and entry into digital dentistry with state-of-the-art equipment.',
          t3_year: '2023', t3_h3: 'Handover to the 2nd Generation', t3_p: 'Christopher Kielhorn takes over the practice, combining decades of family tradition with modern treatment methods and fresh energy.',
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
          a1: '<p>Start with a <strong>consultation appointment only</strong> — without treatment. Together we will find a step-by-step approach. Kielhorn is known for his empathetic care of anxious patients.</p>',
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
      prophylaxe: {
        hero: { h1: 'Prevention — <em>Prevention Is Better than Cure</em>', desc: 'Regular professional cleaning and preventive care keep your teeth healthy for life.', back: 'All Services' },
        sidebar: { card1_h3: 'Book Appointment', card1_p: 'Would you like to book an appointment for your professional dental cleaning? We look forward to seeing you!', card3_h3: 'More Services' },
        content: {
          h2_1: 'Why professional dental cleaning is so important',
          p1: 'Even with careful daily oral hygiene, plaque and tartar can form in hard-to-reach areas. These cannot be completely removed with ordinary toothbrushes and floss. Only a professional dental cleaning (PDC) can thoroughly eliminate these stubborn deposits and benefit your oral health in the long term.',
          p2: 'Scientific studies confirm that regular PDC significantly reduces the risk of tooth decay, periodontitis and tooth loss. It is an investment in your dental health — and therefore in your quality of life.',
          box: '<strong>Recommendation:</strong> For most patients, we recommend professional dental cleaning twice a year. With increased risk of cavities or periodontitis, more frequent treatment may be advisable.',
          h2_2: 'What to expect at the PDC?',
          p3: 'Our experienced dental assistants perform the professional dental cleaning gently and thoroughly. The procedure:',
          s1_h4: 'Assessment', s1_p: 'First, the current condition of your teeth and gums is evaluated.',
          s2_h4: 'Tartar removal', s2_p: 'Using ultrasound and special hand instruments, tartar is gently removed above and below the gum line.',
          s3_h4: 'Polishing', s3_p: 'All tooth surfaces are polished with a special paste — so fewer deposits will adhere in the future.',
          s4_h4: 'Fluoride treatment', s4_p: 'Finally, the teeth are treated with fluoride gel or varnish to strengthen the enamel.',
          s5_h4: 'Oral hygiene advice', s5_p: 'You receive individual tips for your home oral hygiene — toothbrush, floss, mouthwash.',
          h2_3: 'Prevention against periodontitis',
          p4: 'Periodontitis is an inflammation of the periodontium and one of the most common causes of tooth loss in adults. It is caused by bacteria in dental plaque attacking the gums and bone. Regular prophylaxis is the most effective prevention.',
          li1: 'Early detection of gum disease', li2: 'Reduction of caries-causing bacteria', li3: 'Prevention of bad breath',
          li4: 'Preservation and improvement of dental aesthetics', li5: 'Systemic health benefits (heart, diabetes)',
          h2_4: 'Costs and coverage',
          p5: 'Professional dental cleaning is a private service generally not covered by statutory health insurance. Costs vary depending on the effort involved. Many supplementary private insurance policies cover costs fully or partially. Please ask us — we will advise you transparently about the costs.'
        },
        benefits: {
          h2: 'Why Prevention at Kielhorn?',
          b1_h4: 'Long-Term Health', b1_p: 'Regular PDC demonstrably reduces the risk of tooth decay and periodontitis, protecting your teeth for life.',
          b2_h4: 'Radiant White Teeth', b2_p: 'Tartar and stains are thoroughly removed — for a fresh, whiter smile after every session.',
          b3_h4: 'Save Money', b3_p: 'Prevention is cheaper than treatment. A PDC costs a fraction of an elaborate periodontitis therapy.'
        },
        faq: {
          h2: 'Frequently Asked Questions about Prevention',
          q1: 'How often should I have professional dental cleaning?', a1: 'For most patients we recommend twice a year. With increased risk (smokers, diabetics, periodontitis patients) more frequent treatment — up to 4 times a year — may be advisable. We advise you individually.',
          q2: 'Is the PDC painful?', a2: 'Professional dental cleaning is generally not painful. With sensitive teeth or inflamed gums there may be slight discomfort — please talk to us and we will adjust the treatment accordingly.',
          q3: 'Does health insurance cover the costs?', a3: 'Statutory health insurance generally does not cover PDC. However, many supplementary private insurance policies cover the costs fully or partially. Most dental supplementary insurances cover 2 PDC sessions per year.',
          q4: 'How long does a PDC take?', a4: 'A professional dental cleaning takes 45 to 90 minutes depending on the effort. At the first appointment we take extra time to get to know your individual oral situation.'
        }
      },
      implantologie: {
        hero: { h1: 'Implantology — <em>Fixed Tooth Replacement Like Real Teeth</em>', desc: 'Premium implants for a permanent, natural-looking smile that lasts a lifetime.', back: 'All Services' },
        sidebar: { card1_h3: 'Consultation Appointment', card1_p: 'Get advice without obligation — we will clarify whether implants are suitable for you.', card3_h3: 'More Services' },
        content: {
          h2_1: 'What are dental implants?',
          p1: 'A dental implant is an artificial tooth root made of biocompatible titanium, surgically inserted into the jawbone. A crown, bridge or prosthesis is then attached — permanently and as stable as a natural tooth.',
          p2: 'Unlike conventional bridges, implants do not require healthy neighbouring teeth to be ground down. And unlike a removable denture, the implant sits firmly in the bone and simultaneously prevents bone loss after tooth loss.',
          box: '<strong>Kielhorn specialises in implantology</strong> and has been successfully placing premium implant systems for over 15 years. Scientific studies show success rates of over 95% after 10 years.',
          h2_2: 'The implant procedure step by step',
          s1_h4: 'Diagnostics and planning', s1_p: '3D X-ray (DVT) and digital planning of the implant. Assessment of bone volume and quality.',
          s2_h4: 'Implantation (outpatient)', s2_p: 'The titanium implant is placed pain-free in the jaw under local anaesthesia. The procedure takes approx. 30–60 minutes.',
          s3_h4: 'Healing phase', s3_p: 'The implant fuses with the jawbone in approx. 8–16 weeks (osseointegration). A temporary restoration maintains aesthetics.',
          s4_h4: 'Abutment and crown', s4_p: 'After healing, an abutment is attached and the individual ceramic crown is placed — perfectly matched to your other teeth.',
          h2_3: 'Materials used',
          p3: 'We use exclusively CE-certified implants from renowned manufacturers (e.g. Straumann, Nobel Biocare, Camlog). The crowns are made from high-quality all-ceramic material — completely metal-free, biocompatible and aesthetically pleasing.',
          li1: 'Titanium implants (optimised for osseointegration)', li2: 'Zirconium oxide ceramic crowns (metal-free alternative possible)',
          li3: 'CAD/CAM-milled precision work', li4: 'Life expectancy 20+ years with good care',
          h2_4: 'Who is suitable for implants?',
          p4: 'Implants can be placed at any age with healthy bone and good general health. Prerequisites are sufficient bone volume, healthy gums and the absence of serious systemic diseases. If bone has been lost, bone augmentation may be necessary — we will advise you individually.',
          h2_5: 'Aftercare and longevity',
          p5: 'Implants require the same care as natural teeth: regular brushing, flossing and professional dental cleaning. With good care, implants last a lifetime. We offer regular implant recall appointments.'
        },
        benefits: {
          h2: 'Why Implants at Kielhorn?',
          b1_h4: 'Natural Appearance', b1_p: 'Ceramic crowns on implants are virtually indistinguishable from real teeth — in shape, colour and light refraction.',
          b2_h4: '20+ Years Durability', b2_p: 'With good care, implants last a lifetime — scientific studies show success rates of over 95% after 10 years.',
          b3_h4: 'Preserve Bone', b3_p: 'The implant stimulates the jaw like a natural tooth root, preventing bone loss after tooth extraction.'
        },
        faq: {
          h2: 'Frequently Asked Questions about Implantology',
          q1: 'Am I suitable for an implant?', a1: 'Most adults in good general health are suitable candidates. Prerequisites are sufficient jawbone, healthy gums and the absence of uncontrolled diabetes or blood clotting disorders. We clarify your suitability in a free consultation.',
          q2: 'Is the implantation painful?', a2: 'The procedure itself is carried out under local anaesthesia and is virtually pain-free. After the anaesthesia wears off there may be mild discomfort, which is generally well managed with over-the-counter pain medication. Most patients report it was considerably more pleasant than expected.',
          q3: 'How long does the entire treatment take?', a3: 'From implantation to the final crown it generally takes 3–6 months. The healing phase alone is 8–16 weeks. During this time you wear a temporary restoration. In cases of good bone, immediate restoration is sometimes possible — we advise you individually.',
          q4: 'What are the costs and what does insurance cover?', a4: 'Statutory insurance pays a fixed subsidy for the tooth replacement (crown), not for the implant itself. The implant costs are to be paid privately. We prepare a detailed treatment and cost plan and inform you about possible financing options.'
        }
      },
      zahnersatz: {
        hero: { h1: 'Dentures — <em>Natural Replacement for Better Quality of Life</em>', desc: 'High-quality crowns, bridges, and dentures from our own in-house laboratory.', back: 'All Services' },
        sidebar: { card1_h3: 'Book Appointment', card1_p: 'We will advise you comprehensively and create an individual treatment plan.', card3_h3: 'Related Services' },
        content: {
          h2_1: 'Your denture options',
          p1: 'Tooth loss is not uncommon and can have various causes — decay, periodontitis, accidents or natural ageing. Modern dentures are designed to be virtually indistinguishable from real teeth while fully restoring chewing function.',
          h3_1: 'Fixed dentures',
          p2: 'Fixed dentures include crowns, bridges and implant-supported constructions. They remain permanently in the mouth, are cared for like natural teeth and offer maximum wearing comfort.',
          li1_1: 'All-ceramic or ceramic-metal crowns', li1_2: 'Bridges to close gaps (1–3 missing teeth)',
          li1_3: 'Implant-supported crowns and bridges', li1_4: 'No restrictions when eating or speaking',
          h3_2: 'Removable dentures',
          p3: 'Dentures offer a proven and cost-effective solution for greater tooth loss. Modern dentures fit more securely and look more natural than ever before.',
          li2_1: 'Partial dentures (clasp or telescopic dentures)', li2_2: 'Full dentures for complete tooth loss',
          li2_3: 'Implant-supported dentures for maximum retention', li2_4: 'Individually fitted to your jaw shape',
          box: '<strong>Individual consultation:</strong> Every situation is unique. We discuss all options together — transparently regarding costs, comfort and longevity.',
          h2_2: 'The treatment procedure',
          s1_h4: 'Initial examination and consultation', s1_p: 'Examination, X-ray, discussion of options and creation of a cost plan.',
          s2_h4: 'Impression / Scan', s2_p: 'Digital impression for precise laboratory fabrication or conventional impression.',
          s3_h4: 'Try-in and adjustment', s3_p: 'Trial fitting of the denture, individual adjustments for optimal fit.',
          s4_h4: 'Fitting and aftercare', s4_p: 'Final fitting with instructions for care and follow-up appointments.',
          h2_3: 'Caring for your dentures',
          p4: 'The same care recommendations apply for fixed dentures as for natural teeth. Removable dentures are cleaned daily with a special brush and stored in water overnight. Regular check-ups are important as the jaw can change over time and dentures may need adjustment.'
        },
        benefits: {
          h2: 'Your Advantages With Us',
          b1_h4: 'Custom-Made', b1_p: 'Every denture is individually made for you — perfectly matched to your tooth colour, shape and jaw anatomy.',
          b2_h4: 'Premium Materials', b2_p: 'We exclusively use all-ceramic and certified materials from German partner laboratories for the highest quality and durability.',
          b3_h4: 'Fast Provision', b3_p: 'Thanks to modern CAD/CAM technology and efficiently scheduled appointments, you receive your denture as quickly as possible.'
        },
        faq: {
          h2: 'Frequently Asked Questions about Dentures',
          q1: 'When do I need a crown and when a bridge?', a1: 'A crown is used when a single tooth is severely damaged but the root can still be preserved. A bridge closes a gap between two healthy teeth that serve as pillars. If several teeth are affected or the gap is too large, an implant or denture may be more appropriate. We advise you individually.',
          q2: 'How long does high-quality denture work last?', a2: 'All-ceramic crowns last 15–20 years or longer with good care. Bridges have a similar life expectancy. Removable dentures should be checked every 5–8 years and adjusted or replaced if necessary, as the jaw changes over time. Regular check-ups are essential.',
          q3: 'Must I remove the denture at night?', a3: 'Removable dentures should be taken out at night for sleeping and cleaning. This protects the gums and gives the tissue a rest. Fixed dentures or implant-supported dentures remain permanently in the mouth.'
        }
      },
      oralchirurgie: {
        hero: { h1: 'Oral Surgery — <em>Gentle Surgical Procedures</em>', desc: 'From wisdom tooth removal to bone augmentation — performed with care and expertise.', back: 'All Services' },
        sidebar: { card1_h3: 'Book Appointment', card1_p: 'For toothache or acute need, please contact us promptly.', card3_h3: 'Related Services' },
        content: {
          h2_1: 'Our oral surgical services',
          p1: 'Oral surgery deals with surgical procedures in the area of the mouth, teeth and jawbone. All procedures are performed on an outpatient basis in our practice under local anaesthesia — safe, gentle and largely pain-free.',
          h3_1: 'Tooth extraction', p2: 'Sometimes tooth extraction is unavoidable — for example in severe decay, advanced periodontitis or for orthodontic preparation. We perform extractions as gently as possible to protect surrounding tissue.',
          h3_2: 'Wisdom tooth removal',
          p3: 'Wisdom teeth frequently cause problems: lack of space, inflammation or misalignment. Surgical removal is one of the most common outpatient procedures in dentistry and is in experienced hands with us.',
          li1: 'Complete pre-operative diagnostics (panoramic X-ray)',
          li2: 'Local anaesthesia — nitrous oxide sedation also available on request',
          li3: 'Gentle surgical technique with minimal tissue loss',
          li4: 'Wound care and suture for optimal healing',
          h3_3: 'Surgical periodontitis treatment', p4: 'In advanced periodontitis, surgical measures may be necessary to clean deep gum pockets and stabilise the periodontium. Flap operations are performed precisely and with minimal tissue trauma.',
          h3_4: 'Bone augmentation', p5: 'Sufficient bone volume is necessary for implant placement. Where bone has been lost, we can create the prerequisite for a long-term stable implant using modern augmentation techniques.',
          box: '<strong>Important:</strong> All surgical procedures are carried out under sterile conditions in our modern treatment room. We use exclusively certified materials and instruments.',
          h2_2: 'Aftercare and healing',
          p6: 'After oral surgical procedures, we provide you with detailed recommendations for the healing phase, including diet, oral care, physical rest and pain management. We are always available if questions arise after the procedure.',
          li2_1: 'No hard or hot foods in the first 24 hours', li2_2: 'Cool the operated area in case of swelling',
          li2_3: 'Avoid physical exertion for 1–2 days', li2_4: 'Check-up appointment approx. 7–10 days after the procedure',
          li2_5: 'Contact us immediately in case of severe pain or bleeding'
        },
        benefits: {
          h2: 'Why Oral Surgery at Kielhorn?',
          b1_h4: 'Gentle Technique', b1_p: 'We use minimally invasive methods, state-of-the-art instruments and magnifying loupes for precise, tissue-preserving work.',
          b2_h4: 'Effective Anaesthesia', b2_p: 'Finest needles, pre-applied numbing gel and modern anaesthetics — we only begin when you genuinely feel nothing.',
          b3_h4: 'Aftercare Included', b3_p: 'You receive comprehensive written aftercare instructions and a check-up appointment — we do not leave you alone after the procedure.'
        },
        faq: {
          h2: 'Frequently Asked Questions about Oral Surgery',
          q1: 'How long does healing take after a tooth extraction?', a1: 'The gum generally closes after 1–2 weeks. Complete bone healing takes 2–3 months. In the first few days there may be slight swelling and pain, managed with pain medication and cooling. Recovery time is somewhat longer after wisdom tooth surgery.',
          q2: 'Do all wisdom teeth need to be removed?', a2: 'No — not every wisdom tooth needs to be removed. If it has fully erupted, can be cleaned well and causes no problems, it can be left in place. We only recommend removal for specific problems: lack of space, inflammation, caries risk or pressure pain on adjacent teeth.',
          q3: 'What can I eat after the procedure?', a3: 'In the first 24 hours you should only eat soft, lukewarm foods: yoghurt, soup, porridge, banana. Avoid hard, crumbly or very hot foods. No alcohol or nicotine in the first few days. From day 3 onwards you can gradually normalise your diet.'
        }
      },
      kinderzahnheilkunde: {
        hero: { h1: "Children's Dentistry — <em>Focused on Children's Special Needs</em>", desc: 'Child-friendly dental care — playful, gentle, and completely without fear.', back: 'All Services' },
        sidebar: { card1_h3: 'Appointment for Your Child', card1_p: 'Book an appointment now — we look forward to welcoming your little patients!', card3_h3: 'More Services' },
        content: {
          h2_1: 'When should the first dentist visit be?',
          p1: 'The first dental visit is recommended when the first milk tooth appears — already in the first year of life. This first "getting to know you" appointment gently introduces the child to the practice atmosphere without any treatment.',
          p2: 'Regular visits every six months help to detect tooth decay early and gradually accustom the child to dental treatment.',
          box: '<strong>Our team is specially trained</strong> in dealing with children of all age groups — from infants to teenagers. We take the time that every child needs.',
          h2_2: 'Our services for children',
          h3_1: 'Preventive examinations', p3: 'Statutory health insurance covers regular preventive examinations (FU1–FU9) for children and young people up to 18. We check teeth, jaw and oral mucosa for age-appropriate development.',
          h3_2: 'Professional dental cleaning for children', p4: 'Child-friendly dental cleaning with age-appropriate instruments, flavoured pastes and lots of praise. We explain methods playfully and involve children actively.',
          h3_3: 'Fluoride treatment', p5: 'Fluoride strengthens the enamel and protects against tooth decay. We apply fluoride varnish after each cleaning — particularly effective for milk teeth and newly erupted permanent teeth.',
          h3_4: 'Fissure sealant', p6: 'The deep grooves of the back teeth are particularly prone to decay. Sealing with a transparent plastic sealant closes these areas and significantly reduces the risk of cavities. The procedure is pain-free and takes only a few minutes.',
          h3_5: 'Anxiety management for children', p7: 'For particularly anxious children, we offer special calming and distraction strategies. The Tell-Show-Do method helps to build trust. Treatment can also be performed under nitrous oxide sedation on request.',
          h2_3: 'Tips for parents',
          li1: 'Talk positively about the dentist at home', li2: 'Come along to the first appointment and stay if needed',
          li3: 'Start brushing with the first tooth', li4: 'Use age-appropriate toothpaste with appropriate fluoride content',
          li5: 'Reduce sugary drinks and snacks', li6: 'Praise your child after every dental visit'
        },
        benefits: {
          h2: 'Our Promise for Your Child',
          b1_h4: 'Child-Friendly', b1_p: 'Our practice is set up for children: friendly atmosphere, toys in the waiting area and a team that loves children.',
          b2_h4: 'Fear-Free', b2_p: 'Tell-Show-Do, laughing gas sedation and lots of patience: we work so that no child develops a fear of the dentist.',
          b3_h4: 'Learn Early', b3_p: 'Children who have positive dental experiences early take better care of their teeth and avoid anxiety in adulthood.'
        },
        faq: {
          h2: "Frequently Asked Questions about Children's Dentistry",
          q1: 'From what age should children visit the dentist?', a1: 'The first visit is recommended with the eruption of the first milk tooth — at about 6–12 months. This first appointment is a getting-to-know-you visit. From the age of 2, half-yearly check-ups are recommended. Statutory insurance pays for half-yearly preventive care from the age of 3.',
          q2: 'How do I prepare my child for the dental visit?', a2: 'Talk positively about the dentist at home — no horror stories! Explain that the dentist helps teeth stay healthy. Play "dentist" at home to make the situation familiar. Avoid words like "needle" or "drilling". Bring a favourite toy or cuddly animal.',
          q3: 'Do milk teeth need treatment if they fall out anyway?', a3: 'Yes, absolutely! Milk teeth are placeholders for the permanent teeth. Decayed milk teeth can damage the permanent teeth and cause misalignment. Decay can also cause pain, make chewing difficult and create negative dental experiences. Healthy milk teeth are the foundation for healthy permanent teeth.'
        }
      },
      angstpatienten: {
        hero: { h1: 'Anxious Patients — <em>With Understanding and Empathy</em>', desc: 'No pressure, no rush — we take your fears seriously and go at your own pace.', back: 'All Services' },
        sidebar: { card1_h3: 'Take Courage Now', card1_p: 'The first step is the hardest — we will guide you. Give us a call.', card3_h3: 'More Services' },
        content: {
          h2_1: 'You are not alone',
          p1: 'Studies show that around 60% of all people have mild to severe dental anxiety. Many avoid the dentist for years — which worsens the situation in the long term. We understand this and do not judge. Instead, we create an environment where you feel safe and understood.',
          box: '<strong>"You set the pace."</strong> Nothing happens without your consent at our practice. You can take a break or pause the treatment at any time — an agreed hand signal is all you need.',
          h2_2: 'How we handle your anxiety',
          h3_1: 'In-depth preliminary consultation', p2: 'Before we even pick up an instrument, we have a calm, in-depth conversation. We listen, ask questions and explain every step of the planned treatment. Transparency creates trust.',
          h3_2: 'Calm atmosphere', p3: 'Our treatment rooms are deliberately designed to create a relaxed atmosphere: subdued lighting, quiet surroundings, no unnecessary noise. We can play your favourite music on request.',
          h3_3: 'Tell-Show-Do method', p4: 'Every treatment is first explained (Tell), then demonstrated (Show), before it is performed (Do). This proven method helps to demystify the unknown and build trust.',
          h3_4: 'Nitrous oxide sedation',
          p5: 'Nitrous oxide is a proven, safe method for reducing anxiety and pain during dental treatments. You remain awake and responsive, but feel relaxed and calm. The effect only lasts during inhalation — after the procedure you can drive home normally.',
          li1: 'Safe for children and adults', li2: 'No after-effects — rapid dissipation',
          li3: 'Can be combined with all treatments', li4: 'Supplementary to local anaesthesia',
          h3_5: 'Local anaesthesia — effective and gentle', p6: 'Modern local anaesthetics work quickly and reliably. We use the finest needles and apply an anaesthetic gel beforehand, so the injection is barely noticeable. We only begin treatment when you truly feel nothing.',
          h2_3: 'What to expect',
          s1_h4: 'Initial contact by phone', s1_p: 'Simply call us and tell us that you are anxious about the dentist. We will plan the appointment accordingly.',
          s2_h4: 'Getting-to-know-you appointment without treatment', s2_p: 'At the first appointment, we only have a conversation. No instruments, no pressure. Just listening.',
          s3_h4: 'Step-by-step treatment', s3_p: 'We proceed together at your own pace — always with your full consent.'
        },
        benefits: {
          h2: 'Why Anxious Patients Trust Us',
          b1_h4: 'Empathetic Team', b1_p: 'Our entire team is trained in dealing with dental anxiety. We take your fear seriously — without judgement.',
          b2_h4: 'Your Pace', b2_p: 'No time pressure, no rushing. We plan generous appointments and take breaks at any time if you wish.',
          b3_h4: 'Laughing Gas Sedation', b3_p: 'Safe, proven, without side effects. Laughing gas relieves tension and makes the treatment considerably more comfortable.'
        },
        faq: {
          h2: 'Frequently Asked Questions from Anxious Patients',
          q1: 'Am I an anxious patient?', a1: 'If the thought of a dental visit gives you palpitations, you keep postponing appointments, have sleep problems before the appointment or tense up in the treatment chair — then you are an anxious patient. This is not unusual. An estimated 60% of all people have some form of dental anxiety. With us you have come to the right place.',
          q2: 'Do you offer general anaesthesia?', a2: 'We do not offer general anaesthesia at our practice as this requires an anaesthetist and special equipment. Instead we offer laughing gas sedation (inhalation sedation), which is already sufficient for most anxious patients and very well tolerated. With extreme phobia we can refer you to specialist clinics.',
          q3: 'What happens at the first appointment?', a3: 'At the first appointment: nothing happens except talking. We do not put you in the treatment chair if you do not want that. We listen to what makes you anxious, explain how we work and answer all your questions. Only when you feel ready do we plan the next step — at your pace.'
        }
      },
      aesthetik: {
        hero: { h1: 'Aesthetic Dentistry — <em>Your Radiant Smile, Our Passion</em>', desc: 'Bleaching, veneers, and smile design for your most confident, beautiful smile.', back: 'All Services' },
        sidebar: { card1_h3: 'Transform Your Smile', card1_p: 'Book a free consultation for your Smile Makeover.', card3_h3: 'Related Services' },
        content: {
          h2_1: 'Beauty and health in harmony',
          p1: 'Aesthetic dentistry means more to us than just cosmetics. Every treatment is planned to improve both the appearance and the function and health of your teeth. A beautiful smile boosts self-confidence — and we see that in our patients every day.',
          h2_2: 'Our aesthetic services',
          h3_1: 'Veneers — facades for perfect teeth',
          p2: 'Veneers are ultra-thin ceramic shells (approx. 0.3–0.5 mm) bonded to the front surface of the teeth. They cover discolouration, cracks, gaps and misalignments, giving your teeth a flawless, natural appearance. Minimal substance removal, maximum effect.',
          li1_1: 'Porcelain veneers (ceramic): durable, natural light refraction', li1_2: 'Composite veneers: less invasive, more cost-effective',
          li1_3: 'No-prep veneers: completely without tooth grinding', li1_4: 'Durability of 10–20 years with good care',
          h3_2: 'Tooth bleaching (whitening)',
          p3: 'A radiant, white smile is the wish of many patients. We offer professional in-surgery bleaching (power bleaching) as well as individually fitted home bleaching trays. The result is safer and more effective than commercially available products.',
          li2_1: 'Professional in-office bleaching in approx. 60–90 minutes', li2_2: 'Individually fitted trays for home use',
          li2_3: 'Whitening by 4–12 shades possible', li2_4: 'Gentle on tooth enamel when applied correctly',
          h3_3: 'Bonding — quick corrections', p4: 'In bonding, tooth-coloured composite is applied directly to the tooth and shaped. Ideal for small corrections such as chips, gaps, slight misalignments or discolouration — often in just one appointment.',
          h3_4: 'Smile Makeover', p5: 'A Smile Makeover combines several aesthetic measures for a holistically harmonious result. We analyse your face, tooth alignment and wishes and create an individual treatment plan — with a digital preview (Digital Smile Design).',
          box: '<strong>Digital Smile Design:</strong> Before we start, we show you a digital preview of your future smile. This way you can co-design the result and are prepared for your new smile.',
          h2_3: 'Consultation and planning',
          p6: 'Every aesthetic treatment begins with an in-depth consultation. We listen to you, analyse the current situation and develop a tailor-made plan together with you — transparently regarding costs, time required and result.'
        },
        benefits: {
          h2: 'Your Smile — Your Investment',
          b1_h4: 'Radiant Smile', b1_p: 'A beautiful smile changes your life — more confidence, better charisma, a positive first impression.',
          b2_h4: 'Digital Smile Design', b2_p: 'With modern software you see your new smile before the first treatment — you stay in control.',
          b3_h4: 'Natural & Lasting', b3_p: 'We work with high-quality ceramic materials — the result looks natural and lasts many years with good care.'
        },
        faq: {
          h2: 'Frequently Asked Questions about Aesthetics',
          q1: 'What is the difference between a veneer and bonding?', a1: 'Veneers are laboratory-made ceramic shells permanently bonded to the tooth — highly precise, long-lasting (10–20 years) but more costly. Bonding is a direct method: composite material is applied directly to the tooth and shaped — cheaper, faster (often a single session) but less durable (5–8 years) and less stain-resistant.',
          q2: 'Is bleaching harmful to tooth enamel?', a2: 'Professional bleaching carried out by a dentist is safe for healthy teeth. The peroxide concentrations used are chosen so that the enamel is not permanently damaged. Temporary sensitivity is possible. Before bleaching we check whether your teeth are suitable and choose the gentlest method.',
          q3: 'How long do veneers last?', a3: 'Ceramic veneers last 10–20 years or longer with good care. Key factors are: regular prophylaxis, use of a bite splint with bruxism, avoidance of hard foods and good home oral hygiene. Composite veneers last 5–8 years and can be repaired or renewed.'
        }
      },
      zahnerhaltung: {
        hero: { h1: 'Tooth Preservation — <em>Keeping Natural Teeth Healthy</em>', desc: 'Modern, gentle methods to protect and preserve your natural teeth long-term.', back: 'All Services' },
        sidebar: { card1_h3: 'Book Appointment', card1_p: 'Do not wait with toothache — come to us as early as possible.', card3_h3: 'More Services' },
        content: {
          h2_1: 'Why tooth preservation comes first',
          p1: 'The goal of modern dentistry is to preserve natural teeth for as long as possible. Natural teeth are unmatched — they are sensitive, provide optimal chewing function and prevent bone loss. Every treatment in our practice aims to preserve as much tooth substance as possible.',
          h2_2: 'Filling therapy',
          h3_1: 'Composite fillings (white fillings)',
          p2: 'Composite plastic fillings are the standard in modern dentistry. They are matched directly to the tooth colour and are barely distinguishable from natural tooth substance. The technique requires precise work, but is gentler than older amalgam fillings.',
          li1_1: 'Tooth-coloured aesthetics — invisible after curing', li1_2: 'Minimal substance removal required',
          li1_3: 'No problematic ingredients (no amalgam)', li1_4: 'Generally completed in one appointment',
          h3_2: 'Ceramic inlays and onlays',
          p3: 'For larger defects where a direct filling reaches its limits, we recommend all-ceramic inlays or onlays. These are fabricated in the laboratory following digital impression and inserted in a second appointment. They are extremely durable and optimally preserve tooth substance.',
          li2_1: 'Inlay: fills the cavity from the inside', li2_2: 'Onlay: additionally covers cusps',
          li2_3: 'Durability up to 20 years', li2_4: 'Provides optimal chewing surface reconstruction',
          h2_3: 'Root canal treatment (endodontics)',
          p4: 'When decay or injury has affected the dental pulp (the "nerve"), root canal treatment is often the last option to save the tooth. With modern procedures and surgical microscopes, this can be performed very precisely and largely pain-free.',
          box: '<strong>Modern endodontics:</strong> We work with rotary nickel-titanium instruments and digital length measurement for maximum precision and safety in root canal treatments.',
          s1_h4: 'Diagnosis and X-ray', s1_p: 'Examination, vitality test and digital X-ray to assess the root canals.',
          s2_h4: 'Local anaesthesia', s2_p: 'Reliable anaesthesia — the treatment is virtually pain-free.',
          s3_h4: 'Preparation and disinfection', s3_p: 'The root canals are cleaned, prepared and thoroughly disinfected.',
          s4_h4: 'Root filling', s4_p: 'The prepared canals are permanently sealed with a biocompatible material (gutta-percha).',
          s5_h4: 'Crown restoration', s5_p: 'The treated tooth is restored and strengthened long-term with a crown or build-up.'
        },
        benefits: {
          h2: 'Why Preserve Natural Teeth?',
          b1_h4: 'Keep Your Own Teeth', b1_p: 'Natural teeth offer superior chewing function, sensation and aesthetics — no implant reaches the quality of a healthy natural tooth.',
          b2_h4: 'Highest Precision', b2_p: 'We work with magnifying loupes and operating microscopes — for minimal substance removal and optimal results even in difficult cases.',
          b3_h4: 'Pain-Free', b3_p: 'Modern local anaesthesia makes even root canal treatments virtually pain-free. Many patients are positively surprised at how comfortable the procedure is.'
        },
        faq: {
          h2: 'Frequently Asked Questions about Tooth Preservation',
          q1: 'When is a root canal treatment necessary?', a1: 'A root canal treatment is necessary when the dental pulp has been affected by bacterial infection or has died due to decay, cracks or injury. Symptoms can include: severe toothache, sensitivity to tapping, swelling, darkening of the tooth or sensitivity to heat. An X-ray confirms the diagnosis.',
          q2: 'Is a root canal treatment painful?', a2: 'The pain is often attributed to the thought of the treatment — not the treatment itself. With modern local anaesthesia the procedure is virtually pain-free. Mild discomfort may occur for a few days after treatment, which is well managed with pain medication. Most patients are surprised at how straightforward it was.',
          q3: 'Can every tooth really be saved?', a3: 'Not always. Whether a tooth is worth preserving depends on several factors: the condition of the roots, the remaining tooth substance, bone support and the overall findings. We advise you honestly whether preservation makes sense or whether other options (implant, bridge) would be the better long-term choice.'
        }
      }
    }
  },

  de: {
    header: {
      subtitle: 'Zahnarztpraxis • Winsen (Luhe)'
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
      desc: 'Moderne Zahnmedizin, persönliche Betreuung und ein Team, dem Ihr Wohlbefinden wirklich am Herzen liegt. Christopher Kielhorn und sein Team freuen sich auf Ihren Besuch.',
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
        role: 'Zahnarzt und Praxisinhaber',
        name: 'Christopher Kielhorn',
        desc1: 'Christopher Kielhorn ist Zahnarzt und Praxisinhaber in Winsen (Luhe) und führt die Zahnarztpraxis bereits in zweiter Generation. Er trägt den akademischen Grad DMD (Doctor of Dental Medicine) und hat Curricula in Parodontologie und Endodontologie abgeschlossen.',
        desc2: 'Mit über 20 Jahren Berufserfahrung verbindet er klinische Präzision mit echtem Einfühlungsvermögen. Sein Schwerpunkt liegt auf Implantologie, ästhetischer Zahnheilkunde und der Behandlung von Angstpatienten. Mit einer 4,9-Sterne-Bewertung bei Google gehört er zu den angesehensten Zahnärzten im Landkreis Harburg.',
        desc3: 'Er ist bekannt für seine ruhige, einfühlsame Art und die Fähigkeit, auch ängstlichen Patienten die Angst zu nehmen. "Kein Zahn und kein Patient ist mir zu kompliziert", sagt er — und meint es ernst.',
        cred1: 'Spezialist für Implantologie',
        cred2: '20+ Jahre Erfahrung',
        cred3: 'Zahnarzt in 2. Generation',
        cred4: '4,9★ Patientenbewertung',
        cred5: 'Ästhetische Zahnheilkunde',
        cred6: 'Angstpatientenbehandlung',
        cred7: 'DMD · Doctor of Dental Medicine',
        cred8: 'Curriculum: Parodontologie & Endodontologie',
        cta: 'Termin buchen'
      },
      staff: {
        role_dentist: 'Zahnärztin',
        role_hygienist: 'Dentalhygienikerin',
        role_assistant: 'Zahnmedizinische Fachangestellte',
        role_reception: 'Patientenkoordinatorin',
        role_technician: 'Zahntechniker'
      },
      overview: {
        title: 'Unser Team für Sie',
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
      quote_author: 'Christopher Kielhorn',
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
      r1: { name: 'Maria S.', text: 'Absolut die beste Zahnarztpraxis, die ich je besucht habe. Kielhorn ist unglaublich einfühlsam und professionell. Ich hatte früher Angst vor dem Zahnarzt — das ist jetzt vorbei!', date: 'März 2025' },
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
        anxiety: 'Angstpatienten',
        aesthetics: 'Ästhetik',
        preservation: 'Zahnerhaltung'
      },
      legal_links: {
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        accessibility: 'Barrierefreiheit'
      },
      copyright: '© 2025 Zahnarztpraxis Kielhorn. Alle Rechte vorbehalten.'
    },
    svc_sidebar: {
      call: 'Jetzt anrufen',
      msg: 'Nachricht senden',
      hours_h3: 'Sprechzeiten',
      related_h3: 'Verwandte Leistungen',
      more_h3: 'Weitere Leistungen',
      mon: 'Montag', tue: 'Dienstag', wed: 'Mittwoch', thu: 'Donnerstag', fri: 'Freitag',
      sat_sun: 'Sa / So', closed: 'Geschlossen',
      img_caption: 'Zahnarztpraxis Kielhorn • Winsen (Luhe)'
    },
    svc_names: {
      prophylaxe: 'Prophylaxe', prophylaxe_full: 'Prophylaxe & Zahnreinigung',
      implantologie: 'Implantologie', zahnersatz: 'Zahnersatz', oralchirurgie: 'Oralchirurgie',
      kinderzahnheilkunde: 'Kinderzahnheilkunde', angstpatienten: 'Angstpatienten',
      aesthetik: 'Ästhetik', aesthetik_full: 'Ästhetische Zahnheilkunde',
      zahnerhaltung: 'Zahnerhaltung'
    },
    pages: {
      services: { hero: { h1: 'Unsere Leistungen — <em>Ihr Lächeln in besten Händen</em>', desc: 'Von der Vorsorge über Implantate bis zur ästhetischen Zahnheilkunde — umfassende Zahnmedizin auf höchstem Niveau, individuell auf Sie abgestimmt.', back: 'Zurück zur Startseite' } },
      team:     { hero: { h1: 'Unser Team — <em>Erfahren, Engagiert, Einfühlsam</em>', desc: 'Hinter jedem gesunden Lächeln steckt ein Team, das mit Leidenschaft und Fachkompetenz arbeitet. Lernen Sie uns kennen.', back: 'Zurück zur Startseite' } },
      praxis: {
        hero: { h1: 'Unsere Praxis — <em>Modern, Herzlich, Vertrauensvoll</em>', desc: 'Eine Praxis mit Geschichte — moderne Medizin verbunden mit persönlicher Betreuung seit 1980.', back: 'Zurück zur Startseite' },
        history: {
          label: 'Unsere Geschichte',
          h2: 'Eine Praxis mit <em>Tradition</em>',
          p1: 'Gegründet von Wilhelm Heinrich Kielhorn und Ingrid Schierz-Kielhorn, heute mit Herzblut weitergeführt von ihrem Sohn Christopher Kielhorn. Seit über 40 Jahren versorgen wir Patienten in Winsen (Luhe) und der gesamten Region.',
          p2: 'Was 1980 als kleine Praxis begann, ist heute ein modernes Behandlungszentrum mit eigenem Labor, digitalem Röntgen und 3D-Diagnostik.',
          t1_year: '1980', t1_h3: 'Gründung der Praxis', t1_p: 'Wilhelm Heinrich Kielhorn und Ingrid Schierz-Kielhorn eröffnen die Zahnarztpraxis in Winsen (Luhe) — mit dem Anspruch, Patienten wie Freunde zu behandeln.',
          t2_year: '1990er – 2010er', t2_h3: 'Wachstum &amp; Modernisierung', t2_p: 'Kontinuierliche Erweiterung: eigenes Dentallabor, neue Behandlungsräume und der Einstieg in die digitale Zahnmedizin mit modernsten Geräten.',
          t3_year: '2023', t3_h3: 'Übergabe an die 2. Generation', t3_p: 'Christopher Kielhorn übernimmt die Praxis und verbindet die jahrzehntelange Familientradition mit modernsten Behandlungsmethoden und frischem Elan.',
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
          a1: '<p>Vereinbaren Sie zunächst einen <strong>Termin nur für ein Gespräch</strong> — ohne Behandlung. Gemeinsam finden wir einen Weg Schritt für Schritt. Kielhorn ist bekannt für seinen einfühlsamen Umgang mit ängstlichen Patienten.</p>',
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
      prophylaxe: {
        hero: { h1: 'Prophylaxe — <em>Vorbeugen ist besser als Heilen</em>', desc: 'Regelmäßige professionelle Zahnreinigung und Vorsorge für lebenslang gesunde Zähne.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Termin vereinbaren', card1_p: 'Möchten Sie einen Termin für Ihre professionelle Zahnreinigung vereinbaren? Wir freuen uns auf Sie!', card3_h3: 'Weitere Leistungen' },
        content: {
          h2_1: 'Warum professionelle Zahnreinigung so wichtig ist',
          p1: 'Auch bei sorgfältigster täglicher Mundhygiene können sich an schwer erreichbaren Stellen Zahnbeläge (Plaque) und Zahnstein bilden. Diese können mit normalen Zahnbürsten und Zahnseide nicht vollständig entfernt werden. Nur eine professionelle Zahnreinigung (PZR) kann diese hartnäckigen Ablagerungen gründlich beseitigen und so Ihrer Mundgesundheit langfristig zugutekommen.',
          p2: 'Wissenschaftliche Studien belegen, dass regelmäßige PZR das Risiko von Karies, Parodontitis und Zahnverlust deutlich senkt. Sie ist eine Investition in Ihre Zahngesundheit — und damit in Ihre Lebensqualität.',
          box: '<strong>Empfehlung:</strong> Für die meisten Patienten empfehlen wir eine professionelle Zahnreinigung 2× pro Jahr. Bei erhöhtem Karies- oder Parodontitisrisiko kann eine häufigere Behandlung sinnvoll sein.',
          h2_2: 'Was erwartet Sie bei der PZR?',
          p3: 'Unsere erfahrenen Zahnarzthelfer:innen führen die professionelle Zahnreinigung schonend und gründlich durch. Der Ablauf:',
          s1_h4: 'Befundaufnahme', s1_p: 'Zunächst wird der aktuelle Zustand Ihrer Zähne und Ihres Zahnfleisches beurteilt.',
          s2_h4: 'Entfernung von Zahnstein', s2_p: 'Mit Ultraschall und speziellen Handinstrumenten wird Zahnstein oberhalb und unterhalb des Zahnfleischrandes schonend abgetragen.',
          s3_h4: 'Politur', s3_p: 'Alle Zahnoberflächen werden mit einer speziellen Paste poliert — so haften künftig weniger Beläge an.',
          s4_h4: 'Fluoridierung', s4_p: 'Abschließend werden die Zähne mit Fluoridgel oder -lack behandelt, um den Zahnschmelz zu stärken.',
          s5_h4: 'Mundhygieneberatung', s5_p: 'Sie erhalten individuelle Tipps für Ihre häusliche Mundhygiene — Zahnbürste, Zahnseide, Mundspülung.',
          h2_3: 'Vorbeugung gegen Parodontitis',
          p4: 'Parodontitis ist eine Entzündung des Zahnhalteapparats und eine der häufigsten Ursachen für Zahnverlust im Erwachsenenalter. Sie entsteht durch Bakterien in Zahnbelägen, die das Zahnfleisch und den Knochen angreifen. Regelmäßige Prophylaxe ist die wirksamste Vorbeugung.',
          li1: 'Früherkennung von Zahnfleischerkrankungen', li2: 'Reduzierung kariogener Bakterien', li3: 'Vorbeugung gegen Mundgeruch',
          li4: 'Erhalt und Verbesserung der Zahnästhetik', li5: 'Systemische Gesundheitsvorteile (Herz, Diabetes)',
          h2_4: 'Kosten und Kostenübernahme',
          p5: 'Die professionelle Zahnreinigung ist eine Privatleistung, die von der gesetzlichen Krankenkasse in der Regel nicht übernommen wird. Die Kosten variieren je nach Aufwand. Viele private Zusatzversicherungen übernehmen die Kosten ganz oder teilweise. Sprechen Sie uns gerne an — wir beraten Sie transparent zu den Kosten.'
        },
        benefits: {
          h2: 'Warum Prophylaxe bei Kielhorn?',
          b1_h4: 'Langfristige Gesundheit', b1_p: 'Regelmäßige PZR reduziert das Karies- und Parodontitisrisiko nachweislich und schützt Ihre Zähne ein Leben lang.',
          b2_h4: 'Strahlend weiße Zähne', b2_p: 'Zahnstein und Verfärbungen werden gründlich entfernt — für ein frisches, weißeres Lächeln nach jeder Sitzung.',
          b3_h4: 'Kosten sparen', b3_p: 'Vorsorge ist günstiger als Behandlung. Eine PZR kostet einen Bruchteil einer aufwendigen Parodontitis-Therapie.'
        },
        faq: {
          h2: 'Häufige Fragen zur Prophylaxe',
          q1: 'Wie oft sollte ich zur professionellen Zahnreinigung?', a1: 'Für die meisten Patienten empfehlen wir 2× pro Jahr. Bei erhöhtem Risiko (Raucher, Diabetiker, Parodontitis-Patienten) kann eine häufigere Behandlung — bis zu 4× jährlich — sinnvoll sein. Wir beraten Sie individuell.',
          q2: 'Ist die PZR schmerzhaft?', a2: 'Die professionelle Zahnreinigung ist in der Regel nicht schmerzhaft. Bei empfindlichen Zähnen oder entzündetem Zahnfleisch kann es zu leichten Missempfindungen kommen — sprechen Sie uns an, wir passen die Behandlung entsprechend an.',
          q3: 'Übernimmt die Krankenkasse die Kosten?', a3: 'Die GKV übernimmt die PZR in der Regel nicht. Viele private Zusatzversicherungen übernehmen die Kosten jedoch vollständig oder teilweise. Die meisten Zahnzusatzversicherungen decken 2 PZR pro Jahr ab.',
          q4: 'Wie lange dauert eine PZR?', a4: 'Eine professionelle Zahnreinigung dauert je nach Aufwand 45 bis 90 Minuten. Beim ersten Termin nehmen wir uns besonders viel Zeit, um Ihre individuelle Mundsituation kennenzulernen.'
        }
      },
      implantologie: {
        hero: { h1: 'Implantologie — <em>Fester Zahnersatz wie echte Zähne</em>', desc: 'Premium-Implantate für ein dauerhaftes, natürlich aussehendes Lächeln, das ein Leben lang hält.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Beratungsgespräch', card1_p: 'Lassen Sie sich unverbindlich beraten — wir klären, ob Implantate für Sie geeignet sind.', card3_h3: 'Weitere Leistungen' },
        content: {
          h2_1: 'Was sind Zahnimplantate?',
          p1: 'Ein Zahnimplantat ist eine künstliche Zahnwurzel aus biokompatiblem Titan, die chirurgisch in den Kieferknochen eingesetzt wird. Auf diesem Implantat wird anschließend eine Krone, Brücke oder Prothese befestigt — dauerhaft und stabil wie ein natürlicher Zahn.',
          p2: 'Im Gegensatz zu herkömmlichen Brücken müssen für ein Implantat keine gesunden Nachbarzähne beschliffen werden. Und anders als eine herausnehmbare Prothese sitzt das Implantat fest im Knochen und verhindert gleichzeitig den Knochenabbau, der nach einem Zahnverlust einsetzt.',
          box: '<strong>Kielhorn ist spezialisiert auf Implantologie</strong> und setzt seit über 15 Jahren erfolgreich Premium-Implantatsysteme ein. Wissenschaftliche Studien zeigen Erfolgsraten von über 95% nach 10 Jahren.',
          h2_2: 'Das Implantat-Verfahren Schritt für Schritt',
          s1_h4: 'Diagnostik und Planung', s1_p: '3D-Röntgenaufnahme (DVT) und digitale Planung des Implantats. Beurteilung von Knochenvolumen und -qualität.',
          s2_h4: 'Implantation (ambulant)', s2_p: 'Das Titanimplantat wird unter lokaler Betäubung schmerzfrei in den Kiefer eingesetzt. Der Eingriff dauert ca. 30–60 Minuten.',
          s3_h4: 'Einheilphase', s3_p: 'Das Implantat wächst in ca. 8–16 Wochen mit dem Kieferknochen zusammen (Osseointegration). Ein Provisorium sorgt für Ästhetik.',
          s4_h4: 'Aufbau und Krone', s4_p: 'Nach der Einheilung wird ein Aufbauabutment befestigt und die individuelle Keramikkrone aufgesetzt — perfekt angepasst an Ihre übrigen Zähne.',
          h2_3: 'Verwendete Materialien',
          p3: 'Wir setzen ausschließlich CE-zertifizierte Implantate renommierter Hersteller ein (z. B. Straumann, Nobel Biocare, Camlog). Die Kronen bestehen aus hochwertigem Vollkeramik-Material — absolut metallfrei, biokompatibel und ästhetisch ansprechend.',
          li1: 'Titanimplantate (osseointegrationsoptimiert)', li2: 'Zirkonoxid-Keramikkronen (metallfreie Alternative möglich)',
          li3: 'CAD/CAM-gefräste Präzisionsarbeit', li4: 'Lebenserwartung 20+ Jahre bei guter Pflege',
          h2_4: 'Für wen sind Implantate geeignet?',
          p4: 'Implantate können bei gesundem Knochen und allgemeiner Gesundheit in jedem Alter eingesetzt werden. Voraussetzungen sind ausreichendes Knochenvolumen, gesundes Zahnfleisch und das Fehlen schwerwiegender Allgemeinerkrankungen. Bei Knochenabbau kann ein Knochenaufbau notwendig sein — wir beraten Sie individuell.',
          h2_5: 'Nachsorge und Langlebigkeit',
          p5: 'Implantate erfordern dieselbe Pflege wie natürliche Zähne: regelmäßiges Zähneputzen, Zahnseide und professionelle Zahnreinigung. Mit guter Pflege halten Implantate ein Leben lang. Wir begleiten Sie langfristig und bieten regelmäßige Implantat-Recalls an.'
        },
        benefits: {
          h2: 'Warum Implantate bei Kielhorn?',
          b1_h4: 'Natürliches Aussehen', b1_p: 'Keramikkronen auf Implantaten sind von echten Zähnen kaum zu unterscheiden — in Form, Farbe und Lichtbrechung.',
          b2_h4: '20+ Jahre Haltbarkeit', b2_p: 'Bei guter Pflege halten Implantate ein Leben lang — wissenschaftliche Studien belegen Erfolgsraten über 95 % nach 10 Jahren.',
          b3_h4: 'Knochen erhalten', b3_p: 'Das Implantat stimuliert den Kiefer wie eine natürliche Zahnwurzel und verhindert so den gefürchteten Knochenabbau nach Zahnverlust.'
        },
        faq: {
          h2: 'Häufige Fragen zur Implantologie',
          q1: 'Bin ich für ein Implantat geeignet?', a1: 'Die meisten Erwachsenen mit gesundem Allgemeinzustand sind geeignete Kandidaten. Voraussetzungen sind ausreichend Kieferknochen, gesundes Zahnfleisch und die Abwesenheit von unkontrolliertem Diabetes oder Blutgerinnungsstörungen. Wir klären Ihre Eignung in einem kostenlosen Beratungsgespräch.',
          q2: 'Ist die Implantation schmerzhaft?', a2: 'Der Eingriff selbst erfolgt unter lokaler Betäubung und ist nahezu schmerzfrei. Nach der Betäubung kann es zu leichten Beschwerden kommen, die in der Regel mit handelsüblichen Schmerzmitteln gut kontrollierbar sind. Die meisten Patienten berichten, dass es deutlich angenehmer war als erwartet.',
          q3: 'Wie lange dauert die gesamte Behandlung?', a3: 'Von der Implantation bis zur endgültigen Krone dauert es in der Regel 3–6 Monate. Die Einheilphase allein beträgt 8–16 Wochen. In dieser Zeit tragen Sie ein Provisorium. Bei gutem Knochen kann in manchen Fällen eine Sofortversorgung erfolgen — wir beraten Sie individuell.',
          q4: 'Welche Kosten entstehen und was übernimmt die Kasse?', a4: 'Gesetzliche Krankenkassen zahlen einen Festzuschuss für den Zahnersatz (Krone), nicht für das Implantat selbst. Die Implantatkosten sind privat zu tragen. Wir erstellen Ihnen einen detaillierten Heil- und Kostenplan und informieren Sie über mögliche Finanzierungsoptionen.'
        }
      },
      zahnersatz: {
        hero: { h1: 'Zahnersatz — <em>Natürlicher Ersatz für mehr Lebensqualität</em>', desc: 'Hochwertige Kronen, Brücken und Prothesen aus unserem eigenen Praxislabor.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Termin vereinbaren', card1_p: 'Wir beraten Sie umfassend und erstellen einen individuellen Behandlungsplan.', card3_h3: 'Verwandte Leistungen' },
        content: {
          h2_1: 'Ihre Optionen beim Zahnersatz',
          p1: 'Zahnverlust ist keine Seltenheit und kann verschiedene Ursachen haben — Karies, Parodontitis, Unfälle oder natürliches Altern. Moderner Zahnersatz ist so gestaltet, dass er kaum von echten Zähnen zu unterscheiden ist und gleichzeitig die Kaufunktion vollständig wiederherstellt.',
          h3_1: 'Festsitzender Zahnersatz',
          p2: 'Festsitzender Zahnersatz umfasst Kronen, Brücken und auf Implantaten befestigte Konstruktionen. Er sitzt dauerhaft im Mund, wird wie natürliche Zähne gepflegt und bietet maximalen Tragekomfort.',
          li1_1: 'Zahnkronen aus Vollkeramik oder Keramik-Metallverbund', li1_2: 'Brücken zur Lückenschließung (1–3 fehlende Zähne)',
          li1_3: 'Implantatgetragene Kronen und Brücken', li1_4: 'Keine Einschränkungen beim Essen oder Sprechen',
          h3_2: 'Herausnehmbarer Zahnersatz',
          p3: 'Prothesen bieten eine bewährte und kostengünstige Lösung bei größerem Zahnverlust. Moderne Prothesen sitzen sicherer und sehen natürlicher aus als je zuvor.',
          li2_1: 'Teilprothesen (Klammer- oder Teleskopprothesen)', li2_2: 'Totalprothesen bei vollständigem Zahnverlust',
          li2_3: 'Implantatgestützte Prothesen für maximalen Halt', li2_4: 'Individuell angepasst an Ihre Kieferform',
          box: '<strong>Individuelle Beratung:</strong> Jede Situation ist einzigartig. Wir besprechen gemeinsam alle Optionen — transparent bezüglich Kosten, Komfort und Langlebigkeit.',
          h2_2: 'Der Behandlungsablauf',
          s1_h4: 'Erstuntersuchung und Beratung', s1_p: 'Befund, Röntgen, Besprechung der Möglichkeiten und Erstellung eines Kostenplans.',
          s2_h4: 'Abformung / Scan', s2_p: 'Digitale Abformung für präzise Laboranfertigung oder klassischer Abdruck.',
          s3_h4: 'Anprobe und Anpassung', s3_p: 'Einprobe des Zahnersatzes, individuelle Anpassungen für optimalen Sitz.',
          s4_h4: 'Eingliederung und Nachsorge', s4_p: 'Endgültige Eingliederung mit Einweisung zur Pflege und Nachsorgeterminen.',
          h2_3: 'Pflege Ihres Zahnersatzes',
          p4: 'Für festsitzenden Zahnersatz gelten dieselben Pflegeempfehlungen wie für natürliche Zähne. Herausnehmbare Prothesen werden täglich mit einer speziellen Bürste gereinigt und über Nacht in Wasser aufbewahrt. Regelmäßige Kontrollen sind wichtig, da sich der Kiefer im Laufe der Zeit verändern kann und Prothesen angepasst werden müssen.'
        },
        benefits: {
          h2: 'Ihre Vorteile bei uns',
          b1_h4: 'Maßgefertigt', b1_p: 'Jeder Zahnersatz wird individuell für Sie angefertigt — perfekt abgestimmt auf Ihre Zahnfarbe, Form und Kieferanatomie.',
          b2_h4: 'Premium-Materialien', b2_p: 'Wir verwenden ausschließlich Vollkeramik und zertifizierte Materialien aus deutschen Partnerlabors für höchste Qualität und Langlebigkeit.',
          b3_h4: 'Schnelle Versorgung', b3_p: 'Dank moderner CAD/CAM-Technologie und effizient taktierter Termine erhalten Sie Ihren Zahnersatz so schnell wie möglich.'
        },
        faq: {
          h2: 'Häufige Fragen zum Zahnersatz',
          q1: 'Wann brauche ich eine Krone und wann eine Brücke?', a1: 'Eine Krone wird eingesetzt, wenn ein einzelner Zahn stark beschädigt ist, aber die Wurzel noch erhalten werden kann. Eine Brücke schließt eine Lücke zwischen zwei gesunden Zähnen, die als Pfeiler dienen. Sind mehrere Zähne betroffen oder die Lücke zu groß, kann ein Implantat oder eine Prothese sinnvoller sein. Wir beraten Sie individuell.',
          q2: 'Wie lange hält hochwertiger Zahnersatz?', a2: 'Vollkeramikkronen halten bei guter Pflege 15–20 Jahre oder länger. Brücken haben eine ähnliche Lebenserwartung. Herausnehmbare Prothesen sollten alle 5–8 Jahre überprüft und ggf. angepasst oder erneuert werden. Regelmäßige Kontrollen sind entscheidend.',
          q3: 'Muss ich die Prothese nachts herausnehmen?', a3: 'Herausnehmbare Prothesen sollten nachts zum Schlafen und zur Reinigung herausgenommen werden. Das schont das Zahnfleisch und gibt dem Gewebe eine Ruhepause. Festsitzender Zahnersatz oder implantatgetragene Prothesen bleiben dauerhaft im Mund.'
        }
      },
      oralchirurgie: {
        hero: { h1: 'Oralchirurgie — <em>Schonende chirurgische Eingriffe</em>', desc: 'Von der Weisheitszahnentfernung bis zum Knochenaufbau — in erfahrenen Händen.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Termin vereinbaren', card1_p: 'Bei Zahnschmerzen oder akutem Bedarf kontaktieren Sie uns bitte umgehend.', card3_h3: 'Verwandte Leistungen' },
        content: {
          h2_1: 'Unsere oralchirurgischen Leistungen',
          p1: 'Die Oralchirurgie befasst sich mit chirurgischen Eingriffen im Bereich des Mundes, der Zähne und des Kieferknochens. All diese Eingriffe werden ambulant in unserer Praxis unter lokaler Betäubung durchgeführt — sicher, schonend und weitgehend schmerzfrei.',
          h3_1: 'Zahnentfernung (Extraktion)', p2: 'Manchmal ist eine Zahnentfernung unumgänglich — etwa bei schwerer Karies, fortgeschrittener Parodontitis oder zur kieferorthopädischen Vorbereitung. Wir führen Extraktionen so schonend wie möglich durch, um das umliegende Gewebe zu schonen.',
          h3_2: 'Weisheitszahn-Entfernung',
          p3: 'Weisheitszähne (dritte Molaren) bereiten häufig Probleme: Platzmangel, Entzündungen oder Fehlstellungen. Die operative Entfernung ist einer der häufigsten ambulanten Eingriffe in der Zahnheilkunde und bei uns in erfahrenen Händen.',
          li1: 'Vollständige präoperative Diagnostik (Panoramaröntgen)',
          li2: 'Lokale Betäubung — auf Wunsch auch mit Lachgassedierung',
          li3: 'Schonende Operationstechnik mit geringem Gewebeverlust',
          li4: 'Wundversorgung und Naht für optimale Heilung',
          h3_3: 'Chirurgische Parodontitis-Behandlung', p4: 'Bei fortgeschrittener Parodontitis können chirurgische Maßnahmen notwendig sein, um tiefe Zahnfleischtaschen zu säubern und den Zahnhalteapparat zu stabilisieren. Lappenoperationen werden präzise und gewebeschonend durchgeführt.',
          h3_4: 'Knochenaufbau (Augmentation)', p5: 'Für eine Implantation ist ausreichend Knochenvolumen notwendig. Wo der Knochen abgebaut ist, können wir mit modernen Augmentationstechniken (Eigenknochen, Knochenersatzmaterialien) die Voraussetzung für ein langfristig stabiles Implantat schaffen.',
          box: '<strong>Wichtig:</strong> Alle chirurgischen Eingriffe erfolgen unter sterilen Bedingungen in unserem modernen Behandlungszimmer. Wir verwenden ausschließlich zertifizierte Materialien und Instrumente.',
          h2_2: 'Nachsorge und Heilung',
          p6: 'Nach oralchirurgischen Eingriffen erhalten Sie von uns detaillierte Verhaltensempfehlungen für die Heilungsphase. Dazu gehören Informationen zu Ernährung, Mundpflege, körperlicher Schonung und Schmerzmanagement. Wir sind jederzeit erreichbar, wenn nach dem Eingriff Fragen aufkommen.',
          li2_1: 'Keine harten oder heißen Speisen in den ersten 24 Stunden', li2_2: 'Kühlung der operierten Region bei Schwellungen',
          li2_3: 'Vermeidung von körperlicher Anstrengung für 1–2 Tage', li2_4: 'Kontrolltermin ca. 7–10 Tage nach dem Eingriff',
          li2_5: 'Bei starken Schmerzen oder Blutungen sofort melden'
        },
        benefits: {
          h2: 'Warum Oralchirurgie bei Kielhorn?',
          b1_h4: 'Schonende Technik', b1_p: 'Wir verwenden minimalinvasive Methoden, modernste Instrumente und Lupenbrille für präzises, gewebeschonendes Arbeiten.',
          b2_h4: 'Effektive Betäubung', b2_p: 'Dünnste Nadeln, Betäubungsgel im Voraus und moderne Anästhetika — erst wenn Sie wirklich nichts spüren, beginnen wir.',
          b3_h4: 'Nachsorge inklusive', b3_p: 'Sie erhalten umfangreiche schriftliche Nachsorgeanweisungen und einen Kontrolltermin — wir lassen Sie nach dem Eingriff nicht allein.'
        },
        faq: {
          h2: 'Häufige Fragen zur Oralchirurgie',
          q1: 'Wie lange dauert die Heilung nach einer Zahnentfernung?', a1: 'Das Zahnfleisch schließt sich in der Regel nach 1–2 Wochen. Die vollständige Knochenheilung dauert 2–3 Monate. In den ersten Tagen kann es zu leichten Schwellungen und Schmerzen kommen, die mit Schmerzmitteln und Kühlung gut behandelbar sind.',
          q2: 'Müssen alle Weisheitszähne entfernt werden?', a2: 'Nein — nicht jeder Weisheitszahn muss entfernt werden. Wenn er vollständig durchgebrochen ist, gut gereinigt werden kann und keine Probleme verursacht, kann er belassen werden. Wir empfehlen die Entfernung nur bei konkreten Problemen: Platzmangel, Entzündungen, Kariesrisiko oder Druckschmerz auf Nachbarzähne.',
          q3: 'Was darf ich nach dem Eingriff essen?', a3: 'In den ersten 24 Stunden sollten Sie nur weiche, lauwarme Speisen zu sich nehmen: Joghurt, Suppe, Brei, Banane. Vermeiden Sie harte, krümelige oder sehr heiße Speisen. Kein Alkohol und kein Nikotin in den ersten Tagen. Ab dem 3. Tag können Sie die Kostform schrittweise normalisieren.'
        }
      },
      kinderzahnheilkunde: {
        hero: { h1: 'Kinderzahnheilkunde — <em>Wir konzentrieren uns auf die speziellen Bedürfnisse von Kindern</em>', desc: 'Kinderfreundliche Zahnmedizin — spielerisch, sanft und ganz ohne Angst.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Termin für Ihr Kind', card1_p: 'Vereinbaren Sie jetzt einen Termin — wir freuen uns auf Ihre kleinen Patienten!', card3_h3: 'Weitere Leistungen' },
        content: {
          h2_1: 'Wann sollte das erste Mal zum Zahnarzt?',
          p1: 'Empfohlen wird der erste Zahnarztbesuch mit dem Durchbruch des ersten Milchzahns — also bereits im ersten Lebensjahr. Dieser erste "Kennenlerntermin" dient dazu, das Kind behutsam an die Praxisatmosphäre heranzuführen, ohne direkt eine Behandlung durchzuführen.',
          p2: 'Regelmäßige Besuche im Abstand von sechs Monaten helfen dabei, Karies früh zu erkennen und das Kind schrittweise an die Zahnarztbehandlung zu gewöhnen.',
          box: '<strong>Unser Team ist speziell geschult</strong> im Umgang mit Kindern aller Altersgruppen — von Kleinstkindern bis hin zu Jugendlichen. Wir nehmen uns die Zeit, die jedes Kind braucht.',
          h2_2: 'Unsere Leistungen für Kinder',
          h3_1: 'Vorsorgeuntersuchungen', p3: 'Die gesetzliche Krankenkasse übernimmt regelmäßige Vorsorgeuntersuchungen (FU1–FU9) für Kinder und Jugendliche bis 18 Jahre. Dabei prüfen wir Zähne, Kiefer und Mundschleimhaut auf altersgerechte Entwicklung.',
          h3_2: 'Professionelle Zahnreinigung für Kinder', p4: 'Kindgerechte Zahnreinigung mit kindgerechten Instrumenten, Geschmackspasten und viel Lob. Wir erklären die Methoden spielerisch und beziehen die Kinder aktiv ein.',
          h3_3: 'Fluoridierung', p5: 'Fluorid stärkt den Zahnschmelz und schützt vor Karies. Wir tragen nach jeder Reinigung Fluoridlack auf — besonders effektiv bei Milchzähnen und frisch durchgebrochenen bleibenden Zähnen.',
          h3_4: 'Fissurenversiegelung', p6: 'Die tiefen Rillen und Grübchen der Backenzähne sind besonders kariesanfällig. Eine Versiegelung mit einem transparenten Kunststoff versiegelt diese Stellen und reduziert das Kariesrisiko erheblich. Der Eingriff ist schmerzfrei und dauert nur wenige Minuten.',
          h3_5: 'Angstmanagement für Kinder', p7: 'Für besonders ängstliche Kinder bieten wir spezielle Beruhigungs- und Ablenkungsstrategien an. Die Erzählen-Zeigen-Machen-Methode (Tell-Show-Do) hilft dabei, Vertrauen aufzubauen. Auf Wunsch kann die Behandlung auch unter Lachgassedierung erfolgen.',
          h2_3: 'Tipps für Eltern',
          li1: 'Erzählen Sie zu Hause positiv über den Zahnarzt', li2: 'Kommen Sie mit zum ersten Termin und bleiben Sie bei Bedarf dabei',
          li3: 'Fangen Sie mit dem Zähneputzen beim ersten Zahn an', li4: 'Verwenden Sie kindgerechte Zahnpasta mit altersgerechtem Fluoridgehalt',
          li5: 'Reduzieren Sie zuckerhaltige Getränke und Snacks', li6: 'Loben Sie Ihr Kind nach jedem Zahnarztbesuch'
        },
        benefits: {
          h2: 'Unser Versprechen für Ihr Kind',
          b1_h4: 'Kinderfreundlich', b1_p: 'Unsere Praxis ist auf Kinder eingestellt: freundliche Atmosphäre, Spielzeug im Wartebereich und ein Team, das Kinder lieb hat.',
          b2_h4: 'Angstfrei', b2_p: 'Tell-Show-Do, Lachgassedierung und viel Geduld: Wir arbeiten so, dass kein Kind eine Angst vor dem Zahnarzt entwickelt.',
          b3_h4: 'Früh lernen', b3_p: 'Kinder die früh positive Zahnarzt-Erfahrungen machen, pflegen ihre Zähne besser und vermeiden Angst im Erwachsenenalter.'
        },
        faq: {
          h2: 'Häufige Fragen zur Kinderzahnheilkunde',
          q1: 'Ab wann sollten Kinder zum Zahnarzt?', a1: 'Empfohlen wird der erste Besuch mit dem Durchbruch des ersten Milchzahns — also etwa mit 6–12 Monaten. Dieser erste Termin ist ein Kennenlernen. Ab dem 2. Lebensjahr sind halbjährliche Kontrollen empfehlenswert. Die gesetzliche Kasse bezahlt ab dem 3. Lebensjahr halbjährliche Vorsorge.',
          q2: 'Wie bereite ich mein Kind auf den Zahnarztbesuch vor?', a2: 'Reden Sie zu Hause positiv über den Zahnarzt — keine Schreckensgeschichten! Erklären Sie, dass der Zahnarzt den Zähnen hilft, gesund zu bleiben. Spielen Sie "Zahnarzt" zu Hause. Vermeiden Sie Worte wie "Spritze" oder "Bohren". Bringen Sie ein Lieblingstier oder Spielzeug mit.',
          q3: 'Müssen Milchzähne behandelt werden, wenn sie sowieso ausfallen?', a3: 'Ja, unbedingt! Milchzähne sind Platzhalter für die bleibenden Zähne. Karies-befallene Milchzähne können die bleibenden Zähne schädigen und zu Fehlstellungen führen. Außerdem kann Karies im Milchgebiss Schmerzen verursachen und negative Zahnarzt-Erfahrungen erzeugen.'
        }
      },
      angstpatienten: {
        hero: { h1: 'Angstpatienten — <em>Mit Verständnis und Einfühlungsvermögen</em>', desc: 'Kein Druck, keine Hektik — wir nehmen Ihre Ängste ernst und gehen in Ihrem Tempo vor.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Jetzt Mut fassen', card1_p: 'Der erste Schritt ist der schwerste — wir begleiten Sie. Rufen Sie uns an.', card3_h3: 'Weitere Leistungen' },
        content: {
          h2_1: 'Sie sind nicht allein',
          p1: 'Studien zeigen, dass rund 60% aller Menschen eine leichte bis starke Zahnarztangst haben. Viele meiden den Zahnarzt deshalb über Jahre — was die Situation langfristig verschlimmert. Wir verstehen das und urteilen nicht. Stattdessen schaffen wir eine Umgebung, in der Sie sich sicher und verstanden fühlen.',
          box: '<strong>"Sie bestimmen das Tempo."</strong> Bei uns passiert nichts ohne Ihre Zustimmung. Sie können jederzeit eine Pause einlegen oder die Behandlung unterbrechen — ein vereinbartes Handzeichen genügt.',
          h2_2: 'Wie wir mit Ihrer Angst umgehen',
          h3_1: 'Ausführliches Vorgespräch', p2: 'Bevor wir auch nur ein Instrument in die Hand nehmen, führen wir ein ruhiges, ausführliches Gespräch. Wir hören zu, stellen Fragen und erklären jeden Schritt der geplanten Behandlung. Transparenz schafft Vertrauen.',
          h3_2: 'Ruhige Atmosphäre', p3: 'Unsere Behandlungsräume sind bewusst so gestaltet, dass sie eine entspannte Atmosphäre vermitteln: gedämpftes Licht, ruhige Umgebung, keine unnötigen Geräusche. Auf Wunsch spielen wir Ihre Lieblingsmusik.',
          h3_3: 'Tell-Show-Do-Methode', p4: 'Jede Behandlung wird zunächst erklärt (Tell), dann gezeigt (Show), bevor sie durchgeführt wird (Do). Diese bewährte Methode hilft, das Unbekannte zu entzaubern und Vertrauen zu schaffen.',
          h3_4: 'Lachgassedierung',
          p5: 'Lachgas (Stickstoffmonoxid) ist eine bewährte, sichere Methode zur Angst- und Schmerzreduktion bei Zahnarztbehandlungen. Sie bleiben dabei wach und ansprechbar, fühlen sich aber entspannt und gelassen. Die Wirkung hält nur während der Inhalation an — nach dem Eingriff können Sie normal nach Hause fahren.',
          li1: 'Sicher für Kinder und Erwachsene', li2: 'Keine Nachwirkungen — schnelles Abklingen',
          li3: 'Kann mit allen Behandlungen kombiniert werden', li4: 'Ergänzend zur lokalen Betäubung',
          h3_5: 'Lokale Betäubung — effektiv und sanft', p6: 'Moderne Lokalanästhetika wirken schnell und zuverlässig. Wir verwenden dünnste Nadeln und tragen vorher ein Betäubungsgel auf, sodass der Einstich kaum spürbar ist. Erst wenn Sie wirklich nichts mehr spüren, beginnen wir mit der Behandlung.',
          h2_3: 'Was Sie erwartet',
          s1_h4: 'Erstkontakt per Telefon', s1_p: 'Rufen Sie uns einfach an und sagen uns, dass Sie Angst vor dem Zahnarzt haben. Wir planen den Termin entsprechend ein.',
          s2_h4: 'Kennenlerntermin ohne Behandlung', s2_p: 'Beim ersten Termin führen wir nur ein Gespräch. Keine Instrumente, kein Druck. Nur Zuhören.',
          s3_h4: 'Schrittweise Behandlung', s3_p: 'Wir gehen gemeinsam in Ihrem eigenen Tempo vor — immer mit Ihrer vollen Zustimmung.'
        },
        benefits: {
          h2: 'Warum Angstpatienten uns vertrauen',
          b1_h4: 'Einfühlsames Team', b1_p: 'Unser gesamtes Team ist geschult im Umgang mit Zahnarztangst. Wir nehmen Ihre Angst ernst — ohne zu urteilen.',
          b2_h4: 'Ihr Tempo', b2_p: 'Kein Zeitdruck, keine Überrumpelung. Wir planen großzügige Termine und machen jederzeit Pausen, wenn Sie das möchten.',
          b3_h4: 'Lachgassedierung', b3_p: 'Sicher, bewährt, ohne Nachwirkungen. Lachgas nimmt die Anspannung und macht die Behandlung deutlich angenehmer.'
        },
        faq: {
          h2: 'Häufige Fragen von Angstpatienten',
          q1: 'Bin ich ein Angstpatient?', a1: 'Wenn Sie bei dem Gedanken an einen Zahnarztbesuch Herzklopfen bekommen, Termine immer wieder verschieben, Schlafprobleme vor dem Termin haben oder im Behandlungsstuhl verkrampfen — dann sind Sie ein Angstpatient. Das ist nichts Ungewöhnliches. Schätzungsweise 60 % aller Menschen haben eine Form von Zahnarztangst. Bei uns sind Sie damit an der richtigen Adresse.',
          q2: 'Bieten Sie auch Vollnarkose an?', a2: 'Vollnarkose bieten wir in unserer Praxis nicht an, da dies einen Anästhesisten und spezielle Ausstattung erfordert. Stattdessen bieten wir Lachgassedierung an, die für die meisten Angstpatienten bereits ausreichend und sehr gut verträglich ist. Bei extremer Phobie können wir Sie an spezialisierte Kliniken überweisen.',
          q3: 'Was passiert beim ersten Termin?', a3: 'Beim ersten Termin passiert: nichts, außer Reden. Wir setzen Sie nicht in den Behandlungsstuhl, wenn Sie das nicht möchten. Wir hören zu, was Ihnen Angst macht, erklären wie wir arbeiten und beantworten alle Ihre Fragen. Erst wenn Sie sich bereit fühlen, planen wir den nächsten Schritt — in Ihrem Tempo.'
        }
      },
      aesthetik: {
        hero: { h1: 'Ästhetische Zahnheilkunde — <em>Ihr strahlendes Lächeln, unsere Leidenschaft</em>', desc: 'Bleaching, Veneers und Smile Design für Ihr schönstes, selbstbewusstes Lächeln.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Lächeln verändern', card1_p: 'Vereinbaren Sie ein kostenloses Beratungsgespräch für Ihr Smile Makeover.', card3_h3: 'Verwandte Leistungen' },
        content: {
          h2_1: 'Schönheit und Gesundheit in Einklang',
          p1: 'Ästhetische Zahnheilkunde bedeutet für uns mehr als nur Kosmetik. Jede Behandlung wird so geplant, dass sie sowohl das Erscheinungsbild als auch die Funktion und Gesundheit Ihrer Zähne verbessert. Ein schönes Lächeln stärkt das Selbstbewusstsein — und das merken wir täglich an unseren Patienten.',
          h2_2: 'Unsere ästhetischen Leistungen',
          h3_1: 'Veneers — Fassaden für perfekte Zähne',
          p2: 'Veneers sind hauchdünne Keramikschalen (ca. 0,3–0,5 mm), die auf die Vorderfläche der Zähne aufgeklebt werden. Sie überdecken Verfärbungen, Risse, Lücken und Fehlstellungen und verleihen Ihren Zähnen eine makellose, natürliche Optik. Kaum Substanzabtrag, maximaler Effekt.',
          li1_1: 'Porzellanveneers (Keramik): langlebig, natürliche Lichtbrechung', li1_2: 'Kompositveneers: weniger invasiv, kostengünstiger',
          li1_3: 'No-Prep-Veneers: gänzlich ohne Zahnschlifff', li1_4: 'Haltbarkeit von 10–20 Jahren bei guter Pflege',
          h3_2: 'Zahnbleaching (Whitening)',
          p3: 'Ein strahlendes, weißes Lächeln ist der Wunsch vieler Patienten. Wir bieten professionelles Bleaching in der Praxis (Power Bleaching) sowie individuell angepasste Heimbleaching-Schienen an. Das Ergebnis ist sicherer und effektiver als handelsübliche Produkte.',
          li2_1: 'Professionelles In-Office-Bleaching in ca. 60–90 Minuten', li2_2: 'Individuell angepasste Schienen für zu Hause',
          li2_3: 'Aufhellung um 4–12 Farbstufen möglich', li2_4: 'Schonend für den Zahnschmelz bei fachgerechter Anwendung',
          h3_3: 'Bonding — schnelle Korrekturen', p4: 'Beim Bonding wird zahnfarbenes Komposit (Kunstharz) direkt auf den Zahn aufgetragen und modelliert. Ideal für kleine Korrekturen wie Chips, Lücken (Diastema), leichte Fehlstellungen oder dezente Verfärbungen — oft in nur einem Termin.',
          h3_4: 'Smile Makeover', p5: 'Ein Smile Makeover kombiniert mehrere ästhetische Maßnahmen für ein ganzheitlich harmonisches Ergebnis. Wir analysieren Ihr Gesicht, Ihre Zahnstellung und Ihre Wünsche und erstellen einen individuellen Behandlungsplan — mit digitaler Vorschau (Digital Smile Design).',
          box: '<strong>Digital Smile Design:</strong> Bevor wir starten, zeigen wir Ihnen eine digitale Vorschau Ihres zukünftigen Lächelns. So können Sie das Ergebnis mitgestalten und sind auf Ihr neues Lächeln vorbereitet.',
          h2_3: 'Beratung und Planung',
          p6: 'Jede ästhetische Behandlung beginnt mit einem ausführlichen Beratungsgespräch. Wir hören Ihnen zu, analysieren die aktuelle Situation und entwickeln gemeinsam mit Ihnen einen maßgeschneiderten Plan — transparent bezüglich Kosten, Zeitaufwand und Ergebnis.'
        },
        benefits: {
          h2: 'Ihr Lächeln — Ihre Investition',
          b1_h4: 'Strahlendes Lächeln', b1_p: 'Ein schönes Lächeln verändert Ihr Leben — mehr Selbstbewusstsein, bessere Ausstrahlung, positiver erster Eindruck.',
          b2_h4: 'Digital Smile Design', b2_p: 'Mit moderner Software sehen Sie Ihr neues Lächeln schon vor der ersten Behandlung — Sie behalten die Kontrolle.',
          b3_h4: 'Natürlich & dauerhaft', b3_p: 'Wir arbeiten mit hochwertigen Keramikmaterialien — das Ergebnis sieht natürlich aus und hält mit guter Pflege viele Jahre.'
        },
        faq: {
          h2: 'Häufige Fragen zur Ästhetik',
          q1: 'Was ist der Unterschied zwischen Veneer und Bonding?', a1: 'Veneers sind im Labor gefertigte Keramikschalen, die dauerhaft auf den Zahn aufgeklebt werden — hochpräzise, langlebig (10–20 Jahre), aber kostenintensiver. Bonding ist eine direkte Methode: Kompositmaterial wird direkt auf den Zahn aufgetragen und geformt — günstiger, schneller, aber weniger langlebig (5–8 Jahre) und weniger resistent gegen Verfärbungen.',
          q2: 'Ist Bleaching schädlich für den Zahnschmelz?', a2: 'Professionelles Bleaching, das von einem Zahnarzt durchgeführt wird, ist bei gesunden Zähnen sicher. Die verwendeten Peroxid-Konzentrationen sind so gewählt, dass der Zahnschmelz nicht dauerhaft geschädigt wird. Temporäre Empfindlichkeit ist möglich. Wir prüfen vor dem Bleaching, ob Ihre Zähne geeignet sind.',
          q3: 'Wie lange halten Veneers?', a3: 'Keramik-Veneers halten bei guter Pflege 10–20 Jahre oder länger. Entscheidend sind: regelmäßige Prophylaxe, Verwendung einer Aufbissschiene bei Bruxismus, Vermeidung von harten Speisen und guter häuslicher Mundhygiene. Kompositveneers halten 5–8 Jahre und können repariert oder erneuert werden.'
        }
      },
      zahnerhaltung: {
        hero: { h1: 'Zahnerhaltung — <em>Natürliche Zähne erhalten</em>', desc: 'Moderne, schonende Verfahren zum langfristigen Schutz und Erhalt Ihrer natürlichen Zähne.', back: 'Alle Leistungen' },
        sidebar: { card1_h3: 'Termin vereinbaren', card1_p: 'Bei Zahnschmerzen warten Sie nicht — kommen Sie so früh wie möglich zu uns.', card3_h3: 'Weitere Leistungen' },
        content: {
          h2_1: 'Warum Zahnerhaltung an erster Stelle steht',
          p1: 'Das Ziel moderner Zahnmedizin ist der Erhalt natürlicher Zähne so lange wie möglich. Natürliche Zähne sind unübertroffen — sie sind empfindungsfähig, bieten optimale Kaufunktion und verhindern Knochenabbau. Jede Behandlung in unserer Praxis zielt darauf ab, so viel Zahnsubstanz wie möglich zu erhalten.',
          h2_2: 'Füllungstherapie',
          h3_1: 'Komposit-Füllungen (weiße Füllungen)',
          p2: 'Komposit-Kunststofffüllungen sind der Standard in der modernen Zahnmedizin. Sie werden direkt auf die Zahnfarbe abgestimmt und sind kaum von natürlicher Zahnsubstanz zu unterscheiden. Die Technik erfordert präzises Arbeiten, ist aber schonender als ältere Amalgamfüllungen.',
          li1_1: 'Zahnfarbene Ästhetik — unsichtbar nach Aushärtung', li1_2: 'Minimale Substanzentfernung notwendig',
          li1_3: 'Keine problematischen Inhaltsstoffe (kein Amalgam)', li1_4: 'In der Regel in einem Termin fertig',
          h3_2: 'Keramik-Inlays und -Onlays',
          p3: 'Bei größeren Defekten, wo eine direkte Füllung an ihre Grenzen stößt, empfehlen wir Inlays oder Onlays aus Vollkeramik. Diese werden im Labor nach digitaler Abformung gefertigt und in einem zweiten Termin eingesetzt. Sie sind extrem haltbar, ästhetisch hochwertig und schonen die Zahnsubstanz optimal.',
          li2_1: 'Inlay: füllt die Kavität von innen aus', li2_2: 'Onlay: deckt zusätzlich Höcker mit ab',
          li2_3: 'Haltbarkeit bis zu 20 Jahre', li2_4: 'Bietet optimale Kauflächenrekonstruktion',
          h2_3: 'Wurzelkanalbehandlung (Endodontie)',
          p4: 'Wenn Karies oder eine Verletzung die Zahnpulpa (den "Nerv") befallen hat, ist eine Wurzelkanalbehandlung oft die letzte Möglichkeit, den Zahn zu erhalten. Mit modernen Verfahren und Lupenbrille oder OP-Mikroskop kann dieser Eingriff heute sehr präzise und weitgehend schmerzfrei durchgeführt werden.',
          box: '<strong>Moderne Endodontie:</strong> Wir arbeiten mit rotierendem Nickel-Titan-Instrumentarium und digitaler Längenmessung für maximale Präzision und Sicherheit bei Wurzelkanalbehandlungen.',
          s1_h4: 'Diagnose und Röntgen', s1_p: 'Befundaufnahme, Vitalitätstest und digitales Röntgen zur Beurteilung der Wurzelkanäle.',
          s2_h4: 'Lokalanästhesie', s2_p: 'Zuverlässige Betäubung — die Behandlung ist nahezu schmerzfrei.',
          s3_h4: 'Aufbereitung und Desinfektion', s3_p: 'Die Wurzelkanäle werden gereinigt, aufbereitet und gründlich desinfiziert.',
          s4_h4: 'Wurzelfüllung', s4_p: 'Die aufbereiteten Kanäle werden dauerhaft mit einem biokompatiblen Material (Guttapercha) versiegelt.',
          s5_h4: 'Kronenversorgung', s5_p: 'Der behandelte Zahn wird mit einer Krone oder einem Aufbau langfristig versorgt und gestärkt.'
        },
        benefits: {
          h2: 'Warum natürliche Zähne erhalten?',
          b1_h4: 'Eigene Zähne behalten', b1_p: 'Natürliche Zähne bieten überlegene Kaufunktion, Empfindung und Ästhetik — kein Implantat erreicht die Qualität eines gesunden eigenen Zahns.',
          b2_h4: 'Höchste Präzision', b2_p: 'Wir arbeiten mit Lupenbrille und OP-Mikroskop — für minimale Substanzentfernung und optimale Ergebnisse auch bei schwierigen Fällen.',
          b3_h4: 'Schmerzfrei', b3_p: 'Moderne Lokalanästhesie macht auch Wurzelkanalbehandlungen nahezu schmerzfrei. Viele Patienten sind positiv überrascht, wie angenehm der Eingriff ist.'
        },
        faq: {
          h2: 'Häufige Fragen zur Zahnerhaltung',
          q1: 'Wann ist eine Wurzelkanalbehandlung notwendig?', a1: 'Eine Wurzelkanalbehandlung ist notwendig, wenn das Zahnmark durch Karies, Risse oder Verletzungen bakteriell befallen oder abgestorben ist. Symptome können sein: starke Zahnschmerzen, Klopfempfindlichkeit, Schwellung, Dunkelwerden des Zahns oder Empfindlichkeit auf Wärme. Ein Röntgenbild sichert die Diagnose.',
          q2: 'Ist eine Wurzelkanalbehandlung schmerzhaft?', a2: 'Der Schmerz wird oft dem Gedanken an die Behandlung zugeschrieben — nicht der Behandlung selbst. Mit moderner Lokalanästhesie ist der Eingriff nahezu schmerzfrei. Nach der Behandlung können einige Tage leichte Beschwerden auftreten. Die meisten Patienten sind überrascht, wie unkompliziert es war.',
          q3: 'Kann wirklich jeder Zahn gerettet werden?', a3: 'Nicht immer. Ob ein Zahn erhaltungswürdig ist, hängt von mehreren Faktoren ab: dem Zustand der Wurzeln, dem verbleibenden Zahnsubstanz, der Knochenunterstützung und dem Gesamtbefund. Wir beraten Sie ehrlich, ob eine Erhaltung sinnvoll ist oder ob andere Optionen langfristig die bessere Wahl wären.'
        }
      }
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
    } else if (el.childElementCount > 0) {
      // has child elements (e.g. icon spans) — update only the trailing text node
      const textNode = [...el.childNodes].reverse().find(n => n.nodeType === 3 && n.textContent.trim());
      if (textNode) textNode.textContent = ' ' + val;
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
