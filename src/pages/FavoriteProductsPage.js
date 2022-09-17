import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import FavoriteProducts from "../components/favorites/FavoriteProducts";

export default function FavoriteProductsPage(){

    const navigate = useNavigate();

    return(
        <>
            <ComeBackHeader>
                <MdOutlineArrowBackIosNew onClick={() => navigate("/products")}/>
                <h2>Meus Favoritos</h2>
            </ComeBackHeader>
            <FavoriteProducts/>
        </>
    );
}

const ComeBackHeader  = styled.div`
    height: 8vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9E6B3;;
    color: #4A4A5A;
    svg{
        position: absolute;
        left: 5vw;
        top: auto;
        font-size: 25px;
        cursor: pointer;
    }
    h2{
        font-size: 18px;
        font-weight: 700;
    }

`;
