import PropTypes from "prop-types";
import "./ProductCards.css";

const ProductCards = ({ className = "" }) => {
  return (
    <div className={`product-cards5 ${className}`}>
      <div className="product-card-info">
        <div className="card-image" />
        <img
          className="download-2-4"
          loading="lazy"
          alt=""
          src="/download-2-4@2x.png"
        />
      </div>
      <img
        className="component-3-icon"
        loading="lazy"
        alt=""
        src="/component-3.svg"
      />
      <div className="separator">4.5</div>
      <h3 className="hp-omen-g6">HP Omen G6 6GB RAM 526GM ROM</h3>
      <div className="price">$ : 20000</div>
      <div className="top-results-from">
        Top Results From : Amazon and Flipkart
      </div>
      <div className="stock-status">
        <img
          className="stock-status-child"
          loading="lazy"
          alt=""
          src="/line-7.svg"
        />
        <div className="in-stock">In Stock</div>
      </div>
    </div>
  );
};

ProductCards.propTypes = {
  className: PropTypes.string,
};

export default ProductCards;
