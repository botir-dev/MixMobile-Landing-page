import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ThemeButton from "./components/GlobalButton/ThemeButton";
import PartnerBrand from "./components/PartnerBrand";

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
      className={`${theme === true ? "bg-black" : "bg-white"} overflow-x-hidden`}
    >
      <header>
        <Header mode={theme} />
      </header>
      <main className="py-1">
        <section>
          <HeroSection mode={theme} />
          <ThemeButton onClick={() => setTheme((prev) => !prev)} mode={theme} />
        </section>
        <section>
          <PartnerBrand mode={theme} />
        </section>
      </main>
    </div>
  );
}
