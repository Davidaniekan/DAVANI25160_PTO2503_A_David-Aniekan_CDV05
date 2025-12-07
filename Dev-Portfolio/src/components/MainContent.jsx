import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

/**
 * Main component aggregates all the primary sections of the website.
 * 
 * Sections included:
 * - IntroSection: Hero section with greeting and profile.
 * - AboutSection: Developer's background and skills description.
 * - SkillsSection: Technical skills and tools.
 * - ProjectsSection: Portfolio projects with descriptions and links.
 * - ContactSection: Contact form and social links.
 *
 * @component
 * @example
 * return (
 *   <Main />
 * )
 */
export function Main() {
  return (
    <main>
      <div className="main-content">
        <IntroSection />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ContactSection />
      </div>
    </main>
  );
}
