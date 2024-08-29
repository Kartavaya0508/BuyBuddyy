import { Input } from "@chakra-ui/react";
import Button from "./Button";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`rectangle-group ${className}`}>
      <div className="frame-child2" />
      <div className="frame-wrapper">
        <div className="frame-parent">
          <div className="vector-wrapper">
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <Button
            buttonPosition="unset"
            buttonAlignSelf="stretch"
            buttonFlex="1"
          />
        </div>
      </div>
      <div className="navigation">
        <Input className="navigation-child" />
        <div className="rectangle-container">
          <div className="frame-child3" />
          <div className="user-wrapper">
            <img className="user-icon" alt="" src="/user.svg" />
          </div>
          <div className="my-account">My Account</div>
        </div>
        <div className="navigation-inner">
          <div className="frame-div">
            <div className="frame-child3" />
            <div className="logout-button">
              <img className="signout-icon4" alt="" src="/signout1.svg" />
            </div>
            <div className="my-account">Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
