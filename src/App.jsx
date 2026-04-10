import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ThemeButton from "./components/GlobalButton/ThemeButton";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={theme ? "bg-black min-h-screen" : "bg-white min-h-screen"}>
      <header>
        <Header mode={theme} />
      </header>
      <main className="container w-full max-w-[1200px]  mx-auto py-1 px-2">
        <section>
          <HeroSection mode={theme} />
          <ThemeButton onClick={() => setTheme((prev) => !prev)} mode={theme} />
        </section>
      </main>
    </div>
  );
}
