import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Cart from "../components/cart/Cart";

export default function CartPage(){

    return(
        <>
            <ComeBackHeader>
                <MdOutlineArrowBackIosNew/>
                <h2>Meus Favoritos</h2>
            </ComeBackHeader>
            <Cart/>
        </>
    );
}

const ComeBackHeader  = styled.div`
    height: 8vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
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
    }
    h2{
        font-size: 18px;
        font-weight: 700;
    }

`;
