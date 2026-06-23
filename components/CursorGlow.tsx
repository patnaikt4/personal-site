import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const blobRef = useRef<HTMLDivElement>(null);
  // target = where the cursor actually is; current = where the blob is now
  const target = useRef({ x: -600, y: -600 });
  const current = useRef({ x: -600, y: -600 });

  useEffect(() => {
    // Skip on touch devices — no cursor to follow
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    // rAF loop: lerp current position toward target at 8% per frame (~spring lag)
    let raf: number;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      if (blobRef.current) {
        // Offset by half the blob size so the glow is centered on the cursor
        blobRef.current.style.transform = `translate(${current.current.x - 250}px, ${current.current.y - 250}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 500,
        height: 500,
        borderRadius: "50%",
        // Indigo radial gradient — subtle enough for a light background
        background:
          "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
      }}
    />
  );
}
