import styled from "styled-components";
import Top from "../components/Top";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Sessions from "../components/Sessions";
import About from "../components/About";

export default function HomePage() {

  const highlightsData = [
    {image: "https://static.petz.com.br/fotos/1628689148983.jpg", title: "BIFINHO É O BICHO", 
    description: "Bifinho de frango. Altamente nutritivo e saboroso.",
    id: "63254996c94d48bff408dad2"},
    {image: "https://static.petz.com.br/fotos/1660162896325.jpg", title: "RAÇÂO PREMIUM", 
    description: "Ração de alta qualidade nutritiva. Rica em ômega 3 e ferro para o seu cão.",
    id: "63254996c94d48bff408dac0"}
  ]

  return (
    <>
      <Top />
      <Container>
        <About />
        <Highlights image = {highlightsData[0].image} title = {highlightsData[0].title} 
        description = {highlightsData[0].description} id = {highlightsData[0].id}/>
        <Sessions />
        <Highlights image = {highlightsData[1].image} title = {highlightsData[1].title} 
        description = {highlightsData[1].description} id = {highlightsData[1].id}/>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
`;
