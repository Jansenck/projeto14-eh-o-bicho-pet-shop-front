import styled from "styled-components";
import Top from "../components/Top";

export default function HomePage () {

    return (
        <>
            <Top/>
            <Container>
                <Cover src = "https://t4.ftcdn.net/jpg/01/81/62/07/360_F_181620791_9W5pfwlMLajAavp7MnJOoEANziwbxc5w.jpg"/>
                <CoverText>Tudo o que seu pet precisa!</CoverText>
            </Container>
            
        </>
    )
}

const Container = styled.div`
    margin-top: 80px;
`
const Cover = styled.img`
    width: 100vw;
    position: relative;
`
const CoverText = styled.h1`
    position: absolute;
    width: 300px;
    font-size: 20px;
    height: 40px;
    top: 180px;
    left: 28px;
    color: #05668d;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #05668d;
`
