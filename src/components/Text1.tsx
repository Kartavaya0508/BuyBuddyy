import { FunctionComponent } from "react";
import "./Text1.css";

export type Text1Type = {
  className?: string;
  text?: string;
};

const Text1: FunctionComponent<Text1Type> = ({
  className = "",
  text = "Clear Prompt",
}) => {
  return (
    <div className={`text4 ${className}`}>
      {showText && <div className="text5">{text}</div>}
    </div>
  );
};

export default Text1;
