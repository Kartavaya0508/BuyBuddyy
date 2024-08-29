import { Progress } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./Input1.css";

const Input1 = ({ className = "" }) => {
  return <Progress className={`input ${className}`} colorScheme="teal" />;
};

Input1.propTypes = {
  className: PropTypes.string,
};

export default Input1;
