import styled from "styled-components";

const data = [
  {
    title: "Ração Royal Canin Maxi",
    subtitle: "Para Cães Adultos de Porte Grande 15kg",
    price: 391.59,
    description:
      " Indicada para cães; Ideal para pets de grande porte; Oferece todos nutrientes necessários para uma vida saudável; Proporciona maior aporte para os ossos e articulações; Contém fórmula enriquecida com ômega 3, Disponível em embalagem de 15 kg.",
    image: "https://static.petz.com.br/fotos/1660162896325.jpg",
    category: "dog",
  },
];

export default function ProductPage() {
  return (
    <div>
      <Header>Aqui vai o Header (comum a todas as páginas)</Header>
      {data.map((post) => (
        <ContentWrapper>
          <ProductTitle>{post.title}</ProductTitle>
          <SubTitle>{post.subtitle}</SubTitle>

          <img src={post.image} alt={post.title} />
          <Price>R$ {post.price}</Price>
          <Description>
            <h4>Descrição: </h4>
            <p>{post.description}</p>
          </Description>
        </ContentWrapper>
      ))}
      <Footer>Aqui vai o Footer (comum a todas as páginas)</Footer>
    </div>
  );
}

const ProductTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 7px;
  color: ${(props) => props.theme.lightgreen};
`;
const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 7px;
  color: ${(props) => props.theme.black};
`;

const Price = styled.h4`
  font-family: "Dosis", sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.darkblue};
`;

const Description = styled.div`
  h4 {
    font-weight: 700;
    margin-bottom: 5px;
  }

  p {
    line-height: 22px;
  }
`;

const Header = styled.header`
  height: 80px;
  width: 100vw;
  padding: 20px;
  color: ${(props) => props.theme.lightyellow};
  background: ${(props) => props.theme.darkblue};
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
  background: ${(props) => props.theme.lightgreen};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin: 100px 10px 150px 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;
