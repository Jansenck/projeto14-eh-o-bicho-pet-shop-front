import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineStar, AiFillHeart } from "react-icons/ai";
import UserContext from "../../contexts/UserContext";
import { 
    deleteFavoriteProduct, 
    listFavoriteProducts 
} from "../../services/api";

export default function FavoriteProducts(){

    const { config } = useContext(UserContext);
    const [ favoriteProducts, setFavoriteProducts ] = useState([]);
    


    function InstallmentPrice(price){
        const productPrice = price?.price;
        let installment = (productPrice/3).toFixed(2); 
        installment = installment.replace(".", ",");
        return(
            <h2>em até <span>3x</span> de R${installment}</h2>
        );
    }
    
    function deleteFavoriteProducts(title){
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
        <Container numberFavoriteProducts={favoriteProducts.length}>
            {
                favoriteProducts?
                <Favorite>
                    {
                        favoriteProducts.map((product, index) => {
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
                                            </Installment>
                                        </ProductInfos>
                                    </Link>
                                    <FavoriteButton onClick={() => deleteFavoriteProducts(title)}>
                                        <AiFillHeart/>
                                    </FavoriteButton>
                                </Product>
                            );
                        })
                    }
                </Favorite>
                :
                <HaveNoFavorites>
                    <NoticeMessage>
                        <h2>Você ainda não adicionou nenhum produto como favorito...</h2>
                        <span>Basta clicar no coração do produto desejado.</span>
                    </NoticeMessage>
                </HaveNoFavorites>
            }
        </Container>
        
    );
}

const Container = styled.div`
    margin: 10vh 0;
    display: grid;
    grid-template-row: repeat(${(props) => props.numberFavoriteProducts}, 1fr);
`;
const Favorite = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1em;

`;
const Product = styled.div`
    display: flex;
    justify-content: center;
    aping-items: center;
    position: relative;
    a{
        display: grid;
        grid-template-columns: 2fr 3fr;
        height: 24vh;
        min-height: 210px;
        width: 90%;
        max-width: 590px;
        padding: 5%;
        border-bottom: 1px solid rgba(9,9,9,0.15);
        z-index: 0;
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
            font-size: 21px;
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
    justify-content: left;
    align-items: center;
    
`;
const FavoriteButton = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 100%;
    box-shadow: 0 3px 8px rgba(0,0,0, 0.18);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 26%;
    right: 12%;
    cursor: pointer;
    svg{
        color: ${(props) => props.theme.lightblue};
        font-size: 16px;
    }
`;
const HaveNoFavorites = styled.div`
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