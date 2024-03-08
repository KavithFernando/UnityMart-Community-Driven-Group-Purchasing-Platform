import React, { useState } from "react";
import { ChatState } from "../../Context/chatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import "./MyChat.css";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ChatLoading from "./ChatLoading";
import { getSender } from "../../config/ChatLogics";
import GroupChat from "./GroupChat";

export default function MyChat({ fetchAgain }) {
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

      const { data } = await axios.get(
        "http://localhost:8000/api/chat",
        config
      );
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
  }, [fetchAgain]);
  return (
    <div>
      <Box
        className="myChatBox"
        flexDir="column"
        alignItems="center"
        p={4}
        borderWidth="10px"
        backgroundColor={" #fa7831;"}
      >
        <Box
          className="box2"
          pb={3}
          px={3}
          fontSize={{ base: "28px", md: "30px" }}
          fontFamily="Work sans"
          display="flex"
          wi="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="ok">My chat</div>
          <GroupChat>
            <Button
              d="flex"
              fontSize={{ base: "17px", md: "10px", lg: "17px" }}
              rightIcon={<AddIcon />}
            >
              New Group Chat
            </Button>
          </GroupChat>
        </Box>

        <Box
          className="box2"
          d="flex"
          flexDir="column"
          p={3}
          bg="#F8F8F8"
          width="100%"
          height="94%"
          overflowY="hidden"
        >
          {chats ? (
            <Stack overflowY="scroll">
              {chats.map((chat) => (
                <Box
                  onClick={() => setSelectedChat(chat)}
                  cursor="pointer"
                  bg={selectedChat === chat ? "#f79159" : "#E8E8E8"}
                  color={selectedChat === chat ? "white" : "black"}
                  px={3}
                  py={2}
                  borderRadius="30px"
                  key={chat._id}
                  height="70px"
                >
                  <Text paddingTop="5px" paddingLeft="15px" fontSize="20px">
                    {!chat.isGroupChat ? (
                      <b>{getSender(loggedUser, chat.users)}</b>
                    ) : (
                      <b>{chat.chatName}</b>
                    )}
                  </Text>
                  {chat.latestMessage && (
                    <Text fontSize="xs" paddingLeft="15px">
                      <b>{chat.latestMessage.sender.name} : </b>
                      {chat.latestMessage.content.length > 50
                        ? chat.latestMessage.content.substring(0, 51) + "..."
                        : chat.latestMessage.content}
                    </Text>
                  )}
                </Box>
              ))}
            </Stack>
          ) : (
            <ChatLoading />
          )}
        </Box>
      </Box>
    </div>
  );
}
