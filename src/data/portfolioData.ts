import { Project, SkillCategory, DigitalService, ExperienceItem, WhyWorkItem } from '../types/portfolio';

// Local project images generated for the portfolio
import jarvisImg from '../assets/images/project_jarvis_ai_1790948484885.jpg';
import businessWebImg from '../assets/images/project_business_web_1790948504040.jpg';
import digitalMenuImg from '../assets/images/project_digital_qr_menu_1790948519250.jpg';
import nndBrandImg from '../assets/images/nnd_digital_brand_1790948529775.jpg';

export const PERSONAL_INFO = {
  name: 'Aadrash Kumar Sah',
  title: 'Web Developer • Python Developer • Digital Creator',
  roles: ['Web Developer', 'Python Developer', 'Digital Creator'],
  headline: 'Building practical digital experiences and software solutions with modern web technologies.',
  location: 'Nepal',
  phone: '9717126332',
  phoneFormatted: '+977 9717126332',
  email: 'aadrashkumarsah9090@gmail.com',
  brandName: 'NEW NEPAL DIGITAL',
  brandShort: 'NND',
  brandTagline: 'Your Business, Digitally Better.',
  githubPlaceholder: 'https://github.com',
  linkedinPlaceholder: 'https://linkedin.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'jarvis-assistant',
    title: 'Jarvis — Personal AI Assistant',
    category: 'Python & Automation',
    subtitle: 'Voice-controlled desktop personal assistant with system automation',
    description:
      'Python-based personal AI assistant focused on voice commands, automated system workflows, web tasks, and practical desktop utility.',
    longDescription:
      'Jarvis is an automated personal assistant engineered in Python. It listens to user voice input via speech recognition, parses intent, and executes practical tasks including desktop application launching, online information retrieval, media playback, system diagnostics, and automated tasks. Developed to explore practical speech interfaces and modular Python engineering.',
    image: jarvisImg,
    technologies: ['Python', 'SpeechRecognition', 'Pyttsx3', 'OS Automation', 'Requests API', 'Subprocess'],
    features: [
      'Voice command processing with high-accuracy speech-to-text integration',
      'Text-to-speech audio feedback with customizable voice parameters',
      'System automation: application launching, volume control, and file handling',
      'Web query automation for Wikipedia searches, web lookups, and media playback',
      'Modular command dispatching architecture for easy extension',
    ],
    architecture: [
      'Core Engine: Event-driven loop listening on audio stream',
      'NLP / Intent Parser: Keyword extraction and command routing',
      'Execution Modules: Independent Python modules for OS, Web, and Media APIs',
      'Output Layer: Speech synthesizer with asynchronous audio queue',
    ],
    githubUrl: 'https://github.com',
    liveDemoAvailable: true,
  },
  {
    id: 'business-websites',
    title: 'Business Website Projects',
    category: 'Web Development',
    subtitle: 'Modern, high-performance responsive web presence for businesses',
    description:
      'Modern responsive websites created for businesses, focusing on professional UI, responsiveness, smooth interactions, and customer-focused features.',
    longDescription:
      'A collection of business and client websites built with modern web technologies. Every project is crafted mobile-first, ensuring high performance, semantic structure, accessibility, and clear customer call-to-actions. Designed to help local businesses establish a credible and modern digital presence.',
    image: businessWebImg,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Adaptive layouts optimized across desktop, tablet, and mobile screens',
      'Performance-focused architecture with clean CSS and fast asset loading',
      'Interactive customer touchpoints: contact forms, service showcases, and maps',
      'Subtle, professional animations that enhance user experience without clutter',
      'SEO-friendly semantic structure and structured metadata',
    ],
    architecture: [
      'Component Architecture: Reusable React interface components',
      'Design System: Consistent typographic hierarchy and Tailwind token scale',
      'Layout Engine: CSS Flexbox & CSS Grid with fluid container constraints',
      'State & Forms: Controlled forms with real-time client-side validation',
    ],
    githubUrl: 'https://github.com',
    liveDemoAvailable: true,
  },
  {
    id: 'digital-qr-menu',
    title: 'Digital Menu & QR Menu',
    category: 'Digital Solutions',
    subtitle: 'Contactless, instant-access restaurant menu system with QR scanning',
    description:
      'Digital menu solutions designed for restaurants and cafés with mobile-friendly interfaces and QR-based access.',
    longDescription:
      'A streamlined digital menu solution tailored for the hospitality industry. Eliminates the cost and inconvenience of printed menus by allowing customers to scan a table QR code and instantly browse categorized food and beverage menus with high-resolution visuals, pricing, and dietary details directly on their smartphones.',
    image: digitalMenuImg,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'QR Code Integration', 'Mobile UI', 'UI/UX Fundamentals'],
    features: [
      'Instant QR-code camera scan access with zero app download requirement',
      'Categorized item navigation (Appetizers, Mains, Drinks, Specials)',
      'Fast, lightweight mobile-optimized layout designed for single-handed use',
      'Easy price and item updating without costly paper reprinting',
      'Clean search and dietary filter options for rapid customer selection',
    ],
    architecture: [
      'Client Interface: Ultra-lightweight mobile-first responsive web client',
      'Menu Data Schema: JSON-based data structure enabling instant menu updates',
      'QR Generator: Vector SVG QR codes paired with unique table/location identifiers',
      'Caching: Offline-capable local caching for reliable menu display in venues',
    ],
    githubUrl: 'https://github.com',
    liveDemoAvailable: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Programming',
    description: 'Foundational languages used for building software and scripts',
    skills: [
      { name: 'Python', description: 'Automation scripts, voice assistants, data processing, backend logic', highlight: true },
      { name: 'JavaScript', description: 'Modern ES6+, asynchronous operations, DOM manipulation, interactive apps', highlight: true },
      { name: 'HTML5', description: 'Semantic markup, accessibility, modern standards, structured documents' },
      { name: 'CSS3', description: 'Modern layout (Grid/Flexbox), custom animations, responsive design systems' },
    ],
  },
  {
    title: 'Web & Frontend Development',
    description: 'Building responsive, user-centered web applications',
    skills: [
      { name: 'React', description: 'Component-based architecture, hooks, state management, modular UIs', highlight: true },
      { name: 'Responsive Design', description: 'Fluid layouts for mobile, tablet, laptop, and ultra-wide screens', highlight: true },
      { name: 'Web Development', description: 'End-to-end website building from concept to live deployment' },
      { name: 'UI/UX Fundamentals', description: 'Visual hierarchy, typography, intuitive navigation, interaction flow' },
    ],
  },
  {
    title: 'Backend & Automation',
    description: 'Practical scripting, API integration, and process automation',
    skills: [
      { name: 'API & Backend Fundamentals', description: 'HTTP requests, RESTful architectures, JSON data endpoints', highlight: true },
      { name: 'Automation', description: 'Python scripts to automate repetitive system, file, and web tasks', highlight: true },
      { name: 'Git & GitHub', description: 'Version control, repository management, collaborative workflows' },
      { name: 'Digital Solutions', description: 'Digital & QR menus, business web solutions, technology modernization' },
    ],
  },
];

