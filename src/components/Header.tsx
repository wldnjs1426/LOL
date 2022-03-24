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