import React from 'react';
import axios from "axios";
import styled from 'styled-components';


const Wrap = styled.div`
    width:100%;
    height:150px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`

const Logo = styled.h1`
`
const NavWrap = styled.div`
    width:300px;
`
const Nav = styled.ul`
    width:100%;
    height:150px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Menu = styled.li`
    list-style:none;
`


type HeaderProps = {
};

const Header = () => {

    async function getData() {
        try {
            //응답 성공
            const response = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/꽂닙이?api_key='+process.env.REACT_APP_KAKAOMAP_API_KEY);
            console.log(response);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    getData();

    return (
        <Wrap>
            <Logo>Logo</Logo>
            <NavWrap>
                <Nav>
                    <Menu>챔피언</Menu>
                    <Menu>전적검색</Menu>
                </Nav>
            </NavWrap>
        </Wrap>
    );
};

export default Header;