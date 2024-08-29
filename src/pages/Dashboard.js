import ProductGrid from "../components/ProductGrid";
import FrameComponent from "../components/FrameComponent";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard1">
      <div className="dashboard1-child" />
      <header className="frame-group">
        <div className="vector-parent">
          <img className="line-icon" loading="lazy" alt="" src="/line-10.svg" />
          <div className="see-youtube-review">See Youtube Review</div>
        </div>
        <div className="vector-group">
          <img
            className="frame-child1"
            loading="lazy"
            alt=""
            src="/line-10.svg"
          />
          <div className="see-youtube-review1">See Youtube Review</div>
        </div>
        <div className="frame-div">
          <img
            className="frame-child2"
            loading="lazy"
            alt=""
            src="/line-12.svg"
          />
          <div className="see-youtube-review2">See Youtube Review</div>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <a className="amazon">Amazon</a>
        </div>
        <div className="rectangle-group">
          <div className="frame-child3" />
          <div className="hp-asus">HP, Asus</div>
        </div>
        <div className="clear-filters">Clear filters</div>
        <div className="rectangle-container">
          <div className="frame-child4" />
          <a className="a">{`>20000$`}</a>
        </div>
        <div className="top-results">Top Results</div>
        <div className="sort">SORT</div>
        <div className="rectangle-parent1">
          <div className="frame-child5" />
          <div className="lowest-to-highest">Lowest to highest</div>
          <img className="polygon-icon" alt="" src="/polygon-2.svg" />
        </div>
        <div className="log-out-group">
          <div className="log-out1" />
          <div className="frame-child6" />
          <img
            className="signout-icon1"
            loading="lazy"
            alt=""
            src="/signout2.svg"
          />
        </div>
        <ProductGrid
          download24="/download-2-41@2x.png"
          component3="/component-3.svg"
          line7="/line-7.svg"
          arrow3="/arrow-31.svg"
        />
        <ProductGrid
          propTop="32.688rem"
          propLeft="12.063rem"
          propFlex="unset"
          propWidth="67.625rem"
          download24="/download-2-5@2x.png"
          component3="/component-4.svg"
          line7="/line-8.svg"
          propWidth1="13.875rem"
          propGap="11px"
          propPadding="8px 24px 18px"
          propPadding1="0rem 0rem var(--padding-2xs-3)"
          arrow3="/arrow-4.svg"
        />
        <ProductGrid
          propTop="47.313rem"
          propLeft="12.063rem"
          propFlex="unset"
          propWidth="67.625rem"
          download24="/download-2-6@2x.png"
          component3="/component-5.svg"
          line7="/line-9.svg"
          propWidth1="13.875rem"
          propGap="11px"
          propPadding="8px 24px 18px"
          propPadding1="0rem 0rem var(--padding-2xs-3)"
          arrow3="/arrow-5.svg"
        />
        <FrameComponent />
      </header>
      <div className="dashboard1-inner">
        <div className="frame-child7" />
      </div>
    </div>
  );
};

export default Dashboard;