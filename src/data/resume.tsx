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
    "I am pursuing a degree in Information Technology at Guru Tegh Bahadur Institute of Technology. I have worked on various projects and completed internships at CROPC and EaseMyRoom, gaining valuable experience in front-end development and API integration.",
  avatarUrl: "/profile.jpeg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  skills: [
    "C++",
    "C",
    "Java",
    "Python",
    "HTML/CSS",
    "JavaScript",
    "SQL",
    "React.js",
    "Node.js",
    "Next.js",
    "MySQL",
    "MongoDB",
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
      X: {
        name: "X",
        url: "https://x.com/Shubham13337619",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Climate Resilient Observing Systems Promotion Council (CROPC)",
      badges: [],
      location: "New Delhi",
      title: "Front-End Developer Intern",
      start: "August 2024",
      end: "September 2024",
      logoUrl: "/cropc.png",
      description:
        "Led the front-end development of the CROPC website using React.js and Bootstrap. Engineered API integrations for real-time weather data and implemented Google Maps API for location tracking. Redesigned key components for better user experience across platforms.",
    },
    {
      company: "EaseMyRoom",
      badges: [],
      location: "New Delhi",
      title: "Front End Developer Intern",
      start: "May 2023",
      end: "August 2023",
      logoUrl: "/easemyroom.jpeg",
      description:
        "Spearheaded front-end development using React.js and Bootstrap, optimizing page load speeds and implementing responsive layouts. Collaborated with back-end team for API integration and conducted cross-browser compatibility testing.",
    },
  ],
  education: [
    {
      school: "Guru Tegh Bahadur Institute of Technology",
      degree: "Bachelor of Technology in Information Technology",
      start: "2021",
      end: "2025",
      location: "New Delhi",
      logoUrl: "/gtbit.png",
      href: "https://www.gtbit.ac.in",
    },
  ],
  projects: [
    {
      title: "DocCollect: Docs and Notes Platform",
      dates: "October 2024",
      active: true,
      description:
        "A full-stack document management app with features for document upload, deletion, categorization, and note-taking. Includes real-time search, dark/light mode, and smooth animations.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "Framer Motion"
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
      description:
        "Developed the CROPC website with responsive UI, integrated weather and news APIs, and implemented Google Maps for enhanced functionality.",
      technologies: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "APIs"
      ],
      links: [
        {
          type: "Website",
          href: "https://cropc.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamPP04/CROPC-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Job Portal",
      dates: "July 2024",
      active: true,
      description:
        "Built a job portal with user authentication, job listings, application management, and AI chatbot assistant for recommendations.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Redux"
      ],
      links: [
        {
          type: "Website",
          href: "https://job-portal-eight-eosin.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamPP04/Job-Portal",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "KIMO's-Edge Competition (1st Position)",
      dates: "2023",
      location: "GTBIT, New Delhi",
      description: "Secured 1st position twice, outperforming 150 participants with innovative solutions.",
      image: "/kimo_ai_logo.jpeg",
      links: [],
    },
    {
      title: "IEEE GTBIT Devathon (1st Position)",
      dates: "2023",
      location: "GTBIT & IEEE IIIT-Delhi",
      description: "Achieved 1st position in the development competition organized in collaboration with IEEE IIIT-Delhi.",
      image: "/gtbit.png",
      links: [],
    },
    {
      title: "IEEE GTBIT Designathon (3rd Position)",
      dates: "2023",
      location: "GTBIT & IEEE IIIT-Delhi",
      description: "Secured 3rd position in the design competition organized in collaboration with IEEE IIIT-Delhi.",
      image: "/gtbit.png",
      links: [],
    },
  ],
} as const;
