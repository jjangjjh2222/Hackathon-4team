import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChatLog from "../../components/ChatLog/ChatLog";
import Loading from "./Loading";

const Chat = () => {
  const nickname = sessionStorage.getItem('nickname');
  const roomName = sessionStorage.getItem('roomName');

  const myInfo = {
    roomName: roomName ? roomName : localStorage.getItem("roomName"),
    nickname: nickname ? nickname : localStorage.getItem("nickname"),
  };
  const [currentSocket, setCurrentSocket] = useState();

  useEffect(() => {
    setCurrentSocket(socketIOClient("hackkflix.herokuapp.com/5000"));
  }, []);

  if (currentSocket) {
    currentSocket.on("connect", () => {
      currentSocket.emit("join", myInfo);
    });
  }

  return (
    <div>
      {currentSocket ? (
        <>
          <ChatLog socket={currentSocket}></ChatLog>
          <ChatInput nickname={nickname} socket={currentSocket}></ChatInput>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Chat;