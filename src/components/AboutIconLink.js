import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      {/* Add a Link component with a pathname prop set to "/about", a search prop set to "?sort=name", and a hash prop set to "#hello" */}
      <Link to={{ pathname: "/about", search: "?sort=name", hash: "#hello" }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
