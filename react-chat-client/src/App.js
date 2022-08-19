import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./pages/Main.jsx";
import List from "./pages/List.jsx";
import Search from "./pages/Search.jsx";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import styled from 'styled-components';
import './App.css';

function App() {
  // const [nickname, setNickname] = useState('');
  // const [roomName, setRoomName] = useState('');
  
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route
              path="/"
              exact
              render={() => <Main />}
            ></Route>
          {/* <Route path="/join" exact>
            <Home
              nickname={nickname}
              roomName={roomName}
              setNickname={setNickname}
              setRoomName={setRoomName}
            />
          </Route> */}
          <Route
            path="/chat"
            render={() => <Chat 
              // nickname={nickname} 
              // roomName={roomName} 
              />}
          ></Route>
          <Route
            path="/list"
            exact
            render={() => <List 
              // nickname={nickname} 
              // roomName={roomName} 
              />}
          ></Route>
          <Route
            path="/search"
            exact
            render={() => <Search />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        text-align: center;
        background-color: #2c3333;
    }
`;