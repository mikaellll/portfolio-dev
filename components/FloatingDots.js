'use client';

import { useState, useEffect } from 'react';

const COLORS = ['var(--cyan)', 'white', 'var(--tomato)'];

function makeDots(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    color: COLORS[i % 3],
    opacity: 0.5 + Math.random() * 0.5,
    duration: 1.5 + Math.random() * 5,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));
}

export default function FloatingDots() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots(makeDots(24));
  }, []);

  if (dots.length === 0) return <div className="dots-container" />;

  return (
    <div className="dots-container">
      {dots.map((d) => (
        <div
          key={d.id}
          className="floating-dot"
          style={{
            background: d.color,
            opacity: d.opacity,
            left: `${d.left}%`,
            top: `${d.top}%`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
