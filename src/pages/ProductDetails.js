import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct, postAddtoCart } from "../services/api";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import { Button } from "../styles/SignIn&UpStyles";
import Footer from "../components/Footer";
import Top from "../components/Top";
import { TiHeartFullOutline } from "react-icons/ti";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const { config } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const promise = getSingleProduct(productId);

    promise.then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  async function AddtoCart(e) {
    e.preventDefault();

    try {
      await postAddtoCart(productId, config);
      alert("Produto adicionado ao carrinho com sucesso!");
    } catch (err) {
      const status = err.response.status;
      if (status === 401) {
        navigate("/signin");
        return;
      }
      alert("Ops! Tivemos um problema e estamos trabalhando nisso.");
    }
  }

  return (
    <div>
      <Top />
      <ContentWrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <img src={product.image} alt={product.title} />
        <Price>
          <span>R$ {product.price?.replace(".", ",")}</span>
          <Icon isActive={isActive}>
            <TiHeartFullOutline />
          </Icon>
        </Price>
        <BuyButton onClick={AddtoCart}>Adicionar ao Carrinho</BuyButton>

        <Description>
          <h4>Descrição: </h4>
          <p>{product.description}</p>
          <h2>
            <strong>Categoria: </strong>
            {product.category?.replace("dog", "Cachorro")}
          </h2>
        </Description>
      </ContentWrapper>
      <Footer />
    </div>
  );
}

const ProductTitle = styled.h1`
  margin: 120px 30px 7px 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: justify;
  color: ${(props) => props.theme.black};
`;

const Price = styled.h4`
  margin: 0 30px 40px 0;
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.darkblue};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Icon = styled.div`
  cursor: pointer;
  color: ${(props) =>
    props.isActive ? props.theme.red : props.theme.darkblue};
`;

const Description = styled.div`
  margin: 50px 30px 150px 0;

  h4 {
    font-weight: 700;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: solid 2px #028090;
  }

  h2 {
    margin-top: 20px;
  }

  p {
    line-height: 22px;
    text-align: justify;
  }
`;

const BuyButton = styled(Button)`
  width: 70%;
  margin: 20px auto;
  display: block;
`;

const ContentWrapper = styled.div`
  margin: 100px 10px 10px 25px;

  img {
    width: 100%;
    height: 100%;
  }
`;
