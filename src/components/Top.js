import styled from "styled-components";
//import { AiOutlineShoppingCart } from "react-icons/fa"
import { FaBeer } from 'react-icons/fa';
//import { IoPersonOutline } from 'react-icons/fa';
import { Link } from "react-router-dom"

export default function Top () {

    return (
        <Container>
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

const LogoText = styled.h1`
    font-size: 30px;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 10px;
`

const Icons = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
`