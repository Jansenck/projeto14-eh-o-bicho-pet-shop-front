import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { IoTrashBin } from "react-icons/io5"
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import UserContext from "../../contexts/UserContext";
import { deleteFavoriteProduct, listFavoriteProducts, listProductsInCart } from "../../services/api"

export default function Cart(){

    const { config } = useContext(UserContext);

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
    },{
        title: "Biscoito Petz Clássico para Cães Adultos",
        price: "16.99",
        description: " Indicado para cães; Crocante e saboroso; Auxilia no controle do tártaro; Com hexametafosfato de sódio; Alimentos para cães adultos; Disponível em embalagem de 500g e 1kg.",
        image: "https://static.petz.com.br/fotos/1628688499151.jpg",
        category: "dog"
    },{
        title: "Bifinho Petz Strip Churrasco para Cães",
        price: "3.69",
        description: "",
        image: "https://static.petz.com.br/fotos/1628689273937.jpg",
        category: "dog"
    },{
        title: "Biscoito Petz Clássico para Cães Adultos",
        price: "16.99",
        description: " Indicado para cães; Crocante e saboroso; Auxilia no controle do tártaro; Com hexametafosfato de sódio; Alimentos para cães adultos; Disponível em embalagem de 500g e 1kg.",
        image: "https://static.petz.com.br/fotos/1628688499151.jpg",
        category: "dog"
      },{
        title: "Bifinho Petz Strip Churrasco para Cães",
        price: "3.69",
        description: "",
        image: "https://static.petz.com.br/fotos/1628689273937.jpg",
        category: "dog"
      },{
        title: "Bifinho Petz Strip Churrasco para Cães",
        price: "3.69",
        description: "",
        image: "https://static.petz.com.br/fotos/1628689273937.jpg",
        category: "dog"
      },{
        title: "Bifinho Petz Strip Churrasco para Cães",
        price: "3.69",
        description: "",
        image: "https://static.petz.com.br/fotos/1628689273937.jpg",
        category: "dog"
      },{
        title: "Bifinho Petz Strip Churrasco para Cães",
        price: "3.69",
        description: "",
        image: "https://static.petz.com.br/fotos/1628689273937.jpg",
        category: "dog"
      }];

    const [ productsInCart ,setFavoriteProducts ] = useState(null);

    function listProductInCart(){
        try {
            listProductsInCart(config);
        } catch (error) {
            console.log(error);
        }
    }
    function deleteProductInCart(title){
        const body = {title: title};
        try {
            deleteFavoriteProduct(config, body);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {

        const promise = listFavoriteProducts(config);
        promise.then((res) => {
            setFavoriteProducts(res.data);
        });

    }, [config]);

    return(
        <Container numberProductsInCart={products.length}>
            {
               products?
                <Products>
                    {
                        products.map((product, index) => {
                            const { title, price, image } = product;
                            return (
                                <Product key={index}>                                  
                                        <img src={image} alt={image} />
                                    <ProductInfos>
                                        <ProductHeader>
                                            <ProductTitle>
                                                {title}
                                            </ProductTitle>
                                            
                                            <TrashBin>
                                                <IoTrashBin onClick={() => deleteProductInCart(title)}/>
                                            </TrashBin>
                                        </ProductHeader>
                                        <hr></hr>
                                        <ValueAndQuantity>
                                                <h1>R$ {price.replace(".", ",")}</h1>
                                                <QuantityProducts>
                                                    <Minus>
                                                        <HiMinusSm/>
                                                    </Minus>
                                                    <Quantity>
                                                        <p>{1} <br></br> Qtd.</p>
                                                    </Quantity>
                                                    <Plus>
                                                        <HiPlusSm/>
                                                    </Plus>
                                                </QuantityProducts>
                                        </ValueAndQuantity>
                                    </ProductInfos>
                                </Product>
                            );
                        })
                    }
                </Products> 
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
    display: grid;
    padding: 0 5% 10%;
`;
const Products = styled.div`

    display: grid;
    grid-template-rows: repeat(1, 1fr);
    row-gap: 1em;

`;
const Product = styled.div`
    display: grid;
    grid-template-columns: .5fr 1fr;
    height: 14vh;
    min-height: 116px;
    width: 100%;
    max-width: 590px;
    padding: 2%;
    box-sizing: border-box;
    border: 1px solid rgba(9,9,9,0.15);
    border-radius: 8px;
    z-index: 0;
    img{
        display: grid;
        box-sizing: border-box;
        height: 100%;
        max-width: 100px;
        max-height: 100px;
    }
`;
const ProductHeader = styled.div`
    display: grid;
    grid-template-columns: 5fr .7fr;
    height: 100%;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: wrap;
`;
const ProductTitle = styled.div`
    height: 35px;
    font-size: .77rem;
    font-weight: 700;
    color: #5A5A5A;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const ProductInfos = styled.div`

    display: grid;
    grid-template-rows: 1fr .1fr .5fr;
    grid-auto-rows: minmax(100px, auto);
    line-height: 18px;
    align-items: center;
    text-align: left;
        h1{
            font-size: 21px;
            font-weight: 700;
            color: ${(props) => props.theme.darkblue}
        }
        hr{
            border-top: 1px solid #ccc;
            border: none;
            display: block;
            height: 1px;
            width: 100%;
            background-color: #ccc;
            font-size: .77rem;
            color: #4a4a4a;
            font-size: 1em;
            font-weight: 400;
            line-height: 1.5;
        }
`;
const ValueAndQuantity = styled.div`
    display: grid;
    grid-template-columns: 6fr 3.6fr;
    height: 100%;
`;
const QuantityProducts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    grid-gap: .2em;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.55rem;
        box-sizing: border-box;
        line-height: 10px;
        border-radius: 3px;
    }
    svg{
        font-size: 20px;
        color: #FFFFFF;
    }
`;
const Minus = styled.div`
    background-color: ${(props) => props.theme.lightblue};
`;
const Plus = styled.div`
    background-color: ${(props) => props.theme.lightblue};
`;
const Quantity = styled.div`
    background-color: #C4C4C4;
    border: 1px solid #ccc;
`;
const TrashBin = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 18px;
        color: ${(props) => props.theme.darkblue}
    }
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