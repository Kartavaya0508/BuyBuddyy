import { FunctionComponent } from "react";
import IconText from "./IconText";
import "./Frame1.css";

export type Frame1Type = {
  className?: string;
};

const Frame1: FunctionComponent<Frame1Type> = ({ className = "" }) => {
  return (
    <div className={`frame2 ${className}`}>
      <div className="content3">
        <IconText
          propAlignSelf="stretch"
          propGap="var(--boundvariablesdata5)"
          propPadding="unset"
          showIconSet={false}
          propHeight="20px"
          arrowSquareOut="/trash.svg"
          propAlignSelf1="stretch"
          text="Clear Prompt"
          showText={false}
          propAlignSelf2="unset"
          propWidth="29px"
        />
      </div>
      <div className="content4">
        <IconText
          propAlignSelf="unset"
          propGap="var(--boundvariablesdata5)"
          propPadding="unset"
          showIconSet
          propHeight="unset"
          arrowSquareOut="/sun.svg"
          propAlignSelf1="unset"
          text="Light mode"
          showText
          propAlignSelf2="stretch"
          propWidth="unset"
        />
      </div>
      <div className="content5">
        <IconText
          propAlignSelf="unset"
          propGap="12px 10px"
          propPadding="0px 2px 0px 0px"
          showIconSet
          propHeight="unset"
          arrowSquareOut="/user.svg"
          propAlignSelf1="unset"
          text="My  account"
          showText
          propAlignSelf2="stretch"
          propWidth="unset"
        />
      </div>
      <div className="content4">
        <IconText
          showIconSet
          arrowSquareOut="/arrowsquareout.svg"
          text={`Updates & FAQ`}
          showText
        />
      </div>
      <div className="content5">
        <div className="icontext2">
          <div className="iconset5">
            <img
              className="signout-icon"
              loading="lazy"
              alt=""
              src="/signout.svg"
            />
          </div>
          <div className="text8">
            <div className="text9">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
