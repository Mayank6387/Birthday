function LilySVG({
  size = 56,
  petalColor = "#ffb3d1",
  petalStroke = "#e91e8c",
}: {
  size?: number;
  petalColor?: string;
  petalStroke?: string;
}) {
  const r = size / 2;
  const petalW = r * 0.38;
  const petalH = r * 0.9;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ overflow: "visible" }}
    >
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx={r}
          cy={r * 0.3}
          rx={petalW}
          ry={petalH * 0.7}
          fill={petalColor}
          stroke={petalStroke}
          strokeWidth="0.6"
          opacity="0.92"
          transform={`rotate(${angle} ${r} ${r})`}
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={`s${angle}`} transform={`rotate(${angle} ${r} ${r})`}>
          <line x1={r} y1={r * 0.55} x2={r} y2={r * 0.18} stroke="#a0522d" strokeWidth="0.8" />
          <circle cx={r} cy={r * 0.18} r={1.8} fill="#ffd54f" />
        </g>
      ))}
      <circle cx={r} cy={r} r={r * 0.14} fill="#ffd54f" stroke="#f9a825" strokeWidth="0.5" />
    </svg>
  );
}

export default LilySVG