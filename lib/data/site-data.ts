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

import BlogImage_1 from "@/public/blogs/blog_1.png";
import BlogImage_2 from "@/public/blogs/blog_2.png";
import BlogImage_3 from "@/public/blogs/blog_3.png";
import BlogImage_4 from "@/public/blogs/blog_4.png";
import BlogImage_5 from "@/public/blogs/blog_5.png";
import BlogImage_6 from "@/public/blogs/blog_6.png";
import { StaticImageData } from "next/image";

export const services: Service[] = [
  {
    slug: "mobile",
    title: "Mobile Application Development",
    short: "Native & cross-platform apps engineered for scale.",
    description:
      "We craft fast, beautiful iOS and Android apps using React Native, Swift, and Kotlin — from MVPs to production-grade platforms.",
    icon: Smartphone,
    gradient: "from-blue-500 to-indigo-600",
    image_url:
      "https://www.addevice.io/storage/ckeditor/uploads/images/65f840d316353_mobile.app.development.1920.1080.png",
  },
  {
    slug: "web",
    title: "Website Development",
    short: "Modern, performant websites that convert.",
    description:
      "Full-stack web platforms built with React, Next.js, and edge infrastructure. Pixel-perfect design, fast as light.",
    icon: Globe,
    gradient: "from-indigo-500 to-purple-600",
    image_url:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg",
  },
  {
    slug: "iot",
    title: "IoT & AIoT Solutions",
    short: "Connected devices that think for themselves.",
    description:
      "Industrial-grade IoT — sensors, gateways, dashboards — combined with on-device AI for predictive intelligence.",
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-600",
    image_url:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240410174620/How-to-become-IOT-Developer.webp",
  },
  {
    slug: "ai",
    title: "AI-powered Systems",
    short: "Custom LLM, vision, and ML pipelines.",
    description:
      "From RAG chatbots to computer vision systems — we ship production AI that delivers measurable business value.",
    icon: Brain,
    gradient: "from-violet-500 to-fuchsia-600",
    image_url: "https://www.zoondia.com/wp-content/uploads/2025/05/image.jpeg",
  },
  {
    slug: "training",
    title: "Teaching & Training",
    short: "Cohort-based programs for modern developers.",
    description:
      "Hands-on training in Web, Mobile, AI, and IoT. We've trained 2,500+ engineers across universities and enterprises.",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-600",
    image_url:
      "https://online.maryville.edu/wp-content/uploads/sites/97/2021/04/whiteboard-training.jpg",
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
];

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  readingTime: string;
  cover: string | StaticImageData;
  views: number;
};

// const cover = (seed: string, hue: number) =>
//   `data:image/svg+xml;utf8,${encodeURIComponent(
//     `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${hue},80%,60%)'/><stop offset='1' stop-color='hsl(${(hue + 50) % 360},80%,45%)'/></linearGradient><radialGradient id='r' cx='0.3' cy='0.3'><stop offset='0' stop-color='white' stop-opacity='0.35'/><stop offset='1' stop-color='white' stop-opacity='0'/></radialGradient></defs><rect width='800' height='500' fill='url(#g)'/><rect width='800' height='500' fill='url(#r)'/><text x='40' y='460' font-family='Inter,sans-serif' font-size='18' fill='white' fill-opacity='0.6'>${seed}</text></svg>`,
//   )}`;

export const blogs: Blog[] = [
  {
    slug: "future-of-aiot-2026",
    title: "The Future of AIoT: Where AI Meets the Physical World",
    excerpt:
      "On-device AI is reshaping IoT. Here's how edge intelligence is unlocking a new class of products in 2026.",
    author: "Aisha Khan",
    authorRole: "Head of AI",
    date: "May 12, 2026",
    category: "AI",
    readingTime: "8 min read",
    cover: BlogImage_1,
    views: 4280,
  },
  {
    slug: "react-server-components-deep-dive",
    title: "React Server Components: A Practical Deep Dive",
    excerpt:
      "RSC changes the mental model of React. We unpack streaming, suspense, and what it means for your stack.",
    author: "Daniel Rivera",
    authorRole: "Principal Engineer",
    date: "May 4, 2026",
    category: "Web",
    readingTime: "12 min read",
    cover: BlogImage_2,
    views: 3120,
  },
  {
    slug: "scaling-react-native-teams",
    title: "Scaling React Native Across 40 Engineers",
    excerpt:
      "Lessons from a year of monorepo, modular architecture, and OTA rollouts in production.",
    author: "Mei Lin",
    authorRole: "Mobile Lead",
    date: "Apr 28, 2026",
    category: "Mobile",
    readingTime: "10 min read",
    cover: BlogImage_3,
    views: 2890,
  },
  {
    slug: "edge-llms-production",
    title: "Running LLMs at the Edge: Production Lessons",
    excerpt:
      "Quantization, KV-cache tricks, and how we shipped a 7B model inside a factory gateway.",
    author: "Aisha Khan",
    authorRole: "Head of AI",
    date: "Apr 18, 2026",
    category: "AI",
    readingTime: "9 min read",
    cover: BlogImage_4,
    views: 5310,
  },
  {
    slug: "designing-for-trust",
    title: "Designing Software People Actually Trust",
    excerpt:
      "Trust is a design problem. Microcopy, motion, and defaults that build confidence.",
    author: "Sara Ahmed",
    authorRole: "Design Director",
    date: "Apr 10, 2026",
    category: "Design",
    readingTime: "6 min read",
    cover: BlogImage_5,
    views: 1980,
  },
  {
    slug: "iot-fleet-observability",
    title: "Observability for 100k Connected Devices",
    excerpt:
      "How we built a telemetry pipeline that doesn't fall over under real-world chaos.",
    author: "Omar Yusuf",
    authorRole: "IoT Architect",
    date: "Apr 1, 2026",
    category: "IoT",
    readingTime: "11 min read",
    cover: BlogImage_6,
    views: 2410,
  },
];

export const stats = [
  { label: "Students Trained", value: 2500, suffix: "+", icon: GraduationCap },
  { label: "Completed Projects", value: 320, suffix: "+", icon: Briefcase },
  { label: "Active Clients", value: 48, suffix: "", icon: Users },
  { label: "Years of Experience", value: 11, suffix: "", icon: Calendar },
  { label: "Technologies Used", value: 60, suffix: "+", icon: Code },
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
