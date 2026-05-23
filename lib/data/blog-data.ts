import BlogImage_1 from "@/public/blogs/blog_1.png";
import BlogImage_2 from "@/public/blogs/blog_2.png";
import BlogImage_3 from "@/public/blogs/blog_3.png";
import BlogImage_4 from "@/public/blogs/blog_4.png";
import BlogImage_5 from "@/public/blogs/blog_5.png";
import BlogImage_6 from "@/public/blogs/blog_6.png";
import { StaticImageData } from "next/image";
import { title } from "process";

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
  contentHTML?: string;
};

export const blogs: Blog[] = [
  {
    slug: "k-nearest Neighbors (KNN) Algorithm",
    title: "K-Nearest Neighbors (KNN) Algorithm",
    excerpt:
      "K-Nearest Neighbors သည် Machine Learning တွင် အသုံးများသော supervised learning algorithm တစ်ခု ဖြစ်ပါတယ်။ ဤ Algorithm သည် classification နှင့် regression နှစ်မျိုးလုံးအတွက် အသုံးပြုနိုင်သည့် algorithm ဖြစ်ကြောင်း သိရှိရပါမည်။",
    contentHTML:
      '<h2>K-Nearest Neighbors (KNN) Algorithm</h2><p>K-Nearest Neighbors သည် Machine Learning တွင် အသုံးများသော <strong>supervised learning algorithm</strong> (ထည့်သွင်းဒေတာနှင့် အဖြေတွဲလျက်ပါသော စနစ်ကို သင်ကြားပေးသည့် နည်းလမ်း) တစ်ခု ဖြစ်ပါသည်။ ဤ Algorithm ကို <strong>classification</strong> (အုပ်စုခွဲခြင်း) နှင့် <strong>regression</strong> (တန်ဖိုးခန့်မှန်းခြင်း) နှစ်မျိုးလုံးအတွက် အသုံးပြုနိုင်ပါသည်။</p><p>KNN ၏ အခြေခံ သဘောတရားမှာ အသစ်ဝင်လာသော data point တစ်ခုကို ခန့်မှန်းရန် ၎င်းနှင့် အနီးဆုံးရှိနေသော training data <strong>K အရေအတွက်</strong> ကို ရှာဖွေပြီး အများစု သက်ဆိုင်သည့် အုပ်စုအတိုင်း သတ်မှတ်ပေးခြင်း ဖြစ်ပါသည်။</p><blockquote><p><strong>ဥပမာ -</strong> ကျောင်းသားတစ်ဦး၏ စာမေးပွဲရမှတ်နှင့် ကျောင်းတက်ရက်အပေါ် မူတည်၍ စာမေးပွဲ အောင်/ရှုံး ခန့်မှန်းလိုသည်ဆိုပါစို့။ K = 5 ဟု သတ်မှတ်ပြီး အနီးဆုံး ကျောင်းသား ၅ ဦးကို ရှာဖွေရာတွင် ၄ ဦးမှာ စာမေးပွဲ အောင်မြင်သူများ ဖြစ်နေပါက အသစ်ဝင်လာသော ကျောင်းသားသည်လည်း စာမေးပွဲ အောင်မြင်လိမ့်မည်ဟု ခန့်မှန်းခြင်း ဖြစ်ပါသည်။</p></blockquote><hr><h2>Distance Metrics (အကွာအဝေး တွက်ချက်ခြင်း နည်းလမ်းများ)</h2><p>KNN တွင် ဒေတာအမှတ်နှစ်ခုကြား အကွာအဝေးကို တိုင်းတာရန်အတွက် အောက်ပါ Distance Metrics များကို အသုံးပြုပါသည်။</p><h3>Euclidean Distance</h3><p>ဂျီသြမေတြီ နေရာလွတ်တွင် အမှတ်နှစ်ခုကြား တိုက်ရိုက်မျဉ်းဖြောင့် အကွာအဝေးကို တိုင်းတာသည့် အသုံးအများဆုံး နည်းလမ်း ဖြစ်ပါသည်။ သင်္ချာဖော်မြူလာမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည် -</p><pre><code class="language-math">d(p,q) = √(Σ(pᵢ-qᵢ)²)</code></pre><p><strong>၂ ဖက်မြင်တွက်ချက်မှု ဥပမာ -</strong> A = (2, 3) နှင့် B = (5, 7) ကြား အကွာအဝေး -</p><pre><code class="language-math">d(A,B) = √((5-2)² + (7-3)²) = √(3² + 4²) = √(9+16) = √25 = 5</code></pre><p><strong>၃ ဖက်မြင်တွက်ချက်မှု ဥပမာ -</strong> P = (1, 2, 3) နှင့် Q = (4, 6, 8) ကြား အကွာအဝေး -</p><pre><code class="language-math">d(P,Q) = √((4-1)² + (6-2)² + (8-3)²) = √(3² + 4² + 5²) = √(9+16+25) = √50 ≈ 7.071</code></pre><h3>Manhattan Distance</h3><p>မြို့ကွက်လမ်းများအတိုင်း ထောင့်မတ် သို့မဟုတ် အလျားလိုက်သာ သွားရသကဲ့သို့ ထောင့်ဖြတ်မသွားဘဲ အကွာအဝေးကို တွက်ချက်သည့် နည်းလမ်း ဖြစ်ပါသည်။ ဖော်မြူလာမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည် -</p><pre><code class="language-math">d(p,q) = Σ|pᵢ-qᵢ|</code></pre><p>A = (2, 3) နှင့် B = (5, 7) အတွက် Manhattan Distance မှာ |5-2| + |7-3| = 3 + 4 = 7 ဖြစ်ပါသည်။ ၎င်းသည် Euclidean Distance ထက် အမြဲတမ်း ကြီးခြင်း သို့မဟုတ် ညီမျှခြင်း ရှိပါသည်။</p><h3>Minkowski Distance</h3><p>Euclidean နှင့် Manhattan distance နည်းလမ်းနှစ်ခုလုံးကို ခြုံငုံဖော်ပြထားသော ယေဘုယျ ဖော်မြူလာ ဖြစ်ပါသည်။</p><pre><code class="language-math">d(p,q) = (Σ|pᵢ-qᵢ|ᵖ)^(1/p)</code></pre><p>p = 1 ဆိုပါက Manhattan Distance ဖြစ်လာပြီး p = 2 ဆိုပါက Euclidean Distance ဖြစ်လာပါသည်။ p = ∞ တွင် Chebyshev Distance ဖြစ်လာပါသည်။</p><h3>Cosine Similarity</h3><p>ဒေတာ Vector နှစ်ခုကြားရှိ အကွာအဝေးထက် ၎င်းတို့၏ ဦးတည်ချက်ထောင့် (Angle) ကို တိုင်းတာလိုသော အခြေအနေများတွင် အသုံးပြုပါသည်။ ရလဒ်သည် -1 မှ 1 အတွင်း ရှိပါသည်။</p><pre><code class="language-math">cos(θ) = (p·q) / (‖p‖ × ‖q‖)</code></pre><p>Vector A = (3, 4) နှင့် B = (6, 8) တို့၏ Dot Product သည် 50 ဖြစ်ပြီး Magnitude များမှာ ‖A‖ = 5, ‖B‖ = 10 ဖြစ်သဖြင့် cos(θ) = 50/(5 × 10) = 1 ရရှိပါသည်။ ရလဒ် 1 ဖြစ်သဖြင့် ဗက်တာနှစ်ခုစလုံးသည် တူညီသော ဦးတည်ချက်ရှိကြောင်း သိနိုင်ပါသည်။</p><hr><h2>Choosing K Value (K တန်ဖိုး ရွေးချယ်ခြင်း)</h2><p>K တန်ဖိုး ငယ်လွန်းပါက ဒေတာထဲရှိ အဆမတန်ကွဲလွဲချက်များ (Noise) ကို လိုက်နာမိပြီး <strong>Overfitting</strong> (ပုံသေမှတ်သားလွန်းခြင်း) ဖြစ်တတ်ကာ ကြီးလွန်းပါက <strong>Underfitting</strong> (ပုံသေနည်း အကြမ်းဖျင်းဖြစ်သွားခြင်း) ဖြစ်တတ်ပါသည်။ အကောင်းဆုံး K တန်ဖိုးကို ရှာဖွေရန် <strong>Cross-validation</strong> (ဒေတာကို အပိုင်းခွဲ၍ စမ်းသပ်စစ်ဆေးခြင်း) စနစ်ကို သုံးရပါမည်။ Binary classification (အုပ်စုနှစ်ခုခွဲခြင်း) တွင် မဲတူညီမှုမရှိစေရန် K ကို မကိန်း (Odd number) သာ ထားရှိသင့်ပါသည်။</p><p>အကြမ်းဖျင်းအားဖြင့် K ≈ √N (N သည် Training Samples စုစုပေါင်း အရေအတွက်) ဟု သတ်မှတ်နိုင်ပါသည်။</p><hr><h2>KNN Classification နမူနာ တွက်ချက်မှု</h2><p>Training Data အမှတ် ၆ ခုကို အောက်ပါအတိုင်း သတ်မှတ်ပါမည် -</p><p><strong>Class A:</strong> Point 1: (1, 1), Point 2: (2, 2), Point 3: (3, 3)</p><p><strong>Class B:</strong> Point 4: (6, 6), Point 5: (7, 7), Point 6: (8, 8)</p><p>ခန့်မှန်းလိုသော <strong>Test Point: (4, 4)</strong></p><h3>အဆင့် ၁ - Euclidean Distance တွက်ချက်ခြင်း</h3><p>Test point (4,4) မှ ဒေတာအမှတ်တစ်ခုချင်းစီသို့ အကွာအဝေးတွက်ချက်မှု ရလဒ်များမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည် -</p><ul><li>d₁ to (1,1) = √((4-1)² + (4-1)²) = √18 ≈ 4.24</li><li>d₂ to (2,2) = √((4-2)² + (4-2)²) = √8 ≈ 2.83</li><li>d₃ to (3,3) = √((4-3)² + (4-3)²) = √2 ≈ 1.41 (အနီးစပ်ဆုံး)</li><li>d₄ to (6,6) = √((6-4)² + (6-4)²) = √8 ≈ 2.83</li><li>d₅ to (7,7) = √((7-4)² + (7-4)²) = √18 ≈ 4.24</li><li>d₆ to (8,8) = √((8-4)² + (8-4)²) = √32 ≈ 5.66</li></ul><h3>အဆင့် ၂ - အကွာအဝေးအလိုက် ငယ်စဉ်ကြီးလိုက် စီခြင်း</h3><table><thead><tr><th>စဉ်</th><th>ဒေတာအမှတ်</th><th>အကွာအဝေး</th><th>သက်ဆိုင်ရာ Class</th></tr></thead><tbody><tr><td>1</td><td>Point 3 (3,3)</td><td>1.41</td><td>A</td></tr><tr><td>2</td><td>Point 2 (2,2)</td><td>2.83</td><td>A</td></tr><tr><td>3</td><td>Point 4 (6,6)</td><td>2.83</td><td>B</td></tr><tr><td>4</td><td>Point 1 (1,1)</td><td>4.24</td><td>A</td></tr><tr><td>5</td><td>Point 5 (7,7)</td><td>4.24</td><td>B</td></tr><tr><td>6</td><td>Point 6 (8,8)</td><td>5.66</td><td>B</td></tr></tbody></table><h3>အဆင့် ၃ - K တန်ဖိုးအလိုက် မဲခွဲဆုံးဖြတ်ခြင်း (Voting)</h3><p><strong>Case 1 (K = 1):</strong> အနီးဆုံးတစ်ခုတည်း ဖြစ်သော Point 3 ကို ကြည့်၍ ရလဒ်ကို <strong>Class A</strong> ဟု သတ်မှတ်သည်။</p><p><strong>Case 2 (K = 3):</strong> အနီးဆုံး ၃ ခုတွင် Class A မှ ၂ ခုနှင့် Class B မှ ၁ ခု ပါဝင်သဖြင့် မဲအများစုအရ ရလဒ်မှာ <strong>Class A</strong> ဖြစ်သည်။</p><p><strong>Case 3 (K = 5):</strong> အနီးဆုံး ၅ ခုတွင် Class A မှ ၃ ခုနှင့် Class B မှ ၂ ခု ပါဝင်သဖြင့် ရလဒ်မှာ <strong>Class A</strong> ဖြစ်သည်။</p><hr><h2>Python Source Code ရှင်းလင်းချက် (Finding K)</h2><p>အထက်ပါ လုပ်ငန်းစဉ်ကို Python ဖြင့် ရေးသားထားသော Algorithm Code ၏ လုပ်ဆောင်ချက် ရှင်းလင်းချက် ဖြစ်ပါသည် -</p><ul><li><code>numpy</code> ကို Matrix တွက်ချက်မှုများအတွက် သုံးပြီး <code>Counter</code> ကို အုပ်စုအရေအတွက် မဲရေတွက်ရန် သုံးထားပါသည်။</li><li><code>np.linalg.norm()</code> Function အားသုံး၍ ဒေတာအမှတ်များကြား Euclidean distance ကို တစ်ပြိုင်နက် တွက်ချက်ပါသည်။</li><li><code>np.argsort()</code> အားဖြင့် အကွာအဝေး အနည်းဆုံးရှိသော ဒေတာအညွှန်း (Indices) များကို ရှာဖွေပြီး <code>[:k]</code> ဖြင့် လိုချင်သော K အရေအတွက်ကို ဖြတ်ယူပါသည်။</li><li><code>Counter().most_common(1)</code> ကို သုံး၍ မဲအများဆုံး ရရှိသော Class Label ကို ထုတ်ယူကာ ပတ်ဝန်းကျင်အခြေအနေကို ဆုံးဖြတ်ပါသည်။</li></ul><hr><h2>Weighted KNN (အလေးပေးစနစ်သုံး KNN)</h2><p>ရိုးရှင်းသော KNN တွင် အနီးဆုံးအမှတ်အားလုံးကို တူညီသော အလေးချိန် ပေးသော်လည်း Weighted KNN တွင် ပို၍နီးသော အမှတ်များကို အလေးချိန် ပိုပေးပါသည်။ အသုံးများသော နည်းလမ်းမှာ အကွာအဝေး၏ ပြောင်းပြန်ကို ရယူခြင်း ဖြစ်ပါသည် -</p><pre><code class="language-math">wᵢ = 1/dᵢ</code></pre><p>အကယ်၍ K = 3 တွင် Point 1 (d=2, Class A)၊ Point 2 (d=3, Class B)၊ Point 3 (d=5, Class A) ရှိပါက အလေးချိန်များမှာ -</p><ul><li>w₁ = 1/2 = 0.5</li><li>w₂ = 1/3 ≈ 0.333</li><li>w₃ = 1/5 = 0.2</li></ul><p>Class A အတွက် စုစုပေါင်းအလေးချိန် 0.5 + 0.2 = 0.7 ဖြစ်ပြီး Class B အတွက် 0.333 ဖြစ်သဖြင့် ရလဒ်ကို <strong>Class A</strong> ဟု သတ်မှတ်ပါသည်။ ထို့အပြင် ပိုမိုတိကျစေရန် <strong>Gaussian kernel Formula</strong> wᵢ = exp(-dᵢ²/2σ²) ကိုလည်း အသုံးပြုနိုင်ပါသည်။</p><hr><h2>KNN Regression</h2><p>KNN Regression သည် အုပ်စုခွဲခြင်း မဟုတ်ဘဲ ဒေတာအမှတ်များ၏ တန်ဖိုးကို ပျမ်းမျှရှာဖွေကာ အစဉ်ဆက်မပြတ် ကိန်းဂဏန်းတန်ဖိုးများ ခန့်မှန်းခြင်း ဖြစ်ပါသည်။</p><p><strong>ရိုးရှင်းသော တွက်ချက်မှု (Simple Average):</strong> အနီးဆုံး K ခု၏ တန်ဖိုးများကို ပေါင်း၍ K ဖြင့် စားခြင်း ဖြစ်သည်။</p><pre><code class="language-math">y_pred = (1/K) Σyᵢ</code></pre><p><strong>အလေးပေး တွက်ချက်မှု (Weighted Average):</strong> အကွာအဝေးအလိုက် အလေးချိန်မြှောက်၍ တွက်ချက်ခြင်း ဖြစ်သည်။</p><pre><code class="language-math">y_pred = Σ(wᵢ × yᵢ) / Σwᵢ</code></pre><blockquote><p><strong>ဥပမာ -</strong> မြို့လယ်မှ ၄ ကီလိုမီတာ ကွာဝေးသော အိမ်တစ်လုံး၏ ဈေးနှုန်းကို ခန့်မှန်းရန် K=3 ဖြင့် အနီးဆုံး အိမ် ၃ လုံး၏ တန်ဖိုးများဖြစ်သော ၃၀၀ သိန်း၊ ၂၅၀ သိန်း နှင့် ၂၀၀ သိန်း တို့ကို Simple Average ဖြင့် တွက်ပါက ၂၅၀ သိန်း ဟု ရရှိမည် ဖြစ်ပြီး Weighted Average ဖြင့် တွက်ချက်ပါက ၂၄၀ သိန်း ဟု ထွက်ရှိမည် ဖြစ်ပါသည်။</p></blockquote>',
    author: "Sayar Win Htut",
    authorRole: "CEO and Founder of National Cyber City",
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

// Course {
//   courseId: 1,
//   title: "Web development"
//   sectionOrder: [122,122,123]
// }

// Unit | Section {
//   unitId: 1
//   // unitOrder:
//   lessonOrder: [123,232,232]
// }

// Lesson {
//   lessongId: 1
//   // lessonOrder:
// }

// primsa.section. (n+1) // update order
