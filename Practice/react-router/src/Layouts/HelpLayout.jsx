import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>How can we help you today?</p>
      
      <nav className="help-nav">
        <NavLink to="faq" className={({ isActive }) => 
          isActive ? "help-link active" : "help-link"
        }>
          FAQ
        </NavLink>
        <NavLink to="contact" className={({ isActive }) => 
          isActive ? "help-link active" : "help-link"
        }>
          Contact Us
        </NavLink>
      </nav>
      
      <div className="help-content">
        <Outlet />
      </div>
    </div>
  );
}