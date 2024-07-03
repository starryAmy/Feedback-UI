import React from "react";
import PropTypes from "prop-types";

function Header({ title, bgColor, textColor }) {
  const HeaderStyles = {
    background: bgColor,
    color: textColor,
  };
  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
export default Header;
