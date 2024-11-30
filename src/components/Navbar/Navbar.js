import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {  LogOut } from "lucide-react";
import { auth } from "../../services/firebase";
import './Navbar.css'

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsAuthenticated(false);
        navigate("/login");
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Smart Coders
        </Link>
        <ul className="nav-menu">
       
          {!isAuthenticated ? (
            <>
             <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              
              <li>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="dropdown">
                <button className="nav-link">Courses</button>
                <div className="dropdown-content">
                  <Link to="/courses/C">C Program</Link>
                  <Link to="/courses/Javascript">Javascript</Link>
                  <Link to="/courses/Python">Python</Link>
                  <Link to="/courses/C++">C++</Link>
                  <Link to="/courses/Html">HTML5</Link>
                  <Link to="/courses/Css3">CSS3</Link>
                </div>
              </li>
              <li>
                <button className="nav-link" onClick={handleLogout}>
                <LogOut size={24} /> {/* LogOut Icon */}
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
