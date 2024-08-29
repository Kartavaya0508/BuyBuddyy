import { FunctionComponent } from "react";
import IconText from "./IconText";
import "./Content.css";

export type ContentType = {
  className?: string;
  arrowSquareOut?: string;
  text?: string;
  showIconSet?: boolean;
  showText?: boolean;
  propAlignSelf?: string;
  propGap?: string;
  propPadding?: string;
  propHeight?: string;
  propAlignSelf1?: string;
  propAlignSelf2?: string;
  propWidth?: string;
};

const Content: FunctionComponent<ContentType> = ({
  className = "",
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
}) => {
  return (
    <div className={`content2 ${className}`}>
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
      />
    </div>
  );
};

export default Content;
