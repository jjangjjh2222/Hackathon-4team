import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";

const Search = () => {
    
    return (
        <div>
            <MainText>HACKFLIX</MainText>
            <Div>
                <Div1>
                <Div2>
                    <ImSearch size="26" color="#D9D9D9"/>
                </Div2>
                    <Input></Input>
                </Div1>
                <Div3>
                    <Link to="/List" style={{ textDecoration: "none", color: "#d9d9d9" }}>
                        <p>취소</p>
                    </Link>
                </Div3>
            </Div>
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
