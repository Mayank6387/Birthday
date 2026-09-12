import { motion } from "motion/react";
import CakeTier from "./CakeTier";
import Candle from "./Candle";
import LilySVG from "./LilySVG";
function CakeSection() {
    const CANDLE_COLORS = ["#f48fb1", "#ce93d8", "#80cbc4", "#ffcc80", "#ef9a9a"];
  return (
    <section className="relative z-10 py-20 px-6 flex flex-col items-center gap-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(2rem, 7vw, 3.8rem)",
          color: "#e91e8c",
          filter: "drop-shadow(0 0 12px rgba(233,30,140,0.25))",
        }}
      >
        Make a Wish! 🎂
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.65 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
        style={{ perspective: "900px" }}
      >
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: [0, 3, 0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            {/* Top lily cluster & candles */}
            <div style={{ position: "relative", width: 120, height: 56, marginBottom: -2, zIndex: 10 }}>
              <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)" }}>
                <LilySVG size={62} petalColor="#ffcdd2" petalStroke="#e91e8c" />
              </div>
              <div style={{ position: "absolute", top: 4, left: "8%", transform: "translateX(-50%) scale(0.72)" }}>
                <LilySVG size={56} petalColor="#f8bbd0" petalStroke="#c2185b" />
              </div>
              <div style={{ position: "absolute", top: 4, left: "92%", transform: "translateX(-50%) scale(0.68)" }}>
                <LilySVG size={56} petalColor="#fce4ec" petalStroke="#e91e8c" />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 10,
                  zIndex: 20,
                }}
              >
                {CANDLE_COLORS.map((c, i) => (
                  <Candle key={i} color={c} />
                ))}
              </div>
            </div>

            {/* Top tier */}
            <CakeTier
              width={140}
              height={52}
              topColor="#f8bbd0"
              sideGradient="linear-gradient(to right, #c2185b 0%, #e91e8c 30%, #f48fb1 60%, #e91e8c 80%, #c2185b 100%)"
              shadowColor="#ad1457"
            >
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: "0.95rem", fontWeight: 700, color: "#fff9fb", textShadow: "0 1px 4px rgba(0,0,0,0.25)", whiteSpace: "nowrap" }}>
                  Harshita ♥
                </span>
              </div>
            </CakeTier>

            {/* Middle tier */}
            <CakeTier
              width={200}
              height={64}
              topColor="#f48fb1"
              sideGradient="linear-gradient(to right, #ad1457 0%, #c2185b 25%, #e91e8c 50%, #c2185b 75%, #ad1457 100%)"
              shadowColor="#880e4f"
            >
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.25rem", color: "#fff9fb", textShadow: "0 1px 6px rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>
                  Happy Birthday!
                </span>
              </div>
            </CakeTier>

            {/* Bottom tier */}
            <CakeTier
              width={272}
              height={78}
              topColor="#f06292"
              sideGradient="linear-gradient(to right, #880e4f 0%, #c2185b 20%, #e91e8c 50%, #c2185b 80%, #880e4f 100%)"
              shadowColor="#6a0036"
            >
              <div style={{ position: "absolute", top: "50%", left: 0, right: 0, transform: "translateY(-50%)", display: "flex", justifyContent: "space-evenly", padding: "0 18px" }}>
                {Array.from({ length: 9 }, (_, i) => (
                  <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff9c4", boxShadow: "0 0 5px rgba(255,215,0,0.8)" }} />
                ))}
              </div>
              <div style={{ position: "absolute", right: -28, top: "10%", opacity: 0.9 }}>
                <LilySVG size={44} petalColor="#f8bbd0" petalStroke="#c2185b" />
              </div>
              <div style={{ position: "absolute", left: -28, top: "15%", opacity: 0.9 }}>
                <LilySVG size={40} petalColor="#fce4ec" petalStroke="#e91e8c" />
              </div>
            </CakeTier>

            {/* Base plate */}
            <div
              style={{
                width: 306,
                height: 16,
                background: "linear-gradient(to right, #880e4f, #c2185b, #e91e8c, #c2185b, #880e4f)",
                borderRadius: "0 0 50% 50% / 0 0 8px 8px",
                boxShadow: "0 10px 28px rgba(233,30,140,0.4), 0 2px 6px rgba(0,0,0,0.12)",
                marginTop: -4,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-center max-w-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.2rem", color: "#c2185b", lineHeight: 1.6 }}
      >
        Close your eyes, make a wish, and know that I&apos;ll spend every day
        trying to make it come true. ♥
      </motion.p>

      <div className="flex gap-3">
        {["♥", "♥", "♥", "♥", "♥"].map((h, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0], scale: [1, 1.3, 1] }}
            transition={{ delay: i * 0.18, duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "#e91e8c", fontSize: "1.6rem" }}
          >
            {h}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default CakeSection
