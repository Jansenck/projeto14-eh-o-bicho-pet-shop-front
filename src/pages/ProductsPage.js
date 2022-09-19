import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/api";
import styled from "styled-components";
import Footer from "../components/Footer";
import Top from "../components/Top";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = getProducts();

    promise.then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Top />
      <Banner>
        <img
          src="https://images2.imgbox.com/d4/70/JcaMrf3Q_o.png"
          alt="Setembro Vermelho"
        />
      </Banner>
      <Menu>
        <h1>CÃES</h1> <h1>GATOS</h1> <h1>PEIXES</h1>
      </Menu>

      {products.length === 0 ? (
        ""
      ) : (
        <ContentWrapper>
          {products.map(product => (
            <ProductsWrapper
              onClick={() => {
                navigate(`/products/${product._id}`);
              }}
            >
              <img src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>

              <Price>
                <span>R$ {product.price?.toFixed(2).replace(".", ",")}</span>
              </Price>
            </ProductsWrapper>
          ))}
        </ContentWrapper>
      )}
      <Footer />
    </>
  );
}

const ProductsWrapper = styled.div`
  margin: 0 20px 10px;
  width: 120px;
  height: 185px;
  padding: 10px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  margin: 30px 20px 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
  }
`;

const ProductTitle = styled.h6`
  height: 33px;
  text-align: center;
  color: ${(props) => props.theme.black};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.h4`
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.darkblue};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Banner = styled.div`
  margin-top: 85px;
  box-shadow: 8px 2px 4px 2px rgba(0, 0, 0, 0.1);
  img {
    width: 100vw;
  }
`;

const Menu = styled.div`
  height: 40px;
  background-color: ${(props) => props.theme.lightyellow};
  color: ${(props) => props.theme.darkblue};
  font-weight: 700;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
