import { Box, Button, Tooltip, Text, Menu, MenuButton } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./SideBar.css";

export default function SideBar() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
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

        <div>
          <Menu>
            <MenuButton>
              <BellI />
            </MenuButton>
          </Menu>
        </div>
      </Box>
    </div>
  );
}
