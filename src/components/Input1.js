import Group from "./Group";
import PropTypes from "prop-types";
import "./Input1.css";

const Input1 = ({ className = "" }) => {
  return (
    <footer className={`input ${className}`}>
      <div className="content7">
        <div className="icontext2">
          <Group />
          <div className="text6">
            <div className="text7">Search for your Product</div>
          </div>
        </div>
        <div className="iconset4">
          <img
            className="paperplaneright-icon"
            loading="lazy"
            alt=""
            src="/paperplaneright.svg"
          />
        </div>
      </div>
    </footer>
  );
};

Input1.propTypes = {
  className: PropTypes.string,
};

export default Input1;
