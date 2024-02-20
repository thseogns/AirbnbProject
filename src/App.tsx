/** @jsxImportSource @emotion/react */
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Menubar from "./components/header/menubar/Menubar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menubar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/2"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
