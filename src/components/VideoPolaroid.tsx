import { type RefObject, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface VideoPolaroidProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

function VideoPolaroid({ audioRef }: VideoPolaroidProps) {
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoSection = videoSectionRef.current;
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!videoSection || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Pause background music when Video Polaroid enters the screen
          audio?.pause();

          // Automatically play the video
          video.play().catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        } else {
          // Pause video when Video Polaroid leaves the screen
          video.pause();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(videoSection);

    return () => {
      observer.disconnect();
    };
  }, [audioRef]);

  return (
    <motion.div
      ref={videoSectionRef}
      className="w-full max-w-5xl"
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        ease: [0.23, 1, 0.32, 1],
      }}
      style={{
        transform: "rotate(-1deg)",
      }}
    >
      {/* Polaroid frame */}
      <div
        style={{
          background: "#ffffff",
          padding: "14px 14px 26px",
          borderRadius: "5px",
          boxShadow:
            "0 10px 35px rgba(233,30,140,0.2), 0 4px 12px rgba(0,0,0,0.12)",
          position: "relative",
        }}
      >
        {/* Video area */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            background: "#fce4ec",
            overflow: "hidden",
            borderRadius: "2px",
            position: "relative",
          }}
        >
          <video
            ref={videoRef}
            src="/pics/Snap.mp4"
            controls
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Polaroid caption */}
        <div
          style={{
            textAlign: "center",
            marginTop: "12px",
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.35rem",
            fontWeight: 700,
            color: "#c2185b",
          }}
        >
          Our Little Memory ♥
        </div>

        {/* Heart decoration */}
        <div
          style={{
            position: "absolute",
            top: "-12px",
            right: "-10px",
            fontSize: "1.5rem",
            filter: "drop-shadow(0 2px 4px rgba(233,30,140,0.4))",
          }}
        >
          ♥
        </div>
      </div>
    </motion.div>
  );
}

export default VideoPolaroid;