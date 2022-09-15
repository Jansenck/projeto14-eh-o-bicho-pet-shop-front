import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getSingleProduct, selectProduct } from "../services/api";

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const { config } = useContext(UserContext);

  useEffect(() => {
    const promise = getSingleProduct(productId);

    promise.then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  async function AddtoCart(e) {
    e.preventDefault();

    try {
      await selectProduct(productId, config);
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
      {/* TODO:Alterar o Header */}
      <Header>Aqui vai o Header (comum a todas as páginas)</Header>

      <ContentWrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <SubTitle>{product.subtitle}</SubTitle>

        <img src={product.image} alt={product.title} />
        <Price>R$ {product.price?.toFixed(2).replace(".", ",")}</Price>
        <BuyButton onClick={AddtoCart}>Adicionar ao Carrinho</BuyButton>

        <Description>
          <h4>Descrição: </h4>
          <Separator></Separator>
          <p>{product.description}</p>
          <h2>
            <strong>Categoria:</strong>{" "}
            {product.category?.replace("dog", "cachorro")}
          </h2>
        </Description>
      </ContentWrapper>

      {/* TODO:Alterar o Footer */}
      <Footer>Aqui vai o Footer (comum a todas as páginas)</Footer>
    </div>
  );
}

const ProductTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
  margin-right: 20px;
  color: ${(props) => props.theme.darkblue};
`;
const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 7px;

  color: ${(props) => props.theme.black};
`;

const Price = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.darkblue};
`;

const Description = styled.div`
  margin-bottom: 150px;
  h4 {
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    line-height: 22px;
    margin-right: 30px;
    text-align: justify;
  }

  h2 {
    margin-top: 20px;
  }
`;

const Header = styled.header`
  height: 80px;
  width: 100vw;
  padding: 20px;
  color: ${(props) => props.theme.lightyellow};
  background: ${(props) => props.theme.black};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Footer = styled.footer`
  height: 100px;
  width: 100vw;
  padding: 20px;
  color: ${(props) => props.theme.lightyellow};
  background: ${(props) => props.theme.black};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin: 100px 10px 10px 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BuyButton = styled.button`
  height: 40px;
  display: block;
  width: calc(100vw - 150px);
  background-color: ${(props) => props.theme.lightgreen};
  margin: 40px auto 30px;
  font-size: 15px;
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const Separator = styled.div`
  border: solid 1px black;
  margin: 8px 30px 10px 0;
  background-color: ${(props) => props.theme.black};
`;
