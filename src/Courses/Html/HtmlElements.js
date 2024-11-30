import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import ProtectedRoute from "../../pages/ProtectedRoutes";
import "../courses.css";
import SideNav from "./htmlsidenav";
import { Link } from "react-router-dom";

const HTMLElement = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <p>You need to log in to access the dashboard.</p>;
  }
  return (
    <ProtectedRoute>
      <div className="root">
        <div className="divider">
          <div className="aside">
            <SideNav />
          </div>

          <div className="main">
          <h1 className="h2">HTML Elements</h1>
      <p>
        An HTML element is defined by a start tag, some content, and an end tag.
      </p>
      <p>
        <strong>HTML Elements:</strong>
      </p>
      <code>
        &lt;tagname&gt;Content goes here...&lt;/tagname&gt;
      </code>
      <h2 className="h2">Examples of HTML Elements</h2>
      <ul>
        <li>
          <code>&lt;h1&gt;My First Heading&lt;/h1&gt;</code>
        </li>
        <li>
          <code>&lt;p&gt;My first paragraph.&lt;/p&gt;</code>
        </li>
        <li>
          <code>&lt;br&gt;</code> (Empty element with no end tag)
        </li>
      </ul>
      <h2 className="h2">Nested HTML Elements</h2>
      <p>HTML elements can be nested, meaning elements can contain other elements.</p>
      <p>Example of nested elements:</p>
      <pre>
        {`
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
        `}
      </pre>
      <h2 className="h2">Example Explained</h2>
      <p>
        The <code>&lt;html&gt;</code> element is the root element of the document.
      </p>
      <ul>
        <li>
          <code>&lt;body&gt;</code> defines the document's body and contains the content.
        </li>
        <li>
          <code>&lt;h1&gt;</code> defines a heading.
        </li>
        <li>
          <code>&lt;p&gt;</code> defines a paragraph.
        </li>
      </ul>
      <h2 className="h2">Empty HTML Elements</h2>
      <p>
        HTML elements with no content are called empty elements. For example,{" "}
        <code>&lt;br&gt;</code> defines a line break.
      </p>
      <p>Example:</p>
      <p>
        This is a <br /> paragraph with a line break.
      </p>
      <h2 className="h2">HTML is Not Case Sensitive</h2>
      <p>
        HTML tags are not case sensitive: <code>&lt;P&gt;</code> means the same as{" "}
        <code>&lt;p&gt;</code>.
      </p>
      <p>
        However, W3C recommends using lowercase tags for consistency and strict document
        types like XHTML.
      </p>
        
        </div>
        </div>
        <div className="courses-btn">
        <Link to={"/Courses/Html"}>
            <button>Previous Lesson</button>
          </Link>
          
          <Link to={"/html-attributes"}>
            <button>Next Lesson</button>
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default HTMLElement;
