"use client";

import React from "react";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";

export const developedProjects = [
  {
    id: "ims",
    title: "ကုန်ပစ္စည်းသိုလှောင်မှုစီမံခန့်ခွဲရေးစနစ် (IMS)",
    description:
      "လုပ်ငန်းသုံး ကုန်ပစ္စည်းစာရင်းများကို အချိန်နှင့်တပြေးညီ တိကျစွာခြေရာခံခြင်း၊ အလိုအလျောက် ပစ္စည်းပြန်လည်မှာယူခြင်းစနစ်၊ ဘားကုဒ်စနစ်များနှင့် အရောင်းဆိုင်ရာ အချက်အလက်များကို ခွဲခြမ်းစိတ်ဖြာနိုင်မည့် စနစ်ဖြစ်ပါသည်။",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    features: [
      "Real-time Stock Tracking",
      "Automated Reordering Alerts",
      "Barcode Integration",
      "Sales Analytics & Reports",
    ],
    badge: "Operational Efficiency",
    slug: "inventory-management-system",
    glowColor: "rgba(236, 72, 153, 0.35)", // Pink glow
  },
  {
    id: "lms",
    title: "သင်ကြားမှုစီမံခန့်ခွဲမှုစနစ် (LMS)",
    description:
      "သင်ကြားပြသသူများနှင့် သင်ယူသူများအတွက် အပြန်အလှန် အသုံးချနိုင်သော သင်ခန်းစာဖန်တီးမှုကိရိယာများ၊ တိုးတက်မှုခြေရာခံခြင်း၊ စာမေးပွဲစစ်ဆေးခြင်းနှင့် လုံခြုံစိတ်ချရသော ပူးပေါင်းသင်ယူမှုစနစ်ဖြစ်ပါသည်။",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    features: [
      "Course Builder Tools",
      "Student Progress Tracking",
      "Interactive Quiz Maker",
      "Collaborative Classrooms",
    ],
    badge: "Next-Gen Education",
    slug: "learning-management-system",
    glowColor: "rgba(244, 63, 94, 0.4)", // Rose glow
  },
  {
    id: "iot",
    title: "IoT နည်းပညာသုံး အသုံးချစနစ်",
    description:
      "လုပ်ငန်းသုံးစက်ပစ္စည်းများကို Cloud စနစ်မှတစ်ဆင့် အချိန်နှင့်တပြေးညီ လုံခြုံစွာ စောင့်ကြည့်ထိန်းချုပ်နိုင်ပြီး အချက်အလက်များကို လျှင်မြန်စွာ ပေးပို့ဆန်းစစ်နိုင်မည့်စနစ် ဖြစ်ပါသည်။",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    features: [
      "Real-time Telemetry Data",
      "MQTT & WebSocket Protocol",
      "OTA Firmware Updates",
      "Predictive System Diagnostics",
    ],
    badge: "Hardware & Cloud Sync",
    slug: "iot-application",
    glowColor: "rgba(217, 70, 239, 0.35)", // Fuchsia glow
  },
];

export function ProjectShowcaseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 bg-background">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest">
          Featured Products
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Developed Systems
        </h3>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          Hover over each system card to explore key features and technology specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {developedProjects.map((project, index) => (
          <ProjectShowcaseCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
