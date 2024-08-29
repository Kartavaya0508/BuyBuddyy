import Button1 from "./Button1";
import PropTypes from "prop-types";
import "./Group.css";

const Group = ({ className = "" }) => {
  return (
    <div className={`group ${className}`}>
      <Button1
        buttonPosition="unset"
        fourLeafClover="/microphone.svg"
        fourLeafCloverIconWidth="20px"
        fourLeafCloverIconHeight="20px"
      />
      <Button1
        buttonPosition="unset"
        fourLeafClover="/image.svg"
        fourLeafCloverIconWidth="20px"
        fourLeafCloverIconHeight="20px"
      />
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
