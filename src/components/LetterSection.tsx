import { motion } from "motion/react";
import { LETTER_LINES } from "../data/birthdayData";
function LetterSection() {
  return (
    <section className="relative z-10 py-20 px-6 flex flex-col items-center gap-8">
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
        A Letter For You 💌
      </motion.h2>

      <motion.div
        className="w-full max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div style={{ position: "relative", perspective: "600px" }}>
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #fff9fb 0%, #fff0f5 100%)",
              boxShadow:
                "0 8px 40px rgba(233,30,140,0.18), 0 2px 10px rgba(233,30,140,0.1)",
              border: "1.5px solid rgba(233,30,140,0.2)",
            }}
          >
            {/* Top wax seal bar */}
            <div
              style={{
                background: "linear-gradient(90deg, #f8bbd0, #e91e8c, #f8bbd0)",
                height: "6px",
              }}
            />

            {/* Letter paper inside */}
            <div className="p-8 sm:p-10">
              <div
                className="relative"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 27px, rgba(233,30,140,0.1) 27px, rgba(233,30,140,0.1) 28px)",
                  backgroundSize: "100% 28px",
                  paddingTop: "4px",
                }}
              >
                {LETTER_LINES.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.04, duration: 0.5 }}
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      fontSize:
                        i === 0
                          ? "1.45rem"
                          : i >= LETTER_LINES.length - 2
                          ? "1.15rem"
                          : "1.05rem",
                      fontWeight: i === 0 || i >= LETTER_LINES.length - 2 ? 700 : 400,
                      color: i === 0 ? "#c2185b" : "#880e4f",
                      lineHeight: "28px",
                      minHeight: "28px",
                      paddingTop: line === "" ? "0" : "2px",
                      display: "block",
                    }}
                  >
                    {line || " "}
                  </motion.p>
                ))}
              </div>

              {/* Signature hearts */}
              <motion.div
                className="flex gap-2 mt-4 justify-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                {["♥", "♥", "♥"].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ delay: i * 0.2, duration: 1.4, repeat: Infinity }}
                    style={{ color: "#e91e8c", fontSize: "1.3rem" }}
                  >
                    {h}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Bottom decorative strip */}
            <div
              style={{
                background: "linear-gradient(90deg, #fce4ec, #f8bbd0, #f06292, #f8bbd0, #fce4ec)",
                height: "5px",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default LetterSection