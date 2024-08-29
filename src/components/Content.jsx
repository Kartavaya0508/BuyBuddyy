import { useMemo } from "react";
import IconText from "./IconText";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({
  className = "",
  contentPosition,
  contentPadding,
  contentAlignSelf,
  contentMinHeight,
  arrowSquareOut,
  text,
  showIconSet,
  showText,
  propAlignSelf,
  propGap,
  propPadding,
  propHeight,
  propAlignSelf1,
  propAlignSelf2,
  propWidth,
  iconTextWidth,
  iconTextFlex,
  textFlex,
  textTextDecoration,
  textMinWidth,
  iconSetBorderRadius,
  arrowSquareOutIconHeight,
  arrowSquareOutIconWidth,
}) => {
  const contentStyle = useMemo(() => {
    return {
      position: contentPosition,
      padding: contentPadding,
      alignSelf: contentAlignSelf,
      minHeight: contentMinHeight,
    };
  }, [contentPosition, contentPadding, contentAlignSelf, contentMinHeight]);

  return (
    <div className={`content ${className}`} style={contentStyle}>
      <IconText
        propAlignSelf={propAlignSelf}
        propGap={propGap}
        propPadding={propPadding}
        showIconSet={showIconSet}
        propHeight={propHeight}
        arrowSquareOut={arrowSquareOut}
        propAlignSelf1={propAlignSelf1}
        text={text}
        showText={showText}
        propAlignSelf2={propAlignSelf2}
        propWidth={propWidth}
        iconTextWidth={iconTextWidth}
        iconTextFlex={iconTextFlex}
        textFlex={textFlex}
        textTextDecoration={textTextDecoration}
        textMinWidth={textMinWidth}
        iconSetBorderRadius={iconSetBorderRadius}
        arrowSquareOutIconHeight={arrowSquareOutIconHeight}
        arrowSquareOutIconWidth={arrowSquareOutIconWidth}
      />
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  arrowSquareOut: PropTypes.string,
  text: PropTypes.string,
  showIconSet: PropTypes.bool,
  showText: PropTypes.bool,
  propAlignSelf: PropTypes.string,
  propGap: PropTypes.string,
  propPadding: PropTypes.string,
  propHeight: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propAlignSelf2: PropTypes.string,
  propWidth: PropTypes.string,
  iconTextWidth: PropTypes.string,
  iconTextFlex: PropTypes.string,
  textFlex: PropTypes.string,
  textTextDecoration: PropTypes.string,
  textMinWidth: PropTypes.string,
  iconSetBorderRadius: PropTypes.string,
  arrowSquareOutIconHeight: PropTypes.string,
  arrowSquareOutIconWidth: PropTypes.string,

  /** Style props */
  contentPosition: PropTypes.any,
  contentPadding: PropTypes.any,
  contentAlignSelf: PropTypes.any,
  contentMinHeight: PropTypes.any,
};

export default Content;