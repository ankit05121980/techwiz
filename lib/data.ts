/**
 * Site content. All copy is original (no lorem ipsum) and tailored to
 * TechWiz STEM Academy. Edit here to update content site-wide.
 */

export type IconName =
  | "Boxes"
  | "Bot"
  | "Rocket"
  | "BrainCircuit"
  | "GraduationCap"
  | "Lightbulb"
  | "Cpu"
  | "Code2"
  | "CircuitBoard"
  | "Radio"
  | "Wifi"
  | "Wrench"
  | "Trophy"
  | "Users"
  | "FlaskConical"
  | "School"
  | "Presentation"
  | "Sparkles";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Stats                                                                      */
/* -------------------------------------------------------------------------- */
export const stats = [
  { label: "Students Trained", value: 12000, suffix: "+" },
  { label: "Projects Built", value: 8500, suffix: "+" },
  { label: "Workshops Conducted", value: 350, suffix: "+" },
  { label: "Partner Schools", value: 60, suffix: "+" },
] as const;

export const trustBadges = [
  "Project-Based Learning",
  "STEM Certified Programs",
  "Industry-Aligned Curriculum",
] as const;

/* -------------------------------------------------------------------------- */
/*  Why TechWiz                                                                */
/* -------------------------------------------------------------------------- */
export const whyCards: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "Boxes",
    title: "Learn by Building",
    description:
      "Every concept is taught through hands-on builds. Students learn faster when they create real, working machines instead of memorising theory.",
  },
  {
    icon: "Bot",
    title: "Real Robotics Projects",
    description:
      "From line-followers to obstacle-avoiding bots, learners take home robots they designed, wired, and programmed themselves.",
  },
  {
    icon: "Rocket",
    title: "Future-Ready Skills",
    description:
      "We teach the problem-solving, logic, and computational thinking that top universities and employers will look for tomorrow.",
  },
  {
    icon: "BrainCircuit",
    title: "AI & Coding Exposure",
    description:
      "Kids build chatbots, train simple models, and write real code in Python and block-based languages — age-appropriate at every level.",
  },
  {
    icon: "GraduationCap",
    title: "Expert Mentors",
    description:
      "Engineers and educators guide small batches, giving every student personal attention and honest, encouraging feedback.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation Mindset",
    description:
      "We nurture curiosity and the confidence to experiment, fail, iterate, and ship — the real superpower of every innovator.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Courses / Programs                                                         */
/* -------------------------------------------------------------------------- */
export type Course = {
  slug: string;
  name: string;
  grades: string;
  tagline: string;
  duration: string;
  projectsCount: string;
  icon: IconName;
  accent: "brand" | "lime" | "navy";
  image: string;
  skills: string[];
  summary: string;
  modules: { title: string; description: string }[];
  outcomes: string[];
  projects: string[];
  format: string;
};

export const courses: Course[] = [
  {
    slug: "junior-innovators",
    name: "Junior Innovators",
    grades: "Grade 3-5",
    tagline: "First steps into the world of making",
    duration: "12 weeks · 1 session/week",
    projectsCount: "8+ mini projects",
    icon: "Boxes",
    accent: "lime",
    image:
      "https://images.unsplash.com/photo-1596496181871-9681eacf9764?auto=format&fit=crop&w=1200&q=70",
    skills: [
      "Block Coding",
      "Simple Machines",
      "Sensors & Motors",
      "Logical Thinking",
      "Teamwork",
    ],
    summary:
      "A playful, confidence-building introduction to robotics and coding designed for young learners. Through colourful builds and visual programming, children discover how machines think and move.",
    modules: [
      {
        title: "Hello, Robots!",
        description:
          "Meet motors, sensors, and controllers. Build your first moving machine and learn what makes a robot a robot.",
      },
      {
        title: "Block Coding Basics",
        description:
          "Drag-and-drop programming to make lights blink, buzzers beep, and wheels turn on command.",
      },
      {
        title: "Sense the World",
        description:
          "Use light, touch, and distance sensors so your creations can react to their surroundings.",
      },
      {
        title: "Build & Showcase",
        description:
          "Combine everything into a capstone build and present it to parents on demo day.",
      },
    ],
    outcomes: [
      "Confidently use block-based programming",
      "Understand inputs, outputs, and simple logic",
      "Assemble basic robots with motors and sensors",
      "Present ideas clearly and work in a team",
    ],
    projects: [
      "Blinking Traffic Signal",
      "Dancing Robot",
      "Smart Night Lamp",
      "Distance Alarm Bot",
    ],
    format: "Small batches (max 8) · In-centre or live online · Take-home kit",
  },
  {
    slug: "future-engineers",
    name: "Future Engineers",
    grades: "Grade 6-8",
    tagline: "Where ideas become engineered machines",
    duration: "16 weeks · 1 session/week",
    projectsCount: "10+ projects",
    icon: "Cpu",
    accent: "brand",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=70",
    skills: [
      "Arduino & Electronics",
      "Python Basics",
      "Robotics Design",
      "IoT Fundamentals",
      "Problem Solving",
    ],
    summary:
      "Students step up to real microcontrollers, breadboards, and text-based code. They design, prototype, and debug genuine engineering projects from concept to working device.",
    modules: [
      {
        title: "Electronics & Circuits",
        description:
          "Read schematics, build circuits on breadboards, and understand voltage, current, and components.",
      },
      {
        title: "Programming with Arduino",
        description:
          "Move from blocks to real code, controlling sensors and actuators with structured logic.",
      },
      {
        title: "Intro to Python",
        description:
          "Variables, loops, and functions through fun, practical mini-challenges.",
      },
      {
        title: "Connected Devices (IoT)",
        description:
          "Send sensor data over Wi-Fi and control devices from a phone or dashboard.",
      },
      {
        title: "Engineering Capstone",
        description:
          "Plan, build, and document an original device that solves a real problem.",
      },
    ],
    outcomes: [
      "Build and debug Arduino-based circuits",
      "Write structured code in Python and C-style syntax",
      "Design a complete IoT-enabled project",
      "Document and pitch engineering solutions",
    ],
    projects: [
      "Smart Home Automation",
      "IoT Weather Station",
      "Obstacle Avoiding Robot",
      "Gesture Controlled Light",
    ],
    format: "Small batches (max 10) · In-centre or live online · Lab kit included",
  },
  {
    slug: "tech-explorers",
    name: "Tech Explorers",
    grades: "Grade 9-12",
    tagline: "Build like an engineer, think like an innovator",
    duration: "20 weeks · 1-2 sessions/week",
    projectsCount: "12+ advanced projects",
    icon: "BrainCircuit",
    accent: "navy",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=70",
    skills: [
      "Artificial Intelligence",
      "Advanced Python",
      "Machine Learning",
      "IoT & Cloud",
      "Capstone Innovation",
    ],
    summary:
      "An advanced track for senior students serious about technology. Learners build AI applications, train models, and engineer connected systems — graduating with a portfolio-ready capstone.",
    modules: [
      {
        title: "Advanced Python & Data",
        description:
          "Work with libraries, data structures, and APIs to build real applications.",
      },
      {
        title: "Machine Learning Foundations",
        description:
          "Train and evaluate models for classification, vision, and prediction tasks.",
      },
      {
        title: "Building AI Apps",
        description:
          "Create chatbots and intelligent assistants that understand and respond.",
      },
      {
        title: "IoT, Cloud & Automation",
        description:
          "Connect hardware to the cloud and automate real-world systems end to end.",
      },
      {
        title: "Innovation Capstone",
        description:
          "Conceive and ship a complete, demo-ready product with documentation.",
      },
    ],
    outcomes: [
      "Develop AI and machine-learning applications",
      "Engineer cloud-connected IoT systems",
      "Build a portfolio-grade capstone project",
      "Prepare for competitions, olympiads, and college",
    ],
    projects: [
      "AI Chatbot",
      "Voice Controlled Devices",
      "Computer Vision Sorter",
      "Smart Agriculture System",
    ],
    format: "Small batches (max 10) · In-centre or live online · Mentor support",
  },
];

/* -------------------------------------------------------------------------- */
/*  Project Showcase                                                          */
/* -------------------------------------------------------------------------- */
export type ShowcaseProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    title: "Obstacle Avoiding Robot",
    category: "Robotics",
    description:
      "An autonomous bot that uses ultrasonic sensors to detect and steer around obstacles in real time.",
    tags: ["Arduino", "Ultrasonic", "Motors"],
    image:
      "https://images.unsplash.com/photo-1567802169038-9b73e8a36dde?auto=format&fit=crop&w=1000&q=70",
  },
  {
    title: "Smart Home Automation",
    category: "IoT",
    description:
      "Control lights, fans, and appliances from a phone with scheduling and voice triggers.",
    tags: ["ESP32", "IoT", "App Control"],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=70",
  },
  {
    title: "AI Chatbot",
    category: "Artificial Intelligence",
    description:
      "A conversational assistant that understands questions and replies with helpful answers.",
    tags: ["Python", "NLP", "AI"],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1000&q=70",
  },
  {
    title: "Voice Controlled Devices",
    category: "Artificial Intelligence",
    description:
      "Hands-free control of electronics using spoken commands and speech recognition.",
    tags: ["Voice", "Sensors", "Automation"],
    image:
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=1000&q=70",
  },
  {
    title: "IoT Weather Station",
    category: "Electronics",
    description:
      "Measures temperature, humidity, and pressure, then streams live data to a dashboard.",
    tags: ["Sensors", "IoT", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1000&q=70",
  },
  {
    title: "Line Following Robot",
    category: "Robotics",
    description:
      "A precision bot that tracks and follows a path using infrared sensor feedback.",
    tags: ["IR Sensors", "PID", "Robotics"],
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=70",
  },
];

