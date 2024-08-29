import PropTypes from "prop-types";
import "./Group.css";

const Group = ({ className = "" }) => {
  return (
    <div className={`group ${className}`}>
      <div className="button1">
        <div className="iconset2">
          <img
            className="microphone-icon"
            loading="lazy"
            alt=""
            src="/microphone.svg"
          />
        </div>
      </div>
      <div className="button1">
        <div className="iconset2">
          <img
            className="microphone-icon"
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
