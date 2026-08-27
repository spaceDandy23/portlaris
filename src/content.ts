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
    heroEyebrow: "VIDEO EDITOR & DEVELOPER\nPHILIPPINES / GMT+8",
    heroTitleFirst: "VIDEO EDITING",
    heroTitleSecond: "DEVELOPER",
    heroIntro:
      "I create rhythm-driven edits and motion graphics. I also build and maintain production mobile applications.",
    developmentLeadFirst: "I understand how software works.",
    developmentLeadSecond: "I use motion to show people why it matters.",
    developmentSummary:
      "My developer background helps me turn interfaces, features, and user flows into clear SaaS and product videos.",
    profileStatement: "Creative judgment, backed by production engineering.",
    bioFirst:
      "I'm Carlos Polaris R. Lubrica, a video editor and mobile developer based in the Philippines. I work across motion, post-production, and Android product development.",
    bioSecond:
      "My two disciplines are separate services, but they share the same approach: understand the audience, solve the real problem, and deliver work that holds up in production.",
    contactLeadFirst: "LET'S WORK",
    contactLeadSecond: "TOGETHER.",
    contactIntro:
      "Tell me whether you need a video editor or a developer, and what you're trying to ship.",
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
    "Android Applications",
    "Laravel & APIs",
    "Firebase & Streaming Media",
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
      type: "Production mobile app",
      title: "JuanFlix for Android",
      organization: "Film Development Council of the Philippines",
      description:
        "I maintain and extend FDCP's Philippine-cinema streaming app, including major crash fixes, video playback, offline downloads, Firebase services, Chromecast, and Android release work.",
      stack: ["React Native", "Expo", "Firebase", "Android", "Streaming media"],
      impact: "PRODUCTION RELIABILITY / FEATURE DELIVERY",
      visible: true,
      order: 0,
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
      order: 1,
    },
    {
      id: "rfid-attendance",
      type: "Real-time web system",
      title: "RFID Attendance Platform",
      organization: "Independent academic project",
      description:
        "Built a real-time attendance system that records RFID scans and automatically sends SMS notifications to guardians through an integrated messaging service.",
      stack: ["Laravel", "MariaDB", "REST APIs", "SMS integration"],
      impact: "BACKEND / AUTOMATION / REAL-TIME DATA",
      visible: true,
      order: 2,
    },
  ],
};

const text = (value: unknown, fallback: string, max = 700) =>
  typeof value === "string" ? value.trim().slice(0, max) || fallback : fallback;

const stringList = (value: unknown, fallback: string[]) =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string").map((item) => item.trim().slice(0, 80)).filter(Boolean).slice(0, 12)
    : fallback;

const httpsUrl = (value: unknown, fallback: string) => {
  const candidate = text(value, fallback, 300);
  try {
    const parsed = new URL(candidate);
    return parsed.protocol === "https:" ? parsed.toString() : fallback;
  } catch {
    return fallback;
  }
};

export function normalizePortfolioContent(value: unknown): PortfolioContent {
  if (!value || typeof value !== "object") return defaultPortfolioContent;
  const input = value as Partial<PortfolioContent>;
  const general = input.general ?? ({} as Partial<PortfolioContent["general"]>);
  const contact = input.contact ?? ({} as Partial<PortfolioContent["contact"]>);

  const projectInputs = new Map(
    (Array.isArray(input.projects) ? input.projects : []).map((project) => [project?.id, project]),
  );
  const devInputs = new Map(
    (Array.isArray(input.developmentWork) ? input.developmentWork : []).map((project) => [project?.id, project]),
  );

  return {
    general: Object.fromEntries(
      Object.entries(defaultPortfolioContent.general).map(([key, fallback]) => [
        key,
        text(general[key as keyof typeof general], fallback),
      ]),
    ) as PortfolioContent["general"],
    contact: {
      email: text(contact.email, defaultPortfolioContent.contact.email, 160),
      phoneDisplay: text(contact.phoneDisplay, defaultPortfolioContent.contact.phoneDisplay, 40),
      phoneHref: text(contact.phoneHref, defaultPortfolioContent.contact.phoneHref, 40).replace(/[^+\d]/g, ""),
      linkedInUrl: httpsUrl(contact.linkedInUrl, defaultPortfolioContent.contact.linkedInUrl),
      linkedInLabel: text(contact.linkedInLabel, defaultPortfolioContent.contact.linkedInLabel, 80),
    },
    videoServices: stringList(input.videoServices, defaultPortfolioContent.videoServices),
    developmentServices: stringList(input.developmentServices, defaultPortfolioContent.developmentServices),
    projects: defaultPortfolioContent.projects.map((fallback) => {
      const project = projectInputs.get(fallback.id);
      return {
        ...fallback,
        discipline: text(project?.discipline, fallback.discipline, 80),
        title: text(project?.title, fallback.title, 100),
        detail: text(project?.detail, fallback.detail, 180),
        format: text(project?.format, fallback.format, 100),
        featured: Boolean(project?.featured),
        visible: project?.visible !== false,
        order: typeof project?.order === "number" ? project.order : fallback.order,
      };
    }),
    developmentWork: defaultPortfolioContent.developmentWork.map((fallback) => {
      const project = devInputs.get(fallback.id);
      return {
        ...fallback,
        type: text(project?.type, fallback.type, 100),
        title: text(project?.title, fallback.title, 120),
        organization: text(project?.organization, fallback.organization, 160),
        description: text(project?.description, fallback.description, 800),
        stack: stringList(project?.stack, fallback.stack),
        impact: text(project?.impact, fallback.impact, 120),
        visible: project?.visible !== false,
        order: typeof project?.order === "number" ? project.order : fallback.order,
      };
    }),
  };
}
