import "/src/index.css";

/**
 * IntroSection component renders the hero section of the website.
 * It introduces the developer, provides a short description, and displays
 * social/contact icons along with the profile picture.
 *
 * Features:
 * - Developer's greeting and short description.
 * - Social/contact links: LinkedIn, GitHub, Gmail, Twitter, Codepen.
 * - Profile picture displayed alongside the introduction text.
 *
 * @component
 * @example
 * return (
 *   <IntroSection />
 * )
 */
const IntroSection = () => {
  return (
    <section id="home" className="intro-section">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Hi, I'm David Aniekan</h1>
          <p>
            A passionate front-end developer crafting responsive, engaging web
            applications. Skilled in HTML, CSS (Tailwind), JavaScript, and
            React, I focus on clean code, functional design, and continuously
            growing my skills in modern web development.
          </p>
          <div className="contact-list">
            <a
              href="https://www.linkedin.com/in/david-aniekan/"
              target="_blank"
            >
              <img
                src="src/assets/linkedin-icon.svg"
                alt="linkedin icon"
                className="contact-icon"
                id="linkedin-icon"
              />
            </a>
            <a href="https://github.com/Davidaniekan" target="_blank">
              <img
                src="src/assets/github-icon.svg"
                alt="Github icon"
                className="contact-icon"
                id="Github-icon"
              />
            </a>
            <a href="mailto:davidaniekanjonah@gmail.com" target="_blank">
              <img
                src="src/assets/gmail-icon.svg"
                alt="Gmail icon"
                id="gmail-icon"
              />
            </a>

            <a href="https://x.com/david_aniekan_" target="_blank">
              <img
                src="src/assets/twitter.svg"
                alt="Twitter icon"
                className="contact-icon"
                id="twitter-icon"
              />
            </a>

            <a href="https://codepen.io/Davidaniekan" target="_blank">
              <img
                src="src/assets/codepen-icon.svg"
                alt="Codepen icon"
                className="contact-icon"
                id="Codepen-icon"
              />
            </a>
          </div>
        </div>

        <div className="profile-pic-container">
          <img
            src="src/assets/profile-pic.jpg"
            alt="David Profile Picture"
            className="profile-picture"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
