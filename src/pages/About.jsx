import Navbar from "../components/Navbar.jsx";
import "./About.css";

function About() {
  return (
    <div className="about-page-shell">
      <Navbar />
      <main className="about-page-content">
        <section className="about-page-card">
          <h2 className="about-page-title">About</h2>
          <p className="about-page-text">This is a simple beginner-friendly About page.</p>
        </section>
      </main>
    </div>
  );
}

export default About;
