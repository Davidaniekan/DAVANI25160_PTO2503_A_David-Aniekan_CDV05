import { useEffect, useState } from "react";

/**
 * Header component renders the website's top navigation including logo, desktop navigation,
 * and mobile hamburger menu. It also highlights the currently active section using
 * IntersectionObserver.
 *
 * Features:
 * - Logo linking to homepage.
 * - Desktop navigation with active section highlighting.
 * - Mobile hamburger menu that toggles dropdown navigation.
 * - IntersectionObserver to detect visible section and update active state.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <>
      <header>
        <div className="header-content">
          <a href="/" className="logo-link">
            <img
              src="\src\assets\da-logo.jpg"
              alt="David's Logo"
              className="da-logo"
            />
          </a>

          {/* HAMBURGER BUTTON */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="nav-bar desktop-nav">
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>

            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>

            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>

            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* MOBILE NAV DROPDOWN */}
        <nav className={`mobile-nav ${menuOpen ? "show" : ""}`}>
          <a onClick={() => setMenuOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setMenuOpen(false)} href="#skills">
            Skills
          </a>
          <a onClick={() => setMenuOpen(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setMenuOpen(false)} href="#contact">
            Contact
          </a>
        </nav>
        <div className="divider"></div>
      </header>
    </>
  );
}
