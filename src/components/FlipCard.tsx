import { useState } from "react";
import { motion, useAnimation } from "motion/react";

interface FlipCardProps {
  front: string;
  back: string;
  index: number;
  rotation: number;
}

export function FlipCard({
  front,
  back,
  index,
  rotation,
}: FlipCardProps) {
  const controls = useAnimation();
  const [spinning, setSpinning] = useState(false);

  const handleHoverStart = async () => {
    if (spinning) return;

    setSpinning(true);

    await controls.start({
      rotateY: 360,
      transition: {
        duration: 1.75,
        ease: [0.4, 0, 0.2, 1],
      },
    });

    controls.set({
      rotateY: 0,
    });

    setSpinning(false);
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.85,
        rotate: rotation,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: rotation,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{
        scale: 1.06,
        zIndex: 20,
        rotate: 0,
      }}
      onHoverStart={handleHoverStart}
      style={{
        perspective: "800px",
        background: "transparent",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "10px 10px 14px",
          borderRadius: "4px",
          boxShadow:
            "0 6px 28px rgba(233,30,140,0.18), 0 2px 8px rgba(0,0,0,0.09)",
        }}
      >
        <motion.div
          animate={controls}
          style={{
            transformStyle: "preserve-3d",
            position: "relative",
            width: "100%",
            height: "200px",
          }}
        >
          {/* Front */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: "#fce4ec",
              lineHeight: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={front}
              alt="memory"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Back */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "#fce4ec",
              lineHeight: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={back}
              alt="memory back"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div>

      <div
        style={{
          position: "absolute",
          top: -8,
          right: -8,
          fontSize: "1.2rem",
          filter:
            "drop-shadow(0 1px 3px rgba(233,30,140,0.5))",
          zIndex: 10,
        }}
      >
        ♥
      </div>
    </motion.div>
  );
}