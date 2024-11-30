import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../courses.css"; // Optional: Add CSS for styling

const SideNav = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/courses/Html">HTML Introduction</Link></li>
          <li><Link to="/html-elements">HTML Elements</Link></li>
          <li><Link to="/html-attributes">HTML Attributes</Link></li>
          <li><Link to="/html-headings">HTML Headings</Link></li>
          <li><Link to="/html-paragraphs">HTML Paragraphs</Link></li>
          <li><Link to="/html-styles">HTML Styles</Link></li>
          <li><Link to="/html-formatting">HTML Formatting</Link></li>
          <li><Link to="/html-quotations">HTML Quotations</Link></li>
          <li><Link to="/html-comments">HTML Comments</Link></li>
          <li><Link to="/html-colors">HTML Colors</Link></li>
          <li><Link to="/html-css">HTML CSS</Link></li>
          <li><Link to="/html-links">HTML Links</Link></li>
          <li><Link to="/html-images">HTML Images</Link></li>
          <li><Link to="/html-favicon">HTML Favicon</Link></li>
          <li><Link to="/html-page-title">HTML Page Title</Link></li>
          <li><Link to="/html-tables">HTML Tables</Link></li>
          <li><Link to="/html-lists">HTML Lists</Link></li>
          <li><Link to="/html-block-inline">HTML Block & Inline</Link></li>
          <li><Link to="/html-div">HTML Div</Link></li>
          <li><Link to="/html-classes">HTML Classes</Link></li>
          <li><Link to="/html-id">HTML Id</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
