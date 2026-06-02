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
  ShoppingCart,
  Receipt,
  BarChart3,
  Tags,
  Activity,
  Bluetooth,
  Wifi,
  QrCode,
  Lightbulb,
  CheckCircle2,
  Cpu,
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
    title: "Smart IoT Device App",
    heroTagline:
      "QR onboarding, device pairing, and smart room control in one mobile app.",
    heroMeta: "Mobile App",
    overviewTitle: "Connecting smart devices with less setup friction",
    thumbnail: "/projects/iot/thumbnail.png",
    overviewDescription:
      "IoT app သည် smart device များကို QR code ဖြင့် လျင်မြန်စွာ ထည့်သွင်းနိုင်ရန်၊ Bluetooth နှင့် WiFi setup များကို အဆင့်လိုက် ပြုလုပ်နိုင်ရန်၊ room/device dashboard မှ energy usage နှင့် device status များကို mobile-first experience ဖြင့် စီမံနိုင်ရန် ဖန်တီးထားပါသည်။",
    overviewStats: [
      { value: "9", label: "Captured Screens" },
      { value: "3", label: "Pairing Steps" },
      { value: "BLE", label: "Device Setup" },
      { value: "WiFi", label: "Network Control" },
    ],
    layout: "mobile",
    showcaseTitle: "Smart IoT Device App",
    showcaseDescription:
      "iot project asset folder မှ onboarding, pairing journey, dashboard နှင့် device control screen များကို စုစည်းတင်ပြထားပါသည်။",
    showcaseItems: [
      {
        eyebrow: "Onboarding",
        title: "QR Device Onboarding",
        image: "/projects/iot/home.png",
        icon: QrCode,
        description:
          "Device အသစ်များကို one-time QR code ဖြင့် လျင်မြန်စွာ ထည့်သွင်းနိုင်ရန် app entry screen ကို ရိုးရှင်းပြီး action-focused ဖြစ်အောင် ဖန်တီးထားပါသည်။",
        features: ["One-time QR code", "Fast device add", "Secure setup"],
      },
      {
        eyebrow: "Register",
        title: "Account Registration",
        image: "/projects/iot/register.png",
        icon: Users,
        description:
          "Smart home device များကို ကိုယ်ပိုင် account ဖြင့် စီမံနိုင်ရန် email/password registration နှင့် Google sign-in option ပါဝင်သော onboarding screen ဖြစ်ပါသည်။",
        features: ["Email sign up", "Password confirmation", "Google access"],
      },
      {
        eyebrow: "Verification",
        title: "OTP Verification",
        image: "/projects/iot/otp.png",
        icon: Shield,
        description:
          "Account activation ကို လုံခြုံစေရန် OTP code အတည်ပြုခြင်း၊ resend action နှင့် verify flow ကို mobile screen အတွင်း ထည့်သွင်းထားပါသည်။",
        features: ["OTP input", "Resend code", "Verified access"],
      },
      {
        eyebrow: "Dashboard",
        title: "Smart Room Dashboard",
        image: "/projects/iot/dashboard.png",
        icon: Activity,
        description:
          "Energy usage summary, room category filter နှင့် smart space cards များကို dashboard တစ်ခုတည်းတွင် မြင်သာစွာ စီမံနိုင်ရန် တည်ဆောက်ထားပါသည်။",
        features: ["Energy summary", "Room filtering", "Create room action"],
      },
      {
        eyebrow: "Devices",
        title: "Device Discovery",
        image: "/projects/iot/device.png",
        icon: Cpu,
        description:
          "Bluetooth/WiFi mode ဖြင့် device များကို scan လုပ်ပြီး connection status နှင့် control action များကို list view ထဲတွင် တစ်ပြိုင်နက် စစ်ဆေးနိုင်ပါသည်။",
        features: ["Mode switching", "Device scanning", "Connection status"],
      },
      {
        eyebrow: "Pairing",
        title: "Bluetooth Connection",
        image: "/projects/iot/user-journey-bluetooth.png",
        icon: Bluetooth,
        description:
          "IoT device နှင့် app ကြား local setup စတင်နိုင်ရန် Bluetooth connection အဆင့်ကို device context နှင့် progress indicator ပါဝင်အောင် ဖန်တီးထားပါသည်။",
        features: ["Bluetooth pairing", "Step indicator", "Offline setup"],
      },
      {
        eyebrow: "Network",
        title: "WiFi Configuration",
        image: "/projects/iot/user-journey-wifi.png",
        icon: Wifi,
        description:
          "Device ကို network ချိတ်ဆက်ရန် SSID နှင့် password ထည့်သွင်းပြီး WiFi setup progress ကို အဆင့်လိုက် ဆက်လက်လုပ်ဆောင်နိုင်ပါသည်။",
        features: ["SSID setup", "Password entry", "Network provisioning"],
      },
      {
        eyebrow: "Control",
        title: "Device Control Panel",
        image: "/projects/iot/device-detail.png",
        icon: Lightbulb,
        description:
          "Connected device များကို on/off control ပြုလုပ်နိုင်ပြီး temperature, humidity နှင့် smart appliance status များကို control panel မှ စောင့်ကြည့်နိုင်ပါသည်။",
        features: ["Light controls", "Sensor cards", "Live device status"],
      },
      {
        eyebrow: "Complete",
        title: "Scanned Device Summary",
        image: "/projects/iot/user-journey-complete.png",
        icon: CheckCircle2,
        description:
          "Bluetooth နှင့် WiFi setup ပြီးဆုံးပြီးနောက် detected device များကို summary view ဖြင့် ပြသကာ complete action မှတစ်ဆင့် control flow သို့ ပြန်လည်ဝင်နိုင်ပါသည်။",
        features: ["Setup complete", "Scanned devices", "Ready to control"],
      },
    ],
  },
  {
    id: "pos",
    title: "Point of Sale System",
    heroTagline: "Retail sales, checkout, inventory, and reporting in one dashboard.",
    heroMeta: "Web Dashboard",
    overviewTitle: "Complete retail operations control",
    thumbnail: "/projects/pos/thumbnail.png",
    overviewDescription:
      "POS system သည် ဆိုင်ရောင်းချမှုများ၊ checkout process, product catalog, customer/supplier records, category setup နှင့် sales report များကို dashboard တစ်ခုတည်းအတွင်း စီမံနိုင်ရန် ဖန်တီးထားသော retail operation system ဖြစ်ပါသည်။",
    overviewStats: [
      { value: "8", label: "Captured Screens" },
      { value: "6", label: "Retail Modules" },
      { value: "POS", label: "Checkout Flow" },
      { value: "1", label: "Unified Dashboard" },
    ],
    showcaseTitle: "Point of Sale System",
    showcaseDescription:
      "POS project asset folder မှ ရောင်းချမှု၊ checkout, catalog နှင့် reporting screen များကို စုစည်းတင်ပြထားပါသည်။",
    layout: "desktop",
    showcaseItems: [
      {
        eyebrow: "Sales",
        title: "Sales Dashboard",
        image: "/projects/pos/sale.png",
        icon: ShoppingCart,
        description:
          "နေ့စဉ်ရောင်းချမှုများကို မြင်သာစွာ စစ်ဆေးနိုင်ပြီး item selection, cart summary နှင့် payment workflow များကို တစ်နေရာတည်းတွင် စီမံနိုင်သော sales screen ဖြစ်ပါသည်။",
        features: ["Live cart", "Product selection", "Payment-ready flow"],
      },
      {
        eyebrow: "Checkout",
        title: "Checkout Experience",
        image: "/projects/pos/checkout.png",
        icon: Receipt,
        description:
          "Customer order ကို အတည်ပြုခြင်း၊ subtotal/discount/tax တွက်ချက်ခြင်းနှင့် final payment အဆင့်ကို လျင်မြန်စွာ ဆောင်ရွက်နိုင်ရန် checkout interface ကို ဖန်တီးထားပါသည်။",
        features: ["Order summary", "Price calculation", "Fast payment"],
      },
      {
        eyebrow: "Products",
        title: "Product Management",
        image: "/projects/pos/product.png",
        icon: Package,
        description:
          "ရောင်းချမည့် product များ၏ name, price, category နှင့် stock-related information များကို စနစ်တကျ ထည့်သွင်းပြင်ဆင်နိုင်သော product catalog screen ဖြစ်ပါသည်။",
        features: ["Product records", "Price control", "Catalog updates"],
      },
      {
        eyebrow: "Customers",
        title: "Customer Records",
        image: "/projects/pos/customer.png",
        icon: Users,
        description:
          "ဝယ်ယူသူအချက်အလက်များကို သိမ်းဆည်းပြီး sale history နှင့် customer relationship workflow များအတွက် ပြန်လည်အသုံးပြုနိုင်ရန် customer management ကို ထည့်သွင်းထားပါသည်။",
        features: ["Customer list", "Contact details", "Purchase context"],
      },
      {
        eyebrow: "Suppliers",
        title: "Supplier Directory",
        image: "/projects/pos/supplier.png",
        icon: Truck,
        description:
          "ကုန်ပစ္စည်းပေးသွင်းသူများ၏ contact information နှင့် supplier records များကို စုစည်းထားပြီး purchasing workflow များအတွက် အလွယ်တကူ ပြန်ရှာနိုင်ပါသည်။",
        features: ["Supplier records", "Contact tracking", "Procurement data"],
      },
      {
        eyebrow: "Categories",
        title: "Category Setup",
        image: "/projects/pos/category.png",
        icon: Tags,
        description:
          "Product များကို အုပ်စုခွဲစီမံနိုင်ရန် category configuration ကို အသုံးပြုထားပြီး sales screen နှင့် catalog browsing တွင် ရှာဖွေရလွယ်ကူစေပါသည်။",
        features: ["Category records", "Product grouping", "Easy browsing"],
      },
      {
        eyebrow: "Reports",
        title: "Business Reports",
        image: "/projects/pos/report.png",
        icon: BarChart3,
        description:
          "ရောင်းအား၊ ဝင်ငွေ၊ transaction trend နှင့် operation performance များကို စစ်ဆေးနိုင်ရန် report screen ကို summary-focused layout ဖြင့် ပြသထားပါသည်။",
        features: ["Sales summary", "Revenue insight", "Performance view"],
      },
      {
        eyebrow: "History",
        title: "Sale History",
        image: "/projects/pos/sale-history.png",
        icon: Database,
        description:
          "ပြီးခဲ့သည့် sale transaction များကို ပြန်လည်စစ်ဆေးနိုင်ရန် invoice/order records များကို table format ဖြင့် ဖော်ပြထားပြီး reconciliation အတွက် အသုံးပြုနိုင်ပါသည်။",
        features: ["Transaction records", "Invoice lookup", "Audit support"],
      },
    ],
  },
];

export function getServiceProjectDetailById(id: string) {
  return serviceProjectDetails.find((project) => project.id === id);
}
