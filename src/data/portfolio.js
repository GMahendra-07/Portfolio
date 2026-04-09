// ===== PORTFOLIO DATA =====
// All extracted data from HTML portfolio

export const personalInfo = {
  name: 'Gunduboina',
  lastName: 'Mahendra',
  fullName: 'Gunduboina Mahendra',
  designation: 'Full Stack Java Developer',
  title: 'Java Full Stack Developer — Spring Boot, React, MySQL, REST APIs',
  tagline: 'Building scalable backend systems and modern web applications — one commit at a time.',
  description: 'A passionate fresher with industrial training, real-time project experience, and a relentless drive to build things that matter.',
  email: 'gunduboinamahendra@gmail.com',
  phone: '+91 93924 29683',
  location: 'Chennai, Tamil Nadu, India',
  status: '✅ Actively Looking · Available Immediately',
  heroSubtitle: 'Industrial Training · Java · Spring Boot · React · MySQL',
  resumeUrl: '/resume/Mahendra R.pdf',
  offerLetterUrl: '/certificate/Mahendra-Training offer letter (1).pdf',
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/gunduboina-mahendra-844a62327',
  github: 'https://github.com/GMahendra-07',
  instagram: 'https://www.instagram.com/__mahi._.maxx__?igsh=amR0OXlkaXczZnox',
  facebook: 'https://www.facebook.com/share/1EKS8YLJSA/',
  email: 'mailto:gunduboinamahendra@gmail.com',
};

export const heroStats = [
  { number: '6+', unit: 'Months Training' },
  { number: '2', unit: 'Real Projects' },
  { number: '8.5', unit: 'MCA CGPA' },
];

export const aboutContent = {
  intro: 'Hi, I\'m Mahendra 👋 I build backend systems that scale.',
  description1: 'I\'m a Java Full Stack Developer with hands-on industrial training at 3Edge Solutions, Chennai. I specialize in Spring Boot REST API development, database design with MySQL & Hibernate, and React-based frontends.',
  description2: 'Over 6+ months of intensive training, I\'ve delivered two complete real-time projects following industry SDLC workflows — from requirement analysis to API testing and deployment. I write clean, maintainable code and take pride in robust exception handling and system optimization.',
  description3: 'I hold an MCA (8.5 CGPA) and BCA (8.5 CGPA), and I\'m fluent in English, Telugu & Tamil — ready for collaborative MNC environments from day one.',
  traits: [
    'Problem Solver',
    'Clean Code',
    'Team Player',
    'Adaptable',
    'Creative',
    'Fast Learner',
  ],
};

export const highlights = [
  { icon: '🏗️', title: 'Backend Architecture', desc: 'Spring Boot, REST APIs, MVC, Hibernate JPA' },
  { icon: '🗄️', title: 'Database Design', desc: 'MySQL, normalized schemas, SQL tuning' },
  { icon: '⚛️', title: 'Frontend Integration', desc: 'React, JavaScript, HTML5, CSS3' },
  { icon: '🧪', title: 'API Testing & QA', desc: 'Postman, debugging, validation, SDLC' },
];

export const education = {
  degree: 'MCA · 8.5 CGPA',
  school: 'Mahendra Engineering College',
  year: '2025',
};

export const skillsData = {
  backend: [
    { icon: '☕', name: 'Java', proficiency: 88 },
    { icon: '🍃', name: 'Spring Boot', proficiency: 82 },
    { icon: '🔗', name: 'REST APIs', proficiency: 85 },
    { icon: '🗃️', name: 'Hibernate', proficiency: 78 },
  ],
  frontend: [
    { icon: '⚛️', name: 'React', proficiency: 70 },
    { icon: '🌐', name: 'HTML5', proficiency: 80 },
    { icon: '🎨', name: 'CSS3', proficiency: 78 },
    { icon: '🟨', name: 'JavaScript', proficiency: 68 },
  ],
  tools: [ 
    { icon: '🐬', name: 'MySQL', proficiency: 82 },
    { icon: '📮', name: 'Postman', proficiency: 84 },
    { icon: '🐙', name: 'GitHub', proficiency: 80 },
    { icon: '🛠️', name: 'IntelliJ', proficiency: 86 },
    { icon: '🖥️', name: 'VS Code', proficiency: 80 },
  ],
};

