import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Jobarouter</h1>
          <div className="nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
            <NavLink 
              to="about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
            <NavLink 
              to="help" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Help
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}