import {
  ProjectDetailShowcaseCard,
  type ProjectDetailShowcaseItem,
} from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailShowcaseCard";

const showcaseItems: ProjectDetailShowcaseItem[] = [
  {
    eyebrow: "01 - Authentication",
    title: "Login Experience",
    image: "/projects/ims/auth_login.png",
    description:
      "စနစ်ထဲဝင်ရောက်မည့် အသုံးပြုသူများအတွက် Login မျက်နှာပြင်ကို ရိုးရှင်းပြီး အာရုံစိုက်လွယ်အောင် ဖန်တီးထားသည်။ အချက်အလက်ဖြည့်သွင်းခြင်း၊ ခွင့်ပြုချက်စစ်ဆေးခြင်းနှင့် စနစ်ထဲသို့ လုံခြုံစွာဝင်ရောက်ခြင်းတို့ကို အဓိကထားထားသည်။",
    features: ["Secure sign in", "Role-based access", "Clean entry point"],
  },
  {
    eyebrow: "02 - Inventory",
    title: "Inventory Management",
    image: "/projects/ims/inventory_page.png",
    description:
      "ကုန်ပစ္စည်းအဝင်အထွက်နှင့် လက်ကျန်စာရင်းများကို တစ်နေရာတည်းမှ ကြည့်ရှုစီမံနိုင်ရန် ဖန်တီးထားသည်။ ကုန်ပစ္စည်းအမည်၊ အရေအတွက်၊ သိုလှောင်ရုံနှင့် သက်ဆိုင်ရာအချက်အလက်များကို စာရင်းပုံစံဖြင့် မြင်သာစွာ စီထားသည်။",
    features: ["Stock overview", "Warehouse relation", "Quantity tracking"],
  },
  {
    eyebrow: "03 - Delivery",
    title: "Delivery Tracking",
    image: "/projects/ims/delivery_page.png",
    description:
      "ပို့ဆောင်မှုလုပ်ငန်းစဉ်များကို စာရင်းအလိုက် စစ်ဆေးနိုင်ရန် ဒီဇိုင်းပြုလုပ်ထားသည်။ ပို့ဆောင်မှုအခြေအနေ၊ သက်ဆိုင်ရာကုန်ပစ္စည်းနှင့် လုပ်ဆောင်ချက်များကို လျင်မြန်စွာကြည့်ရှုနိုင်သည်။",
    features: ["Delivery status", "Action controls", "Shipment records"],
  },
  {
    eyebrow: "04 - Product",
    title: "Product Catalog",
    image: "/projects/ims/product_page.png",
    description:
      "ကုန်ပစ္စည်းများ၏ ဓာတ်ပုံ၊ အမည်၊ ဖော်ပြချက်၊ အမျိုးအစားနှင့် ယူနစ်များကို စနစ်တကျ ထိန်းသိမ်းနိုင်ရန် ဖန်တီးထားသည်။ ရှာဖွေခြင်း၊ ပြင်ဆင်ခြင်းနှင့် ဖျက်ခြင်းလုပ်ဆောင်ချက်များကို လွယ်ကူစွာ အသုံးပြုနိုင်သည်။",
    features: ["Product records", "Category mapping", "Edit and delete"],
  },
  {
    eyebrow: "05 - Warehouse",
    title: "Warehouse Control",
    image: "/projects/ims/warhouse_page.png",
    description:
      "သိုလှောင်ရုံများကို အမည်၊ လိပ်စာနှင့် ဖုန်းနံပါတ်အလိုက် စီမံနိုင်ရန် ဖန်တီးထားသည်။ သိုလှောင်ရုံတစ်ခုချင်းစီ၏ အချက်အလက်များကို စာရင်းအနေဖြင့် မြင်သာစွာ ကြည့်ရှုနိုင်သည်။",
    features: ["Warehouse list", "Contact details", "Sortable records"],
  },
  {
    eyebrow: "06 - User Roles",
    title: "User Management",
    image: "/projects/ims/user_page.png",
    description:
      "အသုံးပြုသူများ၏ အကောင့်၊ ရာထူး၊ ဖုန်းနံပါတ်နှင့် သက်ဆိုင်ရာသိုလှောင်ရုံကို စနစ်တကျ စီမံနိုင်ရန် ဖန်တီးထားသည်။ Manager နှင့် Staff အခန်းကဏ္ဍများကို ခွဲခြားကြည့်ရှုနိုင်သည်။",
    features: ["User accounts", "Role assignment", "Warehouse assignment"],
  },
  {
    eyebrow: "07 - Categories",
    title: "Product Categories",
    image: "/projects/ims/product_category_page.png",
    description:
      "ကုန်ပစ္စည်းအမျိုးအစားများကို သီးခြားစာရင်းအဖြစ် စီမံနိုင်ရန် ဖန်တီးထားသည်။ အမျိုးအစားအမည်နှင့် ဖော်ပြချက်များကို ထည့်သွင်းထားခြင်းကြောင့် ကုန်ပစ္စည်းများကို အုပ်စုခွဲရာတွင် ပိုမိုရှင်းလင်းစေသည်။",
    features: ["Category records", "Descriptions", "Product grouping"],
  },
  {
    eyebrow: "08 - Units",
    title: "Product Units",
    image: "/projects/ims/product_unit_page.png",
    description:
      "ကုန်ပစ္စည်းတိုင်းအတွက် အသုံးပြုမည့် ယူနစ်များကို သီးခြားထိန်းသိမ်းနိုင်ရန် ဖန်တီးထားသည်။ Pieces, Tons, Gallons, Kilograms စသည့် ယူနစ်များကို စာရင်းအလိုက် စီမံနိုင်သည်။",
    features: ["Unit records", "Created dates", "Updated dates"],
  },
];

export function ProjectDetailFeatureShowcase() {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
            Product Screens
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Inventory Management System
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Core screens prepared from the IMS project assets.
          </p>
        </div>

        <div className="space-y-8">
          {showcaseItems.map((item) => (
            <ProjectDetailShowcaseCard key={item.eyebrow} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
