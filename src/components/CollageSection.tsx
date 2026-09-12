import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { PHOTOS } from "../data/birthdayData";
import { FlipCard } from "./FlipCard";
import VideoPolaroid from "./VideoPolaroid";

export function CollageSection() {
  const half = Math.floor(PHOTOS.length / 2);

  const pairs = PHOTOS.slice(0, half).map((front, i) => ({
    front: front.url,
    back: PHOTOS[i + half].url,
    rotation: front.rotation,
  }));

  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const audio = audioRef.current;

    if (!section || !audio) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start music when the memory section enters
          audio.play().catch(() => {});
        } else {
          // Pause music when leaving the memory section
          audio.pause();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      audio.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-20 px-6 flex flex-col items-center gap-10"
    >
      {/* 🎵 Memory Section Music */}
      <audio
        ref={audioRef}
        src="/pics/perfect.mp3"
        loop
        preload="auto"
      />

      <motion.h2
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(2rem, 7vw, 3.8rem)",
          color: "#e91e8c",
          filter:
            "drop-shadow(0 0 12px rgba(233,30,140,0.25))",
        }}
      >
        Our Beautiful Memories 🧸 🎀
      </motion.h2>

      <p
        className="text-xs text-center"
        style={{
          fontFamily: "'Nunito', sans-serif",
          color: "#c2185b",
          opacity: 0.55,
        }}
      >
        hover to flip ♥
      </p>

      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(190px, 1fr))",
          maxWidth: "1020px",
          width: "100%",
        }}
      >
        {pairs.map((pair, i) => (
          <FlipCard
            key={i}
            index={i}
            front={pair.front}
            back={pair.back}
            rotation={pair.rotation}
          />
        ))}
      </div>

      {/* 🎥 Video Polaroid */}
      <VideoPolaroid audioRef={audioRef} />
    </section>
  );
}