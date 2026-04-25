import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.4 });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dot}
        className="fixed w-2 h-2 bg-[#1E3A8A] rounded-full z-[9999] pointer-events-none"
      />

      {/* RING */}
      <div
        ref={ring}
        className="fixed w-8 h-8 border border-[#1E3A8A]/30 rounded-full z-[9998] pointer-events-none"
      />
    </>
  );
}