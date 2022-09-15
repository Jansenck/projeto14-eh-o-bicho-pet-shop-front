import styled from "styled-components";
import Top from "../components/Top";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"


function Card({type, route, source}) {

    return (
        <Box>
            <img src = {source} width = {250}/>
            <h2>{type}</h2>
            <Link to = {`${route}`}>
                <Shop>
                    <p>SHOP</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </Shop>
            </Link>
        </Box>
    )
}


export default function HomePage () {

    return (
        <>
            <Top/>
            <Container>
                <Highlights>
                    <Favorite>
                        <img src = "https://static.petz.com.br/fotos/1660162942086.jpg" width = {200} height = {200}/>
                        <h2>RAÇÃO PREMIUM</h2>
                        <Description>
                            <p>Ração de alta qualidade nutritiva. Rica em ômega 3 e ferro para o seu cão.</p>
                        </Description>
                        <Button>
                            Ver produto
                        </Button>
                    </Favorite>
                </Highlights>
                <Sessions>
                    <Card type = {"CÃES"} route = {"dogs"} source = {"https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218452.jpg?w=1480&t=st=1663266957~exp=1663267557~hmac=b52c5e6bbd84f9ced4b9f3c83b851feccf070302874ac2eadd4a639b2276026c"}/>
                    <Card type = {"GATOS"} route = {"cats"} source = {"https://img.freepik.com/fotos-gratis/gatinho-adoravel-com-parede-monocromatica-atras-dela_23-2148955144.jpg?w=1380&t=st=1663268100~exp=1663268700~hmac=e7657cbe75eb3303f11ffbea37edd196c869d1b390b667d585a86a6dc3dd9e6b"}/>
                    <Card type = {"PEIXES"} route = {"fish"} source = {"https://t4.ftcdn.net/jpg/02/53/61/69/240_F_253616948_za22DUrpvoM6aBDyPZxXDXf1OVNZFhL4.jpg"}/>
                </Sessions>
            </Container>
            <Footer/>
        </>
    )
}

const Container = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
`
const Sessions = styled.div`
    margin: 0px auto;
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
    background-image: url("");

    && img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    && h2 {
        margin-top: -50px;
        margin-bottom: 10px;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        position: relative;
    }
    
    && p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        color: white;
    }
`
const Shop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60px;
    margin: 0 auto;

    && ion-icon {
        font-size: 12px;
        color: orange;
    }
`
const Highlights = styled.div`
    width: 80vw;
    margin: 0 auto;
    margin-top: 100px;
`
const Favorite = styled.div`
    margin-top: 80px;
    width: 80vw;
    min-height: 400px;
    background-color: none;
    border: 1px solid #02c39a;
    border-radius: 5px;
    text-align: center;

    && h2 {
        color: #02c39a;
        padding-top: 20px;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    && p {
        color: #02c39a;
        width: 100%;
    }

`
const Button = styled.div`
    width: 120px;
    height: 30px;
    border: 2px solid #02c39a;
    background-color: none;
    color: #02c39a;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const Description = styled.div`
    width: 50%;
    margin: 20px auto;
`