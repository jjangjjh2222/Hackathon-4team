import React, { useState } from 'react';
import styled from "styled-components";
import { AiOutlineSmile, AiOutlineLock } from "react-icons/ai";
import  Modal from "../components/Modal";
// import { Link } from "react-router-dom";
// import axios from 'axios';

const Main = () => {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    }

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const handleIdInput = (e) => {
        setNickname(e.target.value);
    }
    const handlePwInput = (e) => {
        setPassword(e.target.value);
    }

    const loginfetch = (e) => {
        // console.log("함수 시작");
        fetch('http://localhost:8000/user/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: nickname, 
            password: password, 
          })
        })
        .then(response => response.json())
        .then(response => {
            if (response.key) {
                // localStorage.setItem('login-token', response.key);
                sessionStorage.setItem('login-token', response.key);
                // console.log(nickname);
                sessionStorage.setItem('nickname', nickname);
                document.location.href = '/List';
            }
            else {
                alert('해당하는 회원 정보가 없습니다.')
                setPassword('');
            }
        });
      }

    return (
        <Back> 
            <MainText>HACKFLIX</MainText>
            <Div1>
                <Box1>
                    <AiOutlineSmile size="26" color="#D9D9D9"/>
                </Box1>
                <Input1 value={nickname} onChange={handleIdInput}></Input1>
            </Div1>

            <Div2>
                <Box2>
                    <AiOutlineLock size="26" color="#D9D9D9"/>
                </Box2>
                <Input2 type="password" value={password} onChange={handlePwInput}></Input2>
            </Div2>
            <Button onClick={loginfetch} style={{ textDecoration: "none", color: "#395B64" }}>
                    LOG IN
            </Button>
            <P onClick={openModal}>Join Now</P>
                {showModal && (
                    <Modal openModal={openModal}></Modal>)}
        </Back>
    );
};

export default Main;

const Back = styled.body`
    background-color: #A5C9CA;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow:scroll;
`

const MainText = styled.h1`
    color: #395B64;
    font-family: "KOTRA";
    font-size: 50px;
    padding-top: 167px;
`

const Div1 = styled.div`
    background-color: #2c3333;
    opacity: 0.8;
    border-radius: 8px;
    height: 46px;
    width: 290px;
    display: inline-block;
    margin-top: 130px;
    display : block;
    align-items: center;
    margin : 10% auto;
`

const Box1 = styled.div`
    border-style: solid;
    border-right-width: 1.4px;
    border-right-color: #A5C9CA;  
    height:100%;
    width: 18%;
    float: left;
    padding-top: 10px;
`

const Input1 = styled.input`border-radius: 8px;
    height: 96%;
    width: 78%;
    border: none;
    background: transparent;
    color: #D9D9D9;
    font-family: "SansMedium";
`

const Div2 = styled(Div1)`
    margin-top: 26px;
`

const Box2 = styled(Box1)`
`

const Input2 = styled(Input1)`
`

const Button = styled.button`
    width: 230px;
    height: 46px;
    border-radius: 12px;
    border-style: none;
    background-color: #D9D9D9;
    font-size: 16px;
    font-family: "SansMedium";
    margin-top: 15%;
`

const P = styled.p`
    color: #D9D9D9;
    margin-top: 4%;
    margin-bottom: 10%;
    font-size: 16px;
    font-family: "SansBold";
`