import styled from "styled-components";
import Top from "../components/Top";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Sessions from "../components/Sessions";
import About from "../components/About";

export default function HomePage() {
  return (
    <>
      <Top />
      <Container>
        <About />
        <Highlights />
        <Sessions />
        <Highlights />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
`;
