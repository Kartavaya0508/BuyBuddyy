import ProductCards from "../components/ProductCards";
import ProductCards1 from "../components/ProductCards1";
import SearchBarContainer from "../components/SearchBarContainer";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-child" />
      <header className="product-display">
        <ProductCards />
        <ProductCards1 />
        <div className="product-cards">
          <div className="product-cards-child" />
          <div className="amazon">Amazon</div>
        </div>
        <div className="product-cards1">
          <div className="product-cards-child" />
          <div className="hp-asus">HP, Asus</div>
        </div>
        <div className="clear-filters">Clear filters</div>
        <div className="product-cards2">
          <div className="product-cards-inner" />
          <div className="amazon">{`>20000$`}</div>
        </div>
        <div className="top-results">Top Results</div>
        <div className="sort">SORT</div>
        <div className="sort-dropdown">
          <div className="dropdown-background" />
          <div className="lowest-to-highest">Lowest to highest</div>
        </div>
        <img
          className="product-display-child"
          loading="lazy"
          alt=""
          src="/polygon-2.svg"
        />
        <div className="log-out-parent">
          <div className="log-out" />
          <div className="frame-child" />
          <img
            className="signout-icon"
            loading="lazy"
            alt=""
            src="/signout.svg"
          />
        </div>
        <div className="product-cards3">
          <div className="rectangle-div" />
          <div className="more-information">More Information</div>
        </div>
        <div className="product-cards4">
          <div className="rectangle-div" />
          <div className="more-information1">More Information</div>
        </div>
        <img
          className="product-display-item"
          loading="lazy"
          alt=""
          src="/arrow-3.svg"
        />
        <img
          className="product-display-inner"
          loading="lazy"
          alt=""
          src="/arrow-3.svg"
        />
        <SearchBarContainer />
      </header>
      <div className="page-background">
        <div className="background-shape" />
      </div>
    </div>
  );
};

export default Dashboard;
