import React from "react";

interface CrustLogoStampProps {
  className?: string;
  size?: number;
  variant?: "black" | "white" | "stamp-overlay" | "orange";
}

export const CrustLogoStamp: React.FC<CrustLogoStampProps> = ({
  className = "",
  size = 64,
  variant = "black",
}) => {
  // Color configuration
  const isDark = variant === "black" || variant === "stamp-overlay";
  const bgColor =
    variant === "black"
      ? "#141414"
      : variant === "stamp-overlay"
      ? "rgba(18, 16, 14, 0.88)"
      : variant === "orange"
      ? "#ED7D31"
      : "#FFFFFF";

  const fgColor =
    variant === "white"
      ? "#141414"
      : "#FFFFFF";

  const borderColor =
    variant === "white"
      ? "#141414"
      : "#FFFFFF";

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:rotate-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle Background */}
        <circle cx="50" cy="50" r="48" fill={bgColor} />

        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={borderColor}
          strokeWidth="1.5"
          opacity="0.9"
        />

        {/* Inner Dotted / Dashed Ring */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={borderColor}
          strokeWidth="1.2"
          strokeDasharray="2.5 2"
          opacity="0.85"
        />

        {/* Thin solid guide ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke={borderColor}
          strokeWidth="0.75"
          opacity="0.4"
        />

        {/* Decorative Top Star / Dots */}
        <circle cx="50" cy="18" r="1.5" fill={fgColor} />
        <circle cx="44" cy="19" r="1" fill={fgColor} opacity="0.7" />
        <circle cx="56" cy="19" r="1" fill={fgColor} opacity="0.7" />

        {/* Top Arc Micro Text */}
        <text
          x="50"
          y="27"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontWeight="800"
          fontSize="5.2"
          fill={fgColor}
          textAnchor="middle"
          letterSpacing="1.8"
        >
          CHICAGO THIN CRUST
        </text>

        {/* Center Main Text: CRUST */}
        <text
          x="50"
          y="52"
          fontFamily="var(--font-barlow-condensed), Impact, sans-serif"
          fontWeight="900"
          fontSize="22"
          fill={fgColor}
          textAnchor="middle"
          letterSpacing="1"
        >
          CRUST
        </text>

        {/* Sub Text: PIZZA CO. */}
        <text
          x="50"
          y="66"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontWeight="800"
          fontSize="8.5"
          fill={fgColor}
          textAnchor="middle"
          letterSpacing="2.2"
        >
          PIZZA CO.
        </text>

        {/* Bottom Year / Quality Stamp */}
        <text
          x="50"
          y="77"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontWeight="700"
          fontSize="5"
          fill={fgColor}
          opacity="0.85"
          textAnchor="middle"
          letterSpacing="1.2"
        >
          ★ EST. 1991 ★
        </text>

        {/* Bottom decorative dots */}
        <circle cx="50" cy="83" r="1.2" fill={fgColor} opacity="0.7" />
      </svg>
    </div>
  );
};
