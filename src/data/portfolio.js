export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'coding-profiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/itarikaran' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/itarikaran' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/itarikaran/' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/itarikaran' },
];

export const profileLinks = [
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/itarikaran/',
    display: 'leetcode.com/u/itarikaran',
    focus: 'Problem solving practice',
    note: 'Algorithm and data structure preparation',
    accent: 'from-amber-100 to-amber-50',
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/itarikaran',
    display: 'hackerrank.com/profile/itarikaran',
    focus: 'Coding challenges',
    note: 'Java and programming fundamentals',
    accent: 'from-emerald-100 to-emerald-50',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/itarikaran',
    display: 'github.com/itarikaran',
    focus: 'Project repositories',
    note: 'Full stack application code and experiments',
    accent: 'from-slate-100 to-slate-50',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/itarikaran',
    display: 'linkedin.com/in/itarikaran',
    focus: 'Professional profile',
    note: 'Experience, education, and updates',
    accent: 'from-blue-100 to-sky-50',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    summary: 'Comfortable writing application logic, components, and integration code.',
    items: [
      { name: 'Java', level: 92 },
      { name: 'JavaScript', level: 88 },
    ],
  },
  {
    title: 'Backend',
    summary: 'Building REST APIs, service layers, data access, and CRUD workflows.',
    items: [
      { name: 'Spring Boot', level: 91 },
      { name: 'Spring MVC', level: 88 },
      { name: 'Spring Data JPA', level: 90 },
      { name: 'RESTful APIs', level: 94 },
      { name: 'JDBC', level: 83 },
    ],
  },
  {
    title: 'Frontend',
    summary: 'Creating responsive interfaces and connecting them to backend services.',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 91 },
    ],
  },
  {
    title: 'Database',
    summary: 'Designing relational schemas and writing practical SQL for applications.',
    items: [
      { name: 'MySQL', level: 90 },
      { name: 'SQL', level: 91 },
      { name: 'Database Design', level: 88 },
    ],
  },
  {
    title: 'Tools',
    summary: 'Daily development workflow with version control, API testing, and IDEs.',
    items: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'Maven', level: 87 },
      { name: 'Postman', level: 89 },
      { name: 'IntelliJ IDEA', level: 86 },
      { name: 'VS Code', level: 94 },
    ],
  },
  {
    title: 'Core Concepts',
    summary: 'Strong programming fundamentals for readable and maintainable code.',
    items: [
      { name: 'OOP', level: 94 },
      { name: 'Collections Framework', level: 88 },
      { name: 'Exception Handling', level: 90 },
      { name: 'DBMS', level: 87 },
    ],
  },
];

export const experience = [
  {
    role: 'Java Full Stack Development Intern',
    company: 'RORIRI Software Solutions',
    type: 'Internship',
    summary: 'Developed responsive web applications using Spring Boot, React.js, Tailwind CSS, and MySQL.',
    stack: ['Spring Boot', 'React.js', 'Tailwind CSS', 'MySQL', 'Git'],
    highlights: [
      'Built REST API flows and connected them with frontend screens.',
      'Implemented database-driven CRUD functionality for application features.',
      'Used Git for version control while developing full stack modules.',
    ],
  },
  {
    role: 'Full Stack Web Development Bootcamp',
    company: 'EasyShiksha',
    type: 'Training',
    summary: 'Built full stack web applications using Java, JSP, Servlets, HTML, CSS, JavaScript, and MySQL.',
    stack: ['Java', 'JSP', 'Servlets', 'JavaScript', 'MySQL', 'Tomcat'],
    highlights: [
      'Practiced Java web fundamentals through end-to-end application tasks.',
      'Deployed Java applications on Apache Tomcat.',
      'Strengthened frontend, backend, and database integration skills.',
    ],
  },
];

export const experienceHighlights = [
  'Responsive full stack UI delivery',
  'REST API integration',
  'MySQL-backed CRUD workflows',
  'Git-based development process',
];

export const projects = [
  {
    name: 'Student Management System',
    summary: 'A full stack dashboard for managing student records with clean API-driven CRUD flows.',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
    features: ['Complete CRUD operations for student records', 'REST API integration', 'Frontend-backend integration', 'Database-driven workflow'],
    impact: ['Reduced manual record handling with a single searchable interface', 'Separated frontend and backend responsibilities for easier maintenance'],
    github: 'https://github.com/itarikaran',
    demo: 'https://arikaran.vercel.app',
  },
  {
    name: 'ApsKey',
    summary: 'An aptitude quiz web project for practicing questions, checking answers, and tracking quiz performance.',
    stack: ['React', 'Spring Boot', 'REST API', 'MySQL'],
    features: ['Aptitude question practice', 'Quiz answer validation', 'Score and result tracking', 'Full stack workflow with API integration'],
    impact: ['Helped users practice aptitude topics through a focused quiz flow', 'Organized quiz data with relational storage and backend validation'],
    github: 'https://github.com/itarikaran',
    demo: 'https://apskey.vercel.app',
  },
];

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'VV College of Engineering',
    score: '84%',
    period: '2024 - 2027',
    type: 'Degree',
    focus: 'Computer Science fundamentals, software engineering, database systems, and web application development.',
    highlights: ['Current undergraduate program', 'Strong academic performance', 'Full stack development focus'],
  },
  {
    degree: 'Diploma in Computer Science and Engineering',
    institution: 'RECT Polytechnic College',
    score: '94%',
    period: 'Completed',
    type: 'Diploma',
    focus: 'Built a foundation in programming, computer science concepts, and practical application development.',
    highlights: ['Completed with distinction-level score', 'Core programming foundation', 'Database and web basics'],
  },
];

export const certifications = [
  {
    provider: 'NPTEL',
    focus: 'University-level computer science learning',
    items: ['Programming in Java', 'Data Structure and Algorithms using Java'],
  },
  {
    provider: 'Infosys Springboard',
    focus: 'Industry-oriented Java and Spring learning',
    items: ['Learn Coding with Java', 'Spring 5 Basics with Spring Boot', 'Spring Data JPA with Boot', 'Spring REST'],
  },
];

export const contactInfo = [
  { label: 'Phone', value: '9940444012', href: 'tel:+919940440412' },
  { label: 'Email', value: 'arikaran4044@gmail.com', href: 'mailto:arikaran4044@gmail.com' },
  { label: 'Location', value: 'Tirunelveli, Tamil Nadu', href: null },
  { label: 'Portfolio', value: 'arikaran.vercel.app', href: 'https://arikaran.vercel.app' },
  { label: 'LinkedIn', value: 'linkedin.com/in/itarikaran', href: 'https://www.linkedin.com/in/itarikaran' },
  { label: 'GitHub', value: 'github.com/itarikaran', href: 'https://github.com/itarikaran' },
];