/* -------------------------------------------------------------------------- */
/*  Learning Journey                                                          */
/* -------------------------------------------------------------------------- */
export const journeySteps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "GraduationCap",
    title: "Enroll",
    description:
      "Pick the program that fits your child's grade and book a free demo to get started.",
  },
  {
    icon: "BrainCircuit",
    title: "Learn Fundamentals",
    description:
      "Master the core concepts of coding, electronics, and robotics through guided lessons.",
  },
  {
    icon: "Wrench",
    title: "Build Projects",
    description:
      "Apply skills immediately by designing and building real, working tech projects.",
  },
  {
    icon: "Trophy",
    title: "Participate in Challenges",
    description:
      "Compete in hackathons, robotics challenges, and showcases to test new skills.",
  },
  {
    icon: "Sparkles",
    title: "Become an Innovator",
    description:
      "Graduate with a portfolio, confidence, and the mindset to invent what's next.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  type: "Parent" | "Student";
  location: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My son used to spend hours on games. Now he builds robots and explains circuits to me at dinner. TechWiz completely changed how he sees technology.",
    name: "Priya Deshmukh",
    role: "Parent of Aarav, Grade 6",
    type: "Parent",
    location: "Nagpur",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=70",
  },
  {
    quote:
      "I built an AI chatbot in the Tech Explorers program and presented it at my school fair. The mentors made hard topics feel simple and fun.",
    name: "Ishaan Verma",
    role: "Student, Grade 10",
    type: "Student",
    location: "Indore",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=70",
  },
  {
    quote:
      "The small batch sizes mean my daughter actually gets attention. She finished her first IoT weather station and was beaming with pride.",
    name: "Sunita Rao",
    role: "Parent of Ananya, Grade 7",
    type: "Parent",
    location: "Nashik",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=70",
  },
  {
    quote:
      "Coding felt scary before. Now Python is my favourite thing. I'm already planning my capstone project for next term!",
    name: "Kabir Singh",
    role: "Student, Grade 9",
    type: "Student",
    location: "Bhopal",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=70",
  },
  {
    quote:
      "As a parent I wanted real learning, not just screen time. TechWiz delivers structured, hands-on skills my son genuinely enjoys.",
    name: "Rahul Mehta",
    role: "Parent of Vivaan, Grade 5",
    type: "Parent",
    location: "Aurangabad",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=200&q=70",
  },
  {
    quote:
      "Winning the inter-school robotics challenge with my line-following bot was the best day ever. Thank you TechWiz mentors!",
    name: "Diya Patel",
    role: "Student, Grade 8",
    type: "Student",
    location: "Surat",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=70",
  },
];

