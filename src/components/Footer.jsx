export default function Footer() {
  return (
    <footer className="bg-[#06122B] text-white pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/logo.png"
              className="w-30 h-30 rounded-full object-cover"
            />
            <div className="text-xs tracking-[0.3em]">
             
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed">
            Educational Investment Group building future-ready institutions
            through innovation, governance, and international standards.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-6 tracking-[0.2em] text-sm text-white">
            NAVIGATION
          </h3>

          <div className="space-y-3 text-white/60 text-sm">
            {["home", "vision", "capability", "achievements", "leadership", "contact"].map((item) => (
              <p key={item} className="hover:text-white transition cursor-pointer">
                {item.toUpperCase()}
              </p>
            ))}
          </div>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h3 className="mb-6 tracking-[0.2em] text-sm text-white">
            CONNECT
          </h3>

          <p className="text-white/60 text-sm mb-4">
            Follow us on our official platforms
          </p>

          <div className="flex gap-4 text-white/60 text-sm">
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Facebook</span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/40 text-xs">
        © 2026 Smart Smile Way. All Rights Reserved.
      </div>

    </footer>
  );
}