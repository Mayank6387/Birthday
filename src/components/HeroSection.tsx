import { motion } from "motion/react";
export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 gap-6">

      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [-4, 4, -4] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          fontSize: "3rem",
          filter: "drop-shadow(0 0 24px rgba(233,30,140,0.6))",
        }}
      >
        ❤️
      </motion.div>

      <motion.p
        className="text-sm uppercase tracking-[0.35em] font-semibold"
        style={{
          fontFamily: "'Nunito', sans-serif",
          color: "#c2185b",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Today is your special day
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(3.5rem, 14vw, 7.5rem)",
          background:
            "linear-gradient(135deg, #e91e8c 0%, #c2185b 50%, #f06292 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 2px 12px rgba(233,30,140,0.3))",
          lineHeight: 1.15,
        }}
      >
        Happy Birthday
      </motion.h1>

      {/* UPDATED PART */}
      <motion.div
        className="flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.2rem, 9vw, 5rem)",
            color: "#e91e8c",
            filter: "drop-shadow(0 0 14px rgba(233,30,140,0.35))",
            lineHeight: 1.2,
          }}
        >
          Harshita
        </h2>

        <motion.div
          animate={{
            rotate: [-6, 6, -6],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ flexShrink: 0 }}
        >
          💕
        </motion.div>
      </motion.div>

      <motion.p
        className="max-w-xs text-base leading-relaxed"
        style={{
          fontFamily: "'Nunito', sans-serif",
          color: "#c2185b",
          opacity: 0.85,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 1.3 }}
      >
        Scroll down for a little surprise made just for you 💕
      </motion.p>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          color: "#f06292",
          fontSize: "1.6rem",
          marginTop: "0.5rem",
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}
export default HeroSection