import Navbar from "../components/Navbar.jsx";
import "./Home.css";

function Home() {
    return (
        <div className="home-page-shell">
            <Navbar />
            <main className="home-page-content">
                <section className="home-page-card">
                    <h2 className="home-page-title">Home</h2>
                    <p className="home-page-text">Welcome to the Home page!</p>
                </section>
            </main>
        </div>
    );
}

export default Home;