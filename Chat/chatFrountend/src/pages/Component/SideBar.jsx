import {
  Box,
  Button,
  Tooltip,
  Text,
  Menu,
  Avatar,
  MenuButton,
  MenuList,
  MenuIcon,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import "./SideBar.css";
import { RiAccountCircleFill } from "react-icons/ri";

export default function SideBar() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const [user] = useState();

  return (
    <div>
      <Box className="box">
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" className="b1">
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
    </div>
  );
}
