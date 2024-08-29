import SearchBarInput from "../components/SearchBarInput";
import "./Productinfo.css";

const Productinfo = () => {
  return (
    <div className="productinfo">
      <div className="log-out-container">
        <div className="log-out2" />
        <div className="frame-inner" />
        <div className="account">
          <img
            className="avatar-icon"
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <img
          className="signout-icon2"
          loading="lazy"
          alt=""
          src="/signout2.svg"
        />
      </div>
      <main className="content">
        <section className="search-bar-container">
          <SearchBarInput />
          <div className="footer">
            <img
              className="footer-child"
              loading="lazy"
              alt=""
              src="/arrow-3.svg"
            />
          </div>
        </section>
      </main>
      <div className="background">
        <div className="overlay" />
      </div>
    </div>
  );
};

export default Productinfo;
