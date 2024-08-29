import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductGrid.css";

const ProductGrid = ({
  className = "",
  propTop,
  propLeft,
  propFlex,
  propWidth,
  download24,
  component3,
  propWidth1,
  propGap,
  propPadding,
  propPadding1,
}) => {
  const productGridStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv2Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv4Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <section className={`product-grid6 ${className}`} style={productGridStyle}>
      <div className="product-grid-child4" />
      <div className="frame-parent2" style={frameDivStyle}>
        <div className="download-2-4-wrapper">
          <img
            className="download-2-41"
            loading="lazy"
            alt=""
            src={download24}
          />
        </div>
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="hp-omen-g6-6gb-ram-526gm-rom-wrapper">
              <h3 className="hp-omen-g62">HP Omen G6 6GB RAM 526GM ROM</h3>
            </div>
            <div className="component-placeholder-parent">
              <div className="component-placeholder">4.5</div>
              <img
                className="component-3-icon1"
                loading="lazy"
                alt=""
                src={component3}
              />
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="top-result-placeholder-parent">
              <div className="top-result-placeholder">$ : 20000</div>
              <div className="top-results-from-amazon-and-parent">
                <div className="top-results-from2">
                  Top Results From : Amazon and Flipkart
                </div>
                <div className="vector-group">
                  <img
                    className="frame-child5"
                    loading="lazy"
                    alt=""
                    src="/line-7.svg"
                  />
                  <div className="in-stock2">In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-grid-inner1" style={frameDiv1Style}>
        <div className="frame-parent5" style={frameDiv2Style}>
          <div className="rectangle-parent1" style={frameDiv3Style}>
            <div className="frame-child6" />
            <div className="more-information2">More Information</div>
          </div>
          <div className="vector-container" style={frameDiv4Style}>
            <img
              className="arrow-icon"
              loading="lazy"
              alt=""
              src="/arrow-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ProductGrid.propTypes = {
  className: PropTypes.string,
  download24: PropTypes.string,
  component3: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propGap: PropTypes.any,
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default ProductGrid;
