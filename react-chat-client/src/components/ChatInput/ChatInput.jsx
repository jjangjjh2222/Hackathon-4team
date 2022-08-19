import React, { useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import "./ChatInput.css";
import styled from "styled-components";

const ChatInput = ({ nickname, socket }) => {
  const [chatMessage, setChatMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("onSend", {
      nickname: nickname ? nickname : localStorage.getItem("nickname"),
      msg: chatMessage,
      timeStamp: new Date().toLocaleTimeString(),
    });
    setChatMessage("");
  };

  const onChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  return (
      <Div1 className="ChatInput-container">
        <Form className="ChatInput-form" onSubmit={handleSubmit}>
          <Input
            placeholder=""
            value={chatMessage}
            onChange={onChatMessageChange}
          ></Input>
          <Div3>
            <Button>전송</Button>
          </Div3>
        </Form>
      </Div1>
  );
};

export default ChatInput;

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-family: "GmarketSansMedium";
  color: white;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  border-style: none;
  background-color: transparent;
`

const Input = styled.input`
  width: 82%;
  height: 100%;
  border: none;
  border-radius: 20px;
  color: black;
  font-family: "GmarketSansMedium";
  font-size: 20px;
  padding-left: 18px;
  float: left;
  &: focus {
    outline: none;
 }
`

const Form = styled.form`
  position: fixed;
  background-color: white;
  width: 94%;
  margin-left: 3%;
  border-radius: 18px;
  bottom: 1%;
  height: 6%;
`

const Div1 = styled.div`
  background-color: #D9D9D9;
  width: 100%;
  height: 8%;
  position: fixed;
   bottom: 0px;

`

const Div3 = styled.div`
  background-color: #2C3333;
  width: 16%;
  height: 100%;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  opacity: 0.8;
  float: right;

`