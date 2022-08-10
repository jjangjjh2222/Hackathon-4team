import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Chat = () => {
    
    return (
        <>
            <TopBox>
                <Title>이상한 변호사 우영우</Title>
                {/* TODO */}
                <DivTime>시간에 따라 점점 움직이는 바 넣기</DivTime>
            </TopBox>
            <ChatArea>
            </ChatArea>
            <BtmBox>
                <Div1>
                    <Div2>
                        <Input></Input>
                        <Div3>
                        <Button style={{borderStyle:"none"}}>전송</Button>
                        </Div3>
                    </Div2>
                </Div1>

            </BtmBox>
        </>
    );
};

export default Chat;

const TopBox = styled.div`
    width: 100%;
    height: 140px;
    padding-top: 40px;
    // background-color: #2c3333;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.9;

`

const Title = styled.h1`
    color: #A5C9CA;
    font-size: 28px;
    font-family: "SansMedium";
`

const DivTime = styled.div`
    background-color: yellow;
    height: 50%;
    width: 80%;
    margin: auto;
    margin-top: 4%;

`

const ChatArea = styled.div`
    margin-top: 180px;
    padding-bottom: 80px;
`

const P = styled.p`
    font-size: 40px;
`

const BtmBox = styled.div`
`

const Input = styled.input`
    width: 80%;
    height: 92%;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: black;
    font-family: "SansMedium";
    font-size: 20px;
    padding-left: 12px;
`

const Div1 = styled.div`
    background-color: #D9D9D9;
    width: 100%;
    height: 8%;
    position: fixed;
    bottom: 0px;
`
const Div2 = styled(Div1)`
    background-color: white;
    width: 94%;
    margin-left: 3%;
    border-radius: 8px;
    text-aline: center;
    bottom: 1%;
    height: 6%;
`
const Div3 = styled.div`
    background-color: #2C3333;
    width: 16%;
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    opacity: 0.8;
    float: right;
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-family: "SansMedium";
    color: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: transparent;
`