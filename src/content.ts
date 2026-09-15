export type VideoProject = {
  id: string;
  discipline: string;
  title: string;
  detail: string;
  format: string;
  src: string;
  poster: string;
  thumbnail?: string;
  shape: "square" | "landscape";
  featured: boolean;
  visible: boolean;
  order: number;
};

export type DevelopmentProject = {
  id: string;
  type: string;
  title: string;
  organization: string;
  description: string;
  stack: string[];
  impact: string;
  visible: boolean;
  order: number;
};

export type PortfolioContent = {
  general: {
    heroEyebrow: string;
    heroTitleFirst: string;
    heroTitleSecond: string;
    heroIntro: string;
    developmentLeadFirst: string;
    developmentLeadSecond: string;
    developmentSummary: string;
    profileStatement: string;
    bioFirst: string;
    bioSecond: string;
    contactLeadFirst: string;
    contactLeadSecond: string;
    contactIntro: string;
    availability: string;
  };
  contact: {
    email: string;
    phoneDisplay: string;
    phoneHref: string;
    linkedInUrl: string;
    linkedInLabel: string;
  };
  videoServices: string[];
  developmentServices: string[];
  projects: VideoProject[];
  developmentWork: DevelopmentProject[];
};

export const defaultPortfolioContent: PortfolioContent = {
  general: {
    heroEyebrow: "SOFTWARE DEVELOPER / VIDEO EDITOR\nPHILIPPINES / GMT+8",
    heroTitleFirst: "SOFTWARE",
    heroTitleSecond: "MOTION",
    heroIntro:
      "I build and maintain production mobile and web applications using React Native, React, Expo, Laravel, and Supabase. I also work in video editing and motion graphics, with the same focus on clarity, polish, and shipping work that holds up in production.",
    developmentLeadFirst: "I build products that people actually use.",
    developmentLeadSecond: "Mobile first, with web and backend when the product needs it.",
    developmentSummary:
      "My work spans production React Native apps, React web applications, Laravel APIs, Supabase/Postgres, authentication, debugging, and release work. I am comfortable taking over existing codebases, tracing issues, and continuing development without breaking what already works.",
    profileStatement: "Software development first. Motion and editing as a creative edge.",
    bioFirst:
      "I'm Carlos Polaris R. Lubrica, a software developer based in the Philippines working primarily across mobile and web development. I currently work with React Native, Expo, React, Laravel, Firebase, and Supabase, with hands-on experience maintaining an inherited production mobile codebase and shipping Android releases.",
    bioSecond:
      "I also work in video editing and motion graphics. That background shapes how I think about interfaces, product polish, pacing, communication, and the overall feel of the things I build.",
    contactLeadFirst: "LET'S BUILD",
    contactLeadSecond: "SOMETHING USEFUL.",
    contactIntro:
      "If you need help with a mobile app, web product, backend system, or video project, send me what you're trying to ship.",
    availability: "AVAILABLE FOR PROJECTS",
  },
  contact: {
    email: "carlospolarislubrica@gmail.com",
    phoneDisplay: "0993 847 9533",
    phoneHref: "+639938479533",
    linkedInUrl: "https://www.linkedin.com/in/lubrica-carlos-polaris-r-74aa9429a/",
    linkedInLabel: "View developer profile",
  },
  videoServices: [
    "Video Editing",
    "Motion Graphics",
    "SaaS & Product Videos",
    "Short-Form Content",
  ],
  developmentServices: [
    "React Native & Expo",
    "React & TypeScript",
    "Laravel & REST APIs",
    "Supabase / PostgreSQL / RLS",
    "Firebase & Native Integrations",
    "Android / Google Play",
  ],
  projects: [
    {
      id: "gummygum",
      discipline: "Brand motion",
      title: "GummyGum Motion",
      detail: "Logo animation / Kinetic type / Social graphics",
      format: "MOTION DESIGN EXERCISE",
      src: "/work/gummygum-motion-graphics.mp4",
      poster: "/work/gummygum-motion-graphics.jpg",
      thumbnail: "/work/gummygum-selected.png",
      shape: "square",
      featured: true,
      visible: true,
      order: 0,
    },
    {
      id: "trailer-ii",
      discipline: "Brand motion",
      title: "Motion Graphics Trailer II",
      detail: "Kinetic type / Transitions / Event graphics",
      format: "MOTION DESIGN EXERCISE",
      src: "/work/motion-graphics-trailer-2.mp4",
      poster: "/work/motion-graphics-trailer-2.jpg",
      thumbnail: "/work/trailer-selected.png",
      shape: "square",
      featured: true,
      visible: true,
      order: 1,
    },
    {
      id: "heart-to-heart",
      discipline: "Animated edit",
      title: "Heart to Heart",
      detail: "2D animation / Typography / Emotional pacing",
      format: "PERSONAL MOTION STUDY",
      src: "/work/heart-to-heart.mp4",
      poster: "/work/heart-to-heart.jpg",
      shape: "landscape",
      featured: false,
      visible: true,
      order: 2,
    },
    {
      id: "vampire",
      discipline: "Editorial motion",
      title: "Vampire",
      detail: "Collage / Kinetic type / Dramatic pacing",
      format: "PERSONAL MOTION STUDY",
      src: "/work/vampire-motion-graphics.mp4",
      poster: "/work/vampire-motion-graphics.jpg",
      shape: "square",
      featured: false,
      visible: true,
      order: 3,
    },
    {
      id: "hatsune-miku",
      discipline: "Character edit",
      title: "Hatsune Miku",
      detail: "Compositing / Character motion / Social format",
      format: "PERSONAL MOTION STUDY",
      src: "/work/hatsune-miku.mp4",
      poster: "/work/hatsune-miku.jpg",
      shape: "square",
      featured: false,
      visible: true,
      order: 4,
    },
    {
      id: "whiplash",
      discipline: "Cinematic motion",
      title: "Whiplash Motion Study",
      detail: "Typography / Editorial compositing / Sound-led pacing",
      format: "PERSONAL MOTION STUDY",
      src: "/work/whiplash-motion-graphics.mp4",
      poster: "/work/whiplash-motion-graphics.jpg",
      shape: "landscape",
      featured: false,
      visible: true,
      order: 5,
    },
  ],
  developmentWork: [
    {
      id: "juanflix",
      type: "Production React Native app",
      title: "JuanFlix for Android",
      organization: "Film Development Council of the Philippines",
      description:
        "Took over an existing production React Native codebase and now maintain the Android side of FDCP's streaming platform. My work includes production crash debugging, lifecycle issues, video playback, offline downloads, Firebase services, Chromecast, native integrations, and Android releases through Google Play.",
      stack: ["React Native", "Expo", "TypeScript", "Firebase", "Android", "Google Play"],
      impact: "CODEBASE TAKEOVER / PRODUCTION STABILITY / ANDROID RELEASES",
      visible: true,
      order: 0,
    },
    {
      id: "altras",
      type: "React + Supabase web app",
      title: "ALTRAS",
      organization: "Independent client project",
      description:
        "Built an online educational platform with React, TypeScript, and Supabase. Implemented authentication, PostgreSQL-backed progress tracking, Row Level Security, pre/post assessments, cross-device settings, and a protected researcher results view.",
      stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Vercel"],
      impact: "AUTH / SECURE DATA ACCESS / CROSS-DEVICE PRODUCT",
      visible: true,
      order: 1,
    },
    {
      id: "fdcp-grantee",
      type: "Internal Laravel system",
      title: "FDCP Grantee Database",
      organization: "Film Development Council of the Philippines",
      description:
        "Developed an internal grantee directory and records system with SSO-based access, role handling, search and filtering, admin workflows, soft deletion, publication controls, and relational grant and disbursement data.",
      stack: ["Laravel", "MySQL", "OAuth2 / PKCE", "Filament", "Tailwind", "Vite"],
      impact: "INTERNAL TOOLS / SSO / DATA MANAGEMENT",
      visible: true,
      order: 2,
    },
    {
      id: "agricultural-analysis",
      type: "AI-integrated mobile app",
      title: "Agricultural Analysis App",
      organization: "Benguet State University",
      description:
        "Led development of a cross-platform application that connects to a trained AI model to analyze agricultural produce, translating UX wireframes into a working mobile product.",
      stack: ["React Native", "Expo", "SQLite", "AI integration"],
      impact: "CROSS-PLATFORM PRODUCT DEVELOPMENT",
      visible: true,
      order: 3,
    },
  ],
};
