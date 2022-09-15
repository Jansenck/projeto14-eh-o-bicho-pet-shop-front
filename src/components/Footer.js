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
    width: 120px;
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
    margin-left: 10px;

    && ion-icon {
        margin-left: 40%;
        font-size: 20px;
    }

    && p {
        font-size: 14px;
    }
`
const Social = styled.div`
    font-size: 20px;
    color: white;
    margin-right: 10px;

    && ion-icon {
        margin-left: 5px;
    }
`
const Line = styled.div`
    width: 1px;
    height: 20px;
    border-right: 1px solid white;
`