import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`search-bar-icon-parent ${className}`}>
      <img
        className="search-bar-icon"
        loading="lazy"
        alt=""
        src="/vector2.svg"
      />
      <div className="search-bar">
        <div className="search-bar-input">
          <div className="search-bar-input-clear">
            <img
              className="minus-square-icon"
              loading="lazy"
              alt=""
              src="/minussquare.svg"
            />
          </div>
          <img
            className="chattext-icon"
            loading="lazy"
            alt=""
            src="/chattext.svg"
          />
          <div className="search-bar-input-clear">
            <img
              className="inbox-icon1"
              loading="lazy"
              alt=""
              src="/inbox1.svg"
            />
          </div>
        </div>
        <div className="search-bar-inner">
          <div className="group-div">
            <div className="frame-child7" />
            <div className="search-input-field-wrapper">
              <div className="search-input-field">
                <img
                  className="search-input-field-child"
                  alt=""
                  src="/group-9.svg"
                />
                <a className="search1">Search</a>
              </div>
            </div>
            <img className="search-list-icon1" alt="" src="/searchlist1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
