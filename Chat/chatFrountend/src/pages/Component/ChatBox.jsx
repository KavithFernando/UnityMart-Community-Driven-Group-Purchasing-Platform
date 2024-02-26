import { Box } from "@chakra-ui/layout";
import "./ChatBox.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../../Context/chatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      className="box1"
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="red"
      width={{ base: "100%", md: "80%" }}
      height={"100%"}
      borderWidth="10px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
