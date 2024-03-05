import React from "react";
import ChatPage from "./ChatFrountEnd/chatPages/ChatPage";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./ChatFrountEnd/Context/chatProvider";

export default function ChatWraper() {
  return (
    <div>
      <ChatProvider>
        <ChakraProvider>
          <ChatPage />
        </ChakraProvider>
      </ChatProvider>
    </div>
  );
}
