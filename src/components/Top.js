import styled from "styled-components";
//import { AiOutlineShoppingCart } from "react-icons/fa"
//import { IoPersonOutline } from 'react-icons/fa';
import { Link } from "react-router-dom"
import { useState } from "react";
import SideBar from "../components/SideBar.js";
import LogOut from "./LogOut.js";

export default function Top () {

    const [display, setDisplay] = useState("none")
    const [animation, setAnimation] = useState("none")
    const [animation2, setAnimation2] = useState("none")
    const [displayLogOut, setDisplayLogOut] = useState("none")
    
    function showMenu() {
        setDisplay("flex") 
        setAnimation("animation 0.5s")
        setAnimation2("animation2 0.5s")
    }

    function showLogOut() {
        displayLogOut === "none" ? setDisplayLogOut("flex") : setDisplayLogOut("none")
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
                    <ion-icon name="person-outline" onClick = {showLogOut}></ion-icon>
                    <Link to = {"/cart"}>
                        <ion-icon name="cart-outline"></ion-icon> 
                    </Link>
                    <LogOut displayLogOut = {displayLogOut} setDisplayLogOut = {setDisplayLogOut}/>
                </Icons>
            </Container>
            {display === "none" ? "" : <SideBar display = {display} setDisplay = {setDisplay} 
            animation = {animation} setAnimation = {setAnimation} animation2 = {animation2} setAnimation2 = {setAnimation2}/>}
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
    font-family: 'Kalam', cursive;
`
const Icons = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    position: relative;

    && ion-icon {
        font-size: 24px;
        color: white;
    }
`