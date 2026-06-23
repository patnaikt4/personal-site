import { useEffect } from "react";

// Each entry is [R, G, B] at the corresponding scroll progress stop
const stops = [0, 0.25, 0.5, 0.75, 1.0];
const colors = [
  [255, 255, 255], // Hero:       pure white
  [246, 248, 255], // About:      faint blue-gray
  [242, 239, 255], // Experience: soft violet
  [237, 247, 255], // Projects:   light sky
  [255, 250, 230], // Contact:    warm cream
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function interpolateColor(progress: number): string {
  for (let i = 0; i < stops.length - 1; i++) {
    if (progress <= stops[i + 1]) {
      const t = (progress - stops[i]) / (stops[i + 1] - stops[i]);
      const [r1, g1, b1] = colors[i];
      const [r2, g2, b2] = colors[i + 1];
      return `rgb(${Math.round(lerp(r1, r2, t))},${Math.round(lerp(g1, g2, t))},${Math.round(lerp(b1, b2, t))})`;
    }
  }
  const [r, g, b] = colors[colors.length - 1];
  return `rgb(${r},${g},${b})`;
}

export default function ScrollBackground() {
  useEffect(() => {
    function update() {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.body.style.background = interpolateColor(progress);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return null;
}
