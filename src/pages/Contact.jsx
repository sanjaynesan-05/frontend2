import Navbar from "../components/Navbar.jsx";
import "./Page.css";

function Contact() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content">
        <section className="page-card">
          <h2 className="page-title">Contact</h2>
          <p className="page-text">You can add your email, phone, or contact form here.</p>
        </section>
      </main>
    </div>
  );
}

export default Contact;
