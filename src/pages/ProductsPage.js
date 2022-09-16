import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../services/api";

// const products = [
//   {
//     title:
//       "Snacks Petz Assados Ômega 3 para Cães Adultos Sabor Salmão e Romã 150g",
//     price: 10.49,
//     description:
//       " Indicado para cães; Sabor de salmão e romã; Snacks integral; Com prebióticos; Antioxidantes naturais; Fonte de ômega 3; Livre de transgênicos; Alimentos para cães adultos; Disponível em embalagem de 150g.",
//     image: "https://static.petz.com.br/fotos/1628688839662.jpg",
//     category: "dog",
//   },
//   {
//     title: "Ração Royal Canin Maxi",
//     subtitle: "Para Cães Adultos de Porte Grande 15kg",
//     price: 391.59,
//     description:
//       " Indicada para cães; Ideal para pets de grande porte; Oferece todos nutrientes necessários para uma vida saudável; Proporciona maior aporte para os ossos e articulações; Contém fórmula enriquecida com ômega 3, Disponível em embalagem de 15 kg.",
//     image: "https://static.petz.com.br/fotos/1660162896325.jpg",
//     category: "dog",
//   },
//   {
//     title: "Poste Arranhador Petz para Gatos - Cores Sortidas",
//     price: 99.99,
//     description:
//       " Indicado para gatos; Madeira de excelente qualidade; Encapado com pelúcia; Sisal e uma corda com uma bolinha para uma melhor distração e divertimento do seu pet; Ideal para distrair, interagir, brincar, arranhar e combater o stress do seu felino; Proporciona o desgaste natural das garras do gato; Horas de diversão, interação para seu gato; Divertido até mesmo quando ele estiver sozinho; Evita que ele arranhe ou estrague seus móveis ou objetos de sua casa, Disponível em embalagem com 1 unidade.",
//     image: "https://static.petz.com.br/fotos/1608212202034.jpg",
//     category: "cat",
//   },
// ];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = getProducts();

    promise.then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      {/* TODO:Alterar o Header */}
      <Header>Aqui vai o Header (comum a todas as páginas)</Header>

      {products.length === 0 ? (
        ""
      ) : (
        <ContentWrapper>
          {products.map((product) => (
            <ProductsWrapper>
              <ProductTitle>{product.title}</ProductTitle>
              <img src={product.image} alt={product.title} />
              <Price>
                <span>R$ {product.price?.toFixed(2).replace(".", ",")}</span>
              </Price>
            </ProductsWrapper>
          ))}
        </ContentWrapper>
      )}

      {/* TODO:Alterar o Footer */}
      <Footer>Aqui vai o Footer (comum a todas as páginas)</Footer>
    </>
  );
}

const ProductsWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: purple;
  margin: 50px;
`;

const ContentWrapper = styled.div`
  background-color: green;
  margin: 100px 10px 10px 25px;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100px;
    height: 100px;
  }
`;

const ProductTitle = styled.h6`
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

const Header = styled.header`
  height: 80px;
  width: 100vw;
  padding: 20px;
  color: ${(props) => props.theme.lightyellow};
  background-color: ${(props) => props.theme.darkblue};
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
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.lightyellow};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
