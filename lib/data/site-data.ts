import {
  Smartphone,
  Globe,
  Cpu,
  Brain,
  GraduationCap,
  Briefcase,
  type LucideIcon,
  Users,
  Calendar,
  Code,
  Leaf,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  image_url: string;
};

export const services: Service[] = [
  {
    slug: "mobile",
    title: "Mobile Application Development",
    short: "Native & cross-platform apps engineered for scale.",
    description:
      "We craft fast, beautiful iOS and Android apps using React Native, Swift, and Kotlin — from MVPs to production-grade platforms.",
    icon: Smartphone,
    gradient: "from-blue-500 to-indigo-600",
    image_url: "/services/mobile-app-development.png",
  },
  {
    slug: "web",
    title: "Website Development",
    short: "Modern, performant websites that convert.",
    description:
      "Full-stack web platforms built with React, Next.js, and edge infrastructure. Pixel-perfect design, fast as light.",
    icon: Globe,
    gradient: "from-indigo-500 to-purple-600",
    image_url: "/services/website-development.png",
  },
  {
    slug: "iot",
    title: "IoT & AIoT Solutions",
    short: "Connected devices that think for themselves.",
    description:
      "Industrial-grade IoT — sensors, gateways, dashboards — combined with on-device AI for predictive intelligence.",
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-600",
    image_url: "/services/iot&aiot.png",
  },
  {
    slug: "ai",
    title: "AI-powered Systems",
    short: "Custom LLM, vision, and ML pipelines.",
    description:
      "From RAG chatbots to computer vision systems — we ship production AI that delivers measurable business value.",
    icon: Brain,
    gradient: "from-violet-500 to-fuchsia-600",
    image_url: "/services/ai-powered-system.png",
  },
  {
    slug: "training",
    title: "Teaching & Training",
    short: "Cohort-based programs for modern developers.",
    description:
      "Hands-on training in Web, Mobile, AI, and IoT. We've trained 2,500+ engineers across universities and enterprises.",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-600",
    image_url: "/services/teaching&training.png",
  },
  {
    slug: "consulting",
    title: "Business Consulting",
    short: "Strategy, architecture, and tech leadership.",
    description:
      "We help startups and enterprises align technology with business strategy — from due diligence to scaling teams.",
    icon: Briefcase,
    gradient: "from-amber-500 to-orange-600",
    image_url:
      "https://supremeconceptsinc.com/wp-content/uploads/2025/11/shutterstock_2438190465-scaled.jpg",
  },
  {
    slug: "hydroponics",
    title: "Smart Hydroponics",
    short: "Automated climate, dosing, and yield optimization.",
    description:
      "We help modern farms implement automated nutrient dosing, IoT sensor monitoring, and climate control strategies to maximize crop yield and operational efficiency.",
    icon: Leaf,
    gradient: "from-emerald-500 to-teal-600",
    image_url: "/services/greenhouse-hydroponic.png",
  },
];

export const stats = [
  { label: "Students Trained", value: 2500, suffix: "+", icon: GraduationCap },
  { label: "Completed Projects", value: 30, suffix: "+", icon: Briefcase },
  { label: "Active Clients", value: 48, suffix: "", icon: Users },
  { label: "Years of Experience", value: 13, suffix: "", icon: Calendar },
  { label: "Technologies Used", value: 30, suffix: "+", icon: Code },
];

export const testimonials = [
  {
    name: "Hassan Raza",
    role: "CTO, NorthGrid Energy",
    quote:
      "Lucky7andOne delivered our AIoT platform 3 weeks ahead of schedule. The engineering quality is genuinely best-in-class.",
    rating: 5,
    initials: "HR",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Mendly Health",
    quote:
      "From a Figma file to a live mobile app in two months. They moved like a senior in-house team.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Luca Bianchi",
    role: "VP Engineering, Voltris",
    quote:
      "Their AI team understood our domain faster than vendors twice their size. We extended the contract twice.",
    rating: 4,
    initials: "LB",
  },
  {
    name: "Fatima Noor",
    role: "Student, AI Bootcamp '25",
    quote:
      "The training program rewired how I think about software. I shipped my first real product within the cohort.",
    rating: 4,
    initials: "FN",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Consultation",
    desc: "Deep-dive discovery to align scope, goals, and constraints.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Architecture, roadmap, and milestones with measurable outcomes.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Iterative sprints with weekly demos and continuous feedback.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "Automated and manual QA across devices, platforms, and edge cases.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Zero-downtime releases with CI/CD and observability built-in.",
  },
  {
    step: "06",
    title: "Support",
    desc: "Long-term SLAs, monitoring, and continuous improvement.",
  },
];
