import "/src/index.css";

/**
 * AboutSection component renders the "About" section of the portfolio.
 *
 * This section includes a title and multiple paragraphs describing the
 * developer's background, skills, and approach to software development.
 *
 * @component
 * @example
 * return (
 *   <AboutSection />
 * )
 */

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">About</h1>
          <p className="about-subtitle">
            I am a detail-driven and creatively minded software development
            student with a strong passion for crafting meaningful digital
            experiences. Through my work, I focus on building responsive and
            user-centered web applications that blend clarity, functionality,
            and modern design.
          </p>
          <p className="about-subtitle">
            Currently completing an intensive program at CodeSpace Academy, I’ve
            had the opportunity to work on projects that challenge my thinking,
            sharpen my problem-solving abilities, and refine the way I approach
            front-end development.
          </p>
          <p>
            I’m inspired by the process of transforming ideas into polished,
            interactive experiences that feel intuitive and engaging. Whether
            designing interfaces or bringing features to life, I approach every
            project with precision, curiosity, and a commitment to creating
            solutions that leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
