import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Frame from "../components/Frame";
import "./NewChat.css";

const NewChat = () => {
  return (
    <div className="new-chat">
      <FrameComponent1 />
      <main className="frame">
        <FrameComponent2 />
        <div className="ask-me-anything-you-want-to-bu-wrapper">
          <h1 className="ask-me-anything">Ask Me Anything You want to Buy</h1>
        </div>
        <section className="frame-inner">
          <div className="cart-parent">
            <img className="cart-icon" alt="" src="/cart.svg" />
            <div className="search-for-anything-and-get-ev-wrapper">
              <div className="search-for-anything">
                Search For Anything and Get Everything
              </div>
            </div>
          </div>
        </section>
        <Frame />
      </main>
    </div>
  );
};

export default NewChat;
