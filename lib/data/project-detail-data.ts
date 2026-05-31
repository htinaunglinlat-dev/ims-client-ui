import type { ProjectDetailShowcaseItem } from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailShowcaseCard";
import {
  Shield,
  Database,
  Truck,
  Package,
  Home,
  Users,
  Layers,
  Scale,
  Smartphone,
} from "lucide-react";

type ProjectOverviewStat = {
  value: string;
  label: string;
};

export type ProjectDetailCardLayout = "desktop" | "mobile";

export type ServiceProjectDetail = {
  id: string;
  title: string;
  heroTagline: string;
  heroMeta: string;
  thumbnail: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewStats: ProjectOverviewStat[];
  showcaseTitle: string;
  showcaseDescription: string;
  showcaseItems: ProjectDetailShowcaseItem[];
  layout?: ProjectDetailCardLayout;
};

export const serviceProjectDetails: ServiceProjectDetail[] = [
  {
    id: "ims",
    title: "Inventory Management System",
    heroTagline: "Reimagining inventory control with a clean workflow.",
    heroMeta: "Web Dashboard",
    overviewTitle: "Reimagining inventory control",
    thumbnail: "/projects/ims/thumbnail.png",
    overviewDescription:
      "ဤစနစ်သည် Stock အရေအတွက်များ၊ ပို့ဆောင်မှုများ၊ ကုန်ပစ္စည်းများ၊ အမျိုးအစားများနှင့် ဂိုဒေါင်တာဝန်ပေးအပ်မှုများကို workflow တစ်ခုတည်းအတွင်း စုပေါင်းစီမံနိုင်အောင် ကူညီပေးပါသည်။",
    overviewStats: [
      { value: "8", label: "Core Screens" },
      { value: "6", label: "Business Modules" },
      { value: "100%", label: "Role-aware Access" },
      { value: "1", label: "Unified Dashboard" },
    ],
    showcaseTitle: "Inventory Management System",
    showcaseDescription:
      "IMS project assets များမှ အဓိက screen များကို စုစည်းတင်ပြထားပါသည်။",
    layout: "desktop",
    showcaseItems: [
      {
        eyebrow: "Authentication",
        title: "Login Experience",
        image: "/projects/ims/auth_login.png",
        icon: Shield,
        description:
          "လုံခြုံစိတ်ချရသော အသုံးပြုခွင့်ရရှိရန် ရိုးရှင်းပြီး အာရုံစိုက်လွယ်သော sign-in flow ကို ဖန်တီးထားပါသည်။",
        features: ["Secure sign in", "Role-based access", "Clean entry point"],
      },
      {
        eyebrow: "Inventory",
        title: "Inventory Management",
        image: "/projects/ims/inventory_page.png",
        icon: Database,
        description:
          "Stock အရေအတွက်များကို ထင်ရှားစွာ မြင်နိုင်ပြီး လျင်မြန်စွာ ထိန်းချုပ်နိုင်ရန် Inventory table ကို ဗဟိုပြု စီစဉ်ထားပါသည်။",
        features: [
          "Stock overview",
          "Warehouse relation",
          "Quantity tracking",
        ],
      },
      {
        eyebrow: "Delivery",
        title: "Delivery Tracking",
        image: "/projects/ims/delivery_page.png",
        icon: Truck,
        description:
          "Shipment အခြေအနေနှင့် လုပ်ငန်းဆောင်ရွက်မှုများကို စစ်ဆေးနိုင်ရန် Delivery monitoring screen ကို ဖန်တီးထားပါသည်။",
        features: ["Delivery status", "Action controls", "Shipment records"],
      },
      {
        eyebrow: "Product",
        title: "Product Catalog",
        image: "/projects/ims/product_page.png",
        icon: Package,
        description:
          "ကုန်ပစ္စည်းအသေးစိတ်၊ အမျိုးအစားများနှင့် ထိန်းသိမ်းပြင်ဆင်မှုများကို စနစ်တကျ စီမံနိုင်ရန် Catalog screen ကို ဖန်တီးထားပါသည်။",
        features: ["Product records", "Category mapping", "Edit and delete"],
      },
      {
        eyebrow: "Warehouse",
        title: "Warehouse Control",
        image: "/projects/ims/warhouse_page.png",
        icon: Home,
        description:
          "တည်နေရာအသေးစိတ်အချက်အလက်များကို ရှင်းလင်းစွာ မြင်နိုင်စေရန် Warehouse အဆင့်အလိုက် အချက်အလက်စီမံမှုကို ပြုလုပ်ထားပါသည်။",
        features: ["Warehouse list", "Contact details", "Sortable records"],
      },
      {
        eyebrow: "User Roles",
        title: "User Management",
        image: "/projects/ims/user_page.png",
        icon: Users,
        description:
          "အသုံးပြုသူများ၊ role တာဝန်ခွဲဝေမှုများနှင့် warehouse access များကို တစ်နေရာတည်းမှ စီမံနိုင်ပါသည်။",
        features: ["User accounts", "Role assignment", "Warehouse assignment"],
      },
      {
        eyebrow: "Categories",
        title: "Product Categories",
        image: "/projects/ims/product_category_page.png",
        icon: Layers,
        description:
          "Catalog grouping များကို စနစ်တကျထားရှိပြီး ရှာဖွေရလွယ်ကူစေရန် Category configuration ကို ပြင်ဆင်ထားပါသည်။",
        features: ["Category records", "Descriptions", "Product grouping"],
      },
      {
        eyebrow: "Units",
        title: "Product Units",
        image: "/projects/ims/product_unit_page.png",
        icon: Scale,
        description:
          "Module များတစ်လျှောက် ကုန်ပစ္စည်းအရေအတွက်ကို တူညီမှန်ကန်စွာ ကိုင်တွယ်နိုင်ရန် Unit definition များကို သတ်မှတ်ထားပါသည်။",
        features: ["Unit records", "Created dates", "Updated dates"],
      },
    ],
  },
  {
    id: "chat-app",
    title: "Secure Chat Messaging App",
    heroTagline: "Private messaging, group chat, and QR-based social workflows.",
    heroMeta: "Mobile App",
    overviewTitle: "Designing secure everyday communication",
    thumbnail: "/projects/chat-app/thumbnail.png",
    overviewDescription:
      "Chat app သည် လျင်မြန်သော onboarding, OTP အတည်ပြုခြင်း, contact စီမံခန့်ခွဲမှုနှင့် private/group စကားပြောကို real-time ဖြင့် ပြုလုပ်နိုင်ရန် mobile-first interface ဖြင့် အဓိကထား တည်ဆောက်ထားပါသည်။",
    overviewStats: [
      { value: "12", label: "Captured Screens" },
      { value: "4", label: "Messaging Flows" },
      { value: "OTP", label: "Secure Sign-in" },
      { value: "QR", label: "Contact Actions" },
    ],
    layout: "mobile",
    showcaseTitle: "Secure Chat Messaging App",
    showcaseDescription:
      "chat-app asset folder မှ အဓိက product screen များကို ရွေးချယ်စီစဉ်တင်ပြထားပါသည်။",
    showcaseItems: [
      {
        eyebrow: "Register",
        title: "Account Registration",
        image: "/projects/chat-app/register.png",
        icon: Users,
        description:
          "အသုံးပြုသူအသစ်များ onboarding စတင်နိုင်ရန် ရိုးရှင်းသော input flow ပါဝင်သည့် sign-up screen ဖြစ်ပါသည်။",
        features: ["Quick form", "Clear validation", "Mobile-first layout"],
      },
      {
        eyebrow: "Verification",
        title: "OTP Confirmation",
        image: "/projects/chat-app/otp.png",
        icon: Shield,
        description:
          "Account activation ကို လုံခြုံစေရန် One-time-password အတည်ပြုအဆင့်ကို ထည့်သွင်းထားပါသည်။",
        features: ["OTP input", "Secure onboarding", "Error-safe flow"],
      },
      {
        eyebrow: "Authentication",
        title: "Login Experience",
        image: "/projects/chat-app/login.png",
        icon: Smartphone,
        description:
          "ပြန်လည်ဝင်ရောက်သော အသုံးပြုသူများ chat များကို လျင်မြန်စွာ အသုံးပြုနိုင်ရန် အာရုံစိုက်ထားသော login screen ကို ပြုလုပ်ထားပါသည်။",
        features: ["Secure sign in", "Fast access", "Minimal friction"],
      },
      {
        eyebrow: "Home",
        title: "Conversation Home",
        image: "/projects/chat-app/home.png",
        icon: Home,
        description:
          "မကြာသေးမီ chat များကို ကြည့်ရှုနိုင်ရန်နှင့် navigation entry point များကို ဝင်ရောက်နိုင်ရန် အဓိက conversation list screen ဖြစ်ပါသည်။",
        features: ["Chat list", "Unread visibility", "Primary navigation"],
      },
      {
        eyebrow: "Contacts",
        title: "Contact Directory",
        image: "/projects/chat-app/contact.png",
        icon: Users,
        description:
          "လူများကို လျင်မြန်စွာ ရှာဖွေရွေးချယ်နိုင်ရန် ထောက်ပံ့ပေးသော contact browsing screen ဖြစ်ပါသည်။",
        features: ["Contact list", "Search-ready layout", "Fast pick actions"],
      },
      {
        eyebrow: "Social",
        title: "Add Friend Flow",
        image: "/projects/chat-app/add_friend.png",
        icon: Layers,
        description:
          "Private network ကို တိုးချဲ့နိုင်ရန် friend-add interaction ကို သီးသန့်ဖန်တီးထားပါသည်။",
        features: ["Connection action", "Clear CTA", "Low-friction flow"],
      },
      {
        eyebrow: "Messaging",
        title: "Chat Interface",
        image: "/projects/chat-app/chat_ui.png",
        icon: Database,
        description:
          "စာဖတ်ရလွယ်ကူမှုနှင့် ဆက်တိုက်ပြောဆိုဆက်သွယ်နိုင်မှုကို ဦးစားပေးဒီဇိုင်းထားသော private message screen ဖြစ်ပါသည်။",
        features: ["Real-time thread", "Input controls", "Message clarity"],
      },
      {
        eyebrow: "Profile",
        title: "User Profile",
        image: "/projects/chat-app/profile.png",
        icon: Scale,
        description:
          "Account အချက်အလက်နောက်ခံနှင့် ကိုယ်ရေးအချက်အလက်ထိန်းချုပ်မှုများကို စီမံနိုင်ရန် user profile view ဖြစ်ပါသည်။",
        features: ["Profile data", "Identity context", "Settings entry"],
      },
    ],
  },
  {
    id: "iot",
    title: "IoT Application",
    heroTagline: "Cloud-connected monitoring and control for smart devices.",
    heroMeta: "IoT Platform",
    overviewTitle: "Operational IoT visibility",
    thumbnail: "/projects/ims/thumbnail.png",
    overviewDescription:
      "ဤ project သည် connected-device operations နှင့် remote observability workflow များကို အဓိကဖော်ပြထားပါသည်။ အသေးစိတ် screenshot များကို public asset folder တွင် မကြာမီ ထည့်သွင်းပေးသွားမည်ဖြစ်ပါသည်။",
    overviewStats: [
      { value: "MQTT", label: "Protocol Support" },
      { value: "24/7", label: "Telemetry Flow" },
      { value: "Cloud", label: "Central Monitoring" },
      { value: "OTA", label: "Device Updates" },
    ],
    showcaseTitle: "IoT Application",
    showcaseDescription:
      "ဤ project အတွက် screen asset များကို လက်ရှိတွင် ပြင်ဆင်နေဆဲ ဖြစ်ပါသည်။",
    showcaseItems: [],
  },
];

export function getServiceProjectDetailById(id: string) {
  return serviceProjectDetails.find((project) => project.id === id);
}
