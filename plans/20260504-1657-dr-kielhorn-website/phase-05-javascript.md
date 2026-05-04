# Phase 05 — JavaScript (main.js + i18n.js)

## Overview
- **Priority:** High
- **Status:** Pending
- **Desc:** Two JS files: `i18n.js` handles language system + full EN/VI translations; `main.js` handles all animations, interactions, and UI behaviors.

---

## File: `public/js/i18n.js`

### Responsibilities
1. Define `TRANSLATIONS` object (EN + VI)
2. `setLanguage(lang)` — updates all `[data-i18n]` elements, saves to localStorage
3. Language switcher dropdown open/close logic
4. On DOMContentLoaded: load saved language (default: 'en')

### Structure
```js
const TRANSLATIONS = {
  en: { /* English strings */ },
  vi: { /* Vietnamese strings */ }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = getNestedKey(TRANSLATIONS[lang], key);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });
  // Update html lang attr
  document.documentElement.lang = lang === 'en' ? 'en' : 'vi';
  // Update switcher UI
  document.getElementById('langFlag').textContent = lang === 'en' ? '🇺🇸' : '🇻🇳';
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  // Update active state on options
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  // Persist
  localStorage.setItem('lang', lang);
  window.currentLang = lang;
}
```

### Full EN Translations
```js
en: {
  header: { subtitle: "Zahnarztpraxis · Winsen (Luhe)" },
  nav: {
    services: "Services", team: "Team", practice: "Practice",
    hours: "Hours", contact: "Contact", cta: "Book Appointment"
  },
  hero: {
    tag: "Dental Practice in Winsen (Luhe)",
    title: "Your Dentist in<br>Winsen (Luhe) —<br><em>With Heart & Expertise</em>",
    desc: "Modern dentistry, personal care, and a team that truly cares about your well-being. Dr. Christopher Kielhorn and his team look forward to welcoming you.",
    cta1: "Book Appointment", cta2: "Call Now",
    card1_title: "Next Appointment", card1_sub: "Available today",
    card2_title: "Pain-Free", card2_sub: "Cutting-edge methods",
    trust: { rating: "4.9 / 5 Rating", tradition: "Family Tradition", patients: "Patients" }
  },
  benefits: {
    title1: "Excellent Quality", desc1: "State-of-the-art dental treatments using the latest methods.",
    title2: "Compassionate Care", desc2: "Especially for anxious patients — your comfort always comes first.",
    title3: "Modern Technology", desc3: "Digital X-ray, 3D planning and gentle treatment procedures.",
    title4: "Short Wait Times", desc4: "Flexible appointments — also early mornings. We respect your time."
  },
  services: {
    eyebrow: "What We Do For You",
    title: "Our Services in Winsen (Luhe)",
    desc: "From prevention to aesthetic dentistry — we guide you towards a healthy, radiant smile.",
    more: "Learn more →",
    svc1: { title: "Prevention & Cleaning", desc: "Regular professional cleaning and early detection keep your teeth healthy for life." },
    svc2: { title: "Implantology", desc: "Permanent tooth replacements that look and feel natural, using premium implant systems." },
    svc3: { title: "Dentures", desc: "Custom-fitted partial and full dentures for a natural appearance and comfortable fit." },
    svc4: { title: "Oral Surgery", desc: "Tooth extractions, wisdom tooth removal, and surgical procedures in a gentle manner." },
    svc5: { title: "Children's Dentistry", desc: "Fun, fear-free dental care for children — building healthy habits from an early age." },
    svc6: { title: "Anxious Patients", desc: "Special techniques and a calming environment for patients who fear the dentist." },
    svc7: { title: "Aesthetic Dentistry", desc: "Veneers, whitening, and cosmetic corrections for your perfect confident smile." },
    svc8: { title: "Tooth Preservation", desc: "Fillings, root canal treatments, and inlays to save and strengthen your natural teeth." }
  },
  team: {
    eyebrow: "Our Team",
    title: "Experienced Professionals, Caring Hands",
    doctor: {
      role: "Principal Dentist & Practice Owner",
      name: "Dr. Christopher Kielhorn",
      desc1: "Dr. Christopher Kielhorn has been practicing dentistry in Winsen (Luhe) for over 20 years, continuing a family tradition of dental excellence. His approach combines clinical precision with genuine patient empathy.",
      desc2: "Specializing in implantology, aesthetic dentistry, and anxious patient care, he ensures every patient leaves with a smile — literally.",
      cred1: "Specialist in Implantology", cred2: "20+ Years Experience",
      cred3: "2nd Generation Dentist", cred4: "4.9★ Patient Rating"
    },
    staff: {
      role_dentist: "Associate Dentist",
      role_hygienist: "Dental Hygienist",
      role_assistant: "Dental Assistant",
      role_reception: "Patient Coordinator"
    }
  },
  practice: {
    eyebrow: "Our Practice",
    title: "Modern Equipment, Warm Atmosphere",
    desc: "Our practice combines cutting-edge dental technology with a welcoming, comfortable environment.",
    feat1: { title: "Digital X-Ray", desc: "90% less radiation than conventional X-ray" },
    feat2: { title: "3D Planning", desc: "Precise implant and treatment planning" },
    feat3: { title: "Pain-Free Treatment", desc: "Latest anaesthesia and sedation options" },
    feat4: { title: "Hygienic Standards", desc: "Certified sterilisation and infection control" },
    quote: "Our goal is not just healthy teeth, but confident smiles that last a lifetime.",
    quote_author: "Dr. Christopher Kielhorn"
  },
  hours: {
    eyebrow: "Opening Hours",
    title: "We Are Here For You",
    mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday",
    sat: "Saturday", sun: "Sunday",
    closed: "Closed",
    emergency: {
      title: "Dental Emergency?",
      desc: "For urgent dental pain outside opening hours, please call our emergency line or visit the nearest emergency dental service.",
      cta: "Emergency Line: 04171 / 71212"
    }
  },
  reviews: {
    eyebrow: "Patient Reviews",
    title: "What Our Patients Say",
    score_label: "Based on 127 Google reviews",
    r1: { name: "Maria S.", text: "Absolutely the best dental practice I have ever visited. Dr. Kielhorn is incredibly gentle and professional. I used to fear the dentist — not anymore!", date: "March 2025" },
    r2: { name: "Thomas B.", text: "Wonderful team, short wait times, and excellent results. My implants look completely natural. Highly recommended to everyone.", date: "February 2025" },
    r3: { name: "Anna K.", text: "My children actually look forward to their dental appointments now. The team is so warm and patient. We won't go anywhere else.", date: "January 2025" }
  },
  process: {
    eyebrow: "Your First Visit",
    title: "Simple, Step by Step",
    step1: { title: "Book Online or by Phone", desc: "Choose a convenient time via our website or call 04171 / 71212." },
    step2: { title: "First Consultation", desc: "We listen, examine, and discuss your dental goals and health." },
    step3: { title: "Treatment Planning", desc: "A personalised, transparent plan tailored to your needs and budget." },
    step4: { title: "Ongoing Care", desc: "Regular check-ups to keep your smile healthy for years to come." }
  },
  contact: {
    eyebrow: "Contact Us",
    title: "We Look Forward to Your Visit",
    address_label: "Address", address: "Niedersachsenstraße 13a<br>21423 Winsen (Luhe)",
    phone_label: "Phone", phone: "04171 / 71212",
    fax_label: "Fax", fax: "04171 / 73223-0",
    email_label: "Email", email: "info@zahnarzt-kielhorn-winsen.de",
    form: {
      title: "Send Us a Message",
      name: "Your Name", email: "Email Address", phone: "Phone Number",
      message: "Your Message", submit: "Send Message",
      success: "Thank you! We will get back to you shortly."
    }
  },
  footer: {
    tagline: "Quality dental care with a personal touch in Winsen (Luhe).",
    nav_title: "Navigation",
    services_title: "Services",
    legal_title: "Legal",
    links: {
      home: "Home", services: "Services", team: "Team",
      practice: "Practice", hours: "Hours", contact: "Contact"
    },
    services_links: {
      prevention: "Prevention", implantology: "Implantology",
      dentures: "Dentures", surgery: "Oral Surgery",
      children: "Children's Dentistry", anxiety: "Anxious Patients"
    },
    legal_links: {
      imprint: "Imprint", privacy: "Privacy Policy", accessibility: "Accessibility"
    },
    copyright: "© 2025 Zahnarztpraxis Dr. Christopher Kielhorn. All rights reserved."
  }
}
```

