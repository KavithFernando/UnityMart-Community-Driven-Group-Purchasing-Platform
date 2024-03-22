import React from "react";
import { useNavigate } from "react-router-dom";
import PopularPanel from "./Components/PopularProducts/PopularPanel";
import RecomHolder from "./Components/Recommended/RecomHolder";
export default function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <PopularPanel />
      <RecomHolder />
      {localStorage.getItem("userId") !== "null" && (
        <div className="chat-bubble" onClick={() => Navigate("/Chat")}>
          <img
            src="src\images\speec.png"
            alt="Chat Icon"
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
          Chat
        </div>
      )}
    </div>
  );
}