/* -------------------------------------------------------------------------- */
/*  School Collaboration                                                      */
/* -------------------------------------------------------------------------- */
export const schoolFeatures: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "FlaskConical",
    title: "Robotics Lab Setup",
    description:
      "End-to-end design and installation of a modern STEM & robotics lab tailored to your campus.",
  },
  {
    icon: "Presentation",
    title: "Teacher Training",
    description:
      "Certified train-the-trainer programs that empower your staff to deliver STEM confidently.",
  },
  {
    icon: "Users",
    title: "STEM Workshops",
    description:
      "Engaging hands-on workshops and bootcamps run on your campus across grade levels.",
  },
  {
    icon: "Trophy",
    title: "Innovation Programs",
    description:
      "Annual challenges, competitions, and showcases that put your school on the STEM map.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Gallery                                                                   */
/* -------------------------------------------------------------------------- */
export type GalleryItem = {
  src: string;
  category: "Robotics" | "Coding" | "Electronics" | "Workshops" | "Competitions";
  alt: string;
  tall?: boolean;
};

export const galleryCategories = [
  "All",
  "Robotics",
  "Coding",
  "Electronics",
  "Workshops",
  "Competitions",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=70",
    category: "Robotics",
    alt: "Students assembling a robot in the lab",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=70",
    category: "Coding",
    alt: "Young student writing code on a laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70",
    category: "Electronics",
    alt: "Hands wiring an electronic breadboard",
  },
  {
    src: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=900&q=70",
    category: "Robotics",
    alt: "A small robot built by students",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=70",
    category: "Workshops",
    alt: "Classroom workshop in progress",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=70",
    category: "Coding",
    alt: "Students collaborating on a coding project",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=70",
    category: "Electronics",
    alt: "Engineering electronics close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=900&q=70",
    category: "Competitions",
    alt: "Students at a robotics competition",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=70",
    category: "Workshops",
    alt: "Mentor guiding students during a workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=70",
    category: "Competitions",
    alt: "Team celebrating a competition win",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "What age groups can join?",
    answer:
      "Our programs are designed for students from Grade 3 to Grade 12. We have three age-appropriate tracks — Junior Innovators (Grade 3-5), Future Engineers (Grade 6-8), and Tech Explorers (Grade 9-12) — so every child learns at the right level.",
  },
  {
    question: "Do students need prior coding experience?",
    answer:
      "Not at all. Every track starts from the fundamentals. Beginners are welcome, and our mentors ensure each student builds confidence step by step. Students with prior experience are challenged with advanced projects.",
  },
  {
    question: "What projects will students build?",
    answer:
      "Students build real, working projects such as obstacle-avoiding robots, smart home automation, AI chatbots, IoT weather stations, voice-controlled devices, and more — taking many of them home.",
  },
  {
    question: "Is certification provided?",
    answer:
      "Yes. Students receive a STEM-certified completion certificate for each program, along with a project portfolio they can showcase for school, competitions, and college applications.",
  },
  {
    question: "Are demo classes available?",
    answer:
      "Absolutely. We offer a free, no-obligation demo class so your child can experience hands-on learning before enrolling. You can book one in under a minute right here on the site.",
  },
  {
    question: "Do you offer online and in-centre classes?",
    answer:
      "Both. Choose live online classes from home or in-centre sessions at our campus. Online students receive a take-home kit so the hands-on experience stays the same.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Interest / Program options for forms                                      */
/* -------------------------------------------------------------------------- */
export const interestAreas = [
  "Robotics",
  "Artificial Intelligence",
  "Coding",
  "Electronics",
  "IoT",
  "STEM Innovation",
] as const;

export const classOptions = Array.from({ length: 10 }, (_, i) => `Grade ${i + 3}`);

/* -------------------------------------------------------------------------- */
/*  About page                                                                */
/* -------------------------------------------------------------------------- */
export const aboutTimeline: { year: string; title: string; description: string }[] = [
  {
    year: "2017",
    title: "The First Classroom",
    description:
      "TechWiz began with a single robotics class of 12 curious students in Nagpur and one big belief: kids learn best by building.",
  },
  {
    year: "2019",
    title: "Schools Come Knocking",
    description:
      "Local schools partnered with us to set up their first robotics labs and train teachers in hands-on STEM.",
  },
  {
    year: "2021",
    title: "Going Online",
    description:
      "We launched live online classes with take-home kits, bringing TechWiz to students across Tier-2 and Tier-3 cities.",
  },
  {
    year: "2023",
    title: "AI & Innovation Tracks",
    description:
      "Added advanced AI, machine learning, and IoT programs as senior students reached for bigger challenges.",
  },
  {
    year: "2026",
    title: "12,000+ Innovators Strong",
    description:
      "Today, thousands of students across 60+ partner schools build, compete, and innovate with TechWiz.",
  },
];

export const aboutValues: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "Lightbulb",
    title: "Curiosity First",
    description: "We protect and feed the natural curiosity every child is born with.",
  },
  {
    icon: "Wrench",
    title: "Learn by Doing",
    description: "Real builds beat rote learning. Our students make things that work.",
  },
  {
    icon: "Users",
    title: "Every Child Counts",
    description: "Small batches and personal mentorship so no learner is left behind.",
  },
];

/* -------------------------------------------------------------------------- */
/*  YouTube videos (facade — loads iframe on click)                          */
/* -------------------------------------------------------------------------- */
export const youtubeVideos: { id: string; title: string }[] = [
  { id: "ZHa_n0vCD1k", title: "Inside a TechWiz Robotics Lab" },
  { id: "Gz9rUNoiHWU", title: "Students Build an Obstacle-Avoiding Robot" },
  { id: "rfscVS0vtbw", title: "Coding for Kids: First Python Project" },
];

/* -------------------------------------------------------------------------- */
/*  Instagram feed (static curated cards linking out)                         */
/* -------------------------------------------------------------------------- */
export const instagramPosts: { src: string; caption: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=70",
    caption: "Demo day builds 🤖",
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=70",
    caption: "First lines of code 💻",
  },
  {
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=70",
    caption: "Competition champions 🏆",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=70",
    caption: "Soldering skills ⚡",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=70",
    caption: "Workshop vibes ✨",
  },
  {
    src: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=600&q=70",
    caption: "Bot of the week 🔧",
  },
];
