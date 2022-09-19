import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Checkout from "../components/checkout/Checkout";

export default function CheckoutPages(){

    const navigate = useNavigate();

    return(
        <>
            <ComeBackHeader>
                <MdOutlineArrowBackIosNew onClick={() => navigate("/cart")}/>
                <h2>Pagamento</h2>
            </ComeBackHeader>
            <Checkout/>
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
    color: #454545;
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