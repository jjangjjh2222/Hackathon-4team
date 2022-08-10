import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SignModal = ({modalClose}) => {

    class SignModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        nickname: "",
        pw: "",
        nicknameCheck: "",
        };
    }

    handleNickname = e => {
        e.preventDefault();
        this.setState({
        nickname: e.target.value
        });
    };

    checkNickname = e => {
        e.preventDefault();

        const chkNickname = function(str) {
        var regNm = /^[가-힣]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
        return regNm.test(str) ? true : false;
        };

        const inputNickname = {
        nickname: this.state.nickname
        };

        const nickname_info = {
        method: "POST",
        body: JSON.stringify(inputNickname),
        headers: {
            "Content-Type": "application/json"
        }
        };
        if (chkNickname(this.state.nickname) === false) {
        alert("한글,영문 대소문자 2~15자리만 사용 가능합니다");
        } else {
        fetch("http://127.0.0.1:8000/user/signup/", nickname_info)
            .then(res => res.json())
            .then(json => {
            if (json === true) {
                alert("사용 가능한 닉네임입니다.");
                this.setState({
                nicknameCheck: this.state.nickname
                });
            } else {
                alert("이미 존재하는 닉네임입니다.");
            }
            });
        }
    };

    handlePW = e => {
        e.preventDefault();
        this.setState({
        pw: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {
        nickname,
        nicknameCheck,
        pw
        } = this.state;

        const signupInfo = {
        nickname: this.state.nicknameCheck,
        pw: this.state.pw
        }

        const signup_info = {
        method: "POST",
        body: JSON.stringify(signupInfo),
        headers: {
            "Content-Type": "application/json"
        }
        };

        if (
        nickname &&
        pw &&
        nickname === nicknameCheck
        ) {
        fetch("http://127.0.0.1:8000/user", signup_info)
            .then(alert("가입이 완료되었습니다."))
            .then(this.props.history.push("/login"));
        } else {
        alert("입력값을 확인해주세요");
        }
    };

    render() {
        return (
            <Modal__container>
                <MModal>
                <Modal__button onClick={modalClose}>X</Modal__button>
                <br /><br /><br />
                <P1>NICKNAME</P1><br />
                <Div1>
                    <Input1 
                    type="text"
                    name="nickname"
                    handleNickname={this.handleNickname}
                    checkNickname={this.checkNickname}
                    value={this.state.nickname}
                    />
                </Div1>
                <P2>PASSWORD</P2><br />
                <Div2>
                    <Input2 
                    type="password"
                    name="password"
                    handlePW={this.handlePW}
                    value1={this.state.pw}
                    />
                </Div2>
                <Button onClick={this.handleSubmit}>Join Now!</Button>
                </MModal>
            </Modal__container>
        );
    }
    }
}

export default SignModal;

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
    margin-top: 8%;
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
    margin-top: 16%;
`