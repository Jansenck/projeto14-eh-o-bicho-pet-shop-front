import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ type, route, source }) {
  return (
    <Box>
      <Link to={`${route}`}>
        <img src={source} alt={type} />
        <h2>{type}</h2>
        <Shop>
          <p>SHOP</p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Shop>
      </Link>
    </Box>
  );
}

export default function Sessions() {
  const cardsData = [
    {
      type: "TODOS",
      route: "products",
      source:
        "https://img.freepik.com/fotos-gratis/lindo-retrato-de-animal-de-estimacao-de-um-pequeno-cao-e-gato_23-2149218509.jpg?w=1380&t=st=1663511580~exp=1663512180~hmac=9c17eaa747252cc9771e326d345929ac7dc9251bb79e81553c4b7831e271b0bf",
    },
    {
      type: "CÃES",
      route: "/products/dog",
      source:
        "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218452.jpg?w=1480&t=st=1663266957~exp=1663267557~hmac=b52c5e6bbd84f9ced4b9f3c83b851feccf070302874ac2eadd4a639b2276026c",
    },
    {
      type: "GATOS",
      route: "/products/cat",
      source:
        "https://img.freepik.com/fotos-gratis/gatinho-adoravel-com-parede-monocromatica-atras-dela_23-2148955144.jpg?w=1380&t=st=1663268100~exp=1663268700~hmac=e7657cbe75eb3303f11ffbea37edd196c869d1b390b667d585a86a6dc3dd9e6b",
    },
    {
      type: "PEIXES",
      route: "/products/fish",
      source:
        "https://t4.ftcdn.net/jpg/02/53/61/69/240_F_253616948_za22DUrpvoM6aBDyPZxXDXf1OVNZFhL4.jpg",
    },
  ];

  return (
    <Container>
      {cardsData.map((value, index) => (
        <Card
          key={index}
          type={value.type}
          route={value.route}
          source={value.source}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 0px auto;
  width: 80vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 80vw;
  height: 150px;
  margin: 10px 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  background-image: url("");
  box-shadow: 1px 1px 1px grey;

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
    font-weight: bold;
  }

  && p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: white;
  }
`;
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
`;
