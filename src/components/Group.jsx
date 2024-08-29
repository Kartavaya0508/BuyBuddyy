import Button1 from "./Button1";
import PropTypes from "prop-types";
import "./Group.css";

const Group = ({ className = "" }) => {
  return (
    <div className={`group ${className}`}>
      <Button1
        buttonPosition="unset"
        fourLeafClover="/microphone.svg"
        fourLeafCloverIconWidth="var(--boundvariablesdata7)"
        fourLeafCloverIconHeight="var(--boundvariablesdata7)"
      />
      <Button1
        buttonPosition="unset"
        fourLeafClover="/image.svg"
        fourLeafCloverIconWidth="var(--boundvariablesdata7)"
        fourLeafCloverIconHeight="var(--boundvariablesdata7)"
      />
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
