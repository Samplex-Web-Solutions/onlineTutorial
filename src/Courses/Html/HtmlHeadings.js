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
            
            <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
              <h1>HTML Headings</h1>
              <p>
                HTML headings are titles or subtitles that you want to display
                on a webpage.
              </p>

              <h2 className="h2">Example</h2>
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  marginBottom: "20px",
                }}
              >
                <h1>Heading 1</h1>
                <h2 style={{
                  padding: "12px 0px",
                  color: "#000",
                  margin:"0px"
                }}>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
              </div>

              <h2>HTML Headings</h2>
              <p>
                HTML headings are defined with the <code>&lt;h1&gt;</code> to{" "}
                <code>&lt;h6&gt;</code> tags.
              </p>
              <p>
                <code>&lt;h1&gt;</code> defines the most important heading,
                while <code>&lt;h6&gt;</code> defines the least important
                heading.
              </p>

              <h2 className="h2">Code Example</h2>
              <pre>
                {`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
        `}
              </pre>

              <h2 className="h2">Key Points</h2>
              <ul>
                <li>
                  Browsers automatically add white space (margins) before and
                  after headings.
                </li>
                <li>
                  Headings are crucial for structuring your content and
                  improving accessibility.
                </li>
                <li>
                  Search engines use headings to index and understand the
                  content on your web pages.
                </li>
                <li>
                  Use <code>&lt;h1&gt;</code> for main headings and proceed with{" "}
                  <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc., for
                  subheadings.
                </li>
                <li>
                  Avoid using headings merely to style text as big or bold—use
                  CSS for that purpose.
                </li>
              </ul>

              <h2 className="h2">Bigger Headings with CSS</h2>
              <p>
                You can customize heading sizes using the <code>style</code>{" "}
                attribute or CSS. For example:
              </p>
              <pre>
                {`
<h1 style="font-size:60px;">Heading 1</h1>
        `}
              </pre>
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <h1 style={{ fontSize: "60px" }}>Heading 1</h1>
              </div>

              <h2 className="h2" style={{
                padding:"20px 0px",
                paddingTop:"30px"
              }}>HTML Tag Reference</h2>
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
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        backgroundColor: "#f4f4f4",
                      }}
                    >
                      Tag
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        backgroundColor: "#f4f4f4",
                      }}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <code>&lt;html&gt;</code>
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Defines the root of an HTML document
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <code>&lt;body&gt;</code>
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Defines the document's body
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Defines HTML headings
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Practice Lesson</h2>
          <div className="editor">
          <iframe
            title="codeEditor"
            height="350px"
            frameBorder="0"
            src="https://onecompiler.com/embed/html"
            width="100%"
            hideStdin="false"
            hideNew="true"
            hideTitle="true"
            theme="dark"
          ></iframe>
        </div> 
          </div>
         
        </div>
        <div className="courses-btn">
            <Link to={"/html-attributes"}>
              <button>Previous Lesson</button>
            </Link>

            <Link to={"/html-paragraphs"}>
              <button>Next Lesson</button>
            </Link>
          </div>
      </div>
    </ProtectedRoute>
  );
};

export default Cintroduction;
