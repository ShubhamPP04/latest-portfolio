import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubham Kumar",
  initials: "SK",
  url: "https://shubham-portfolio.vercel.app",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/new+delhi",
  description:
    "Full Stack Developer with expertise in React.js, Node.js, and Next.js. Passionate about creating efficient and user-friendly web applications.",
  summary:
    "I am a full-stack developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies, including React, Node.js, and Next.js. I am a quick learner and am always looking for new challenges.",
  avatarUrl: "/profile.jpeg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  skills: [
    "C++",
    "C",
    "Java",
    "HTML/CSS",
    "JavaScript",
    "SQL",
    "React.js",
    "Node.js",
    "Next.js",
    "MySQL",
    "MongoDB",
    "Github",
    "Supabase",
    "WordPress"
  ],
  contact: {
    email: "shubhampp8001@gmail.com",
    tel: "8178132741",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShubhamPP04",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/shubham-kumar-48420b249",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Akai Space",
      badges: [],
      location: "New Delhi",
      title: "Front-End Developer Intern",
      start: "January 2025",
      end: "May 2025",
      logoUrl: "/akai_space_logo.jpg",
      description: "Led the end-to-end design and development of the official Akai Space website, transforming the company’s online presence. Collaborated with the Akai Space team to understand business needs and translate them into a modern, user-friendly website.",
    },
    {
      company: "Climate Resilient Observing Systems Promotion Council (CROPC)",
      badges: [],
      location: "New Delhi",
      title: "Front-End Developer Intern",
      start: "August 2024",
      end: "September 2024",
      logoUrl: "/cropc.png",
      description: "Led the front-end development of the CROPC website, significantly enhancing user interface design and improving site responsiveness with React.js and Bootstrap. Engineered seamless API integrations for real-time weather data and news updates, leveraging Axios and React to provide dynamic content to users.",
    },
    {
      company: "EaseMyRoom",
      badges: [],
      location: "New Delhi",
      title: "Front End Developer Intern",
      start: "May 2023",
      end: "August 2023",
      logoUrl: "/easemyroom.jpeg",
      description: "Spearheaded the front-end development of the EaseMyRoom platform, enhancing user interface design and optimizing page load speeds to ensure seamless customer experiences. Developed dynamic, responsive layouts using React.js and Bootstrap, improving the platform’s accessibility and user engagement across multiple devices.",
    },
  ],
  education: [
    {
      school: "Guru Tegh Bahadur Institute of Technology (GGSIPU)",
      degree: "Bachelor of Technology in Information Technology (CGPA - 9.26)",
      start: "2021",
      end: "2025",
      location: "New Delhi",
      logoUrl: "/gtbit.png",
      href: "https://www.gtbit.ac.in",
    },
  ],
  projects: [
    {
      title: "Mind-It: AI-powered Notes with Web Search",
      dates: "April 2025",
      active: true,
      description: "Implemented real-time up-to-date web search capabilities by integrating OpenRouter’s API and Exa search. Enhanced the system architecture to support multiple AI models (Gemini, Llama, Mistral) with model-specific feature toggling, improving user experience and content quality. Designed a source citation system for web search results to improve information credibility and transparency.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenRouter API",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mind-it.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamPP04/mind-it",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "DocCollect: Docs and Notes Platform",
      dates: "October 2024",
      active: true,
      description: "Developed a full-stack document management app using Next.js 14, TypeScript, Tailwind CSS, and integrated Supabase for authentication, data storage, and file management. Implemented document upload, deletion, and categorization features with a note-taking system. Built a responsive UI with dark/light mode and smooth animations using Framer Motion.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nonu-doc.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamPP04/DocCollect",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "CROPC Website",
      dates: "August 2024",
      active: true,
      description: "Developed the CROPC website using React.js and Bootstrap for a responsive UI. Integrated weather and news APIs with Google Maps to deliver dynamic, interactive content.",
      technologies: [
        "React.js",
        "JavaScript",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://cropc.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  achievements: [
    {
      title: "TCS CodeVita Season 12 (Round 2)",
      dates: "2024",
      location: "Online",
      description: "Secured an All India Rank of 680 in TCS CodeVita Season 12 (Round 2), one of the world’s largest global coding competitions.",
      image: "https://logowik.com/content/uploads/images/tcs-tata-consultancy-services2792.logowik.com.webp",
      links: [],
    },
    {
      title: "Devathon (1st Position)",
      dates: "2023",
      location: "GTBIT, New Delhi",
      description: "Achieved 1st position in Devathon organized by IEEE GTBIT in collaboration with IEEE IIIT-Delhi.",
      image: "/gtbit.png",
      links: [],
    },
    {
      title: "Designathon (3rd Position)",
      dates: "2023",
      location: "GTBIT, New Delhi",
      description: "Achieved 3rd position in Designathon organized by IEEE GTBIT in collaboration with IEEE IIIT-Delhi.",
      image: "/gtbit.png",
      links: [],
    },
  ],
} as const;
