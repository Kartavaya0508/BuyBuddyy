import PropTypes from "prop-types";
import "./ProductCards1.css";

const ProductCards1 = ({ className = "" }) => {
  return (
    <div className={`product-cards6 ${className}`}>
      <div className="rectangle-parent">
        <div className="frame-item" />
        <div className="icon-background-parent">
          <div className="icon-background" />
          <img
            className="download-2-5"
            loading="lazy"
            alt=""
            src="/download-2-4@2x.png"
          />
        </div>
      </div>
      <img
        className="component-4-icon"
        loading="lazy"
        alt=""
        src="/component-3.svg"
      />
      <div className="div1">4.5</div>
      <h3 className="hp-omen-g61">HP Omen G6 6GB RAM 526GM ROM</h3>
      <div className="div2">$ : 20000</div>
      <div className="top-results-from1">
        Top Results From : Amazon and Flipkart
      </div>
      <div className="vector-parent">
        <img className="frame-inner" loading="lazy" alt="" src="/line-7.svg" />
        <div className="in-stock1">In Stock</div>
      </div>
    </div>
  );
};

ProductCards1.propTypes = {
  className: PropTypes.string,
};

export default ProductCards1;
