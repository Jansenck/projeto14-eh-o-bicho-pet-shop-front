import styled from "styled-components";
//import { AiOutlineShoppingCart } from "react-icons/fa"
import { FaBeer } from 'react-icons/fa';
//import { IoPersonOutline } from 'react-icons/fa';
import { Link } from "react-router-dom"
import { useState } from "react";
import SideBar from "../components/SideBar.js";

export default function Top () {

    const [display, setDisplay] = useState("none")

    function showMenu() {
        display === "none" ? setDisplay("flex") : setDisplay("none")
    }

    return (
        <>
            <Container>
                <Menu onClick = {showMenu}>
                    <ion-icon name="menu-outline"></ion-icon>
                </Menu>
                <LogoText>
                    É o bicho!
                </LogoText>
                <Icons>
                    <Link to = {"/cart"}>
                        <ion-icon name="cart-outline"></ion-icon> 
                    </Link>
                    <Link to = {"/signin"}>
                        <ion-icon name="person-outline"></ion-icon>
                    </Link>
                </Icons>
            </Container>
            {display === "none" ? "" : <SideBar display = {display} setDisplay = {setDisplay} showMenu = {showMenu}/>}
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
    margin-bottom: 80px;
`
const Menu = styled.div`
    font-size: 24px;
    color: white;
    margin-left: 10px;
`
const LogoText = styled.h1`
    font-size: 30px;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
`
const Icons = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;

    && ion-icon {
        font-size: 24px;
        color: white;
    }
`