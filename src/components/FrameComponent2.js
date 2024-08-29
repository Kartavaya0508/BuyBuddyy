import { Checkbox } from "@chakra-ui/react";
import Content from "./Content";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <header className={`frame-group ${className}`}>
      <div className="frame-wrapper">
        <div className="minus-square-parent">
          <Checkbox className="minus-square" colorScheme="teal" />
          <div className="clear-prompt-wrapper">
            <a className="clear-prompt">Clear Prompt</a>
          </div>
        </div>
      </div>
      <div className="content-parent">
        <Content
          contentPosition="unset"
          arrowSquareOut="/chattext.svg"
          text="Example Prompt"
          showIconSet
          showText
          propAlignSelf="unset"
          propGap="0.75rem 0.625rem"
          propPadding="0rem var(--padding-10xs) 0rem 0rem"
          propHeight="unset"
          propAlignSelf1="unset"
          propAlignSelf2="unset"
          propWidth="unset"
          iconTextWidth="unset"
          iconTextFlex="unset"
          textFlex="unset"
          textTextDecoration="none"
          textMinWidth="6.813rem"
        />
        <div className="content-ellipsis" />
      </div>
      <div className="frame-container">
        <div className="frame-div">
          <div className="inbox-wrapper">
            <img
              className="inbox-icon"
              loading="lazy"
              alt=""
              src="/inbox.svg"
            />
          </div>
          <a className="history-prompt">History Prompt</a>
        </div>
      </div>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
