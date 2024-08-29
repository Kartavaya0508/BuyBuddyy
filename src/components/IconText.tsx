import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./IconText.css";

export type IconTextType = {
  className?: string;
  showIconSet?: boolean;
  arrowSquareOut?: string;
  text?: string;
  showText?: boolean;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const IconText: FunctionComponent<IconTextType> = ({
  className = "",
  propAlignSelf,
  propGap,
  propPadding,
  showIconSet,
  propHeight,
  arrowSquareOut,
  propAlignSelf1,
  text,
  showText,
  propAlignSelf2,
  propWidth,
}) => {
  const iconTextStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      padding: propPadding,
    };
  }, [propAlignSelf, propGap, propPadding]);

  const iconSetStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth,
    };
  }, [propAlignSelf2, propWidth]);

  return (
    <div className={`icontext1 ${className}`} style={iconTextStyle}>
      {showIconSet && (
        <div className="iconset4" style={iconSetStyle}>
          <img className="arrowsquareout-icon" alt="" src={arrowSquareOut} />
        </div>
      )}
      <div className="text6" style={textStyle}>
        {showText && (
          <div className="text7" style={text1Style}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default IconText;
