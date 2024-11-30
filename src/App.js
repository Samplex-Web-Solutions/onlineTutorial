import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './global.css';
import { auth } from './services/firebase';
import Home from './pages/Home';

// Courses router setup
import CIntro from './Courses/C/Cintro';
import CpIntro from './Courses/C++/C++intro';
import PyIntro from './Courses/Python/pyintro';
import JsIntro from './Courses/Javascript/jsintro';
import HtmlIntro from './Courses/Html/htmlintro';
import CssIntro from './Courses/Css3/cssintro';


//Html courses
import HtmlElements from './Courses/Html/HtmlElements';
import HtmlAttributes from './Courses/Html/HtmlAttributes';
import HtmlHeadings from './Courses/Html/HtmlHeadings';
import HtmlParagraphs from './Courses/Html/HtmlParagraphs';
import QuizComponent from './components/quizComponent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />} />
          
            <Route path='/quiz-now' element={<QuizComponent /> } />

            {/* Course Routes */}
            <Route path="/courses/C" element={<CIntro />} />
            <Route path="/courses/Python" element={<PyIntro />} />
            <Route path="/courses/Html" element={<HtmlIntro />} />
            <Route path="/courses/Css3" element={<CssIntro />} />
            <Route path="/courses/Javascript" element={<JsIntro />} />
            <Route path="/courses/C++" element={<CpIntro />} />

            {/* html sub topics */}

            <Route path='/html-elements' element = { <HtmlElements />} />
            <Route path='/html-attributes' element = {<HtmlAttributes />} />
            <Route path='/html-headings' element ={<HtmlHeadings />} />
            <Route path='/html-paragraphs' element ={ <HtmlParagraphs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
