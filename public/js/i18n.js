/* ═══════════════════════════════════════════════════
   i18n.js — Trilingual: English + Vietnamese + German
   Dr. Kielhorn Dental Practice Website
═══════════════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    header: {
      subtitle: 'Zahnarztpraxis · Winsen (Luhe)'
    },
    nav: {
      services: 'Services',
      team: 'Team',
      practice: 'Practice',
      hours: 'Hours',
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
      svc1: { title: 'Prevention & Cleaning', desc: 'Regular professional cleaning and early detection keep your teeth healthy for life.' },
      svc2: { title: 'Implantology', desc: 'Permanent tooth replacements that look and feel natural, using premium implant systems.' },
      svc3: { title: 'Dentures', desc: 'Custom-fitted partial and full dentures for a natural appearance and comfortable fit.' },
      svc4: { title: 'Oral Surgery', desc: 'Tooth extractions, wisdom tooth removal, and surgical procedures in a gentle manner.' },
      svc5: { title: "Children's Dentistry", desc: 'Fun, fear-free dental care for children — building healthy habits from an early age.' },
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
        desc2: 'Specializing in implantology, aesthetic dentistry, and anxious patient care, he ensures every patient leaves with a smile — literally.',
        cred1: 'Specialist in Implantology',
        cred2: '20+ Years Experience',
        cred3: '2nd Generation Dentist',
        cred4: '4.9★ Patient Rating'
      },
      staff: {
        role_dentist: 'Associate Dentist',
        role_hygienist: 'Dental Hygienist',
        role_assistant: 'Dental Assistant',
        role_reception: 'Patient Coordinator'
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
      quote: 'Our goal is not just healthy teeth, but confident smiles that last a lifetime.',
      quote_author: 'Dr. Christopher Kielhorn'
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
      copyright: '© 2025 Zahnarztpraxis Dr. Christopher Kielhorn. All rights reserved.'
    }
  },

  vi: {
    header: {
      subtitle: 'Phòng Khám Nha Khoa · Winsen (Luhe)'
    },
    nav: {
      services: 'Dịch Vụ',
      team: 'Đội Ngũ',
      practice: 'Phòng Khám',
      hours: 'Giờ Mở Cửa',
      contact: 'Liên Hệ',
      cta: 'Đặt Lịch Khám'
    },
    hero: {
      tag: 'Phòng Khám Nha Khoa tại Winsen (Luhe)',
      title: 'Nha Sĩ của Bạn tại<br>Winsen (Luhe) —<br><em>Tận Tâm &amp; Chuyên Nghiệp</em>',
      desc: 'Nha khoa hiện đại, chăm sóc cá nhân và đội ngũ thực sự quan tâm đến sức khỏe của bạn. Bác sĩ Christopher Kielhorn và đội ngũ hân hạnh được đón tiếp bạn.',
      cta1: 'Đặt Lịch Khám',
      cta2: 'Gọi Ngay',
      card1_title: 'Lịch Hẹn Tiếp Theo',
      card1_sub: 'Có thể đặt hôm nay',
      card2_title: 'Không Đau',
      card2_sub: 'Phương pháp tiên tiến',
      scroll: 'Khám phá thêm',
      trust: {
        rating: '4,9 / 5 Đánh Giá',
        tradition: 'Truyền Thống Gia Đình',
        patients: 'Bệnh Nhân'
      }
    },
    benefits: {
      title1: 'Chất Lượng Xuất Sắc',
      desc1: 'Phương pháp điều trị nha khoa hiện đại và tiên tiến nhất.',
      title2: 'Chăm Sóc Tận Tình',
      desc2: 'Đặc biệt cho bệnh nhân lo lắng — sự thoải mái của bạn luôn được đặt lên hàng đầu.',
      title3: 'Công Nghệ Hiện Đại',
      desc3: 'X-quang kỹ thuật số, lập kế hoạch 3D và các phương pháp điều trị nhẹ nhàng.',
      title4: 'Thời Gian Chờ Ngắn',
      desc4: 'Lịch hẹn linh hoạt — cả buổi sáng sớm. Chúng tôi tôn trọng thời gian của bạn.'
    },
    services: {
      eyebrow: 'Những Gì Chúng Tôi Làm Cho Bạn',
      title: 'Dịch Vụ Của Chúng Tôi tại Winsen (Luhe)',
      desc: 'Từ dự phòng đến nha khoa thẩm mỹ — chúng tôi đồng hành cùng bạn hướng tới nụ cười khỏe mạnh, rạng rỡ.',
      more: 'Tìm hiểu thêm →',
      svc1: { title: 'Dự Phòng & Vệ Sinh', desc: 'Vệ sinh răng miệng chuyên nghiệp định kỳ và phát hiện sớm giúp răng của bạn khỏe mạnh suốt đời.' },
      svc2: { title: 'Cấy Ghép Implant', desc: 'Thay thế răng vĩnh viễn trông và cảm giác tự nhiên, sử dụng hệ thống implant cao cấp.' },
      svc3: { title: 'Răng Giả', desc: 'Hàm giả từng phần và toàn phần được tùy chỉnh cho vẻ ngoài tự nhiên và cảm giác thoải mái.' },
      svc4: { title: 'Phẫu Thuật Miệng', desc: 'Nhổ răng, nhổ răng khôn và các thủ thuật phẫu thuật được thực hiện nhẹ nhàng.' },
      svc5: { title: 'Nha Khoa Trẻ Em', desc: 'Chăm sóc răng miệng vui vẻ, không sợ hãi cho trẻ em — xây dựng thói quen khỏe mạnh từ nhỏ.' },
      svc6: { title: 'Bệnh Nhân Lo Lắng', desc: 'Kỹ thuật đặc biệt và môi trường thư giãn cho bệnh nhân sợ nha sĩ.' },
      svc7: { title: 'Nha Khoa Thẩm Mỹ', desc: 'Veneer, tẩy trắng và chỉnh sửa thẩm mỹ cho nụ cười tự tin hoàn hảo của bạn.' },
      svc8: { title: 'Bảo Tồn Răng', desc: 'Trám răng, điều trị tủy và inlay để bảo vệ và tăng cường răng tự nhiên của bạn.' }
    },
    team: {
      eyebrow: 'Đội Ngũ Của Chúng Tôi',
      title: 'Chuyên Nghiệp Và Tận Tâm',
      doctor: {
        role: 'Nha Sĩ Trưởng & Chủ Phòng Khám',
        name: 'Bác Sĩ Christopher Kielhorn',
        desc1: 'Bác sĩ Christopher Kielhorn đã hành nghề nha khoa tại Winsen (Luhe) hơn 20 năm, tiếp nối truyền thống nha khoa gia đình. Phương pháp của ông kết hợp độ chính xác lâm sàng với sự đồng cảm thực sự với bệnh nhân.',
        desc2: 'Chuyên môn về cấy ghép implant, nha khoa thẩm mỹ và chăm sóc bệnh nhân lo lắng, ông đảm bảo mỗi bệnh nhân rời đi với nụ cười.',
        cred1: 'Chuyên Gia Cấy Ghép Implant',
        cred2: 'Hơn 20 Năm Kinh Nghiệm',
        cred3: 'Nha Sĩ Thế Hệ Thứ 2',
        cred4: 'Đánh Giá 4,9★'
      },
      staff: {
        role_dentist: 'Nha Sĩ',
        role_hygienist: 'Chuyên Gia Vệ Sinh Răng',
        role_assistant: 'Trợ Lý Nha Khoa',
        role_reception: 'Điều Phối Viên Bệnh Nhân'
      }
    },
    practice: {
      eyebrow: 'Phòng Khám Của Chúng Tôi',
      title: 'Thiết Bị Hiện Đại, Không Gian Ấm Áp',
      desc: 'Phòng khám của chúng tôi kết hợp công nghệ nha khoa tiên tiến với môi trường chào đón, thoải mái.',
      feat1: { title: 'X-Quang Kỹ Thuật Số', desc: 'Giảm 90% bức xạ so với X-quang thông thường' },
      feat2: { title: 'Lập Kế Hoạch 3D', desc: 'Lập kế hoạch implant và điều trị chính xác' },
      feat3: { title: 'Điều Trị Không Đau', desc: 'Các lựa chọn gây mê và an thần mới nhất' },
      feat4: { title: 'Tiêu Chuẩn Vệ Sinh', desc: 'Khử trùng và kiểm soát nhiễm khuẩn được chứng nhận' },
      quote: 'Mục tiêu của chúng tôi không chỉ là răng khỏe mạnh, mà là những nụ cười tự tin kéo dài suốt đời.',
      quote_author: 'Bác Sĩ Christopher Kielhorn'
    },
    hours: {
      eyebrow: 'Giờ Mở Cửa',
      title: 'Chúng Tôi Luôn Ở Đây Cho Bạn',
      mon: 'Thứ Hai',
      tue: 'Thứ Ba',
      wed: 'Thứ Tư',
      thu: 'Thứ Năm',
      fri: 'Thứ Sáu',
      sat: 'Thứ Bảy',
      sun: 'Chủ Nhật',
      closed: 'Đóng Cửa',
      emergency: {
        title: 'Cấp Cứu Nha Khoa?',
        desc: 'Đối với đau răng khẩn cấp ngoài giờ mở cửa, hãy gọi đường dây khẩn cấp của chúng tôi hoặc đến dịch vụ nha khoa cấp cứu gần nhất.',
        cta: 'Đường Dây Khẩn Cấp: 04171 / 71212'
      }
    },
    reviews: {
      eyebrow: 'Đánh Giá Bệnh Nhân',
      title: 'Bệnh Nhân Nói Gì Về Chúng Tôi',
      score_label: 'Dựa trên 127 đánh giá Google',
      r1: { name: 'Maria S.', text: 'Đây là phòng khám nha khoa tốt nhất tôi từng đến. Bác sĩ Kielhorn cực kỳ nhẹ nhàng và chuyên nghiệp. Tôi đã từng sợ nha sĩ — nhưng không còn nữa!', date: 'Tháng 3, 2025' },
      r2: { name: 'Thomas B.', text: 'Đội ngũ tuyệt vời, thời gian chờ ngắn và kết quả xuất sắc. Implant của tôi trông hoàn toàn tự nhiên. Tôi giới thiệu cho tất cả mọi người.', date: 'Tháng 2, 2025' },
      r3: { name: 'Anna K.', text: 'Con tôi thực sự mong chờ các cuộc hẹn khám răng bây giờ. Đội ngũ rất ấm áp và kiên nhẫn. Chúng tôi sẽ không đi nơi khác.', date: 'Tháng 1, 2025' }
    },
    process: {
      eyebrow: 'Lần Đầu Đến Khám',
      title: 'Đơn Giản, Từng Bước',
      step1: { title: 'Đặt Lịch Online hoặc Qua Điện Thoại', desc: 'Chọn thời gian thuận tiện qua website hoặc gọi 04171 / 71212.' },
      step2: { title: 'Tư Vấn Lần Đầu', desc: 'Chúng tôi lắng nghe, khám và thảo luận về mục tiêu sức khỏe của bạn.' },
      step3: { title: 'Lập Kế Hoạch Điều Trị', desc: 'Kế hoạch cá nhân hóa, minh bạch, phù hợp với nhu cầu và ngân sách của bạn.' },
      step4: { title: 'Chăm Sóc Liên Tục', desc: 'Kiểm tra định kỳ để giữ nụ cười của bạn khỏe mạnh trong nhiều năm tới.' }
    },
    contact: {
      eyebrow: 'Liên Hệ Với Chúng Tôi',
      title: 'Chúng Tôi Mong Đón Tiếp Bạn',
      address_label: 'Địa Chỉ',
      address: 'Niedersachsenstraße 13a<br>21423 Winsen (Luhe)',
      phone_label: 'Điện Thoại',
      phone: '04171 / 71212',
      email_label: 'Email',
      email: 'info@zahnarzt-kielhorn-winsen.de',
      form: {
        title: 'Gửi Tin Nhắn Cho Chúng Tôi',
        note: 'Chúng tôi thường phản hồi trong vòng 24 giờ.',
        name: 'Họ và Tên',
        email_label: 'Địa Chỉ Email',
        email: 'Địa Chỉ Email',
        phone_label: 'Số Điện Thoại',
        phone: 'Số Điện Thoại',
        message_label: 'Tin Nhắn Của Bạn',
        message: 'Tin Nhắn Của Bạn',
        submit: 'Gửi Tin Nhắn',
        success: 'Cảm ơn! Chúng tôi sẽ liên hệ lại với bạn sớm.'
      }
    },
    footer: {
      tagline: 'Chăm sóc nha khoa chất lượng với sự quan tâm cá nhân tại Winsen (Luhe).',
      nav_title: 'Điều Hướng',
      services_title: 'Dịch Vụ',
      legal_title: 'Pháp Lý',
      links: {
        home: 'Trang Chủ',
        services: 'Dịch Vụ',
        team: 'Đội Ngũ',
        practice: 'Phòng Khám',
        hours: 'Giờ Mở Cửa',
        contact: 'Liên Hệ'
      },
      services_links: {
        prevention: 'Dự Phòng',
        implantology: 'Cấy Ghép Implant',
        dentures: 'Răng Giả',
        surgery: 'Phẫu Thuật Miệng',
        children: 'Nha Khoa Trẻ Em',
        anxiety: 'Bệnh Nhân Lo Lắng'
      },
      legal_links: {
        imprint: 'Thông Tin Pháp Lý',
        privacy: 'Chính Sách Bảo Mật',
        accessibility: 'Khả Năng Tiếp Cận'
      },
      copyright: '© 2025 Zahnarztpraxis Dr. Christopher Kielhorn. Bảo lưu mọi quyền.'
    }
  },

  de: {
    header: {
      subtitle: 'Zahnarztpraxis · Winsen (Luhe)'
    },
    nav: {
      services: 'Leistungen',
      team: 'Team',
      practice: 'Praxis',
      hours: 'Öffnungszeiten',
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
      svc8: { title: 'Zahnerhaltung', desc: 'Füllungen, Wurzelbehandlungen und Inlays, um Ihre natürlichen Zähne zu erhalten und zu stärken.' }
    },
    team: {
      eyebrow: 'Unser Team',
      title: 'Erfahrene Profis, Fürsorgliche Hände',
      doctor: {
        role: 'Zahnarzt & Praxisinhaber',
        name: 'Dr. Christopher Kielhorn',
        desc1: 'Dr. Christopher Kielhorn praktiziert seit über 20 Jahren Zahnmedizin in Winsen (Luhe) und setzt damit eine familiäre Zahnarzt-Tradition fort. Seine Arbeit verbindet klinische Präzision mit echtem Einfühlungsvermögen.',
        desc2: 'Mit Spezialisierung auf Implantologie, ästhetische Zahnheilkunde und die Betreuung von Angstpatienten sorgt er dafür, dass jeder Patient mit einem Lächeln die Praxis verlässt.',
        cred1: 'Spezialist für Implantologie',
        cred2: '20+ Jahre Erfahrung',
        cred3: 'Zahnarzt in 2. Generation',
        cred4: '4,9★ Patientenbewertung'
      },
      staff: {
        role_dentist: 'Zahnärztin',
        role_hygienist: 'Dentalhygienikerin',
        role_assistant: 'Zahnmedizinische Fachangestellte',
        role_reception: 'Patientenkoordinatorin'
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
      quote: 'Unser Ziel sind nicht nur gesunde Zähne, sondern selbstbewusste Lächeln, die ein Leben lang halten.',
      quote_author: 'Dr. Christopher Kielhorn'
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
      copyright: '© 2025 Zahnarztpraxis Dr. Christopher Kielhorn. Alle Rechte vorbehalten.'
    }
  }
};

/* ── Utility: resolve dot-notation key ─────────── */
function getKey(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

/* ── Apply translations to DOM ──────────────────── */
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

/* ── Update switcher UI ─────────────────────────── */
const LANG_FLAGS = { en: '🇺🇸', vi: '🇻🇳', de: '🇩🇪' };
const LANG_CODES = { en: 'en', vi: 'vi', de: 'de' };

function updateSwitcherUI(lang) {
  const flag  = document.getElementById('langFlag');
  const label = document.getElementById('langLabel');
  if (flag)  flag.textContent  = LANG_FLAGS[lang] || '🇺🇸';
  if (label) label.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = LANG_CODES[lang] || 'en';
}

/* ── Set language (main entry point) ────────────── */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  updateSwitcherUI(lang);
  localStorage.setItem('lang', lang);

  document.body.style.transition = 'opacity .15s ease';
  document.body.style.opacity = '0';
  setTimeout(() => {
    applyTranslations(lang);
    document.body.style.opacity = '1';
  }, 150);
}

/* ── Dropdown toggle ────────────────────────────── */
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

/* ── Bootstrap on DOM ready ─────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  const saved = localStorage.getItem('lang') || 'en';
  window.currentLang = saved;
  applyTranslations(saved);
  updateSwitcherUI(saved);
});
