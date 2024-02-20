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

export default function SideBar() {
  const [search, setSearch] = useState("k");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [loadingChat, setLoadingChat] = useState(false);

  const { user } = ChatState();

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

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = (userId) => {};

  return (
    <div>
      <Box className="box">
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" className="b1" onClick={onOpen}>
            <i class="fa fa-search" aria-hidden="true"></i>
            <Text>Search User</Text>
          </Button>
        </Tooltip>

        <Text className="header">Unity Mart Chat Room</Text>

        <div className="rightPart">
          <Menu>
            <MenuButton>
              <BellIcon className="bellIcon" />
            </MenuButton>
            {/*<MenuList></MenuList>*/}
          </Menu>

          <Menu>
            <MenuButton className="profil">
              <Avatar
                size="sm"
                cursor="pointer"
                name={"user.name"}
                className="avatar"
              />
              <ChevronDownIcon className="chevronDownIcon" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profil</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Search User</DrawerHeader>
          <DrawerBody>
            <Box className="box2">
              <Input
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
