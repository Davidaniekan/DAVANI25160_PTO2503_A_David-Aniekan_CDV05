import "../styles/footer.css";

/**
 * Footer component renders the website footer including the logo, name, role, and copyright.
 *
 * Features:
 * - Rotating logo animation.
 * - Color-changing name animation.
 * - Displays the user's role.
 * - Displays copyright information.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src="\src\assets\da-logo.jpg" alt="David's Logo" id="da-logo" className="spin-logo" />
        <div className="footer-text">
          <p className="f-name animated-name">David Aniekan</p>
          <p className="f-role">Frontend Developer</p>
        </div>
      </div>
      <p className="copyright">© 2025 David Aniekan. All rights reserved.</p>
    </footer>
  );
}
