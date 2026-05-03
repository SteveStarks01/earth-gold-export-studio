/**
 * Hand-drawn grass silhouette divider — anchors a section to the earth without
 * the AI-slop multi-gradient look. Inherit color via currentColor.
 */
type Props = {
  /** "up" → blades grow upward (place at top of next section).
   *  "down" → blades hang down (place at bottom of section). */
  flip?: boolean;
  className?: string;
  /** Tailwind text color class — drives the silhouette color via currentColor. */
  tone?: string;
  height?: number;
};

export function GrassDivider({
  flip = false,
  className = "",
  tone = "text-forest-deep",
  height = 56,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${tone} ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined, height }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        className="block"
      >
        <path
          fill="currentColor"
          d="M0 80 V60 C40 58 50 30 70 30 C82 30 88 50 100 52 C112 30 120 14 132 14 C144 14 150 38 162 44 C176 22 188 8 202 8 C214 8 220 36 232 42 C246 26 256 12 268 12 C280 12 286 38 300 44 C312 24 322 6 336 6 C348 6 354 32 368 40 C380 18 392 4 406 4 C418 4 424 30 438 38 C452 18 462 2 476 2 C488 2 494 28 508 36 C522 18 532 4 546 4 C558 4 566 32 580 40 C592 20 604 6 616 6 C628 6 636 34 650 42 C662 22 672 8 686 8 C698 8 706 36 720 44 C732 24 744 10 756 10 C768 10 776 38 790 46 C802 26 814 12 826 12 C838 12 846 40 860 48 C874 28 886 14 898 14 C910 14 918 42 932 50 C944 30 956 14 970 14 C982 14 990 42 1004 50 C1016 30 1028 16 1040 16 C1052 16 1060 44 1074 52 C1086 32 1098 18 1112 18 C1124 18 1132 46 1146 54 C1158 34 1170 20 1184 20 C1196 20 1204 48 1218 56 C1230 36 1240 22 1254 22 C1266 22 1274 50 1288 58 C1300 38 1312 24 1326 24 C1338 24 1346 52 1360 60 C1372 40 1384 26 1398 26 C1412 26 1422 54 1440 56 V80 Z"
        />
      </svg>
    </div>
  );
}