### Full VI Translations
```js
vi: {
  header: { subtitle: "Phòng Khám Nha Khoa · Winsen (Luhe)" },
  nav: {
    services: "Dịch Vụ", team: "Đội Ngũ", practice: "Phòng Khám",
    hours: "Giờ Mở Cửa", contact: "Liên Hệ", cta: "Đặt Lịch Khám"
  },
  hero: {
    tag: "Phòng Khám Nha Khoa tại Winsen (Luhe)",
    title: "Nha Sĩ của Bạn tại<br>Winsen (Luhe) —<br><em>Tận Tâm & Chuyên Nghiệp</em>",
    desc: "Nha khoa hiện đại, chăm sóc cá nhân và đội ngũ thực sự quan tâm đến sức khỏe của bạn. Bác sĩ Christopher Kielhorn và đội ngũ hân hạnh được đón tiếp bạn.",
    cta1: "Đặt Lịch Khám", cta2: "Gọi Ngay",
    card1_title: "Lịch Hẹn Tiếp Theo", card1_sub: "Có thể đặt hôm nay",
    card2_title: "Không Đau", card2_sub: "Phương pháp tiên tiến",
    trust: { rating: "4,9 / 5 Đánh Giá", tradition: "Truyền Thống Gia Đình", patients: "Bệnh Nhân" }
  },
  benefits: {
    title1: "Chất Lượng Xuất Sắc", desc1: "Phương pháp điều trị nha khoa hiện đại nhất.",
    title2: "Chăm Sóc Tận Tình", desc2: "Đặc biệt cho bệnh nhân lo lắng — sự thoải mái của bạn luôn được đặt lên hàng đầu.",
    title3: "Công Nghệ Hiện Đại", desc3: "X-quang kỹ thuật số, lập kế hoạch 3D và các phương pháp điều trị nhẹ nhàng.",
    title4: "Thời Gian Chờ Ngắn", desc4: "Lịch hẹn linh hoạt — cả buổi sáng sớm. Chúng tôi tôn trọng thời gian của bạn."
  },
  services: {
    eyebrow: "Những Gì Chúng Tôi Làm Cho Bạn",
    title: "Dịch Vụ Của Chúng Tôi tại Winsen (Luhe)",
    desc: "Từ dự phòng đến nha khoa thẩm mỹ — chúng tôi đồng hành cùng bạn hướng tới nụ cười khỏe mạnh, rạng rỡ.",
    more: "Tìm hiểu thêm →",
    svc1: { title: "Dự Phòng & Vệ Sinh", desc: "Vệ sinh răng miệng chuyên nghiệp định kỳ và phát hiện sớm giúp răng của bạn khỏe mạnh suốt đời." },
    svc2: { title: "Cấy Ghép Implant", desc: "Thay thế răng vĩnh viễn trông và cảm giác tự nhiên, sử dụng hệ thống implant cao cấp." },
    svc3: { title: "Răng Giả", desc: "Hàm giả từng phần và toàn phần được tùy chỉnh cho vẻ ngoài tự nhiên và cảm giác thoải mái." },
    svc4: { title: "Phẫu Thuật Miệng", desc: "Nhổ răng, nhổ răng khôn và các thủ thuật phẫu thuật được thực hiện nhẹ nhàng." },
    svc5: { title: "Nha Khoa Trẻ Em", desc: "Chăm sóc răng miệng vui vẻ, không sợ hãi cho trẻ em — xây dựng thói quen khỏe mạnh từ nhỏ." },
    svc6: { title: "Bệnh Nhân Lo Lắng", desc: "Kỹ thuật đặc biệt và môi trường thư giãn cho bệnh nhân sợ nha sĩ." },
    svc7: { title: "Nha Khoa Thẩm Mỹ", desc: "Veneer, tẩy trắng và chỉnh sửa thẩm mỹ cho nụ cười tự tin hoàn hảo của bạn." },
    svc8: { title: "Bảo Tồn Răng", desc: "Trám răng, điều trị tủy và inlay để bảo vệ và tăng cường răng tự nhiên của bạn." }
  },
  team: {
    eyebrow: "Đội Ngũ Của Chúng Tôi",
    title: "Chuyên Nghiệp Và Tận Tâm",
    doctor: {
      role: "Nha Sĩ Trưởng & Chủ Phòng Khám",
      name: "Bác Sĩ Christopher Kielhorn",
      desc1: "Bác sĩ Christopher Kielhorn đã hành nghề nha khoa tại Winsen (Luhe) hơn 20 năm, tiếp nối truyền thống nha khoa gia đình. Phương pháp của ông kết hợp độ chính xác lâm sàng với sự đồng cảm thực sự với bệnh nhân.",
      desc2: "Chuyên môn về cấy ghép implant, nha khoa thẩm mỹ và chăm sóc bệnh nhân lo lắng, ông đảm bảo mỗi bệnh nhân rời đi với nụ cười.",
      cred1: "Chuyên Gia Cấy Ghép Implant", cred2: "Hơn 20 Năm Kinh Nghiệm",
      cred3: "Nha Sĩ Thế Hệ Thứ 2", cred4: "Đánh Giá 4,9★"
    },
    staff: {
      role_dentist: "Nha Sĩ",
      role_hygienist: "Chuyên Gia Vệ Sinh Răng",
      role_assistant: "Trợ Lý Nha Khoa",
      role_reception: "Điều Phối Viên Bệnh Nhân"
    }
  },
  practice: {
    eyebrow: "Phòng Khám Của Chúng Tôi",
    title: "Thiết Bị Hiện Đại, Không Gian Ấm Áp",
    desc: "Phòng khám của chúng tôi kết hợp công nghệ nha khoa tiên tiến với môi trường chào đón, thoải mái.",
    feat1: { title: "X-Quang Kỹ Thuật Số", desc: "Giảm 90% bức xạ so với X-quang thông thường" },
    feat2: { title: "Lập Kế Hoạch 3D", desc: "Lập kế hoạch implant và điều trị chính xác" },
    feat3: { title: "Điều Trị Không Đau", desc: "Các lựa chọn gây mê và an thần mới nhất" },
    feat4: { title: "Tiêu Chuẩn Vệ Sinh", desc: "Khử trùng và kiểm soát nhiễm khuẩn được chứng nhận" },
    quote: "Mục tiêu của chúng tôi không chỉ là răng khỏe mạnh, mà là những nụ cười tự tin kéo dài suốt đời.",
    quote_author: "Bác Sĩ Christopher Kielhorn"
  },
  hours: {
    eyebrow: "Giờ Mở Cửa",
    title: "Chúng Tôi Luôn Ở Đây Cho Bạn",
    mon: "Thứ Hai", tue: "Thứ Ba", wed: "Thứ Tư", thu: "Thứ Năm", fri: "Thứ Sáu",
    sat: "Thứ Bảy", sun: "Chủ Nhật",
    closed: "Đóng Cửa",
    emergency: {
      title: "Cấp Cứu Nha Khoa?",
      desc: "Đối với đau răng khẩn cấp ngoài giờ mở cửa, hãy gọi đường dây khẩn cấp của chúng tôi hoặc đến dịch vụ nha khoa cấp cứu gần nhất.",
      cta: "Đường Dây Khẩn Cấp: 04171 / 71212"
    }
  },
  reviews: {
    eyebrow: "Đánh Giá Bệnh Nhân",
    title: "Bệnh Nhân Nói Gì Về Chúng Tôi",
    score_label: "Dựa trên 127 đánh giá Google",
    r1: { name: "Maria S.", text: "Đây là phòng khám nha khoa tốt nhất tôi từng đến. Bác sĩ Kielhorn cực kỳ nhẹ nhàng và chuyên nghiệp. Tôi đã từng sợ nha sĩ — nhưng không còn nữa!", date: "Tháng 3, 2025" },
    r2: { name: "Thomas B.", text: "Đội ngũ tuyệt vời, thời gian chờ ngắn và kết quả xuất sắc. Implant của tôi trông hoàn toàn tự nhiên. Tôi giới thiệu cho tất cả mọi người.", date: "Tháng 2, 2025" },
    r3: { name: "Anna K.", text: "Con tôi thực sự mong chờ các cuộc hẹn khám răng bây giờ. Đội ngũ rất ấm áp và kiên nhẫn. Chúng tôi sẽ không đi nơi khác.", date: "Tháng 1, 2025" }
  },
  process: {
    eyebrow: "Lần Đầu Đến Khám",
    title: "Đơn Giản, Từng Bước",
    step1: { title: "Đặt Lịch Online hoặc Qua Điện Thoại", desc: "Chọn thời gian thuận tiện qua website của chúng tôi hoặc gọi 04171 / 71212." },
    step2: { title: "Tư Vấn Lần Đầu", desc: "Chúng tôi lắng nghe, khám và thảo luận về mục tiêu sức khỏe răng miệng của bạn." },
    step3: { title: "Lập Kế Hoạch Điều Trị", desc: "Kế hoạch cá nhân hóa, minh bạch, phù hợp với nhu cầu và ngân sách của bạn." },
    step4: { title: "Chăm Sóc Liên Tục", desc: "Kiểm tra định kỳ để giữ nụ cười của bạn khỏe mạnh trong nhiều năm tới." }
  },
  contact: {
    eyebrow: "Liên Hệ Với Chúng Tôi",
    title: "Chúng Tôi Mong Đón Tiếp Bạn",
    address_label: "Địa Chỉ", address: "Niedersachsenstraße 13a<br>21423 Winsen (Luhe)",
    phone_label: "Điện Thoại", phone: "04171 / 71212",
    fax_label: "Fax", fax: "04171 / 73223-0",
    email_label: "Email", email: "info@zahnarzt-kielhorn-winsen.de",
    form: {
      title: "Gửi Tin Nhắn Cho Chúng Tôi",
      name: "Họ và Tên", email: "Địa Chỉ Email", phone: "Số Điện Thoại",
      message: "Tin Nhắn Của Bạn", submit: "Gửi Tin Nhắn",
      success: "Cảm ơn! Chúng tôi sẽ liên hệ lại với bạn sớm."
    }
  },
  footer: {
    tagline: "Chăm sóc nha khoa chất lượng với sự quan tâm cá nhân tại Winsen (Luhe).",
    nav_title: "Điều Hướng",
    services_title: "Dịch Vụ",
    legal_title: "Pháp Lý",
    links: {
      home: "Trang Chủ", services: "Dịch Vụ", team: "Đội Ngũ",
      practice: "Phòng Khám", hours: "Giờ Mở Cửa", contact: "Liên Hệ"
    },
    services_links: {
      prevention: "Dự Phòng", implantology: "Cấy Ghép Implant",
      dentures: "Răng Giả", surgery: "Phẫu Thuật Miệng",
      children: "Nha Khoa Trẻ Em", anxiety: "Bệnh Nhân Lo Lắng"
    },
    legal_links: {
      imprint: "Thông Tin Pháp Lý", privacy: "Chính Sách Bảo Mật", accessibility: "Khả Năng Tiếp Cận"
    },
    copyright: "© 2025 Zahnarztpraxis Dr. Christopher Kielhorn. Bảo lưu mọi quyền."
  }
}
```

