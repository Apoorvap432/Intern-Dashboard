import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="main-header">
      <h2 className="logo">Intern Portal</h2>
      <nav className="nav-links">
<Link
  to="/dashboard"
  className={location.pathname === "/dashboard" ? "active" : ""}
  onClick={(e) => location.pathname === "/dashboard" && e.preventDefault()}
>
  Dashboard
</Link>
        <Link
          to="/leaderboard"
          className={location.pathname === "/leaderboard" ? "active" : ""}
        >
          Leaderboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;
