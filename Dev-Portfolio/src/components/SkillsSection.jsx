import "../styles/skills.css";

/**
 * Represents a skill with its icon and name.
 * @typedef {Object} Skill
 * @property {string} icon - Path to the skill icon image.
 * @property {string} name - Name of the skill.
 */

/**
 * SkillsSection component displays front-end and back-end skills
 * in continuously scrolling marquee rows.
 *
 * @component
 * @example
 * return (
 *   <SkillsSection />
 * )
 * @returns {JSX.Element} The skills section with animated marquees
 */
const SkillsSection = () => {
  /** @type {Skill[][]} Two rows of skill objects for the marquee */
  const row1Skills = [
    { icon: "src/assets/skills/html5.svg", name: "HTML" },
    { icon: "src/assets/skills/css3.svg", name: "CSS" },
    { icon: "src/assets/skills/javascript.svg", name: "JavaScript" },
    { icon: "src/assets/skills/react.svg", name: "React" },
    { icon: "src/assets/skills/tailwind.svg", name: "Tailwind" },
    { icon: "src/assets/skills/git.svg", name: "Git" },
    { icon: "src/assets/skills/github.svg", name: "Github" },
    { icon: "src/assets/skills/figma.svg", name: "Figma" },
    { icon: "src/assets/skills/vscode.svg", name: "VS Code" },
  ];

  const row2Skills = [
    { icon: "src/assets/skills/npm.svg", name: "NPM" },
    { icon: "src/assets/skills/bootstrap.svg", name: "Bootstrap" },
    { icon: "src/assets/skills/wordpress.svg", name: "Wordpress" },
    { icon: "src/assets/skills/nodejs.svg", name: "NodeJS" },
    { icon: "src/assets/skills/cloudflare.svg", name: "Cloudflare" },
    { icon: "src/assets/skills/vercel.svg", name: "Vercel" },
    { icon: "src/assets/skills/netlify.svg", name: "Netlify" },
  ];

  /**
   * Renders a single row of skills, duplicated for infinite scroll.
   *
   * @param {Skill[]} skills - Array of skills to render in the row
   * @param {string} direction - Animation direction class: 'left-scroll' or 'right-scroll'
   * @returns {JSX.Element} Marquee row of skill items
   */
  const renderMarqueeRow = (skills, direction) => (
    <div className="skills-marquee">
      <div className={`marquee-track ${direction}`}>
        {Array(2)
          .fill(skills)
          .flat()
          .map((skill, index) => (
            <div className="skill-marquee-item" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills & Technologies</h1>

      {renderMarqueeRow(row1Skills, "left-scroll")}
      {renderMarqueeRow(row2Skills, "right-scroll")}
    </section>
  );
};

export default SkillsSection;
