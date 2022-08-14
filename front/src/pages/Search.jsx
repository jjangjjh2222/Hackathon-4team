import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImHome, ImSearch } from "react-icons/im";
import axios from 'axios';

const Search = () => {

    // componentDidMount() {
    //     fetch('API 주소')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         this.setState({
                

    //         });
    //     });
    // }

    // handleSearch = (e) => {
    //     const inputValue = e.target.value;

    //     this.setState({
    //         userInput: inputValue,
    //     });
    // };
    
    return (
        <div>
            <MainText>HACKFLIX</MainText>
            <Div>
                <Div1>
                <Div2>
                    <button style={{backgroundColor:"transparent", borderStyle:"none"}}>
                        <ImSearch size="26" color="#D9D9D9"/>
                    </button>
                </Div2>
                    <Input></Input>
                </Div1>
                <Div3>
                    <Link to="/List" style={{ textDecoration: "none", color: "#d9d9d9" }}>
                        <p>취소</p>
                    </Link>
                </Div3>
            </Div>
            <BtmNav>
                <Divv1>
                    <Link to="/List" style={{ textDecoration: "none", color: "#d9d9d9" }}>
                        <ImHome size="24" color="#D9D9D9"/>
                        <P>HOME</P>
                    </Link>
                </Divv1>
                <Divv3>
                    <Link to="/Search" style={{ textDecoration: "none"}}>
                        <ImSearch size="24" color="#D9D9D9"/>
                        <P>SEARCH</P>
                    </Link>
                </Divv3>
            </BtmNav>
        </div>
    );
};

export default Search;

const MainText = styled.h1`
    color: #A5C9CA;
    font-family: "KOTRA";
    font-size: 50px;
    padding-top: 14%;
    margin-bottom: 8%;
`

const Div = styled.div`
    width: 90%;
    height: 50px;
    margin: auto;
`

const Input = styled.input`
    width: 76%;
    height: 92%;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #d9d9d9;
    font-family: "SansMedium";
    padding-left: 12px;
`

const Div1 = styled.div`
    background-color: #395B64;
    float: left;
    width: 86%;
    height: 100%;
    border-radius: 6px;
`
const Div2 = styled(Div1)`
    width: 18%;
    padding-top: 4%;
    height: 76%;
`

const Div3 = styled(Div1)`
    background-color: #2c3333;
    width: 10%;
    float: right;
    font-family: "SansMedium";
    line-height: 50px;
`

const BtmNav = styled.nav`
    width: 100%;
    height: 70px;
    margin: 10px auto;
    background-color: #2c3333;
    position: fixed;
    bottom: -10px;
    left: 0;
    right: 0;
    opacity: 0.9;
`

const Divv1 = styled.div`
    float: left;
    width:30%;
    height: 100%;
    padding-top: 16px;
    padding-left: 6%;
`

const Divv3 = styled(Divv1)`
    float: right;
    padding-left: 0%;
    padding-right: 6%;
`

const P = styled.p`
    line-height: 30px;
    color: #D9D9D9;
    font-family: "SansMedium";
    font-size: 12px;

`