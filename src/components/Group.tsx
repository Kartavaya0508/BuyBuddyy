import { FunctionComponent } from "react";
import "./Group.css";

export type GroupType = {
  className?: string;
};

const Group: FunctionComponent<GroupType> = ({ className = "" }) => {
  return (
    <div className={`group ${className}`}>
      <div className="button">
        <div className="iconset">
          <img
            className="microphone-icon"
            loading="lazy"
            alt=""
            src="/microphone.svg"
          />
        </div>
      </div>
      <div className="button">
        <div className="iconset">
          <img
            className="microphone-icon"
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Group;
