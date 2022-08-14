import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiTheater } from "react-icons/gi";
import { ImHome, ImSearch } from "react-icons/im";
import Modal from "../components/Modal2";
import axios from 'axios';



const List = () => {

    // axios
    //     .get('http://127.0.0.1:8000/movie/')
    //     .then(res => {
    //         const h1El = document.getElementsByName('title1')
    //         for (let i=0;i<3;i++) {
    //             h1El[i].textContent = res.data[i].title;
    //         }
    //         const imgEl = document.getElementsByName('img')
    //         for (let i=0;i<3;i++) {
    //             imgEl[i].src = res.data[i].image;

    //         }
    //         // getMv1(res.data[0]);
    //         // getMv2(res.data[1]);
    //         // getMv3(res.data[2]);
    //     })

    axios    
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=minions')   
    .then(res => { 
        const h1El = document.getElementsByName('title1-1');
        h1El[0].textContent = res.data.Search[0].Title;
        const imgEl = document.getElementById('img1')
        imgEl.src = res.data.Search[0].Poster
    })
    axios    
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=hansan')   
    .then(res => { 
        const h1El = document.getElementsByName('title1-2');
        h1El[0].textContent = res.data.Search[0].Title;
        const imgEl = document.getElementById('img2');
        imgEl.src = res.data.Search[0].Poster;
    })
    axios    
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=top')   
    .then(res => { 
        const h1El = document.getElementsByName('title1-3');
        h1El[0].textContent = res.data.Search[1].Title;
        const imgEl = document.getElementById('img3');
        imgEl.src = res.data.Search[1].Poster;
    })

    axios    
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=potter')   
    .then(res => { 
        const h1El = document.getElementsByName('title2')
        for (let i=0;i<3;i++){
            h1El[i].textContent = res.data.Search[i].Title;
        }
        const imgEl4 = document.getElementById('img4')
        imgEl4.src = res.data.Search[0].Poster
        const imgEl5 = document.getElementById('img5')
        imgEl5.src = res.data.Search[1].Poster
        const imgEl6 = document.getElementById('img6')
        imgEl6.src = res.data.Search[2].Poster
    })

    axios    
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=hunger') 
    .then(res => { 
        const h1El = document.getElementsByName('title3')
        for (let i=0;i<3;i++){
            h1El[i].textContent = res.data.Search[i].Title;
        }
        const imgEl7 = document.getElementById('img7')
        imgEl7.src = res.data.Search[0].Poster
        const imgEl8 = document.getElementById('img8')
        imgEl8.src = res.data.Search[1].Poster
        const imgEl9 = document.getElementById('img9')
        imgEl9.src = res.data.Search[2].Poster
    })

    const refreshPage = () => {
        window.scrollTo(0, 0);
        window.location.reload();
    }

    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)
    }
    const [roomData, setRoomData] = useState([])

    const nickname = sessionStorage.getItem('nickname');

    return (
        <div>
            { modalOpen && <Modal modalClose={modalClose} memo={roomData}></Modal>}
            <MainText>HACKFLIX</MainText>
            <Top>
                <Section>
                    <H3>{nickname}님, 오늘의 추천작품입니다</H3>
                        <Ul>
                        <Li>
                            <Piece>
                                <Img id='img1'/>
                                <H4 name='title1-1'></H4>
                            </Piece>
                        </Li>
                        <Li>
                            <Piece>
                                <Img id='img2'/>
                                <H4 name='title1-2'></H4>
                            </Piece>
                        </Li>
                        <Li>
                            <Piece>
                                <Img id='img3'/>
                                <H4 name='title1-3'></H4>
                            </Piece>
                        </Li>
                    </Ul>
                </Section>
                <Section>
                    <H3>해리포터 덕후들 모여라!</H3>
                    <Ul>
                        <Li>
                            <Piece>
                                <Img id='img4'/>
                                <H4 name='title2'></H4>
                            </Piece>
                        </Li>
                        <Li>
                            <Piece>
                                <Img id='img5'/>
                                <H4 name='title2'></H4>
                            </Piece>
                        </Li>
                        <Li>
                            <Piece>
                                <Img id='img6'/>
                                <H4 name='title2'></H4>
                            </Piece>
                        </Li>
                    </Ul>
                </Section>
                <Section>
                    <H3>헝거게임 몰아보기</H3>
                    <Ul>
                        <Li>
                            <Piece>
                                <Img id='img7'/>
                                <H4 name='title3'></H4>
                            </Piece>
                        </Li>
                        <Li>
                            <Piece>
                                <Img id='img8'/>
                                <H4 name='title3'></H4>
                            </Piece>
                        </Li>
                        <Li>
                            <Piece>
                                <Img id='img9'/>
                                <H4 name='title3'></H4>
                            </Piece>
                        </Li>
                    </Ul>
                </Section>
            </Top>
            <BtmNav>
                <Div1 onClick={refreshPage}>
                        <ImHome size="24" color="#D9D9D9"/>
                        <P>HOME</P>
                </Div1>
                <Div2 onClick={modalClose}>
                    <GiTheater size="24" color="#D9D9D9"/><P>ROOM</P></Div2>
                <Div3>
                    <Link to="/Search" style={{ textDecoration: "none"}}>
                        <ImSearch size="24" color="#D9D9D9"/>
                        <P>SEARCH</P>
                    </Link>
                </Div3>
            </BtmNav>
        </div>
    );
};

export default List;

const Top = styled.body`
    padding-bottom: 90px;
`

const MainText = styled.h1`
    color: #A5C9CA;
    font-family: "KOTRA";
    font-size: 50px;
    padding-top: 14%;
    margin-bottom: 8%;
`

const BtmNav = styled.nav`
    width: 100vw;
    height: 70px;
    margin: 10px auto;
    background-color: #2c3333;
    position: fixed;
    bottom: -10px;
    left: 0;
    right: 0;
    opacity: 0.9;
`

const Div1 = styled.div`
    float: left;
    width:30%;
    height: 100%;
    padding-top: 16px;
    padding-left: 6%;
`

const Div2 = styled(Div1)`
    float: center;
    padding-left: 0%;
    width: 28%;
`

const Div3 = styled(Div1)`
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

const Section = styled.div`
    overflow: hidden;
    height: auto;
    padding: 0 22px;
    margin-top: 6px;
`

const H3 = styled.h3`
    font-family: 'SansBold';
    font-size: 18px;
    color: #d9d9d9;
    text-align: left;
    padding: 30px 0px;
    margin-left: 10px;
`

const Img = styled.img`
    width: 108px;
    height: 146px;
    border-radius: 6px;
`

const Piece = styled.div`
    display: block;
    overflow: hidden;
    width: 108px;
`

const H4 = styled.h4`
    font-family: 'SansMedium';
    font-size: 14px;
    margin-top: 8px;
    color: #d9d9d9;
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    
`

const Ul = styled.ul`
    // overflow:auto; 
    // white-space: nowrap;
    // overflow-x:scroll;
`

const Li = styled.li`
    color: blue;
    display: inline-block;
    float: left;
    margin: 12px 12px;
`