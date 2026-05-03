import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Sparse, drifting leaf silhouettes for hero / section backdrops.
 * GSAP-driven, GPU-friendly — never overlaps text, always low opacity.
 */
type Props = {
  count?: number;
  className?: string;
  /** Tailwind color class — applied as currentColor on each leaf. */
  tone?: string;
  /** Max opacity (0–1). Each leaf gets 0.35–1× of this. */
  opacity?: number;
};

export function FloatingLeaves({
  count = 9,
  className = "",
  tone = "text-gold",
  opacity = 0.35,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leaves = gsap.utils.toArray<HTMLElement>(".gg-leaf");
      leaves.forEach((leaf) => {
        const driftX = gsap.utils.random(-30, 30);
        const driftY = gsap.utils.random(-20, 20);
        const rot = gsap.utils.random(-25, 25);
        const dur = gsap.utils.random(8, 16);

        gsap.to(leaf, {
          x: `+=${driftX}`,
          y: `+=${driftY}`,
          rotation: `+=${rot}`,
          duration: dur,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Pre-compute deterministic positions so SSR matches client hydration.
  const positions = Array.from({ length: count }, (_, i) => {
    // Seeded pseudo-random — stable across renders.
    const seed = (i + 1) * 9301 + 49297;
    const r1 = ((seed % 233280) / 233280) * 100;
    const r2 = (((seed * 7) % 233280) / 233280) * 100;
    const r3 = (((seed * 13) % 233280) / 233280) * 360;
    const r4 = 0.4 + (((seed * 17) % 100) / 100) * 0.6;
    return { top: r1, left: r2, rot: r3, scale: r4, op: opacity * (0.4 + (i % 5) * 0.15) };
  });

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${tone} ${className}`}
    >
      {positions.map((p, i) => (
        <svg
          key={i}
          className="gg-leaf absolute"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            transform: `rotate(${p.rot}deg) scale(${p.scale})`,
            opacity: p.op,
          }}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 2 C24 6 28 14 28 22 C20 28 10 26 4 20 C4 12 8 6 16 2 Z M16 4 L16 26"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="currentColor"
            fillOpacity="0.18"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}
