export default function Section({ id, title, subtitle, children, dark }) {
  return (
    <section
      id={id}
      className={`py-32 px-6 md:px-24 relative ${
        dark ? "bg-[#0B1B3A] text-white" : "bg-white text-[#0B1B3A]"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* SUBTITLE */}
        {subtitle && (
          <p className="text-[11px] tracking-[0.35em] text-blue-400 mb-4">
            {subtitle}
          </p>
        )}

        {/* TITLE */}
        {title && (
          <h2 className="text-4xl font-[Playfair_Display] mb-14 leading-tight">
            {title}
          </h2>
        )}

        {/* CONTENT */}
        <div className="relative z-10">
          {children}
        </div>

      </div>
    </section>
  );
}