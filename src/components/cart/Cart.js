import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { IoTrashBin } from "react-icons/io5"
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import UserContext from "../../contexts/UserContext";
import { deleteFavoriteProduct, getProductsInCart } from "../../services/api"

export default function Cart(){

    const { config } = useContext(UserContext);

    const [ productsInCart , setProductsInCart ] = useState([]);



    function calculateAmount(){
        let value = 0;
        productsInCart.forEach(product => {
            const { price } = product;
            value += parseFloat(price);
        });
        return value?.toFixed(2).replace(".", ",");
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

        const promise = getProductsInCart(config);
        promise.then((res) => {
            setProductsInCart(res.data);
        });

    }, [config]);

    return(
        <Container numberProductsInCart={productsInCart.length}>
            {
               productsInCart.length > 0?
               <>
                    <Products>
                        {
                            productsInCart.map((product, index) => {
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
                                                    <h1>R$ {price?.toFixed(2).replace(".", ",")}</h1>
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
                    <ResumeOrder>
                        <h3>Resumo do pedido</h3>
                        <ResumeQuantity>
                            <p>Produtos <span>({productsInCart.length} itens)</span></p>
                            <Total>{calculateAmount()}</Total>
                        </ResumeQuantity>
                        <ResumeTotal>
                            <p>Total</p>
                            <Total>{calculateAmount()}</Total>
                        </ResumeTotal>
                    </ResumeOrder>
                    <Footer>
                        <div>
                            <p>Total ({productsInCart.length} itens)</p>
                            <span>R$ {calculateAmount()}</span>
                        </div>
                        <ContinueToPay>Continuar</ContinueToPay>
                    </Footer>
               </>
                
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
    padding: 0 5% 20%;
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
const ResumeOrder = styled.div`
    margin-top: 5%;
    height: 25vh;
    display: grid;
    grid-template-rows: 1.5fr 2.2fr 3fr;
    font-size: .755rem;
    color: #5A5A5A;
    div{
        border-top: 1px solid #CCC;
        width: 90vw;
        padding: 5% 0;
        box-sizing: border-box;
    }
    h3{
        font-weight: 700;
        font-size: .9rem;
        padding: 5% 0;
    }
`;
const ResumeQuantity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span{
        font-weight: 700; 
    }
`;
const ResumeTotal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span{
        font-size: 1.2rem;
    }

`;
const Total = styled.span`
    color: ${(props) => props.theme.lightblue};
    font-weight: 700;
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
const Footer = styled.div`
    display: grid;
    grid-template-columns: 3fr 2.5fr;
    height: 10vh;
    width: 100vw;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    box-shadow: 2px -3px 4px 2px rgba(0,0,0,0.15);
    align-items: center;
    font-size: .75rem;
    line-height: 1.2rem;
    padding: 2% 4%;
    box-sizing: border-box;
    span{
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme.lightblue}
    }
`;
const ContinueToPay = styled.button`
    border: none;
    height: 90%;
    color: #FFF;
    background-color: #408b42;
    border-radius: 5px;
`;