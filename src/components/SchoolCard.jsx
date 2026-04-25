export default function Section({ title, subtitle, children, dark }) {
  return (
    <section className={`py-32 px-6 ${dark ? "bg-[#0B1B3A] text-white" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[0.3em] text-blue-400 mb-3">
          {subtitle}
        </p>

        <h2 className="text-4xl mb-10 font-light">
          {title}
        </h2>

        {children}

      </div>
    </section>
  );
}