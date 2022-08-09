import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiTheater } from "react-icons/gi";
import { ImHome, ImSearch } from "react-icons/im";
import ex from "../assets/example.jpg";
import Modal from "../components/Modal2";
import axios from 'axios';



const List = () => {

    // TODO useState 배열로 한번에 받을 수 있는 방법 알아보기
    const [Mv1, getMv1] = useState([]);
    const [Mv2, getMv2] = useState([]);
    const [Mv3, getMv3] = useState([]);

    axios
        .get('http://127.0.0.1:8000/movie/')
        .then(res => {
            getMv1(res.data[0].title);
            getMv2(res.data[1].title);
            getMv3(res.data[2].title);
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

    return (
        <div>
            { modalOpen && <Modal modalClose={modalClose} memo={roomData}></Modal>}
            <MainText>HACKFLIX</MainText>
            <Top>
                <Section>
                    <H3>오늘의 단체관람</H3>
                    <Ul>
                        <Li>
                            <div>
                                <Img src={ex}/>
                                <H4>{Mv1}</H4>
                            </div>
                        </Li>
                        <Li>
                            <div>
                                <Img src={ex}/>
                                <H4>{Mv2}</H4>
                            </div>
                        </Li>
                    </Ul>
                </Section>
                <Section>
                    <H3>여름엔 공포물!</H3>
                    <Ul>
                        <Li>
                            <div>
                                <Img src={ex}/>
                                <H4>{Mv3}</H4>
                            </div>
                        </Li>
                    </Ul>
                </Section>
                <Section>
                    <H3>한국영화 시리즈</H3>
                    <Ul>
                        <Li>
                            <div>
                                <Img src={ex}/>
                                <H4>{Mv3}</H4>
                            </div>
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

const Section = styled.section`
    height: 240px;
    padding: 0 22px;
    margin-top: 6px;
`

const H3 = styled.h3`
    font-family: 'SansBold';
    font-size: 18px;
    color: #d9d9d9;
    text-align: left;
    padding: 30px 0px;
`

const Img = styled.img`
    width: 108px;
    height: 146px;
    border-radius: 6px;
`

const H4 = styled.h4`
    font-family: 'SansMedium';
    font-size: 14px;
    margin-top: 8px;
    color: #d9d9d9;
    text-decoration: none;
`

const Ul = styled.ul`

`

const Li = styled.li`
    color: blue;
    display: inline-block;
    float: left;
    margin-right: 24px;
`