import Navbar from "../components/Navbar.jsx";
import "./Page.css";

function About() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content">
        <section className="page-card">
          <h2 className="page-title">About</h2>
          <p className="page-text">This is a simple beginner-friendly About page.</p>
        </section>
      </main>
    </div>
  );
}

export default About;
