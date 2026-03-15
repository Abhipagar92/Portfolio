export const personalInfo = {
  name: 'Abhishek Pagar',
  title: 'Java Full Stack Developer',
  tagline: 'Building scalable backends, intuitive mobile apps, and cloud-powered solutions.',
  email: 'abhishekpagar2020@gmail.com',
  phone: '+91 8390930576',
  location: 'Pune, India',
  github: 'https://github.com/Abhipagar92',
  linkedin: 'https://linkedin.com/in/abhishek-pagar-0611021a6',
  resume: '/resume.pdf',
};

export const aboutText = `I'm a passionate Java Full Stack Developer with hands-on experience across the full software development spectrum — from designing scalable REST APIs and microservices with Spring Boot and Node.js, to building intuitive Android and iOS mobile applications. I thrive at the intersection of backend engineering and mobile development, leveraging cloud technologies like AWS to build robust, production-grade systems. Currently pursuing a PG Diploma in Mobile Computing at CDAC Pune, I'm continuously expanding my expertise into AI/ML integrations and Generative AI to craft intelligent, next-generation applications.`;

export const skills = [
  {
    category: 'Programming Languages',
    icon: '💻',
    color: 'from-violet-500 to-purple-600',
    items: ['Java', 'JavaScript', 'Python', 'Kotlin', 'Dart', 'Swift'],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    color: 'from-blue-500 to-cyan-600',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Microservices'],
  },
  {
    category: 'Frontend & Mobile',
    icon: '📱',
    color: 'from-pink-500 to-rose-600',
    items: ['React.js', 'React Native', 'Android (Java/Kotlin)', 'iOS (Swift)'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-green-500 to-emerald-600',
    items: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Cloud & Tools',
    icon: '☁️',
    color: 'from-orange-500 to-amber-600',
    items: ['AWS', 'Git', 'GitHub', 'Postman', 'Figma'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    color: 'from-teal-500 to-indigo-600',
    items: ['TensorFlow Lite', 'Core ML', 'NLP', 'Prompt Engineering', 'Generative AI'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'QuickBazaar',
    subtitle: 'B2B Ordering Platform',
    description:
      'Built a scalable B2B platform connecting retailers and wholesalers for bulk purchases. Implemented JWT-based authentication and REST APIs with Express.js. Designed optimized MySQL database schema and implemented real-time features like order tracking and delivery updates.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'REST APIs', 'React', 'React Native'],
    github: 'https://github.com/QuickBazzar',
    gradient: 'from-blue-600 to-indigo-700',
    icon: '🛒',
  },
  {
    id: 2,
    title: 'UrbanCrew',
    subtitle: 'Smart Home Service Platform',
    description:
      'Developed a smart home service platform connecting users with service providers. Implemented REST APIs, Spring Security with JWT authentication, and RBAC-based access control for a secure, multi-role ecosystem.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Android', 'Spring Security', 'JWT'],
    github: 'https://github.com/Abhipagar92/SmartHomeServices',
    gradient: 'from-violet-600 to-purple-700',
    icon: '🏠',
  },
];

export const education = [
  {
    degree: 'PG Diploma in Mobile Computing',
    institution: 'CDAC ( Sunbeam Institute of Information Technology Pune )',
    period: '2025 – 2026',
    icon: '🎓',
    highlight: true,
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Savitribai Phule Pune University',
    period: '2022 – 2025',
    icon: '🏛️',
    highlight: false,
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Government Polytechnic Nashik',
    period: '2020 – 2022',
    icon: '📋',
    highlight: false,
  },
];

export const certifications = [
  {
    name: 'AWS Cloud Foundation Certification',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: 'from-orange-400 to-amber-500',
  },
  {
    name: 'Oracle Cloud Generative AI Professional Certification',
    issuer: 'Oracle',
    icon: '🤖',
    color: 'from-red-400 to-rose-500',
  },
  {
    name: 'Full Stack Development Certification',
    issuer: 'Infosys Springboard',
    icon: '🏆',
    color: 'from-blue-400 to-indigo-500',
  },
];

export const achievements = [
  {
    title: 'TCS CodeVita Hackathon 2024',
    description: 'Advanced to Round 2 — Ranked 1050 among 350,000+ participants globally.',
    icon: '🏅',
    color: 'from-yellow-400 to-orange-500',
    year: '2024',
  },
  {
    title: 'Google CrowdSource',
    description: 'Top Contributor Award — Recognized for high-quality data contributions to Google AI models.',
    icon: '🌟',
    color: 'from-green-400 to-teal-500',
    year: '2024',
  },
];
