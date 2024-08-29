import { FunctionComponent } from "react";
import "./Button.css";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  return (
    <div className={`button2 ${className}`}>
      <div className="iconset-wrapper">
        <div className="iconset3">
          <img className="add-icon" alt="" src="/add.svg" />
        </div>
      </div>
      <div className="text3">
        <a className="history-label">New chat</a>
      </div>
    </div>
  );
};

export default Button;
