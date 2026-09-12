import { motion } from "motion/react";

function FloatingHearts() {
const HEART_COLORS = ["#e91e8c", "#f06292", "#f48fb1", "#c2185b", "#ff4081", "#f8bbd0"];
/* Large floating hearts */
interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const floatingHearts: FloatingHeart[] = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 98,
  size: 1 + Math.random() * 2.2,
  duration: 8 + Math.random() * 10,
  delay: Math.random() * 10,
  color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
}));
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {floatingHearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute select-none"
          style={{ left: `${h.x}%`, bottom: "-60px", fontSize: `${h.size}rem`, color: h.color }}
          animate={{ y: [0, -1200], opacity: [0, 0.85, 0.85, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingHearts
