// src/App.jsx in React-Website
import React, { useState, useEffect } from "react";
import { Header } from "./components/HeroTitle.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.jsx";
import { ProjectsPanel } from "./components/ProjectsPanel.jsx";
import { Footer } from "./components/Footer.jsx";
import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";
import { ProgrammingLanguages } from "./pages/ProgrammingLanguages.jsx";
import { projectData } from "./components/PanelData.js";

// Import TemperatureCalculator from the symlinked folder
import TemperatureCalculator from "temperaturecalculator/components/TemperatureCalculator.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = window.location.pathname.replace("/", "") || "home";
    setCurrentPage(path);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, "", `/${page}`);
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-700">
      {/* Animated Panel Section */}
      <section className="relative">
        <AnimatedPanel />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Header />
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="sticky top-0 z-10 py-4 bg-gray-400 shadow-md dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <NavBar navigateTo={navigateTo} />
          </div>
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <ToggleThemeButton />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <main className="flex-grow relative overflow-hidden">
        {currentPage === "home" && (
          <div className="flex min-h-screen flex-col dark:bg-gray-700">
            <div className="flex-grow relative py-10">
              <section className="relative py-10">
                <div className="mx-auto max-w-screen-lg px-4">
                  <div className="flex flex-wrap justify-between gap-6">
                    {projectData.map((project, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
                      >
                        <ProjectsPanel {...project} setCurrentPage={navigateTo} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Other Pages */}
        {currentPage === "contact" && <Contact />}
        {currentPage === "about" && <About />}
        {currentPage === "languages" && <ProgrammingLanguages />}

        {/* Render Frontend Project Pages */}
        {currentPage === "temperaturecalculator" && <TemperatureCalculator />}
      </main>

      {/* Footer */}
      <div className="my-3">
        <Footer />
      </div>
    </div>
  );
};

export default App;

