import React from "react";
import {  useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuthState } from "react-firebase-hooks/auth"; // Firebase authentication hook
import { auth } from "../services/firebase"; // Firebase auth import
import html from '../img/html.png';
import css from '../img/css.png';
import c from '../img/c.png';
import cp from '../img/c++.png';
import js from '../img/js.png';
import py from '../img/py.png';
import "./Home.css";

const Home = () => {
  const [user] = useAuthState(auth); // Check if user is logged in
  const navigate = useNavigate(); // Navigate to another page

  const handleCourseClick = (courseName) => {
    if (!user) { // If user is not logged in
      // Redirect to login page and pass the course name as state
      navigate("/login", { state: { course: courseName } });
    }
  };

  return (
    <div className="home-container">
      <div className="courses-container">
        {/* HTML CARD */}
        <div className="card">
          <div className="col-1">
            <h2>HTML</h2>
            <h2>Markup Language</h2>
            <p>Learn to build web pages.</p>
            <button onClick={() => handleCourseClick("Html")}>Learn HTML5</button>
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
            <button onClick={() => handleCourseClick("Css3")}>Learn CSS3</button>
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
            <button onClick={() => handleCourseClick("Javascript")}>Learn JAVASCRIPT</button>
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
            <button onClick={() => handleCourseClick("C")}>Learn C</button>
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
            <button onClick={() => handleCourseClick("C++")}>Learn C++</button>
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
            <button onClick={() => handleCourseClick("Python")}>Learn PYTHON</button>
          </div>
          <div className="col-2">
            <img src={py} alt="Python"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
