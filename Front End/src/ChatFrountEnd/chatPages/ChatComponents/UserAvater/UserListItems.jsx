import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../../Context/chatProvider";

function UserListItems({ user, handleFunction }) {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#fa7831",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={8}
      py={2}
      mb={10}
      borderRadius="20px"
    >
      <Box>
        <Avatar
          size="sm"
          cursor="pointer"
          name={user.name}
          className="avatar"
        />
        <Text>
          <b>Name : </b>
          {user.name}
        </Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
}

export default UserListItems;
