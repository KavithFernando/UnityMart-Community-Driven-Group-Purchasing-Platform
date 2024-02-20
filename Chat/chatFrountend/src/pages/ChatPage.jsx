import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Chat.css";
import { ChatState } from "../Context/chatProvider";
import SideBar from "./Component/SideBar";
import MyChat from "./Component/MyChat";
import ChatBox from "./Component/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div className="chatPage">
      <div className="sideBar">{user && <SideBar />}</div>
      <div className="myChat">{user && <MyChat />}</div>
      <div className="chatBox">{user && <ChatBox />}</div>
    </div>
  );
};
export default ChatPage;
