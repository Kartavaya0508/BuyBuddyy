import PropTypes from "prop-types";
import "./IconText.css";

const IconText = ({ className = "" }) => {
  return (
    <div className={`icontext ${className}`}>
      <div className="iconset">
        <img className="arrowsquareout-icon" alt="" src="/arrowsquareout.svg" />
      </div>
      <div className="text">
        <div className="text1">{`Updates & FAQ`}</div>
      </div>
    </div>
  );
};

IconText.propTypes = {
  className: PropTypes.string,
};

export default IconText;