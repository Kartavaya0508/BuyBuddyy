import { FunctionComponent } from "react";
import Input1 from "./Input1";
import "./Frame.css";

export type FrameType = {
  className?: string;
};

const Frame: FunctionComponent<FrameType> = ({ className = "" }) => {
  return (
    <footer className={`frame1 ${className}`}>
      <Input1 />
    </footer>
  );
};

export default Frame;
