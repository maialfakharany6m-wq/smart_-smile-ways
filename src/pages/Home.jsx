import { useRef } from "react";
import Section from "../components/Section";

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/logo.png"
          className="w-[380px] md:w-[440px] mx-auto object-contain"
          style={{
            filter: "drop-shadow(0 20px 60px rgba(30,58,138,0.25))"
          }}
        />

        <div>
          <p className="text-blue-400 tracking-[0.35em] text-xs mb-6">
            EDUCATIONAL INVESTMENT GROUP
          </p>

          <h1 className="text-[#0B1B3A] text-5xl md:text-6xl font-[Playfair_Display] leading-tight">
            Smart Smile Way
            <br />
            <span className="text-blue-500 text-3xl md:text-4xl">
              for A Brighter Future
            </span>
          </h1>

          <div className="w-28 h-[2px] bg-blue-200 my-10" />

          <p className="text-blue-500/70 max-w-md leading-relaxed text-lg">
            We build, operate & transform educational institutions into global systems.
          </p>

        </div>

      </div>

    </section>
  );
}

/* ================= EXECUTIVE ================= */
function ExecutiveSlider() {
  const leaders = [
    { name: "Eng. Sameer Abdullah", role: "Founder- CEO Smart Smile Way Education Consultant for British and  American Education system", img: "/exec1.jpeg" },
    { name: "Mr. Ibrahim Elbiblany", role: "Co-Founder Smart Smile Way ", img: "/exec2.jpg" },
    { name: "Dr. Heba Sultan", role: "General Manager", img: "/exec3.png" },
    { name: "Eng. Mai Ashraf", role: "Tech Director", img: "/exec4.jpg" },
    { name: "Dr. Norhan Khaled", role: "American Education Manager", img: "/exec5.png" },
    { name: "Mrs. Samar Mansour", role: "British Education Manager", img: "/exec6.png" },
  ];

  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    const amount = el.offsetWidth * 0.75;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <Section title="Executive Team" subtitle="PEOPLE · LEADERSHIP">

      <div className="relative">

        {/* ARROWS */}
        <button
          onClick={() => scroll("prev")}
          className="absolute left-2 md:left-[-20px] top-1/2 -translate-y-1/2
                     w-14 h-14 bg-white/80 backdrop-blur-xl shadow-xl rounded-full
                     flex items-center justify-center hover:scale-110 transition z-20"
        >←</button>

        <button
          onClick={() => scroll("next")}
          className="absolute right-2 md:right-[-20px] top-1/2 -translate-y-1/2
                     w-14 h-14 bg-white/80 backdrop-blur-xl shadow-xl rounded-full
                     flex items-center justify-center hover:scale-110 transition z-20"
        >→</button>

        {/* CARDS */}
        <div
          ref={ref}
          className="flex gap-8 overflow-x-auto scroll-smooth px-6 md:px-10
                     snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {leaders.map((l, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[32%]
                         bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden
                         border border-gray-100 shadow-lg
                         hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >

              <div className="h-[360px] overflow-hidden">
                <img
                  src={l.img}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-[#0B1B3A] text-lg font-semibold">
                  {l.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {l.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </Section>
  );
}

/* ================= CONTACT (LUXURY) ================= */
function ContactSection() {
  return (
    <Section title="Contact Us" subtitle="CONNECT">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h3 className="text-3xl font-semibold text-[#0B1B3A] mb-4">
            Let’s Build Something Great Together
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you are looking to establish a new institution or transform an existing one,
            our team is ready to support you with expertise and global standards.
          </p>

          <div className="space-y-2 text-gray-600">
            <p>📧 info@smartsmileway.com</p>
            <p>📍 Cairo, Egypt</p>
          </div>
        </div>

        {/* FORM */}
        <div className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100">

          <input
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            placeholder="Email Address"
            className="w-full mb-4 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full mb-4 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="w-full py-3 bg-blue-600 text-white rounded-xl
                       hover:bg-blue-700 transition shadow-md"
          >
            Send Message
          </button>

        </div>

      </div>

    </Section>
  );
}

/* ================= HOME ================= */
export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">

      <Hero />

      <Section title="About Us" subtitle="VISION · MISSION">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-lg transition">
            <h3 className="text-blue-500 mb-4">VISION</h3>
            <p className="text-[#0B1B3A]/80 leading-relaxed">
              To become a leading force in educational investment and management,
              transforming schools and nurseries into globally recognized institutions.
            </p>
          </div>

          <div className="p-10 bg-[#0B1B3A] text-white rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-blue-300 mb-4">MISSION</h3>
            <p className="text-white/80 leading-relaxed">
              We design, develop, and operate international schools with global standards
              and scalable systems.
            </p>
          </div>

        </div>
      </Section>

      <Section title="Our Services" subtitle="SYSTEMS · STRUCTURE" dark>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Establishing and operating international schools",
            "Cambridge, Edexcel, Oxford, Cognia accreditation",
            "British, American & IB systems",
            "Licensing under Egyptian Education Authority",
            "Educational strategy & structure development",
            "Teacher training & curriculum preparation",
            "Workforce development & job placement",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 rounded-2xl border border-white/10
                         hover:bg-white/10 hover:-translate-y-1 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <ExecutiveSlider />

      <Section title="Achievements" subtitle="IMPACT · SCALE">
        <div className="grid md:grid-cols-3 text-center gap-12">
          {[
            ["4", "Schools"],
            ["5", "Nurseries"],
            ["25", "Accreditations"],
          ].map(([num, label], i) => (
            <div key={i} className="hover:scale-105 transition">
              <h3 className="text-5xl text-blue-500 font-light">{num}</h3>
              <p className="text-gray-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <ContactSection />

    </div>
  );
}