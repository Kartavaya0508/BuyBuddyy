import PropTypes from "prop-types";
import "./SearchBarContainer.css";

const SearchBarContainer = ({ className = "" }) => {
  return (
    <div className={`search-bar-container ${className}`}>
      <div className="search-icon-container">
        <img className="search-icon" loading="lazy" alt="" src="/vector.svg" />
      </div>
      <div className="search-input-container">
        <div className="search-input-wrapper">
          <div className="search-input-wrapper-child" />
          <img
            className="search-input-wrapper-item"
            alt=""
            src="/group-9.svg"
          />
          <a className="search">Search</a>
        </div>
      </div>
      <div className="search-list-container">
        <img
          className="search-list-icon"
          loading="lazy"
          alt=""
          src="/searchlist.svg"
        />
      </div>
      <div className="input-interactions">
        <img
          className="input-interactions-child"
          loading="lazy"
          alt=""
          src="/group-8.svg"
        />
        <img
          className="input-interactions-item"
          loading="lazy"
          alt=""
          src="/group-7.svg"
        />
      </div>
    </div>
  );
};

SearchBarContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchBarContainer;
