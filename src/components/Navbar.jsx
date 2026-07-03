import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<header className="navbar">
			<div className="navbar__brand">Student Portal</div>

			<nav className="navbar__links" aria-label="Main navigation">
				<NavLink
					to="/home"
					className={({ isActive }) =>
						isActive ? "navbar__link navbar__link--active" : "navbar__link"
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "navbar__link navbar__link--active" : "navbar__link"
					}
				>
					About
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive ? "navbar__link navbar__link--active" : "navbar__link"
					}
				>
					Contact
				</NavLink>
			</nav>
		</header>
	);
}

export default Navbar;
