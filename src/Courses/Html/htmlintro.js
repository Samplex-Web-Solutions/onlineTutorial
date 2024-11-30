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
            <h1>HTML Introduction</h1>
            <p>HTML is the standard markup language for creating Web pages.</p>

            <h2 className="h2">What is HTML?</h2>
            <p>HTML stands for Hyper Text Markup Language</p>
            <p>HTML is the standard markup language for creating Web pages</p>
            <p>HTML describes the structure of a Web page</p>
            <p>HTML consists of a series of elements</p>
            <p>HTML elements tell the browser how to display the content</p>
            <p>
              HTML elements label pieces of content such as "this is a heading",
              "this is a paragraph", "this is a link", etc.
            </p>

            <h2 className="h2">A Simple HTML Document</h2>
            <p>Here is an example of a simple HTML document:</p>
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
            <h1 className="h2">Example Explained</h1>
            <p>
              The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that
              this document is an HTML5 document
            </p>
            <p>
              The <code>&lt;html&gt;</code> element is the root element of an
              HTML page
            </p>
            <p>
              The <code>&lt;head&gt;</code> element contains meta information
              about the HTML page
            </p>
            <p>
              The <code>&lt;title&gt;</code> element specifies a title for the
              HTML page (which is shown in the browser's title bar or in the
              page's tab)
            </p>
            <p>
              The <code>&lt;body&gt;</code> element defines the document's body,
              and is a container for all the visible contents, such as headings,
              paragraphs, images, hyperlinks, tables, lists, etc.
            </p>
            <p>
              The <code>&lt;h1&gt;</code> element defines a large heading
            </p>
            <p>
              The <code>&lt;p&gt;</code> element defines a paragraph
            </p>

            <h2 className="h2">What is an HTML Element?</h2>
            <p>
              An HTML element is defined by a start tag, some content, and an
              end tag:
            </p>
            <pre>
              <code>&lt;tagname&gt; Content goes here... &lt;/tagname&gt;</code>
            </pre>
            <p>
              The HTML element is everything from the start tag to the end tag:
            </p>

            <pre>
              <code>
                &lt;h1&gt;My First Heading&lt;/h1&gt; &lt;p&gt;My first
                paragraph.&lt;/p&gt;
              </code>
            </pre>
          </div>
        </div>
        <div className="courses-btn">
        <Link to={""}>
            <button>Previous Lesson</button>
          </Link>
          
          <Link to={"/html-elements"}>
            <button>Next Lesson</button>
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Cintroduction;
