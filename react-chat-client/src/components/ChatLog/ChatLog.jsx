import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ChatLog = ({ socket }) => {
  const [msgList, setMsgList] = useState([]);

  const nickname = sessionStorage.getItem('nickname');
  const roomName = sessionStorage.getItem('roomName');

  console.log(roomName);

  useEffect(() => {
    // messsgeItem : {msg: String, name: String, timeStamp: String}
    socket.on("onReceive", (messageItem) => {
      setMsgList((msgList) => [...msgList, messageItem]);
      console.log(messageItem);
    });
    socket.on("onConnect", (systemMessage) => {
      setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    socket.on("onDisconnect", (systemMessage) => {
      setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div>
      <Ul>
      {/* <Title>{roomName}</Title> */}
      {msgList.map((msg, idx) => (
        <Box key={idx}>
          <br /><br />
          <Div>        
            <Div1>{msg.nickname}</Div1>
            <DDiv>
            <Div2>{msg.msg}</Div2>
            <Div3>{msg.timeStamp}</Div3>
            </DDiv>
          </Div>
        </Box>
      ))}
      </Ul>
    </div>
  );
};

export default ChatLog;

const Title = styled.div`  

`

const Box = styled.div`  
  font-family: "SansLight";
  font-size: 14px;
`

const Div1 = styled.div`  
margin-top: 6%;
margin-left: 4%;
width:100%;
text-align: left;
font-size: 14px;
margin-bottom: 2%;
// background-color: pink;
width: auto;
padding: 6px 14px;
border-radius: 18px;
color: #d9d9d9;
`

const Div2 = styled.p`
margin-left: 9%;
margin-right: 6%;
width: 90%;
float: left;
font-size: 22px;
font-family: "SansMedium";
positiom: absolute;
bottom: 0;

background-color: #d9d9d9;
width: auto;
padding: 6px 14px;
border-radius: 10px;

`

const Div3 = styled.p`
color: #d9d9d9;
bottom: -20px;
position: relative;
// float: right;
font-size: 12px;
`

const Div = styled.div`
// background-color: red;
display: flex;
height: 100%;
margin: 10px;
position: relative;
`

const DDiv = styled.div`
  // background-color: pink;
  position: absolute;
  top: 100%;
  width: 90%;
  text-align: left;
  // bottom: 0;
`

const Ul = styled.ul`
`