export const NND_SERVICES: DigitalService[] = [
  {
    id: 'web-design',
    name: 'Website Design',
    shortDesc: 'Custom, modern, and mobile-friendly websites for businesses seeking a credible online presence.',
    deliverables: ['Responsive Web Pages', 'Fast Loading Times', 'Clean UI Architecture', 'Contact & Inquiries'],
    tag: 'Web',
  },
  {
    id: 'digital-menu',
    name: 'Digital Menu',
    shortDesc: 'Interactive digital menus for cafés, dining spots, and restaurants for smooth ordering and browsing.',
    deliverables: ['Categorized Catalog', 'Mobile-Friendly Interface', 'Instant Item Updates', 'Rich Item Details'],
    tag: 'Hospitality',
  },
  {
    id: 'qr-menu',
    name: 'QR Menu Systems',
    shortDesc: 'Contactless QR codes designed for tables, counters, and packaging for direct smartphone menu access.',
    deliverables: ['High-Res Vector QR Codes', 'Table Stand Formats', 'Zero App Downloads', 'Frictionless Access'],
    tag: 'Contactless',
  },
  {
    id: 'banner-design',
    name: 'Banner Design',
    shortDesc: 'High-impact display banners for digital campaigns, website promotions, and physical storefronts.',
    deliverables: ['Digital Web Banners', 'Promotional Graphics', 'Print-Ready Specs', 'Crisp Typography'],
    tag: 'Design',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    shortDesc: 'Professional visual assets tailored to give your business an authoritative, polished identity.',
    deliverables: ['Marketing Materials', 'Flyers & Posters', 'Brand Collateral', 'Modern Visual Assets'],
    tag: 'Creative',
  },
  {
    id: 'social-media-design',
    name: 'Social Media Design',
    shortDesc: 'Consistent, modern social media templates and posts built to engage customers on social platforms.',
    deliverables: ['Post & Story Templates', 'Carousel Graphics', 'Brand Consistency', 'Social Ad Visuals'],
    tag: 'Marketing',
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    shortDesc: 'Clean cuts, pacing, transitions, and audio sync for promotional reels, demos, and business clips.',
    deliverables: ['Reels & Short Clips', 'Promotional Videos', 'Audio & Pace Polish', 'Subtitle & Captions'],
    tag: 'Video',
  },
  {
    id: 'branding-creative',
    name: 'Branding & Creative Services',
    shortDesc: 'Cohesive visual identity systems including typography pairings, palettes, and brand guidelines.',
    deliverables: ['Brand Color Palettes', 'Typography Guidelines', 'Visual Identity Assets', 'Cohesive Aesthetic'],
    tag: 'Branding',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Founder & Independent Developer',
    organization: 'NEW NEPAL DIGITAL (NND)',
    type: 'Independent & Client Projects',
    summary:
      'Directing end-to-end digital solutions for local enterprises and businesses. Developing responsive websites, QR and digital menu systems, and digital creative assets.',
    achievements: [
      'Architected and deployed responsive business websites focusing on clean UX and fast performance.',
      'Designed and delivered digital QR menu workflows for hospitality venues to streamline dining experiences.',
      'Engineered cross-media branding, social creative assets, and digital marketing materials.',
      'Maintained direct communication with stakeholders to translate business needs into technical solutions.',
    ],
    technologies: ['React', 'JavaScript', 'HTML5/CSS3', 'Python', 'QR Systems', 'Graphic Design'],
  },
  {
    period: '2023 — Present',
    role: 'Self-Driven Software & Python Development',
    organization: 'Independent Engineering & Open Source',
    type: 'Practical Project Building',
    summary:
      'Continuous hands-on software development with a focus on Python automation, modern web development, and problem solving through real code.',
    achievements: [
      'Built "Jarvis", a voice-activated personal assistant in Python integrating speech recognition and OS automation.',
      'Implemented multiple full-stack and front-end web experiments using React, modern JavaScript, and Tailwind CSS.',
      'Practiced version control workflows with Git and GitHub, adhering to clean repository structures.',
      'Invested in continuous self-directed learning across algorithm fundamentals, APIs, and modern UI/UX design.',
    ],
    technologies: ['Python', 'SpeechRecognition', 'Automation Scripts', 'Git & GitHub', 'REST APIs'],
  },
];

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    title: 'Self-Driven Learning',
    description:
      'Committed to rapid, independent learning through hands-on documentation, trial, and production implementation. Able to pick up new tools and frameworks quickly.',
    iconName: 'Sparkles',
  },
  {
    title: 'Practical Project Experience',
    description:
      'Rather than relying only on theoretical knowledge, skills are forged by creating real functional projects like voice automation tools and client digital menus.',
    iconName: 'Code',
  },
  {
    title: 'Problem-Solving Mindset',
    description:
      'Approaches technical challenges systematically. Breaks down complex requirements into clean, manageable, and maintainable software components.',
    iconName: 'Cpu',
  },
  {
    title: 'Attention to Detail',
    description:
      'Obsessed with polish—from responsive breakpoints and fluid spacing to clean typography and performant code execution across devices.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Willingness to Learn',
    description:
      'Open to constructive feedback, eager to learn from experienced senior engineers, and motivated to continuously refine coding practices and standards.',
    iconName: 'BookOpen',
  },
  {
    title: 'Independent Project Ownership',
    description:
      'Experienced in taking an initiative from raw idea to final delivery. Self-motivated, dependable, and capable of operating with clear personal accountability.',
    iconName: 'ShieldCheck',
  },
];

export const NND_BRAND_IMAGE = nndBrandImg;
