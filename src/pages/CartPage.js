import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";
import Cart from "../components/cart/Cart";

export default function CartPage(){

    const navigate = useNavigate();

    return(
        <>
            <ComeBackHeader>
                <MdOutlineArrowBackIosNew onClick={() => navigate("/products")}/>
                <h2>Carrinho</h2>
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
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9E6B3;;
    color: ##454545;
    svg{
        position: absolute;
        left: 5vw;
        top: auto;
        font-size: 25px;
        cursor: pointer;
    }
    h2{
        font-size: 1rem;
        font-weight: 700;
    }

`;