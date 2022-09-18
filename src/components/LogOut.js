import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom"
import { deleteSession } from "../services/api";

export default function LogOut ({displayLogOut, setDisplayLogOut}) {

    
    const [exit, setExit] = useState("inline")
    const { userData, setUserData, config } = useContext(UserContext);

    async function logOut() {
        try {
            await deleteSession(config)
        } catch (error) {
            console.log(error)
        }
        localStorage.removeItem("user")
        setDisplayLogOut("none")
        setExit("none")
        setUserData(null)
    }

    return (
        <Container show = {displayLogOut}>
            {userData? "" : <Link to = {"/signin"}><LogOutText>Entrar</LogOutText></Link>}
            {userData? "" : <Line/>}
            {userData? "" : <Link to = {"/signup"}><LogOutText>Cadastrar</LogOutText></Link>}
            {userData? <LogOutSair onClick = {logOut} exit = {exit}>Sair</LogOutSair> : ""}
        </Container>
    )
}

const Container = styled.div`
    display: ${props => props.show};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: orange;
    position: absolute;
    left: -26px;
    top: 60px;
    width: 80px;
    min-height: 40px;
    max-height: 70px;
    border-radius: 5px;
    animation: animationExit 0.5s;

    @keyframes animationExit {
        from {
            margin-top: -10px;
        }
        to {
            margin-top: 0px;
        }
    }
`
const LogOutText = styled.p`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin: 5px 0;
    font-weight: 500;
`
const LogOutSair = styled(LogOutText)`
    display: ${props => props.exit};
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid white;
`