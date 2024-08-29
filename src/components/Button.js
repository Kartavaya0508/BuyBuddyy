import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  className = "",
  buttonPosition,
  buttonAlignSelf,
  buttonFlex,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      position: buttonPosition,
      alignSelf: buttonAlignSelf,
      flex: buttonFlex,
    };
  }, [buttonPosition, buttonAlignSelf, buttonFlex]);

  return (
    <Button
      className={`button ${className}`}
      variant="outline"
      colorScheme="teal"
      style={buttonStyle}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,

  /** Style props */
  buttonPosition: PropTypes.any,
  buttonAlignSelf: PropTypes.any,
  buttonFlex: PropTypes.any,
};

export default Button;