import { useState, useEffect, useRef } from "react";
import { Star, CheckCircle, ChevronDown, Zap, Shield, Clock, TrendingUp, Award, Users, Play, ArrowRight, Sparkles } from "lucide-react";

/* ─── Animation hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── CTA Button ─── */
function CTAButton({ label = "अभी शुरू करें – ₹69 🚀", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="https://rzp.io/rzp/ninety-days-practical-course"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer ${className}`}
      style={{
        background: "linear-gradient(135deg, #c9a227 0%, #ffd700 50%, #c9a227 100%)",
        color: "#0d0520",
        boxShadow: "0 0 30px rgba(201,162,39,0.45), 0 4px 20px rgba(0,0,0,0.4)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {label}
      <ArrowRight size={20} />
    </a>
  );
}

/* ─── Star Rating ─── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
      ))}
    </div>
  );
}

/* ─── Section Wrapper ─── */
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Glass Card ─── */
function GlassCard({ children, className = "", gold = false }: { children: React.ReactNode; className?: string; gold?: boolean }) {
  return (
    <div
      className={`rounded-3xl p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${className}`}
      style={{
        background: "rgba(255,255,255,0.06)",
        border: gold ? "1.5px solid rgba(201,162,39,0.5)" : "1px solid rgba(255,255,255,0.12)",
        boxShadow: gold
          ? "0 8px 40px rgba(201,162,39,0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Testimonials data ─── */
const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    avatar: "RS",
    color: "#7c3aed",
    rating: 5,
    text: "Yaar, maine socha tha yeh bhi koi scam hoga, lekin ₹69 mein kya jaata hai? Try kiya aur sach mein 3 hafte mein ₹8,000 kamaye! Course bahut simple aur clear hai. Shukriya bhai! 🙏",
    earnings: "₹8,000+",
  },
  {
    name: "Priya Patel",
    location: "Gujarat",
    avatar: "PP",
    color: "#db2777",
    rating: 5,
    text: "Main ek housewife hoon aur mere paas zyada time nahi tha. Lekin is course ne mujhe ek aisa tarika sikhaya jo ghar baith ke ho jata hai. Pehle mahine ₹12,000 aaye! Ab main apne family ko support kar sakti hoon. ❤️",
    earnings: "₹12,000+",
  },
  {
    name: "Amit Kumar",
    location: "Bihar",
    avatar: "AK",
    color: "#059669",
    rating: 5,
    text: "Job chali gayi thi, bahut tension tha. Dost ne yeh course suggest kiya. Seedha seedha bataya gaya hai kya karna hai. 90 din mein lagbhag ₹95,000 ka income hua. Life badal gayi! 🔥",
    earnings: "₹95,000+",
  },
  {
    name: "Sunita Devi",
    location: "Rajasthan",
    avatar: "SD",
    color: "#d97706",
    rating: 5,
    text: "Pehle bahut darta tha online paison ka, lekin yahan sab kuch step by step samjhaya gaya. Sirf ₹69 mein itna knowledge! Main ab har mahine ₹15,000-₹20,000 kama rahi hoon. Bilkul real hai! ✅",
    earnings: "₹15,000-20,000/mo",
  },
  {
    name: "Vikram Singh",
    location: "UP",
    avatar: "VS",
    color: "#7c3aed",
    rating: 5,
    text: "Yeh course ek dum dhamakedar hai bhai. Maine apne phone se hi sab kuch shuru kiya, koi laptop nahi tha. 2 mahine mein ₹45,000 kamaye. Investor bhi nahi tha – sirf ₹69 laga! 💪",
    earnings: "₹45,000+",
  },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "Kya yeh course beginners ke liye hai?",
    a: "Haan bilkul! Yeh course un logo ke liye banaya gaya hai jinhone pehle kabhi online paise nahi kamaye. Sab kuch A to Z explain kiya gaya hai – bilkul basics se shuru hota hai.",
  },
  {
    q: "Kya mujhe koi investment karni padegi?",
    a: "Sirf ₹69 jo is course ki keemat hai – woh hi ek matra investment hai. Course ke andar jo tarike bataye gaye hain unhe shuru karne ke liye koi aur paisa nahi lagta.",
  },
  {
    q: "Course kab milega? Kitna time lagega?",
    a: "Payment ke turant baad aapko apne email par course ka link aa jayega. Aap turant access kar sakte hain – koi wait nahi!",
  },
  {
    q: "Kya mujhe koi experience chahiye?",
    a: "Bilkul nahi! Bas ek smartphone ya laptop aur thoda sa time chahiye. Koi technical knowledge ki zaroorat nahi.",
  },
  {
    q: "Kya yeh 90 din mein sach mein ₹1 Lakh possible hai?",
    a: "Haan, possible hai – lekin results mehnat aur consistency par depend karte hain. Hamare students ne yeh achieve kiya hai. Aap bhi kar sakte hain agar aap seriously follow karein.",
  },
  {
    q: "Agar kuch samajh na aaye toh kya karein?",
    a: "Aapko support milega. Course ke saath ek community access bhi milti hai jahan aap apne sawal pooch sakte hain aur guidance pa sakte hain.",
  },
];

/* ─── What's included ─── */
const inclusions = [
  { icon: "🎯", title: "Step-by-Step Video Lessons", desc: "Har step clearly explained – koi confusion nahi" },
  { icon: "💰", title: "Tested 90-Day Earning System", desc: "Proven formula jo already hazaron students ne use kiya" },
  { icon: "📱", title: "Mobile-Friendly Approach", desc: "Sirf phone se shuru karo – koi laptop zaroorat nahi" },
  { icon: "🚀", title: "Beginner-Friendly Path", desc: "Zero experience chahiye – bas follow karo" },
  { icon: "🏆", title: "Community Access", desc: "10,000+ students ki family join karo" },
  { icon: "⚡", title: "Instant Access", desc: "Payment ke baad turant email par link milega" },
];

/* ─── Stats ─── */
const stats = [
  { value: "10,000+", label: "Students", icon: Users },
  { value: "₹1 Lakh", label: "Target Earnings", icon: TrendingUp },
  { value: "90 Days", label: "Proven System", icon: Clock },
  { value: "₹69", label: "Only Investment", icon: Award },
];

/* ─── FAQ Item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <GlassCard className="cursor-pointer" gold={open}>
      <button
        className="w-full text-left flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-base md:text-lg text-white leading-snug">{q}</span>
        <ChevronDown
          size={22}
          className="flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{ color: "#ffd700", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: "#c0aee8" }}>
          {a}
        </p>
      </div>
    </GlassCard>
  );
}

/* ─── Floating particles ─── */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 6,
    duration: Math.random() * 6 + 6,
  }));
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: "#ffd700",
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.2; }
          100% { transform: translateY(-30px) scale(1.3); opacity: 0.5; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(201,162,39,0.45), 0 4px 20px rgba(0,0,0,0.4); }
          50% { box-shadow: 0 0 60px rgba(201,162,39,0.8), 0 4px 30px rgba(0,0,0,0.5); }
        }
        .cta-pulse { animation: pulse-glow 2s ease-in-out infinite; }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #c9a227 0%, #ffd700 30%, #fff8dc 50%, #ffd700 70%, #c9a227 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0d0520; }
        ::-webkit-scrollbar-thumb { background: #3b1f7a; border-radius: 3px; }
      `}</style>
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(135deg, #0d0520 0%, #1a0a3d 30%, #2d0f6b 60%, #1a0a3d 80%, #0d0520 100%)",
        fontFamily: "'Poppins', 'Noto Sans Devanagari', sans-serif",
        color: "#f5f0ff",
      }}
    >
      <Particles />

      {/* Gradient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
        <div className="absolute -top-20 right-20 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #c9a227, transparent)" }} />
        <div className="absolute bottom-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #4c1d95, transparent)" }} />
      </div>

      <div className="relative z-10">

        {/* ─── HERO ─── */}
        <section className="px-4 pt-12 pb-16 md:pt-20 md:pb-24 text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.4)", color: "#ffd700" }}>
            <Sparkles size={14} />
            🇮🇳 10,000+ Indians Already Earning
            <Sparkles size={14} />
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="shimmer-text">90 Din Me</span>
            <br />
            <span className="text-white">₹1 Lakh</span>
            <br />
            <span className="text-3xl md:text-4xl font-bold" style={{ color: "#c0aee8" }}>Kaise Kamayein? 🤔</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#c0aee8" }}>
            Ek <strong className="text-white">Practical Video Course</strong> jo aapko sikhata hai ki bina kisi experience ke, sirf apne phone se, ghar baithe{" "}
            <strong style={{ color: "#ffd700" }}>₹1 Lakh tak</strong> kaise kamaye – sirf 90 dinon mein!
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <CTAButton label="Abhi Shuru Karein – ₹69 🚀" className="cta-pulse text-xl px-10 py-5" />
            <p className="text-xs" style={{ color: "#9070c8" }}>✅ Turant Access &nbsp;|&nbsp; ✅ Sirf ₹69 &nbsp;|&nbsp; ✅ Lifetime Access</p>
          </div>

          {/* Comparison box */}
          <GlassCard gold className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🍔</div>
                <div className="text-2xl font-black text-white">₹69</div>
                <div className="text-sm" style={{ color: "#9070c8" }}>Ek burger pe kharch karte ho</div>
                <div className="mt-2 text-xs px-3 py-1 rounded-full inline-block" style={{ background: "rgba(212,24,61,0.2)", color: "#ff6b6b" }}>Koi faida nahi ❌</div>
              </div>
              <div>
                <div className="text-4xl mb-2">💡</div>
                <div className="text-2xl font-black shimmer-text">₹69</div>
                <div className="text-sm" style={{ color: "#c0aee8" }}>Is course pe invest karo</div>
                <div className="mt-2 text-xs px-3 py-1 rounded-full inline-block" style={{ background: "rgba(5,150,105,0.2)", color: "#34d399" }}>Lifetime income ✅</div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ─── STATS ─── */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <Section key={label}>
                <GlassCard className="text-center" gold>
                  <Icon size={28} className="mx-auto mb-3" style={{ color: "#ffd700" }} />
                  <div className="text-2xl md:text-3xl font-black shimmer-text">{value}</div>
                  <div className="text-xs md:text-sm mt-1" style={{ color: "#c0aee8" }}>{label}</div>
                </GlassCard>
              </Section>
            ))}
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <Section>
            <GlassCard>
              <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-white">
                Kya Aap Bhi In Problems Face Kar Rahe Ho? 😔
              </h2>
              <div className="space-y-4">
                {[
                  "💸 Mahine ke end mein paison ki kami hoti hai?",
                  "😤 Job mein itna kaam, phir bhi salary kam lagti hai?",
                  "🤯 Online earning ke baare mein suna hai lekin kaise karein pata nahi?",
                  "😰 Ghar ke kharche poore karna mushkil ho raha hai?",
                  "🌙 Side income chahiye lekin time nahi milta?",
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <span className="text-lg">{p.split(" ")[0]}</span>
                    <span style={{ color: "#c0aee8" }}>{p.substring(p.indexOf(" ") + 1)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.3)" }}>
                <p className="text-lg font-bold text-white">Agar in mein se koi bhi aapka haal hai,</p>
                <p className="text-2xl font-black shimmer-text mt-2">Toh yeh course sirf aapke liye hai! 🎯</p>
              </div>
            </GlassCard>
          </Section>
        </section>

        {/* ─── WHAT'S INCLUDED ─── */}
        <section className="px-4 pb-16 max-w-5xl mx-auto">
          <Section>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
              Is Course Mein <span className="shimmer-text">Kya Milega?</span>
            </h2>
            <p className="text-center mb-10" style={{ color: "#c0aee8" }}>Sab kuch jo aapko ₹1 Lakh kamaane ke liye chahiye</p>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {inclusions.map(({ icon, title, desc }, i) => (
              <Section key={i}>
                <GlassCard gold className="h-full">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#c0aee8" }}>{desc}</p>
                  <CheckCircle size={16} className="mt-4" style={{ color: "#ffd700" }} />
                </GlassCard>
              </Section>
            ))}
          </div>
        </section>

        {/* ─── CTA MID ─── */}
        <section className="px-4 pb-16 text-center">
          <Section>
            <div className="max-w-2xl mx-auto p-8 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(201,162,39,0.15))", border: "1px solid rgba(201,162,39,0.3)" }}>
              <div className="text-5xl mb-4">🔥</div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Sochna Band Karo, Shuru Karo!
              </h2>
              <p className="mb-6" style={{ color: "#c0aee8" }}>
                Har din jo aap wait karte ho, woh ek din ka income miss ho jata hai.
              </p>
              <CTAButton label="Haan, Mujhe Yeh Chahiye! 💪" className="cta-pulse" />
            </div>
          </Section>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="px-4 pb-16 max-w-6xl mx-auto">
          <Section>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
              Real Students, <span className="shimmer-text">Real Results ✨</span>
            </h2>
            <p className="text-center mb-10" style={{ color: "#c0aee8" }}>
              Yeh log bhi aap jaisa soch rahe the – ab dekho kahan hain!
            </p>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map(({ name, location, avatar, color, rating, text, earnings }, i) => (
              <Section key={i}>
                <GlassCard gold className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${color}, #0d0520)` }}
                    >
                      {avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">{name}</div>
                      <div className="text-xs" style={{ color: "#9070c8" }}>📍 {location}</div>
                    </div>
                    <div className="ml-auto text-right">
                      <Stars count={rating} />
                      <div className="text-xs font-bold mt-1" style={{ color: "#34d399" }}>{earnings}</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#d4c5f0" }}>"{text}"</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Shield size={14} style={{ color: "#ffd700" }} />
                    <span className="text-xs" style={{ color: "#9070c8" }}>Verified Student</span>
                  </div>
                </GlassCard>
              </Section>
            ))}
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="px-4 pb-16 max-w-4xl mx-auto">
          <Section>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
              Kaise Kaam Karta Hai? <span className="shimmer-text">3 Simple Steps 🚀</span>
            </h2>
            <p className="text-center mb-10" style={{ color: "#c0aee8" }}>Itna aasaan hai jitna socha bhi nahi hoga</p>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: "💳", title: "₹69 Pay Karo", desc: "Sirf ek cup chai ki keemat mein invest karo" },
              { step: "02", icon: "📧", title: "Course Access Lo", desc: "Email par turant link milega, koi wait nahi" },
              { step: "03", icon: "💰", title: "Kamana Shuru Karo", desc: "90 din ka proven system follow karo aur kamao" },
            ].map(({ step, icon, title, desc }) => (
              <Section key={step}>
                <GlassCard gold className="text-center">
                  <div className="text-5xl mb-3">{icon}</div>
                  <div className="text-xs font-black mb-2 px-3 py-1 rounded-full inline-block" style={{ background: "rgba(201,162,39,0.2)", color: "#ffd700" }}>
                    STEP {step}
                  </div>
                  <h3 className="text-xl font-black text-white mt-3 mb-2">{title}</h3>
                  <p className="text-sm" style={{ color: "#c0aee8" }}>{desc}</p>
                </GlassCard>
              </Section>
            ))}
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" className="px-4 pb-16 max-w-2xl mx-auto text-center">
          <Section>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Aaj Hi Invest Karo – <span className="shimmer-text">Sirf ₹69! 💎</span>
            </h2>
            <p className="mb-10" style={{ color: "#c0aee8" }}>Yeh offer limited time ke liye hai. Ab der mat karo!</p>

            <div
              className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.4) 0%, rgba(45,15,107,0.8) 50%, rgba(201,162,39,0.2) 100%)",
                border: "2px solid rgba(201,162,39,0.5)",
                boxShadow: "0 0 60px rgba(201,162,39,0.2), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-black text-sm" style={{ background: "linear-gradient(135deg, #c9a227, #ffd700)", color: "#0d0520" }}>
                🔥 BEST VALUE
              </div>

              <div className="text-lg mb-2" style={{ color: "#c0aee8" }}>Normal Keemat</div>
              <div className="text-3xl font-black line-through mb-1" style={{ color: "#9070c8" }}>₹999</div>
              <div className="text-7xl md:text-8xl font-black shimmer-text mb-2">₹69</div>
              <div className="text-sm mb-8" style={{ color: "#c0aee8" }}>One-time payment • Lifetime Access</div>

              <div className="text-left space-y-3 mb-10">
                {[
                  "✅ Complete Video Course (Step-by-Step)",
                  "✅ 90-Day Proven Earning System",
                  "✅ Mobile-Friendly – Phone se karo",
                  "✅ Beginner-Friendly (Zero Experience)",
                  "✅ Community Access (10,000+ Members)",
                  "✅ Instant Email Delivery",
                  "✅ Lifetime Access – Kabhi bhi dekho",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm md:text-base" style={{ color: "#e0d4ff" }}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <CTAButton label="Abhi Shuru Karein – ₹69 Only 🚀" className="cta-pulse w-full justify-center text-xl py-5" />
              <p className="text-xs mt-4" style={{ color: "#9070c8" }}>🔒 Secure Payment &nbsp;|&nbsp; 📧 Instant Access &nbsp;|&nbsp; 💯 Real Course</p>
            </div>
          </Section>
        </section>

        {/* ─── FAQ ─── */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <Section>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
              Aapke Sawaal, <span className="shimmer-text">Hamare Jawab ❓</span>
            </h2>
            <p className="text-center mb-10" style={{ color: "#c0aee8" }}>Koi doubt nahi rehna chahiye aapko</p>
          </Section>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <Section key={i}>
                <FAQItem q={q} a={a} />
              </Section>
            ))}
          </div>
        </section>

        {/* ─── URGENCY ─── */}
        <section className="px-4 pb-16 max-w-3xl mx-auto text-center">
          <Section>
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: "linear-gradient(135deg, rgba(212,24,61,0.15), rgba(124,58,237,0.3))",
                border: "1px solid rgba(212,24,61,0.3)",
              }}
            >
              <div className="text-5xl mb-4">⏰</div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Offer Kabhi Bhi Band Ho Sakta Hai!
              </h2>
              <p className="mb-6" style={{ color: "#c0aee8" }}>
                ₹69 wali yeh keemat sirf limited time ke liye hai. Kal yeh price badh sakti hai.
                Abhi decide karo – burger ya future? 🍔 vs 💰
              </p>
              <CTAButton label="Haan! Main Shuru Karna Chahta/Chahti Hoon 🔥" className="cta-pulse" />
            </div>
          </Section>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="px-4 pb-20 text-center">
          <Section>
            <div className="max-w-2xl mx-auto">
              <Zap size={40} className="mx-auto mb-4" style={{ color: "#ffd700" }} />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Aapka <span className="shimmer-text">90 Din</span> Ka Safar<br />Aaj Se Shuru Hota Hai!
              </h2>
              <p className="mb-8" style={{ color: "#c0aee8" }}>
                10,000+ students pehle hi kamaa rahe hain. Aap kis ka wait kar rahe ho?
              </p>
              <CTAButton label="Abhi Start Karein – ₹69 🚀" className="cta-pulse text-xl px-12 py-5" />
              <div className="mt-6 flex items-center justify-center gap-6 text-xs" style={{ color: "#9070c8" }}>
                <span>🔒 Secure</span>
                <span>⚡ Instant</span>
                <span>💯 Real</span>
                <span>🏆 Proven</span>
              </div>
            </div>
          </Section>
        </section>

        {/* ─── FOOTER ─── */}
        <footer
          className="px-4 py-10 text-center border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.3)" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-2xl font-black shimmer-text mb-2">90 Din Me ₹1 Lakh</div>
            <p className="text-sm mb-6" style={{ color: "#9070c8" }}>
              India ka #1 Practical Online Earning Course
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-6" style={{ color: "#9070c8" }}>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <div className="text-xs" style={{ color: "#5a4480" }}>
              <p className="mb-2">
                ⚠️ Disclaimer: Results may vary. Earnings depend on individual effort, consistency, and market conditions.
                Past performance is not a guarantee of future results.
              </p>
              <p>© 2024 NetSePaisa288. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
