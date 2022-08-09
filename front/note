import React, { useState, useEffect } from "react";
import styled from "styled-components";
import crl from "../assets/cereal.svg";
import {useQuery} from "react-query";
import {fetchUser} from "../api/userApi";
import axios from "axios";

const main = "POST-EAT ME!";

// TODO 내용 변경시가 아닌 submit했을 때만 state에 저장

const BASE_URL = 'http://15.165.62.51:8000'
// const TEST_URL = 'http://0.0.0.0:8000'

const Login = () => {
    // TODO 이름 전화번호 갯수 받아와서 post

    const [num, setNumber] = useState(2);
    const [scroll, setScroll] = useState(false);
    const [DBdata, setDBData] = useState([]);
    const [memoNum, setMemo] = useState([]);

    const [userData, setUserData] = useState({name: '', phone: '', num: 2})

    let nameValue = React.createRef();
    let phoneValue = React.createRef();

    useEffect(() => {
        // TODO AWS베포 URL로 변경
        axios.get(`${BASE_URL}/user`).then(res => setDBData(res.data))
        axios.get(`${BASE_URL}/memo`).then(res => setMemo(res.data))
    }, []);

    useEffect(()=> {
        // console.log(userData)
        // console.log(num)
    },[num, userData])

    const logIn = () => {

        // setUserData({...userData, name: nameValue.current.value, phone: phoneValue.current.value})
        // console.log(userData)

        if(userData.name.length === 0) alert("이름을 입력해 주세요!")
        else if(userData.phone.length !== 11) alert("휴대폰 번호 11자리를 입력해주세요!");

        else {
            DBdata.filter((data)=>{
                if(data.phone === userData.phone){ // 번호 확인
                    if(data.name === userData.name){ // 이름 확인

                        const userMemo = memoNum.filter((memo) => memo.name === userData.name);

                        if (data.num === userMemo.length){ // 찼는지 확인
                            alert("POST EAT ME가 완성되었습니다!")
                            //TODO netlify URL로 변경
                            window.location.href = window.location.origin + "/open/" + encodeURI(encodeURIComponent(userData.name))+"_"+userData.phone;
                            return console.log('post eat me')
                        }
                        else {
                            alert("로그인 되었습니다!")
                            setScroll((scroll) => !scroll)
                            return console.log('login')
                        }
                    }
                    else {
                        alert("이름이 잘못 되었습니다!")
                        return console.log('name')
                    }
                }
                else{
                    alert("인원수를 설정 후 공유하기를 누르시면 회원가입이 됩니다!")
                    setScroll((scroll) => !scroll)
                    return console.log('sign')
                }
            })
        }
    }

    const onIncrease = () => {
        if (num > 0 && num < 10) {
            setNumber((num)=>num + 1);
            setUserData({...userData, num: num+1})
        }
    };

    const onDecrease = () => {
        if (num > 2 && num < 11) {
            setNumber((num) =>num - 1);
            setUserData({...userData, num: num-1})
        }

    };

    const copy = () => {
        setUserData({...userData, num })
        // console.log('number',num)
        // console.log('userData', userData);
        // TODO AWS베포 URL로 변경
        axios.post(`${BASE_URL}/user/`, userData).then(res => console.log(res.data))

        const el = document.createElement("input");

        //TODO netlify URL로 변경
        el.value = window.location.origin + "/memo/" + encodeURI(encodeURIComponent(userData.name))+"_"+userData.phone;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        alert("링크 복사 완료! 친구들에게 공유해보세요.");
        window.location.href = "/";
    };

    return (
        <div style={{ position: "fixed" }} class="div">
            <First className={scroll ? "active" : ""}>
                <Login1>{main}</Login1>
                <div>
                    <Login2>
                        <Btn
                            onClick={() => logIn()}
                        >
                            로그인 / 회원가입
                        </Btn>
                    </Login2>
                    <Input
                        onChange={(e) => setUserData(
                          (userData) => ({...userData, name: e.target.value})
                        )}
                        ref = {nameValue}
                        type="text"
                        // class='id'
                        placeholder="이름"
                    />
                    <InputPw
                        onChange={(e) => setUserData(
                          (userData) => ({...userData, phone: e.target.value})
                        )}
                        ref = {phoneValue}
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        placeholder="전화번호"
                    />
                </div>
                <Img src={crl} />
            </First>
            <Second>
                <Main>
                    <Div>
                        <Min onClick={onDecrease}>-</Min>
                    </Div>
                    <Div>
                        <Num>{num} 명</Num>
                    </Div>
                    <Div>
                        <Plus onClick={onIncrease}>+</Plus>
                    </Div>
                </Main>
                <ShareBtn onClick={()=> copy()}>URL 공유하기</ShareBtn>
            </Second>
        </div>
    );
};

export default Login;

const Login1 = styled.div`
    margin-top: 140px;
    font-size: 28px;
    color: #ec7698;
    text-shadow: -2px 0 #000, 0 3px rgb(47, 47, 47), 3px 0 rgb(47, 47, 47), 0 -2px #000;
    font-family: "Forte";
`;

const Login2 = styled.h2`
    // margin-top: 4%;
`;

const Btn = styled.button`
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    height: 28px;
    border-style: none;
    background-color: #f2e5d5;
    opacity: 0.5;
    font-family: "SCDream";
    textdecoration: none;
    color: #568c7d;

    &:active {
        opacity: 1;
    }
`;

const Input = styled.input`
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    padding-left: 20px;
    height: 36px;
    width: 260px;
    margin-top: 12px;
    border-radius: 40px;
    border-style: solid;
    border-width: 1.6px;
    border-color: #898989;
    background-color: white;
    font-family: "SCDream";
`;

const InputPw = styled(Input)`
    margin-bottom: 100px;
`;

const Img = styled.img`
    width: 240px;
    position: relative;
    bottom: 0px;
`;

const First = styled.div`
    touch-action: none;

    &.active {
        margin-top: -600px;
        transition: 0.5s;
    }
`;

const Second = styled.div`
    width: 100vw;
`;

const Main = styled.div`
    margin-top: 20%;
`;

const Div = styled.div`
    display: inline-block;
    margin: 0 10px;
`;

const Min = styled.button`
    padding: 0%;
    font-size: 26px;
    color: black;
    text-align: center;
    line-height: 10px;
    height: 22px;
    width: 22px;
    background-color: #f2e5d5;
    border-radius: 50%;
    border-width: 1.6px;
    border-color: black;
`;

const Plus = styled(Min)``;

const Num = styled.p`
    font-size: 20px;
`;

const ShareBtn = styled.button`
    margin-top: 44%;
    text-align: center;
    color: rgb(79, 79, 79);
    font-weight: bold;
    font-size: 18px;
    height: 40px;
    width: 210px;
    background-color: #f0d596;
    border-radius: 20px;
    border-style: solid;
    border-width: 1.6px;
    border-color: rgb(79, 79, 79);
    font-family: "SCDream";
`;
