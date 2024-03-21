import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      borderRadius="20px"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="#F89C69"
      cursor="pointer"
      onClick={handleFunction}
      color="black"
      padding={"10px"}
    >
      <b>
        {user.name}
        {admin === user._id && <span> (Admin)</span>}
      </b>

      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
