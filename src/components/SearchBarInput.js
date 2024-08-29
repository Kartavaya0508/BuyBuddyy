import PropTypes from "prop-types";
import "./SearchBarInput.css";

const SearchBarInput = ({ className = "" }) => {
  return (
    <div className={`search-bar-input1 ${className}`}>
      <header className="search-input-wrapper1">
        <div className="search-input-content">
          <div className="search-icon-container1">
            <img
              className="minus-square-icon1"
              loading="lazy"
              alt=""
              src="/minussquare.svg"
            />
          </div>
          <img
            className="chattext-icon1"
            loading="lazy"
            alt=""
            src="/chattext.svg"
          />
          <div className="search-icon-container1">
            <img
              className="inbox-icon2"
              loading="lazy"
              alt=""
              src="/inbox1.svg"
            />
          </div>
        </div>
        <div className="search-dropdown">
          <div className="rectangle-parent2">
            <div className="frame-child8" />
            <div className="results-list-container">
              <div className="results-list">
                <img className="results-list-child" alt="" src="/group-9.svg" />
                <a className="search2">Search</a>
              </div>
            </div>
            <img className="search-list-icon2" alt="" src="/searchlist1.svg" />
          </div>
        </div>
      </header>
      <div className="search-dropdown">
        <div className="content-area">
          <div className="download-2-4-parent">
            <img
              className="download-2-42"
              loading="lazy"
              alt=""
              src="/download-2-41@2x.png"
            />
            <div className="download-title">
              <div className="youtube-links">Youtube Links</div>
            </div>
          </div>
          <div className="product-info">
            <div className="product-details">
              <div className="product-name">
                <h1 className="hp-omen-g63">HP Omen G6</h1>
              </div>
              <div className="product-specs">
                <b className="specifications-">Specifications -</b>
                <div className="th-gen-intel">
                  12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD
                  Graphics/15.6"(39.62cm) FHD/Windows 11 + MSO'21/15 Month
                  McAfee/Spill-Resistant KB/Grey/1.48kg
                </div>
              </div>
              <div className="product-links">
                <div className="amazaon-links">Amazaon Links</div>
              </div>
            </div>
            <div className="youtube-links1">Youtube Links</div>
            <div className="vector-parent1">
              <img
                className="frame-child9"
                loading="lazy"
                alt=""
                src="/arrow-3.svg"
              />
              <img
                className="frame-child9"
                loading="lazy"
                alt=""
                src="/arrow-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBarInput.propTypes = {
  className: PropTypes.string,
};

export default SearchBarInput;
