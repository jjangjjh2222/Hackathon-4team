import React, { useEffect, } from 'react';
import { Link } from 'react-router-dom';
import "../styles/signUp.css";
import styled from "styled-components";

function SignUpModal(props) {
    
    useEffect(() => {
        document.body.style= `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="Modal" onClick={closeModal}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                <button id="modalCloseBtn" onClick={closeModal}>
                x
                </button>
                <P1>NICKNAME</P1>
                <Div1>
                <Input1
                    type="text"
                    name="nickname"
                />
                </Div1>
                <P2>PASSWORD</P2>
                <Div2>
                <Input2 
                    type="password"
                    name="password"
                />
                </Div2>
                <Button>Join Now!</Button>
            </div>
        </div>

    );
}
 
export default SignUpModal;

const P1 = styled.p`
    margin-top: 46px;
    color: #e7f6f2;
    text-align: left;
    font-family: "SansMedium";
    font-size: 15px;
    position : absolute;
    top : 10%;
`

const Div1 = styled.div`
    background-color: #e7f6f2;
    opacity: 0.8;
    border-radius: 8px;
    height: 8%;
    width: 80%;
    display: inline-block;
    position : absolute;
    top : 25%;
    left : 50%;
    transform: translate(-50%, 0%);
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
    outline: none;
`

const Div2 = styled(Div1)`
    top : 50%;
`

const P2 = styled(P1)`
    top : 35%;
`

const Input2 = styled(Input1)`
`
const Button = styled.button`
    width: 140px;
    height: 46px;
    border-radius: 12px;
    border-style: none;
    background-color: #A5C9CA;
    font-size: 17px;
    color: #395B64;
    font-family: "SansBold";
    position : absolute;
    top : 80%;
    left : 50%;
    transform: translate(-50%, 0%);
`