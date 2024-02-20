import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./Component/SideBar";
import ChatPage from "./ChatPage";

export default function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <ChatPage />
    </div>
  );
}
