import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImHome, ImSearch } from "react-icons/im";
import axios from 'axios';
import Modal from "../components/Modal2";

const Search = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)
    }

    const [keyword, setkeyword] = useState('');

    const handleSearch = (e) => {
        setkeyword(e.target.value);
    }


    const search = (e) => {
        fetch('http://127.0.0.1:8000/movie/')
        .then(response => response.json())
        .then(response => {
            if (keyword=='') {
                alert('검색어를 입력하세요.');
            }

            const titles = response.map((movie) => {
                return movie.title;
            })

            const filterTitle = titles.filter((titles) => 
                 titles.toLowerCase().includes(keyword)
            );

            const setTitles = filterTitle.map((filterTitle) => {
                if (keyword!='') {
                const li = document.getElementById('li');
                const ul = document.getElementById('ul');
                const title = document.createElement('li');
                const div = document.createElement('div');
                const h1 = document.createElement('h1');
                
                title.id = 'box';
                div.id = 'div';
                h1.id = 'h1';

                ul.appendChild(title);
                title.appendChild(div);
                title.appendChild(h1);

                h1.append(filterTitle);

                const style = document.createElement('style');
                style.innerHTML = "#box {padding-left: 30px;overflow: hidden; width: 90%; display: inline-block; float: left; margin-top: 62px;}";
                style.append("#div { width: 130px; height: 170px; border-radius: 6px; background-color: black; margin: 10px 10px; float: left; }");
                style.append("#h1 { color : #A5C9CA; font-size: 20px; margin: 26px; float: left;}");
                title.appendChild(style);


                // TODO 검색해서 나온 관람방 클릭하면 해당 채팅방으로 이동

                }
            })

            if (filterTitle=='') {
                alert('아직 관람방이 없어요. 직접 만들어보세요!');
                modalClose();
            }
        })
    }

    return (
        <div>
            { modalOpen && <Modal modalClose={modalClose} ></Modal>}
            <MainText>HACKFLIX</MainText>
            <Div>
                <Div1>
                <Div2>
                    <button onClick={search} style={{backgroundColor:"transparent", borderStyle:"none"}}>
                        <ImSearch size="26" color="#D9D9D9"/>
                    </button>
                </Div2>
                    <Input onChange={handleSearch}></Input>
                </Div1>
                <Div3>
                    <Link to="/List" style={{ textDecoration: "none", color: "#d9d9d9" }}>
                        <p>취소</p>
                    </Link>
                </Div3>
            </Div>
            <div>
                <ul id='ul'></ul>
            </div>
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