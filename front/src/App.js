import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./pages/Main.jsx";
import List from "./pages/List.jsx";
// import Chat from "./pages/Chat.jsx";
import Chat from "./pages/Chat.js";
import Search from "./pages/Search.jsx";
import './App.css';
import WebSocketInstance from "./websocket";

class App extends React.Component {

  componentDidMount() {
    WebSocketInstance.connect();
  }

  render() {
    return(
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/List" element={<List />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        text-align: center;
        background-color: #2c3333;
    }
`;