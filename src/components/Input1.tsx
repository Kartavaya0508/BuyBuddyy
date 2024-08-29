import { FunctionComponent } from "react";
import Group from "./Group";
import "./Input1.css";

export type Input1Type = {
  className?: string;
};

const Input1: FunctionComponent<Input1Type> = ({ className = "" }) => {
  return (
    <div className={`input ${className}`}>
      <div className="content1">
        <div className="icontext">
          <Group />
          <div className="text1">
            <div className="text2">Type message</div>
          </div>
        </div>
        <div className="iconset2">
          <img
            className="paperplaneright-icon"
            loading="lazy"
            alt=""
            src="/paperplaneright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Input1;
