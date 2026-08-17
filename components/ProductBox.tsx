/**
 * Software-box artwork drawn inline so each package gets storefront-style
 * cover art without shipping an image per product.
 */
export default function ProductBox({ name }: { name: string }) {
  const words = name.toUpperCase().split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = `${current} ${word}`.trim();
    if (candidate.length <= 10) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);

  const lineHeight = 15;
  const startY = 96 - ((lines.length - 1) * lineHeight) / 2;

  // Several boxes render on one page, so gradient ids must not collide
  const uid = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const frontId = `boxFront-${uid}`;
  const spineId = `boxSpine-${uid}`;
  const ruleId = `boxRule-${uid}`;
  const shadowId = `boxShadow-${uid}`;

  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      role="img"
      aria-label={`${name} package artwork`}
    >
      <defs>
        <linearGradient id={frontId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#252D2F" />
          <stop offset="1" stopColor="#12181A" />
        </linearGradient>
        <linearGradient id={spineId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#080C0D" />
          <stop offset="1" stopColor="#131A1C" />
        </linearGradient>
        <linearGradient id={ruleId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5EEAD4" />
          <stop offset="1" stopColor="#2DD4BF" />
        </linearGradient>
        <radialGradient id={shadowId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity=".55" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="108" cy="182" rx="62" ry="9" fill={`url(#${shadowId})`} />

      {/* left-hand spine gives the flat rectangle its depth */}
      <path d="M46 34 L62 26 L62 174 L46 166 Z" fill={`url(#${spineId})`} />
      <rect x="62" y="26" width="104" height="148" fill={`url(#${frontId})`} />

      {/* top edge catch-light */}
      <path d="M46 34 L62 26 L166 26 L150 34 Z" fill="#2E393B" />
      <line x1="62" y1="26" x2="166" y2="26" stroke="#3D4A4C" strokeWidth="1" />

      <text
        x="54"
        y="100"
        transform="rotate(-90 54 100)"
        textAnchor="middle"
        fill="#5B6A6C"
        fontSize="6"
        letterSpacing="1.6"
        fontWeight="600"
      >
        RASX TWEAKS
      </text>

      <text
        x="114"
        y="46"
        textAnchor="middle"
        fill="#6C7B7D"
        fontSize="6.5"
        letterSpacing="2"
        fontWeight="600"
      >
        RASX
      </text>

      {lines.map((line, i) => (
        <text
          key={line}
          x="114"
          y={startY + i * lineHeight}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="14"
          fontWeight="700"
          letterSpacing="0.3"
        >
          {line}
        </text>
      ))}

      <rect
        x="94"
        y={startY + (lines.length - 1) * lineHeight + 12}
        width="40"
        height="2.5"
        rx="1.25"
        fill={`url(#${ruleId})`}
      />

      <text
        x="114"
        y={startY + (lines.length - 1) * lineHeight + 30}
        textAnchor="middle"
        fill="#7C8B8D"
        fontSize="6"
        letterSpacing="1.1"
      >
        PC OPTIMIZATION
      </text>
    </svg>
  );
}
