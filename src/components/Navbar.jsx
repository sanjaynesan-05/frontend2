import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const navigate = useNavigate();


	return (
		<header className="navbar">
			<div className="navbar__brand">Student Portal</div>

			<nav className="navbar__links" aria-label="Main navigation">
				<button
					type="button"
					className="navbar__link"
					onClick={() => navigate("/home")}
				>
					Home
				</button>

				<button
					type="button"
					className="navbar__link"
					onClick={() => navigate("/about")}
				>
					About
				</button>

				<button
					type="button"
					className="navbar__link"
					onClick={() => navigate("/contact")}
				>
					Contact
				</button>
			</nav>
		</header>
	);
}

export default Navbar;
