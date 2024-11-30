import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import ProtectedRoute from "../../pages/ProtectedRoutes";
import "../courses.css";
import SideNav from "./htmlsidenav";
import { Link } from "react-router-dom";

const HtmlAttributes = () => {
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
            <h1 className="h2">HTML Attributes</h1>
            <p>
              HTML attributes provide additional information about HTML
              elements.
            </p>

            <h2 className="h2">HTML Attributes</h2>
            <ul>
              <li>All HTML elements can have attributes</li>
              <li>Attributes provide additional information about elements</li>
              <li>Attributes are always specified in the start tag</li>
              <li>
                Attributes usually come in name/value pairs like:{" "}
                <code>name="value"</code>
              </li>
            </ul>

            <h3>
              The <code>href</code> Attribute
            </h3>
            <p>
              The <code>&lt;a&gt;</code> tag defines a hyperlink. The{" "}
              <code>href</code> attribute specifies the URL of the page the link
              goes to:
            </p>
            <p>You will learn more about links in our HTML Links chapter.</p>

            <h3>
              The <code>src</code> Attribute
            </h3>
            <p>
              The <code>&lt;img&gt;</code> tag is used to embed an image in an
              HTML page. The <code>src</code> attribute specifies the path to
              the image to be displayed:
            </p>

            <p>
              There are two ways to specify the URL in the <code>src</code>{" "}
              attribute:
            </p>

            <h3>
              The <code>width</code> and <code>height</code> Attributes
            </h3>
            <p>
              The <code>&lt;img&gt;</code> tag should also contain the{" "}
              <code>width</code> and <code>height</code> attributes:
            </p>

            <h3>
              The <code>alt</code> Attribute
            </h3>
            <p>
              The required <code>alt</code> attribute for the{" "}
              <code>&lt;img&gt;</code> tag specifies alternate text for an image
              if it cannot be displayed:
            </p>

            <h3>
              The <code>style</code> Attribute
            </h3>
            <p>
              The <code>style</code> attribute is used to add styles to an
              element, such as color, font, size, and more:
            </p>

            <h3>
              The <code>lang</code> Attribute
            </h3>
            <p>
              The <code>lang</code> attribute inside the{" "}
              <code>&lt;html&gt;</code> tag declares the language of the
              webpage:
            </p>

            <h3>
              The <code>title</code> Attribute
            </h3>
            <p>
              The <code>title</code> attribute defines extra information about
              an element:
            </p>

            <h2 className="h2">Practice Lesson</h2>
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

            <h2 className="h2">Chapter Summary</h2>
            <ul>
              <li>All HTML elements can have attributes</li>
              <li>
                The <code>href</code> attribute of <code>&lt;a&gt;</code>{" "}
                specifies the URL of the page the link goes to
              </li>
              <li>
                The <code>src</code> attribute of <code>&lt;img&gt;</code>{" "}
                specifies the path to the image to be displayed
              </li>
              <li>
                The <code>width</code> and <code>height</code> attributes
                provide size information for images
              </li>
              <li>
                The <code>alt</code> attribute provides alternate text for an
                image
              </li>
              <li>
                The <code>style</code> attribute adds styles to an element
              </li>
              <li>
                The <code>lang</code> attribute declares the language of the
                webpage
              </li>
              <li>
                The <code>title</code> attribute defines extra information about
                an element
              </li>
            </ul>
          </div>
          
        </div>
        <div className="courses-btn">
        <Link to={"/html-elements"}>
            <button>Previous Lesson</button>
          </Link>
          
          <Link to={"/html-headings"}>
            <button>Next Lesson</button>
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default HtmlAttributes;
