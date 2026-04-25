import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Achievements", path: "/achievements" },
    { name: "Executive", path: "/executive" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-[#0B1B3A]/90 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="text-white tracking-[0.25em] text-xs">
          SMART SMILE WAY
        </div>

        {/* LINKS */}
        <div className="flex gap-8 text-xs">

          {links.map((l) => {
            const active = location.pathname === l.path;

            return (
              <Link
                key={l.path}
                to={l.path}
                className={`transition ${
                  active
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.name.toUpperCase()}
              </Link>
            );
          })}

        </div>

      </div>
    </div>
  );
}