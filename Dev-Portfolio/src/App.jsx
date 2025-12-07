import { Header } from "./components/Header";
import { Main } from "./components/MainContent";
import { Footer } from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

/**
 * Root component of the application.
 *
 * Renders the main layout including header, main content sections,
 * footer, and the animated background effect.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 * @returns {JSX.Element} The full portfolio application layout
 */
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <BackgroundAnimation />
    </>
  );
}

export default App;
