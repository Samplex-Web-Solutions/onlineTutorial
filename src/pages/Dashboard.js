import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import ProtectedRoute from "./ProtectedRoutes";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import html from "../img/html.png";
import css from "../img/css.png";
import c from "../img/c.png";
import cp from "../img/c++.png";
import js from "../img/js.png";
import py from "../img/py.png";
import dummy from "../img/dummy.jpg";
import { Trophy } from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <p>You need to log in to access the dashboard.</p>;
  }

  return (
    <ProtectedRoute>
      <div className="container">
      <div className="dashboard-container">
        <div className="user-profile">
          <div className="profile-header">
            <h2>Welcome, {user.email}</h2>
          </div>
          <div className="profile-info">
            <div className="profile-picture">
              <img
                src={dummy} // Dummy profile picture
                alt="User Profile"
              />
            </div>
            <div className="profile-details">
              <p>Available Courses: 6</p>
              <p className="rank">Student Rank  <Trophy className="trophy"/>: Beginner </p>
            </div>
          </div>
        </div>
        <div className="quiz">
         <Link to="/quiz-now" >
         <button>Practice Test Questions</button>
         </Link>
        </div>
        {/* Available Courses Section */}
        <div className="available-courses">
          <h2>Available Courses</h2>
          <div className="courses">
            {/* HTML CARD */}
            <div className="card">
              <div className="col-1">
                <h2>HTML</h2>
                <h2>Markup Language</h2>
                <p>Learn to build web pages.</p>
                <Link to="/courses/Html"> {/* Link to HTML course page */}
                  <button>Learn HTML5</button>
                </Link>
              </div>
              <div className="col-2">
                <img src={html} alt="Html"></img>
              </div>
            </div>

            {/* CSS CARD */}
            <div className="card">
              <div className="col-1">
                <h2>CSS</h2>
                <h2>CASCADING STYLING SHEET</h2>
                <p>Learn to style web pages.</p>
                <Link to="/courses/Css3"> {/* Link to CSS3 course page */}
                  <button>Learn CSS3</button>
                </Link>
              </div>
              <div className="col-2">
                <img src={css} alt="Css"></img>
              </div>
            </div>

            {/* JS CARD */}
            <div className="card">
              <div className="col-1">
                <h2>JS</h2>
                <h2>Programming Language</h2>
                <p>Learn to build dynamic web pages.</p>
                <Link to="/courses/Javascript"> {/* Link to JavaScript course page */}
                  <button>Learn JAVASCRIPT</button>
                </Link>
              </div>
              <div className="col-2">
                <img src={js} alt="Javascript"></img>
              </div>
            </div>

            {/* C CARD */}
            <div className="card">
              <div className="col-1">
                <h2>C</h2>
                <h2>Programming Language</h2>
                <p>Learn C programming language.</p>
                <Link to="/courses/C"> {/* Link to C course page */}
                  <button>Learn C</button>
                </Link>
              </div>
              <div className="col-2">
                <img src={c} alt="C"></img>
              </div>
            </div>

            {/* C++ CARD */}
            <div className="card">
              <div className="col-1">
                <h2>C++</h2>
                <h2>Programming Language</h2>
                <p>Learn C++ programming language.</p>
                <Link to="/courses/C++"> {/* Link to C++ course page */}
                  <button>Learn C++</button>
                </Link>
              </div>
              <div className="col-2">
                <img src={cp} alt="C++"></img>
              </div>
            </div>

            {/* PYTHON CARD */}
            <div className="card">
              <div className="col-1">
                <h2>PYTHON</h2>
                <h2>Programming Language</h2>
                <p>Learn Python programming language.</p>
                <Link to="/courses/Python"> {/* Link to Python course page */}
                  <button>Learn PYTHON</button>
                </Link>
              </div>
              <div className="col-2">
                <img src={py} alt="Python"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
