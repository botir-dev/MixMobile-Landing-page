import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ThemeButton from "./components/GlobalButton/ThemeButton";
import PartnerBrand from "./components/PartnerBrand";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div
      className={`${theme === true ? "bg-[#0F1115]" : "bg-white"} overflow-x-hidden`}
    >
      <header>
        <Header mode={theme} />
      </header>
      <main className="py-1">
        <HeroSection mode={theme} />
        <ThemeButton onClick={() => setTheme((prev) => !prev)} mode={theme} />
        <PartnerBrand mode={theme} />
        <About mode={theme} />
        <WhyChoose mode={theme} />
        <GetInTouch mode={theme} />
      </main>

      <footer>
        <Footer mode={theme} />
      </footer>
    </div>
  );
}
