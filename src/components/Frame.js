import Input1 from "./Input1";
import PropTypes from "prop-types";
import "./Frame.css";

const Frame = ({ className = "" }) => {
  return (
    <section className={`frame3 ${className}`}>
      <Input1 />
    </section>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
