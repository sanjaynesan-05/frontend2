import Navbar from "../components/Navbar.jsx";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page-shell">
      <Navbar />
      <main className="contact-page-content">
        <section className="contact-page-card">
          <h2 className="contact-page-title">Contact</h2>
          <p className="contact-page-text">You can add your email, phone, or contact form here.</p>
        </section>
      </main>
    </div>
  );
}

export default Contact;
