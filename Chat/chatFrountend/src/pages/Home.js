import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <button onClick={() => Navigate("/signup1")}>Button</button>
      <h1>Home</h1>
    </div>
  );
}
