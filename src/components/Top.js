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
            <SubTop show = {display} >
                <ion-icon name="close-outline" onClick = {showMenu}></ion-icon>
                <List>
                    <TextList>
                        <Link to = {"/dog"}>
                        <div>
                            <p>Cães</p>
                        </div>
                        </Link>
                        <Link to = {"/cat"}>
                            <div>
                                <p>Gatos</p>
                            </div>
                        </Link>
                        <Link to = {"/bunny"}>
                            <div className="last">
                                <p>Coelhos</p>
                            </div>
                        </Link>
                    </TextList>
                    <IconsList>
                        <Link to = {"/cart"}><ion-icon name="cart-outline"></ion-icon> </Link>
                        <Link to = {"/signin"}><ion-icon name="person-outline"></ion-icon></Link>
                    </IconsList>
                </List>
            </SubTop>
            <HalfScreen show = {display} onClick = {showMenu}/>
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
const SubTop = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: #05668d;
    display: ${props => props.show};
    flex-direction: column;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    z-index: 200;
    position: fixed;
    text-align: left;
    opacity: 0.8;
    top: 0;
`
const List = styled.div`
    margin-top: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TextList = styled.div`
    && p {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5px;
    }

    && div {
        display: flex;
        align-items: center;
        border-top: 1px solid white;
    }

    && div:hover {
        background-color: white;
        color: #02c39a;
    }

    && .last {
        border-bottom: 1px solid white;
    }
`
const IconsList = styled.div`
    width: 100%;
    
    && ion-icon {
        margin-left: 5px;
        margin-bottom: 5px;
        font-size: 18px;
    }
`
const HalfScreen = styled.div`
    display: ${props => props.show};
    z-index: 200;
    position: fixed;
    background-color: white;
    opacity: 0.4;
    width: 50vw;
    height: 100vh;
    right: 0;
    top:0;
`