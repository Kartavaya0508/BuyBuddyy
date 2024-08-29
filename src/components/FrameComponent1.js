import { Input } from "@chakra-ui/react";
import Button from "./Button";
import IconText from "./IconText";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent ${className}`}>
      <div className="frame-child" />
      <div className="frame-parent">
        <div className="vector-wrapper">
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="sidebar">
          <div className="frame2">
            <Button />
            <div className="content6">
              <IconText
                propAlignSelf="unset"
                propGap="var(--boundvariablesdata9)"
                propPadding="unset"
                showIconSet
                propHeight="unset"
                arrowSquareOut="/chattext.svg"
                propAlignSelf1="unset"
                text="AI Chat Tool Ethics"
                showText
                propAlignSelf2="stretch"
                propWidth="unset"
                iconTextWidth="unset"
                iconTextFlex="1"
                textFlex="1"
                textTextDecoration="unset"
                textMinWidth="unset"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="user-options-wrapper">
        <div className="user-options">
          <Input className="user-options-child" />
          <div className="rectangle-group">
            <div className="frame-item" />
            <div className="user-wrapper">
              <img className="user-icon" alt="" src="/user.svg" />
            </div>
            <div className="my-account">My Account</div>
          </div>
          <div className="user-options-inner">
            <div className="rectangle-container">
              <div className="frame-item" />
              <div className="signout-wrapper">
                <img className="signout-icon1" alt="" src="/signout.svg" />
              </div>
              <div className="my-account">Log Out</div>
            </div>
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
