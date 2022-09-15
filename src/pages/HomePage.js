import styled from "styled-components";
import Top from "../components/Top";

export default function HomePage () {

    return (
        <>
            <Top/>
            
            <Container>
                {/*<Cover src = "https://t4.ftcdn.net/jpg/01/81/62/07/360_F_181620791_9W5pfwlMLajAavp7MnJOoEANziwbxc5w.jpg"/>*/}
            </Container>
        </>
    )
}

const Container = styled.div`
`
const Cover = styled.img`
    width: 100vw;
`
