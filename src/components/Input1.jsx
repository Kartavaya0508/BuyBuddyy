import Group from "./Group";
import PropTypes from "prop-types";
import "./Input1.css";

const Input1 = ({ className = "" }) => {
  return (
    <div className={`input ${className}`}>
      <div className="content6">
        <div className="icontext2">
          <Group />
          <div className="text10">
            <div className="text11">Search for your Product</div>
          </div>
        </div>
        <div className="iconset6">
          <img
            className="paperplaneright-icon"
            loading="lazy"
            alt=""
            src="/paperplaneright.svg"
          />
        </div>
      </div>
    </div>
  );
};

Input1.propTypes = {
  className: PropTypes.string,
};

export default Input1;
