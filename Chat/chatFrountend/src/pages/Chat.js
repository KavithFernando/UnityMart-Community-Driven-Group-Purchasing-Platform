import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Chat() {
  const [chat1, setChat] = useState([]);
  const fatchdata = async () => {
    const { data } = await axios.get("/api/chat");
    setChat(data);
  };
  useEffect(() => {
    fatchdata();
  }, []);
  return (
    <div>
      <h1>
        {chat1.map((Chat) => (
          <div key={Chat._id}>{Chat.chatName}</div>
        ))}
      </h1>
    </div>
  );
}
