import React, { useState } from "react";
import { ChatState } from "../../Context/chatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import "./MyChat.css";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function MyChat() {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);
  return (
    <div>
      <Box
        d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
        className="box1"
      ></Box>

      <Box className="box2">
        my chat
        <Button
          d="flex"
          fontSize={{ base: "17px", md: "10px", lg: "17px" }}
          rightIcon={<AddIcon />}
        >
          New Group Chat
        </Button>
      </Box>

      <Box
        d="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      ></Box>
    </div>
  );
}
