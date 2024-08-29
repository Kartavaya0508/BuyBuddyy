import ProductGrid from "../components/ProductGrid";
import FrameComponent from "../components/FrameComponent";
import "./Dashboard1.css";

const Dashboard = () => {
  return (
    <div className="dashboard1">
      <div className="dashboard1-child" />
      <header className="product-grid-parent">
        <div className="product-grid">
          <img
            className="product-grid-child"
            loading="lazy"
            alt=""
            src="/line-10.svg"
          />
          <div className="see-youtube-review">See Youtube Review</div>
        </div>
        <div className="product-grid1">
          <img
            className="product-grid-item"
            loading="lazy"
            alt=""
            src="/line-10.svg"
          />
          <div className="see-youtube-review1">See Youtube Review</div>
        </div>
        <div className="product-grid2">
          <img
            className="product-grid-inner"
            loading="lazy"
            alt=""
            src="/line-10.svg"
          />
          <div className="see-youtube-review2">See Youtube Review</div>
        </div>
        <div className="product-grid3">
          <div className="product-grid-child1" />
          <a className="amazon1">Amazon</a>
        </div>
        <div className="product-grid4">
          <div className="product-grid-child1" />
          <div className="hp-asus1">HP, Asus</div>
        </div>
        <div className="clear-filters1">Clear filters</div>
        <div className="product-grid5">
          <div className="product-grid-child3" />
          <a className="a">{`>20000$`}</a>
        </div>
        <div className="top-results1">Top Results</div>
        <div className="sort1">SORT</div>
        <div className="sort-dropdown1">
          <div className="sort-dropdown-child" />
          <div className="lowest-to-highest1">Lowest to highest</div>
          <img className="sort-dropdown-item" alt="" src="/polygon-21.svg" />
        </div>
        <div className="log-out-group">
          <div className="log-out1" />
          <div className="frame-item" />
          <img
            className="signout-icon1"
            loading="lazy"
            alt=""
            src="/signout2.svg"
          />
        </div>
        <ProductGrid
          download24="/download-2-4@2x.png"
          component3="/component-3.svg"
        />
        <ProductGrid
          propTop="32.688rem"
          propLeft="12.063rem"
          propFlex="unset"
          propWidth="67.625rem"
          download24="/download-2-4@2x.png"
          component3="/component-3.svg"
          propWidth1="13.875rem"
          propGap="11px"
          propPadding="8px 24px 18px"
          propPadding1="0rem 0rem var(--padding-2xs-3)"
        />
        <ProductGrid
          propTop="47.313rem"
          propLeft="12.063rem"
          propFlex="unset"
          propWidth="67.625rem"
          download24="/download-2-4@2x.png"
          component3="/component-3.svg"
          propWidth1="13.875rem"
          propGap="11px"
          propPadding="8px 24px 18px"
          propPadding1="0rem 0rem var(--padding-2xs-3)"
        />
        <FrameComponent />
      </header>
      <div className="background-shape-wrapper">
        <div className="background-shape1" />
      </div>
    </div>
  );
};

export default Dashboard;
