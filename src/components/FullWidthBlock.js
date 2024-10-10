import React from "react";
import PropTypes from "prop-types";
import "../assets/css/components/FullWidthBlock.scss"; // Assuming you will add some CSS for styling

const FullWidthBlock = ({ children, backgroundColor }) => {
  return (
    <section
      className="full-width-block container__outer"
      style={{ background: backgroundColor }}
    >
      <div className="container__inner">{children}</div>
    </section>
  );
};

FullWidthBlock.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string, // Add the backgroundColor prop type
};

FullWidthBlock.defaultProps = {
  backgroundColor: "transparent", // Default to transparent if no color is provided
};

export default FullWidthBlock;
