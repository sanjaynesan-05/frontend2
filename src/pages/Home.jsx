import Navbar from "../components/Navbar.jsx";
import "./Page.css";

function Home() {
    return (
        <div className="page-shell">
            <Navbar />
            <main className="page-content">
                <section className="page-card">
                    <h2 className="page-title">Home</h2>
                    <p className="page-text">Welcome to the Home page!</p>
                </section>
            </main>
        </div>
    );
}

export default Home;