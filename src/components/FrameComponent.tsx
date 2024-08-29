import { FunctionComponent } from "react";
import Button from "./Button";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header className={`frame-parent ${className}`}>
      <div className="button-wrapper">
        <Button />
      </div>
      <a className="history">History</a>
    </header>
  );
};

export default FrameComponent;
