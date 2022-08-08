import logo from './logo.svg';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main.jsx";
import List from "./pages/List.jsx";
import Chat from "./pages/Chat.jsx";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/List" element={<List />}></Route>
        <Route path="/Chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
