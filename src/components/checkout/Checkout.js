import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { listCheckoutProducts } from "../../services/api";
import UserContext from "../../contexts/UserContext";

export default function Checkout(){

    const { config } = useContext(UserContext);

    const [ checkoutProducts, setCheckoutProducts ] = useState([]);

    useEffect(() => {
        const promise = listCheckoutProducts(config);
        promise.then((res) => {
            setCheckoutProducts(res.data);
        });
    });

    function calculateAmount(){
    let value = 0;
    checkoutProducts.forEach(product => {
        const { price } = product;
        value += parseFloat(price);
    });
    return value.toFixed(2).replace(".", ",");
    }
    function calculateShipment(){
        let value = 0;
        checkoutProducts.forEach(product => {
            const { price } = product;
            value += parseFloat(price);
        });
        value = value*0.1;
        return value.toFixed(2).replace(".", ",");
    }
    function calculateTotal(){

        let amount = parseFloat(calculateAmount().replace(",","."));
        let shipment = parseFloat(calculateShipment().replace(",","."));
        const total = amount + shipment;      
        return total.toFixed(2).replace(".",",");
    }

    return(
        <>
            <Container quantity={checkoutProducts.length}>
                <DeliverySession>
                    <h1>Endereço da entrega</h1>
                    <DeliveryInfos>
                        <h2>Monguinho</h2>
                        <DeliveryAddress>
                            <p>nome da rua</p>
                            <p>Bairro</p>
                            <p>CEP</p>
                        </DeliveryAddress>
                    </DeliveryInfos>
                </DeliverySession>
                <ResumeOrder>
                    <h3>Resumo do pedido</h3>
                    <ResumeProducts>
                    {
                        checkoutProducts.map((product, index) => {
                            const { title, price } = product;
                            return(
                                <div key={index}>
                                    <p>{title}</p>
                                    <p>{price}</p>
                                </div>
                            )
                        })
                    }                      
                    </ResumeProducts>
                    <ShipmentTo>
                        <p>Entrega para <span>13566-590</span></p>
                        <span>R$ {calculateShipment()}</span>
                    </ShipmentTo>
                    <DeliveryTime>
                        <p>Prazo para entrega</p>
                        <span>em até 6 dias úteis</span>
                    </DeliveryTime>
                    <ResumeTotal>
                        <p>Total</p>
                        <Total>{calculateTotal()}</Total>
                    </ResumeTotal>
                </ResumeOrder>
            </Container>
            <Footer>
                <div>
                    <p>Total ({checkoutProducts.length} itens)</p>
                    <span>R$ {calculateTotal()}</span>
                </div>
                <ContinueToPay>Finalizar compra</ContinueToPay>
            </Footer>
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20% 5%;
    box-sizing: border-box;
    margin-bottom: 15%;
`;
const DeliverySession = styled.div`
`;
const DeliveryInfos = styled.div`
    height: 20vh; 
    display: grid;
    grid-template-row: 1fr 1.6fr;
    align-items: center;
    border: 1px solid #CCC;
    border-radius: 5px;
    margin-top: 5%;
    padding: 3%;
    h2{
        font-size: 1.2rem;
        color: ${(props) => props.theme.lightblue}
    }
`;
const DeliveryAddress = styled.div`
    font-size: .7rem;
    color: #4a4a4a;
    line-height: 1.5;
`;
const ResumeOrder = styled.div`
    height: 25vh;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: .755rem;
    color: #5A5A5A;
    div{
        border-top: 1px solid #CCC;
        width: 100%;
        padding: 5% 0%;
        box-sizing: border-box;
    }
    h3{
        font-weight: 700;
        font-size: .9rem;
        padding: 5% 0;
    }
`;
const ResumeProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
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
const ShipmentTo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span{
        font-weight: 700; 
    }

`;
const DeliveryTime = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span{
        font-weight: 700; 
    }
`;
const Total = styled.span`
    color: ${(props) => props.theme.lightblue};
    font-weight: 700;
`;
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    width: 40%;
    color: #FFF;
    background-color: #408b42;
    border-radius: 5px;
`;
