import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Modal = ({openModal}) => {

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleIdInput = (e) => {
    setNickname(e.target.value);
  }
  const handlePwInput = (e) => {
    setPassword(e.target.value);
  }

  const loginfetch = (e) => {
    fetch('http://127.0.0.1:8000/user/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nickname: nickname, 
        password: password, 
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.nickname[0] === 'user의 nickname은/는 이미 존재합니다.') {
          alert('이미 존재하는 아이디입니다.');
        } else {
          alert('회원가입 성공!');
          openModal();
      }
      setNickname('');
      setPassword('');
    });
  }

  const loginfetchOnKeyPress = (e) => {
    if (e.key=='Enter') {
        loginfetch();
    }
  }

  useEffect(() => { // 모달 뒷배경 스크롤 방지
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Modal__container>
      <MModal>
        <Modal__button onClick={openModal}>X</Modal__button>
        <br /><br /><br />
        <P1>ID</P1><br />
        <Div1>
          <Input1
            type="text"
            name="id"
            value={nickname}
            onChange={handleIdInput} 
          />
        </Div1>
        <P2>PASSWORD</P2><br />
        <Div2>
          <Input2 
            type="password"
            name="password"
            value={password}
            onChange={handlePwInput} 
            onKeyPress={loginfetchOnKeyPress}
          />
        </Div2>
        <Button onClick={loginfetch}>Join Now!</Button>
      </MModal>
    </Modal__container>
  )
}

export default Modal;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: red;
  
`
const MemoList = styled.p`
  padding-top: 10px;
  color: black;
  font-size: 14px;
  font-family: "SCDream";
  margin-bottom: 10px;
`

const Modal__container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`

const MModal = styled.div`
    width: 300px;
    height: 66%;
    background-color: #2c3333;
    // Modal 창 브라우저 가운데로 조정
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    z-index:100;
    border-radius: 2px;
`

const Modal__button = styled.button`
    position: relative;
    width: 24px;
    height: 24px;
    text-align: center;
    left:-40.6%;
    top: 4%;
    border-style: none;
    border-radius: 30px;
    background-color: #e7f6f2;
    line-height: 24px;
    color: #2c3333;
    font-size: 16px;
    font-family: "KOTRA";
`

const Div1 = styled.div`
    background-color: #e7f6f2;
    opacity: 0.8;
    border-radius: 8px;
    height: 46px;
    width: 220px;
    display: inline-block;
    margin-top: -10px;
`

const Input1 = styled.input`
    height: 96%;
    width: 92%;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #2c3333;
    font-family: "SansMedium";
    padding-left: 12px;
`

const P1 = styled.p`
    margin-top: 46px;
    color: #e7f6f2;
    text-align: left;
    padding-left: 14%;
    font-family: "SansMedium";
    font-size: 12px;
`

const Div2 = styled(Div1)`
`

const P2 = styled(P1)`
    margin-top: 18%;
`

const Input2 = styled(Input1)`
`
const Button = styled.button`
    width: 140px;
    height: 46px;
    border-radius: 12px;
    border-style: none;
    background-color: #A5C9CA;
    font-size: 18px;
    color: #395B64;
    font-family: "SansBold";
    margin-top: 26%;
`