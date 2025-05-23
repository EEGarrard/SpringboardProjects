import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/pluto"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Pluto
      </NavLink>

      <NavLink
        to="/blackholes"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Blackholes
      </NavLink>

      <NavLink
        to="/honeycomb"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Space Honeycomb
      </NavLink>

      <NavLink
        to="/supernovas"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Supernovas
      </NavLink>

      <NavLink
        to="/andromeda-galaxy"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Andromeda Galaxy
      </NavLink>
    </nav>
  );
}
