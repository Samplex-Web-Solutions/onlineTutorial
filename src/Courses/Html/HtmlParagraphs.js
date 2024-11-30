import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import ProtectedRoute from "../../pages/ProtectedRoutes";
import "../courses.css";
import SideNav from "./htmlsidenav";
import { Link } from "react-router-dom";

const Cintroduction = () => {
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
          <h1>HTML Paragraphs</h1>
      <p>
        A paragraph is a block of text that always starts on a new line. HTML defines paragraphs
        using the <code>&lt;p&gt;</code> element.
      </p>

      <h2 className="h2">Example</h2>
      <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "20px" }}>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
      </div>

      <h2>Key Features of Paragraphs</h2>
      <ul>
        <li>
          Browsers automatically add margins before and after paragraphs for spacing.
        </li>
        <li>
          Extra spaces or lines in the HTML source code are ignored when displayed in the
          browser.
        </li>
      </ul>

      <h2 className="h2">Example: Extra Spaces and Lines</h2>
      <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "20px" }}>
        <p>
          This paragraph
          contains a lot of lines
          in the source code,
          but the browser
          ignores it.
        </p>

        <p>
          This paragraph contains         a lot of spaces
          in the source         code,
          but the        browser ignores it.
        </p>
      </div>

      <h1>HTML Horizontal Rules</h1>
      <p>
        The <code>&lt;hr&gt;</code> tag defines a thematic break in a webpage, often displayed as
        a horizontal rule.
      </p>
      <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "20px" }}>
        <h1>This is heading 1</h1>
        <p>This is some text.</p>
        <hr />
        <h2 style={{
            color:"#000",
            padding: "10px 0px"
        }}>This is heading 2</h2>
        <p>This is some other text.</p>
        <hr />
      </div>

      <h1>HTML Line Breaks</h1>
      <p>
        Use the <code>&lt;br&gt;</code> element to add a line break without starting a new
        paragraph.
      </p>
      <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "20px" }}>
        <p>
          This is<br />
          a paragraph<br />
          with line breaks.
        </p>
      </div>

      <h2>The Poem Problem</h2>
      <p>
        Text in a paragraph does not preserve line breaks or spaces. For example, the following
        poem displays as a single line:
      </p>
      <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "20px" }}>
        <p>
          My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the
          ocean. Oh, bring back my Bonnie to me.
        </p>
      </div>

      <h2>Solution: The <code>&lt;pre&gt;</code> Element</h2>
      <p>
        Use the <code>&lt;pre&gt;</code> element to preserve spaces and line breaks. Text inside
        a <code>&lt;pre&gt;</code> element is displayed in a fixed-width font.
      </p>
      <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "20px" }}>
        <pre>
          My Bonnie lies over the ocean.

          My Bonnie lies over the sea.

          My Bonnie lies over the ocean.

          Oh, bring back my Bonnie to me.
        </pre>
      </div>

      <h1>HTML Tag Reference</h1>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>
              Tag
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <code>&lt;p&gt;</code>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Defines a paragraph
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <code>&lt;hr&gt;</code>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Defines a thematic change in the content
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <code>&lt;br&gt;</code>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Inserts a single line break
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <code>&lt;pre&gt;</code>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Defines pre-formatted text
            </td>
          </tr>
        </tbody>
      </table>
        </div>
        </div>
        <div className="courses-btn">
        <Link to={"/html-headings"}>
            <button>Previous Lesson</button>
          </Link>
          
          <Link to={"#"}>
            <button>Next Lesson</button>
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Cintroduction;
