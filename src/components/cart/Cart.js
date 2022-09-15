import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineStar, AiFillHeart } from "react-icons/ai";

export default function Cart(){

    const products = [{
        title: "Biscoito Petz Clássico para Cães Adultos",
        price: "16.99",
        description: " Indicado para cães; Crocante e saboroso; Auxilia no controle do tártaro; Com hexametafosfato de sódio; Alimentos para cães adultos; Disponível em embalagem de 500g e 1kg.",
        image: "https://static.petz.com.br/fotos/1628688499151.jpg",
        category: "dog"
      }, {
        title: "Bifinho Petz Strip Churrasco para Cães",
        price: "3.69",
        description: "",
        image: "https://static.petz.com.br/fotos/1628689273937.jpg",
        category: "dog"
      },
      {
        title: "Snacks Petz Assados Ômega 3 para Cães Adultos Sabor Salmão e Romã 150g",
        price: "10.49",
        description: " Indicado para cães; Sabor de salmão e romã; Snacks integral; Com prebióticos; Antioxidantes naturais; Fonte de ômega 3; Livre de transgênicos; Alimentos para cães adultos; Disponível em embalagem de 150g.",
        image: "https://static.petz.com.br/fotos/1628688839662.jpg",
        category: "dog"
    }];

    function InstallmentPrice({price}){
        let installment = (price/3).toFixed(2); 
        installment = installment.replace(".", ",");
        return(
            <h2>em até <span>3x</span> de R${installment}</h2>
        );
    }
    
    return(
        <Container numberItemsInCart={products.length}>
            {
                products?
                <ProductsInCart>
                    {
                        products.map((product, index) => {
                            const { title, price, image } = product;
                            return (
                                <Product key={index}>
                                    <Link to="/">
                                        <Image>
                                            <img src={image} alt={image} />
                                        </Image>
                                        <ProductInfos>
                                            <h2>{title}</h2>
                                            <Rating>
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                            </Rating>
                                            <h1>R$ {price.replace(".", ",")}</h1>
                                            <Installment>
                                                <InstallmentPrice price={price} />
                                                <FavoriteButton>
                                                    <AiFillHeart/>
                                                </FavoriteButton>
                                            </Installment>
                                        </ProductInfos>
                                    </Link>
                                </Product>
                            );
                        })
                    }
                </ProductsInCart>
                :
                <EmptyCart>
                    <NoticeMessage>
                        <h2>Você ainda não adicionou nenhum produto como favorito...</h2>
                        <span>Basta clicar no coração do produto desejado.</span>
                    </NoticeMessage>
                </EmptyCart>
            }
        </Container>
        
    );
}

const Container = styled.div`
    margin: 10vh 0;
    display: grid;
    grid-template-row: repeat(${(props) => props.numberItemsInCart}, 1fr);
`;
const ProductsInCart = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1em;

`;
const Product = styled.div`
    display: flex;
    justify-content: center;
    aping-items: center;
    a{
        display: grid;
        grid-template-columns: 2fr 3fr;
        height: 24vh;
        min-height: 210px;
        width: 90%;
        max-width: 590px;
        padding: 5%;
        border-bottom: 1px solid rgba(9,9,9,0.15);
    }

`;
const Image = styled.div`
    
    display: grid;
    justify-content: center;
    align-items: center;

        img{
            height: 120px;
            width: 120px;
        }
`;
const ProductInfos = styled.div`

    display: grid;
    grid-template-rows: 2fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    line-height: 18px;
    align-items: center;
    text-align: left;
        h1{
            font-size: 20px;
            font-weight: 700;
            color: ${(props) => props.theme.darkblue}
        }
        h2{
            font-size: 14px;
            font-weight: 700;
            color: #5A5A5A;
        }
`;
const Rating = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 19px;
    svg{
        color: #ffd538;
    }
`;
const Installment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    svg{
        color: ${(props) => props.theme.darkblue};
    }
`;
const FavoriteButton = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 100%;
    box-shadow: 0 3px 8px rgba(0,0,0, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EmptyCart = styled.div`
    width: 90%;
    color: #262626;
`;
const NoticeMessage = styled.div`
    height: 15vh;
    width: 100vw;
    display: grid;
    grid-template-row: repeat(2, 1fr);
    padding: 3%;
    box-sizing: border-box;
    h2{
        display: block;
        font-size: 18px;
        text-align: center;
        line-height: 21px;
    }
    span{
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
        text-align: center;
    }
`;