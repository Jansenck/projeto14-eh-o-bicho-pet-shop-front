import styled from "styled-components";
import Top from "../components/Top";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Sessions from "../components/Sessions";




export default function HomePage () {

    return (
        <>
            <Top/>
            <Container>
                <About>
                    <h1>
                        É o bicho é uma pet shop criada para você que ama o seu animal.
                        Diversos produtos de alta qualidade e preço imbatível!
                    </h1>
                    <h1>
                        Criada em 2008. Possui a missão de levar alegria para os nossos pets.
                        Conte com a gente e os nossos produtos!
                    </h1>
                    <div>
                        <ion-icon name="paw-outline"></ion-icon>
                    </div>
                </About>
                <Highlights/>
                <Sessions/>
                <Highlights/>
            </Container>
            <Footer/>
        </>
    )
}

const Container = styled.div`
    margin-top: 120px;
    margin-bottom: 120px;
`
const About = styled.div`
    margin: 0 auto;
    width: 80vw;
    margin-bottom: 20px;
    color: white;
    background-color: #02c39a;
    border-radius: 0px 10px 10px 10px;
    padding: 10px;

    && h1 {
        margin-bottom: 10px;
    }

    && div {
        width: 30px;
        margin: 10px auto;
    }

    && ion-icon {
        font-size: 30px;
        color: white;
    }
`