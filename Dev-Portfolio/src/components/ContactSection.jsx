import "../styles/contact.css";

/**
 * ContactSection component renders the contact form and contact information.
 *
 * The section includes:
 * - A subtitle encouraging users to reach out.
 * - A contact form with fields for Name, Email, and Message.
 * - Contact info including email, location, and social media links.
 *
 * @component
 * @example
 * return (
 *   <ContactSection />
 * )
 */
export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-flex">
          <div className="contact-content">
            <p className="contact-subtitle">
              I'm always open to new opportunities, collaborations, and
              interesting conversations.
            </p>

            <form className="contact-form">
              <label>Name</label>
              <input type="text" placeholder="Your name" />

              <label>Email</label>
              <input type="email" placeholder="your@email.com" />

              <label>Message</label>
              <textarea rows="5" placeholder="Your message..."></textarea>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Get in touch</h3>

            <p>
              You can reach out to me through email or social platforms below.
            </p>

            <div className="contact-details">
              <div className="contact-email">
                <img
                  src="src/assets/email.svg"
                  alt="email icon"
                  className="contact-logo"
                />
                <a href="mailto:davidaniekanjonah@gmail.com" target="_blank">
                  Davidaniekanjonah@gmail.com
                </a>
              </div>

              <div className="contact-location">
                <img
                  src="src/assets/location-pin.svg"
                  alt="Location icon"
                  className="contact-logo"
                />
                <p>Cape Town, South Africa</p>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Social Links</h4>
              <div className="social-links">
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

                <a href="https://x.com/david_aniekan_" target="_blank">
                  <img
                    src="src/assets/twitter.svg"
                    alt="Twitter icon"
                    className="contact-icon"
                    id="twitter-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
