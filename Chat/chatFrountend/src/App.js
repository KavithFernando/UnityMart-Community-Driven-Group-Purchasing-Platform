import logo from "./logo.svg";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import SignIn from "./pages/SineIn";
import SignUp from "./pages/SineUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/signin1" element={<SignIn />} />
          <Route path="/signup1" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
