import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChatPage.css";
import { ChatState } from "../Context/chatProvider";
import SideBar from "./Component/SideBar";
import MyChat from "./Component/MyChat";
import ChatBox from "./Component/ChatBox";
import { Box } from "@chakra-ui/layout";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideBar />}

      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        <>
          {user && <MyChat fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </>
      </Box>
    </div>
  );
};
export default ChatPage;
