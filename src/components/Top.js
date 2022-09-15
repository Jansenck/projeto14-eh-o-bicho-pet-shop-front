import styled from "styled-components";
//import { AiOutlineShoppingCart } from "react-icons/fa"
import { FaBeer } from 'react-icons/fa';
//import { IoPersonOutline } from 'react-icons/fa';
import { Link } from "react-router-dom"
import { useState } from "react";

export default function Top () {

    const [display, setDisplay] = useState("none")

    function showMenu() {
        display === "none" ? setDisplay("flex") : setDisplay("none")
    }

    return (
        <>
            <Container>
                <Menu onClick = {showMenu}>

                </Menu>
                <LogoText>
                    É o bicho!
                </LogoText>
                <Icons>
                    <Link to = {"/cart"}>
                        <FaBeer color = {"#FFFFFF"} fontSize = {25}/>
                    </Link>
                    <Link to = {"/signin"}>
                        <FaBeer color = {"#FFFFFF"} fontSize = {25}/>
                    </Link>
                </Icons>
            </Container>
            <SubTop show = {display}>
                <p>Cães</p>
                <p>Gatos</p>
                <p>Coelhos</p>
            </SubTop>
        </>
    )
}


const Container = styled.div`
    width: 100vw;
    height: 80px;
    background-color: #05668d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
`
const Menu = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid white;
    margin-left: 10px;
`
const LogoText = styled.h1`
    font-size: 30px;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
`
const Icons = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
`
const SubTop = styled.div`
    width: 100vw;
    margin-top: 80px;
    height: 40px;
    background-color: #02c39a;
    display: ${props => props.show};
    justify-content: space-around;
    align-items: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    opacity: 0.5;
`