export const experience = [
  {
    id: 1,
    period: 'Oct 2025 — Mar 2026 · 6 Months',
    role: 'Full Stack Java Trainee',
    company: '3Edge Solutions (Tra-augment People Solutions Pvt. Ltd.)',
    location: 'Chennai, India',
    description:
      'Completed an intensive 6-month Certification Program in Software Engineering (CPSE), specializing in Java Full Stack development. Attended daily offline sessions (9AM–6PM, Mon–Fri) with regular evaluations, mini-projects, and assignments. Delivered two complete real-time projects following full SDLC workflows — from requirement gathering and database design to API development, testing, and deployment.',
    keyResponsibilities:
      'Designed and developed Spring Boot REST APIs · Implemented MySQL relational database schemas · Built React frontends integrated with backend APIs · Performed API testing & debugging via Postman · Applied CRUD operations, exception handling, and validation · Followed clean code practices and MVC architecture.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'Hibernate JPA', 'REST APIs', 'Postman', 'Git', 'SDLC'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'ABC Bank — Customer Self-Service System',
    description:
      'A full-stack banking application enabling customers to manage accounts, perform transactions, and view statements — built with enterprise-grade security and a seamless UI.',
    icon: '🏦',
    gradient: 'linear-gradient(145deg,#0d1b3e 0%,#1a3a6e 50%,#1e4fa0 100%)',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
    features: [
      'Normalized MySQL relational database schema with optimized SQL queries & constraints',
      'Role-based authentication, input validation & global exception handling',
      'React frontend seamlessly integrated with Spring Boot REST APIs',
      'API testing, debugging & deployment support following SDLC practices',
      'Server-side validation & comprehensive error handling mechanisms',
    ],
    githubUrl: 'https://github.com/GMahendra-07/ABC_-Bank_Customer_self_Service_System',
    date: 'Jan – Feb 2026',
  },
  {
    id: 2,
    title: 'Hotel Management System',
    description:
      'A robust backend system for end-to-end hotel operations — managing room bookings, guest records, staff management, and billing with a clean modular architecture.',
    icon: '🏨',
    gradient: 'linear-gradient(145deg,#0a2744 0%,#1565C0 60%,#1976D2 100%)',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
    features: [
      'Spring Boot + Hibernate JPA with layered, modular backend architecture',
      'CRUD-based REST APIs with MySQL database connectivity',
      'Transaction management, validation & global exception handling',
      'Clean coding principles ensuring reusable, maintainable codebase',
      'API testing & performance optimization via Postman & SQL tuning',
    ],
    githubUrl: 'https://github.com/GMahendra-07/Hotel_Management',
    date: 'Dec 2025 – Jan 2026',
  },
];

export const certifications = [
  {
    id: 1,
    issuer: '3Edge Solutions · Tra-augment People Solutions Pvt. Ltd.',
    name: 'Certification Program in Software Engineering (CPSE)\nJava Full Stack',
    date: 'October 2025 – March 2026 · Chennai, India',
    icon: '🎓',
    offerLetterUrl: import.meta.env.VITE_OFFER_LETTER_URL || 'https://drive.google.com/file/d/example/view',
    badge: 'Click to View',
  },
];

export const contactInfo = [
  { icon: '📧', label: 'Email', value: 'gunduboinamahendra@gmail.com', link: 'mailto:gunduboinamahendra@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 93924 29683' },
  { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu, India' },
  { icon: '💼', label: 'Status', value: '✅ Actively Looking · Available Immediately' },
];

export const siteConfig = {
  title: 'Gunduboina Mahendra — Java Full Stack Developer',
  description: 'Portfolio of Gunduboina Mahendra, Java Full Stack Developer — Spring Boot, React, MySQL, REST APIs',
  author: 'Gunduboina Mahendra',
  year: new Date().getFullYear(),
};
