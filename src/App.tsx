import React from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./components/Users";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Users />} />
          <Route path="/:userId" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
