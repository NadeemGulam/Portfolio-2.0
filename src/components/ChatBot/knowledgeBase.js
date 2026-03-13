// ═══════════════════════════════════════════
// Portfolio Knowledge Base — Structured Data
// ═══════════════════════════════════════════

const portfolio = {
  about: {
    name: "Nadeem Gulam",
    title: "Software Engineer",
    tagline: "Aspiring Fullstack Developer",
    bio: "Software Engineer at ANZ, working with Node.js, AWS, GCP, Docker, Kubernetes, and microservices to build mediation tools. Previously at Fidelity Investments, focusing on Angular and GraphQL development. Strong foundation in both frontend and backend technologies, having built robust applications using the MERN stack, Next.js, and more. Passionate about tackling complex problems, expanding skills, and embracing new challenges.",
    location: "Bangalore, India",
    codingExperience: "1+ years professional",
    collegeRank: "Ranked 15th in entire college for coding",
    projectCount: "20+ completed projects",
  },

  skills: {
    frontend: [
      { name: "Angular", level: "Experienced" },
      { name: "React.js", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
    ],
    backend: [
      { name: "Java", level: "Intermediate" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "AWS Cloud", level: "Intermediate" },
      { name: "C++", level: "Experienced" },
      { name: "Python", level: "Intermediate" },
    ],
  },

  experience: [
    {
      company: "ANZ",
      role: "Software Engineer",
      location: "Bangalore",
      period: "Oct 2024 – Present",
      description:
        "Working on Mediation Tool using Node.js, AWS, GCP, and Kubernetes.",
    },
    {
      company: "Fidelity Investments",
      role: "SDE Apprenticeship",
      location: "Bangalore",
      period: "Oct 2023 – Sept 2024",
      description:
        "Developed PII data identification POC using Angular and Flask. Built a data masking tool with Angular 17 SSR. Created a Platform Engineering Tool for spinning up databases using Angular, Spring Boot, Jenkins, Docker, and AWS.",
    },
    {
      company: "Fyle",
      role: "Frontend Developer",
      location: "Bangalore",
      period: "May 2023 – Aug 2023",
      description:
        "Resolved critical P1 production bug and optimized statement upload speed by 5%. Led AngularJS to Angular migration using Tailwind, SCSS, Jasmine, and Karma.",
    },
    {
      company: "Palo Alto",
      role: "Cyber Security Virtual Internship",
      location: "Bangalore",
      period: "Virtual Internship",
      description:
        "Researched computer network fundamentals including OSI model, TCP/IP, Ethernet, Wi-Fi, and WANs.",
    },
  ],

  projects: [
    {
      title: "Pulse Feed (X Clone)",
      github: "https://github.com/NadeemGulam/x-xlone",
      demo: "https://www.youtube.com/watch?v=VW2KkZ_YiyU",
      tags: ["React", "Social Media"],
    },
    {
      title: "Snap Sign",
      github: "https://github.com/NadeemGulam/Snap-Sign",
      demo: "https://snap-sign.netlify.app",
      tags: ["React", "Utility"],
    },
    {
      title: "ChatMe — Chat Application",
      github: "https://github.com/NadeemGulam/ChatMe",
      demo: "https://chatmenadeemgulam.netlify.app/",
      tags: ["React", "Real-time"],
    },
    {
      title: "AnimeClub — Anime Search App",
      github: "https://github.com/NadeemGulam/AnimeClub",
      demo: "https://luminous-bienenstitch-e3b727.netlify.app/",
      tags: ["React", "API"],
    },
    {
      title: "E-Commerce Website",
      github: "https://github.com/NadeemGulam/React-Based-E-Commerce-Website",
      demo: "https://e-commerce-nadee-gulam.netlify.app/",
      tags: ["React", "E-Commerce"],
    },
    {
      title: "IoT Accident Prevention System",
      github: "https://github.com/NadeemGulam/Implementation_of_IOT_based_accident_idemtification_and_prevention_system",
      tags: ["IoT", "Arduino", "Hardware"],
    },
    {
      title: "Recipe Search App",
      github: "https://github.com/NadeemGulam/Recipe-App-With-React",
      demo: "https://boisterous-capybara-4ee6f8.netlify.app/",
      tags: ["React", "API"],
    },
    {
      title: "Parking Slot Detection",
      github: "https://github.com/NadeemGulam/Parking-slot-detection-using-Arduino",
      tags: ["Arduino", "IoT"],
    },
    {
      title: "TinDog",
      github: "https://github.com/NadeemGulam/TinDog",
      demo: "https://nadeemgulam.github.io/TinDog/",
      tags: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Expense Tracker",
      github: "https://github.com/NadeemGulam/Expense_tracker",
      demo: "https://nadeem-expense-tracking.netlify.app",
      tags: ["React", "Finance"],
    },
    {
      title: "Library Book Search",
      github: "https://github.com/NadeemGulam/frontend-internship-assignment",
      demo: "https://nadeem-gulam-fyle-intership.netlify.app",
      tags: ["Angular", "API"],
    },
    {
      title: "Quiz Application",
      github: "https://github.com/NadeemGulam/Quiz-App",
      demo: "https://quiz-app-nadeem-gulam.netlify.app",
      tags: ["React", "Education"],
    },
  ],

  contact: {
    linkedin: "https://www.linkedin.com/in/nadeem-gulam/",
    github: "https://github.com/NadeemGulam",
    youtube: "https://www.youtube.com/@DTECNadeemAbdulRazakGulam",
    portfolio: "https://nadeem-dev.in",
    leetcode: "https://leetcode.com/nadeem10shagulam/",
  },

  services: [
    "Custom software development",
    "API integration and development",
    "Website design and development",
    "Mobile-first and cross-browser compatibility",
    "RESTful API Development",
    "Cloud Computing and Server Deployment (AWS)",
    "E-commerce development",
    "User authentication and authorization",
  ],
};

// ═══════════════════════════════════════════
// Intent Definitions
// ═══════════════════════════════════════════

const intents = [
  {
    name: "greeting",
    keywords: ["hi", "hello", "hey", "sup", "yo", "greetings", "howdy", "hola", "good morning", "good evening", "good afternoon", "what's up", "whats up"],
    response: () =>
      `Hey there! 👋 I'm Nadeem's portfolio assistant. I can tell you about:\n\n• 💼 His work experience\n• 🛠️ Technical skills\n• 🚀 Projects he's built\n• 📬 How to get in touch\n\nWhat would you like to know?`,
  },
  {
    name: "about",
    keywords: ["who", "about", "nadeem", "tell me", "introduce", "yourself", "bio", "background", "summary", "describe"],
    response: () => {
      const { name, title, bio, location, collegeRank, projectCount } = portfolio.about;
      return `👤 **${name}** — ${title}\n📍 ${location}\n\n${bio}\n\n🏆 ${collegeRank}\n📁 ${projectCount}`;
    },
  },
  {
    name: "skills",
    keywords: ["skill", "skills", "tech", "stack", "technology", "technologies", "know", "language", "languages", "framework", "tool", "tools", "frontend", "backend", "programming", "code", "coding", "proficient", "expertise", "capable"],
    response: () => {
      const fe = portfolio.skills.frontend
        .map((s) => `  • ${s.name} — ${s.level}`)
        .join("\n");
      const be = portfolio.skills.backend
        .map((s) => `  • ${s.name} — ${s.level}`)
        .join("\n");
      return `🛠️ **Technical Skills**\n\n**Frontend:**\n${fe}\n\n**Backend:**\n${be}`;
    },
  },
  {
    name: "experience",
    keywords: ["experience", "work", "job", "company", "companies", "career", "professional", "worked", "working", "employment", "employer", "role", "position", "anz", "fidelity", "fyle", "palo alto", "intern", "internship", "apprentice"],
    response: () => {
      const exp = portfolio.experience
        .map(
          (e) =>
            `🏢 **${e.company}** — ${e.role}\n📅 ${e.period} | 📍 ${e.location}\n${e.description}`
        )
        .join("\n\n");
      return `💼 **Professional Experience**\n\n${exp}`;
    },
  },
  {
    name: "projects",
    keywords: ["project", "projects", "built", "build", "portfolio", "app", "application", "website", "demo", "github", "repo", "repository", "made", "create", "created", "developed", "showcase", "work samples"],
    response: () => {
      const top = portfolio.projects.slice(0, 5);
      const list = top
        .map((p) => {
          let line = `• **${p.title}**`;
          if (p.demo) line += ` — [Live Demo](${p.demo})`;
          line += ` | [GitHub](${p.github})`;
          return line;
        })
        .join("\n");
      return `🚀 **Featured Projects**\n\n${list}\n\n…and ${portfolio.projects.length - 5}+ more! Check the portfolio section for the full list.`;
    },
  },
  {
    name: "contact",
    keywords: ["contact", "reach", "email", "linkedin", "github", "social", "connect", "hire", "hiring", "talk", "message", "youtube", "socials", "find", "touch", "get in touch"],
    response: () => {
      const c = portfolio.contact;
      return `📬 **Get in Touch**\n\n• LinkedIn — ${c.linkedin}\n• GitHub — ${c.github}\n• YouTube — ${c.youtube}\n• Portfolio — ${c.portfolio}\n• LeetCode — ${c.leetcode}\n\nOr just scroll down to the Contact section and send a message directly! ✉️`;
    },
  },
  {
    name: "services",
    keywords: ["service", "services", "offer", "offers", "provide", "do", "help", "can you", "what do you do", "capabilities", "freelance"],
    response: () => {
      const list = portfolio.services.map((s) => `  • ${s}`).join("\n");
      return `⚡ **Services Offered**\n\n${list}`;
    },
  },
  {
    name: "leetcode",
    keywords: ["leetcode", "dsa", "data structure", "algorithm", "competitive", "problem", "solved", "coding challenge"],
    response: () =>
      `💻 **Competitive Programming**\n\n250+ problems solved on LeetCode!\n🔗 ${portfolio.contact.leetcode}\n\nNadeem has been coding in C++ for 6+ years with excellent OOPS understanding.`,
  },
  {
    name: "education",
    keywords: ["education", "college", "university", "degree", "study", "studied", "school", "academic", "qualification", "graduate"],
    response: () =>
      `🎓 **Education**\n\nNadeem was ranked 15th in his entire college for coding. He has a strong academic foundation that led to roles at ANZ and Fidelity Investments right after graduating.`,
  },
  {
    name: "thanks",
    keywords: ["thanks", "thank you", "thank", "appreciate", "helpful", "great", "awesome", "nice", "cool", "good"],
    response: () =>
      `You're welcome! 😊 Happy to help. If you have any more questions about Nadeem's work, feel free to ask!\n\nOr scroll down to the Contact section to reach out directly.`,
  },
  {
    name: "farewell",
    keywords: ["bye", "goodbye", "see you", "later", "cya", "take care", "peace", "gotta go"],
    response: () =>
      `Goodbye! 👋 Thanks for stopping by. Feel free to come back anytime!\n\nDon't forget to connect on LinkedIn: ${portfolio.contact.linkedin}`,
  },
];

export { portfolio, intents };
