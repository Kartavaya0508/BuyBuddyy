import { FunctionComponent } from "react";
import Frame from "../components/Frame";
import FrameComponent from "../components/FrameComponent";
import IconText from "../components/IconText";
import Content from "../components/Content";
import Frame1 from "../components/Frame1";
import "./NewChat.css";

const NewChat: FunctionComponent = () => {
  return (
    <div className="new-chat">
      <h1 className="ask-me-anything">Ask Me Anything You want to Buy</h1>
      <h3 className="search-for-anything">
        Search For Anything and Get Everything
      </h3>
      <Frame />
      <img className="cart-icon" loading="lazy" alt="" src="/cart.svg" />
      <FrameComponent />
      <div className="separator" />
      <div className="sidebar">
        <div className="frame">
          <div className="content">
            <IconText
              propAlignSelf="unset"
              propGap="var(--boundvariablesdata5)"
              propPadding="unset"
              showIconSet
              propHeight="unset"
              arrowSquareOut="/chattext.svg"
              propAlignSelf1="unset"
              text="AI Chat Tool Ethics"
              showText
              propAlignSelf2="stretch"
              propWidth="unset"
            />
          </div>
          <Content
            arrowSquareOut="/chattext.svg"
            text="Example Prompt"
            showIconSet
            showText
            propAlignSelf="unset"
            propGap="12px 10px"
            propPadding="0px 2px 0px 0px"
            propHeight="unset"
            propAlignSelf1="unset"
            propAlignSelf2="stretch"
            propWidth="unset"
          />
          <Content
            arrowSquareOut="/chattext.svg"
            text="New chat"
            showIconSet
            showText
            propAlignSelf="unset"
            propGap="12px 10px"
            propPadding="0px 2px 0px 0px"
            propHeight="unset"
            propAlignSelf1="unset"
            propAlignSelf2="stretch"
            propWidth="unset"
          />
        </div>
        <Frame1 />
      </div>
      <div className="text">
        <div className="sidebar-label">Help</div>
      </div>
      <img className="users-icon" loading="lazy" alt="" src="/users.svg" />
      <div className="new-chat-child" />
      <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
    </div>
  );
};

export default NewChat;
