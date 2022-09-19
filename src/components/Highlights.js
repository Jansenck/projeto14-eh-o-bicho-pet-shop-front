import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Highlights({ image, title, description, id }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Favorite>
        <img src={image} width={200} height={200} alt="products" />
        <h2>{title}</h2>
        <Description>
          <p>{description}</p>
        </Description>
        <Button
          onClick={() => {
            navigate(`/products/${id}`);
          }}
        >
          Ver produto
        </Button>
      </Favorite>
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;
const Favorite = styled.div`
  width: 80vw;
  min-height: 400px;
  background-color: none;
  border: 3px solid #02c39a;
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
`;
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
`;
const Description = styled.div`
  width: 50%;
  margin: 20px auto;
`;
