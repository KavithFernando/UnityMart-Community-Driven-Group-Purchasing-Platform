import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChatPage.css";
import { ChatState } from "../Context/chatProvider";
import SideBar from "./ChatComponents/SideBar";
import MyChat from "./ChatComponents/MyChat";
import ChatBox from "./ChatComponents/ChatBox";
import { Box } from "@chakra-ui/layout";

const ChatPage = () => {
  const { user } = ChatState() || {};
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div className="chatPagebody" style={{ width: "100%" }}>
      <Box className="chatPageBox1">{user && <SideBar />}</Box>

      <Box
        display="flex"
        padding="2px"
        width="120%"
        height="91.5vh"

        //flexDirection={{ base: "column", md: "row" }}
      >
        <>
          {user && <MyChat fetchAgain={fetchAgain} />}

          <Box paddingLeft="40px">
            {user && (
              <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            )}
          </Box>
        </>
      </Box>
    </div>
  );
};
export default ChatPage;