---

## File: `public/js/main.js`

### Responsibilities
1. Sticky header scroll effect (add `.scrolled` class)
2. Hamburger / mobile nav toggle
3. Smooth scroll for anchor links
4. Scroll reveal (Intersection Observer) for `[data-reveal]` elements
5. Counter animations (trust stats: patients, rating)
6. GSAP ScrollTrigger animations (hero, section entrances)
7. FAQ accordion (if included)
8. Contact form submit handler (preventDefault + show success)
9. Language dropdown open/close (delegated from i18n.js)

### Key Implementations

#### Intersection Observer (Scroll Reveal)
```js
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
```

#### Counter Animation
```js
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString() + (el.dataset.suffix || '');
  };
  requestAnimationFrame(step);
}
```

#### GSAP Hero Animation (on load)
```js
gsap.from('.hero-text', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.2 });
gsap.from('.hero-visual', { opacity: 0, x: 40, duration: 1, ease: 'power3.out', delay: 0.4 });
gsap.from('.hero-card--1', { opacity: 0, x: -30, duration: 0.8, ease: 'back.out(1.7)', delay: 0.9 });
gsap.from('.hero-card--2', { opacity: 0, x: 30, duration: 0.8, ease: 'back.out(1.7)', delay: 1.1 });
```

#### Active Nav Link on Scroll
```js
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < bottom);
  });
});
```

#### Contact Form
```js
document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const success = document.querySelector('.form-success');
  if (success) { success.style.display = 'block'; }
  e.target.reset();
  setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
});
```

## Success Criteria
- Language switches instantly on click, persists on reload
- All `data-i18n` elements update correctly in both languages
- Scroll reveal fires once per element as viewport enters
- Counter animations trigger on scroll into view
- Mobile nav opens/closes correctly
- Contact form shows success message
- No console errors in browser
