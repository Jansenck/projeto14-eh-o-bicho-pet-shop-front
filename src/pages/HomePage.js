import styled from "styled-components";
import Top from "../components/Top";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage () {

    return (
        <>
            <Top/>
            <Container>
                <Sessions>
                    <Box>
                        <h2>CÃES</h2>
                        <Shop>
                            <p>SHOP</p>
                        </Shop>
                    </Box>
                    <Box>
                        <h2>GATOS</h2>
                        <Shop>
                            <p>SHOP</p>
                        </Shop>
                    </Box>
                    <Box>
                        <h2>COELHOS</h2>
                        <Shop>
                            <p>SHOP</p>
                        </Shop>
                    </Box>
                </Sessions>
            </Container>
        </>
    )
}

const Container = styled.div`
`
const Sessions = styled.div`
    margin: 80px auto;
    width: 80vw;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 100%;
    height: 150px;
    margin: 10px 0;
    background-color: rgba(0,0,0,0.1);
    border-radius: 5px;
    text-align: center;

    && h2 {
        margin-top: 90px;
        font-family: Arial, Helvetica, sans-serif;
        color: #02c39a;
    }
    
    && p {
        margin-top: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        color: grey;
    }
`
const Shop = styled.div`

`