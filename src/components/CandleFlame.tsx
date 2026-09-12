import { motion } from "motion/react";
function CandleFlame() {
  return (
    <motion.div
      style={{
        width: 8,
        height: 16,
        background:
          "radial-gradient(ellipse 60% 100% at 50% 100%, #fff59d 0%, #ff9800 55%, transparent 100%)",
        borderRadius: "50% 50% 30% 30%",
        margin: "0 auto",
        filter: "blur(0.4px)",
      }}
      animate={{ scaleY: [1, 1.25, 0.88, 1.15, 1], scaleX: [1, 0.88, 1.12, 0.94, 1] }}
      transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
export default CandleFlame