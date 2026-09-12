import CakeSection from "./components/CakeSection";
import {CollageSection} from "./components/CollageSection";
import FloatingHearts from "./components/FloatingHearts";
import HeartPattern from "./components/HeartPattern";
import HeroSection from "./components/HeroSection";
import LetterSection from "./components/LetterSection";


function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fff0f5 0%, #fce4ec 30%, #fff0f5 60%, #fce4ec 100%)",
      }}
    >
      <HeartPattern />
      <FloatingHearts />
      <HeroSection />
      <CollageSection />
      <LetterSection />
      <CakeSection />

      <footer
        className="relative z-10 py-10 text-center"
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: "#e91e8c",
          fontSize: "1rem",
        }}
      >
        Made with ♥ just for you — Happy Birthday! 🌸
      </footer>
    </div>
  );
}

export default App;