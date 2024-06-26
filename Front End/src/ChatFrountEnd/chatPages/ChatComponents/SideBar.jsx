import {
  Box,
  Button,
  Tooltip,
  Text,
  Menu,
  Avatar,
  MenuButton,
  MenuList,
  // MenuIcon,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  color,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";
import { useState } from "react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import "./SideBar.css";
//import { RiAccountCircleFill } from "react-icons/ri";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import UserListItems from "./UserAvater/UserListItems";
import { ChatState } from "../../Context/chatProvider";
import { Spinner } from "@chakra-ui/spinner";
import { getSender } from "../../config/ChatLogics";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [search, setSearch] = useState("k");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:8000/api/user?search=${search}`,
        config
      );
      //if (!chats.find((c) => c.id === data._id)) setChats([data, ...chats]);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Searchh Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:8000/api/chat`,
        { userId },
        config
      );

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <div>
      <Box className="sideBarBox1">
        <div className="backArrowButton">
          <IconButton
            aria-label="Go back"
            icon={<ArrowBackIcon />}
            onClick={goBack}
          />
        </div>

        <div className="searchBarPlaceChanges">
          <Tooltip label="Search Users to chat">
            <Button
              colorScheme="black"
              className="sideBarSearchButton"
              onClick={onOpen}
              variant="outline"
            >
              <i
                class="fa fa-search"
                aria-hidden="true"
                style={{ color: "white" }}
              ></i>
              <Text px={4} color={"white"}>
                Search User
              </Text>
            </Button>
          </Tooltip>
        </div>
        <Text className="sideBarheader">Unity Mart Chat Room</Text>

        <div className="sideBarightPart">
          <Menu>
            <MenuButton>
              <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              />
              <BellIcon className="bellIcon" style={{ color: "white" }} />
            </MenuButton>
            {
              <MenuList>
                {!notification.length && "No New Messages"}
                {notification.map((notif) => (
                  <MenuItem
                    key={notif._id}
                    onClick={() => {
                      setSelectedChat(notif.chat);
                      setNotification(notification.filter((n) => n !== notif));
                    }}
                  >
                    {notif.chat.isGroupChat
                      ? `New Message in ${notif.chat.chatName}`
                      : `New Message from ${getSender(user, notif.chat.users)}`}
                  </MenuItem>
                ))}
              </MenuList>
            }
          </Menu>

          <Menu>
            <MenuButton className="profil">
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                className="avatar"
              />
              <ChevronDownIcon className="chevronDownIcon" color="white" />
            </MenuButton>
            <MenuList>
              <Link
                to={
                  localStorage.getItem("isSeller") === "true"
                    ? "/Seller"
                    : "/buyer"
                }
              >
                <MenuItem>Profil</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        // initialFocusRef={firstField}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader backgroundColor={"white"}>Search User</DrawerHeader>
          <DrawerBody>
            <Box className="sideBarbox2">
              <Input
                className="inputTag"
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItems
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
