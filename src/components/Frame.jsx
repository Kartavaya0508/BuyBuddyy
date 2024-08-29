import Input1 from "./Input1";
import PropTypes from "prop-types";
import "./Frame.css";

const Frame = ({ className = "" }) => {
  return (
    <footer className={`frame2 ${className}`}>
      <Input1 />
    </footer>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
