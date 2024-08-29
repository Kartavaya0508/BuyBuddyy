import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ className = "" }) => {
  return (
    <Button
      className={`button ${className}`}
      variant="outline"
      colorScheme="teal"
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;