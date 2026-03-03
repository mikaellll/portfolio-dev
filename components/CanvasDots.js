const DOT_TIMINGS = [
  2.2, 5.8, 1.8, 1.6, 3.3, 3.6, 1.7, 3.1, 2.4, 3.6,
  1.7, 4.6, 6.7, 5.8, 4.5, 6.3, 2.8, 5.4, 1.4, 2.3,
  2.1, 1.4, 7.0, 2.9, 1.7, 6.1, 6.3, 2.6, 1.8, 6.1,
];

const DOT_OPACITIES = [
  0.6, 1, 0.9, 0.6, 0.7, 0.9, 1, 0.6, 0.7, 0.8,
  0.8, 0.7, 0.7, 0.9, 0.9, 0.9, 0.7, 0.8, 0.7, 0.9,
  0.7, 0.8, 0.8, 0.8, 0.9, 1, 0.6, 0.8, 0.9, 0.8,
];

const TECH_TERMS = [
  "JS", "Next", "React", "HTML", "CSS", "Node", "Tailwind", "Figma", "Git", "API",
  "Web", "UI", "UX", "Vite", "SEO", "Vercel", "Design", "Dev", "Code", "App",
  "Front", "Back", "Fullstack", "TS", "REST", "JSON", "SVG", "WP", "CMS", "Agile"
];

function DotElement({ index }) {
  const timing = (DOT_TIMINGS[index] || 2) * 4; // Animation très fluide et lente
  const opacity = DOT_OPACITIES[index] || 0.7;
  const term = TECH_TERMS[index % TECH_TERMS.length];

  return (
    <div
      className={`dot dot--dot${index + 1}`}
      style={{
        opacity,
        animation: `dot-x-axis ${timing}s infinite`,
      }}
    >
      <div className="dot-y-wrapper">
        <span className="dot-text">{term}</span>
      </div>
      <style>{`
        .dot--dot${index + 1} .dot-y-wrapper {
          animation: dot-y-axis ${timing}s infinite;
        }
      `}</style>
    </div>
  );
}

function CanvasGroup({ colorClass, dots }) {
  return (
    <div className={`canvas canvas--${colorClass}`} style={{ left: '68%', transform: 'translate(-50%, -50%) scale(1.2)' }}>
      {dots.map((i) => (
        <DotElement key={i} index={i} />
      ))}
    </div>
  );
}

export default function CanvasDots() {
  return (
    <>
      <CanvasGroup colorClass="aqua" dots={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <CanvasGroup colorClass="gold" dots={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]} />
      <CanvasGroup colorClass="tomato" dots={[20, 21, 22, 23, 24, 25, 26, 27, 28, 29]} />
      <CanvasGroup colorClass="aqua" dots={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <CanvasGroup colorClass="gold" dots={[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]} />
      <CanvasGroup colorClass="tomato" dots={[20, 21, 22, 23, 24, 25, 26, 27, 28, 29]} />
    </>
  );
}
