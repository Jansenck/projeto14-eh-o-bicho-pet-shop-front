import styled from "styled-components";

export default function Footer () {

    return (
        <Container>
            <Phone>
                <ion-icon name="call-outline"></ion-icon>
                <p>2609-4558</p>
            </Phone>
            <Line/>
            <Adress>
                Rua Dr. Felipe Ribeiro, número 478, Rio de Janeiro, RJ. 
            </Adress>
            <Line/>
            <Social>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-whatsapp"></ion-icon>
            </Social>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #05668d;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Adress = styled.p`
    width: 33%;
    font-size: 14px;
    color: white;
    text-align: center;
    padding-top: 10px;
    line-height: 15px;
    
`
const Phone = styled.div`
    color: white;
    height: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;

    && ion-icon {
        font-size: 20px;
        margin-bottom: 10px;
    }

    && p {
        font-size: 12px;
    }
`
const Social = styled.div`
    font-size: 20px;
    color: white;
    
    width: 33%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    && ion-icon {
        margin: 4px 0;
    }
`
const Line = styled.div`
    width: 1px;
    height: 20px;
    
`