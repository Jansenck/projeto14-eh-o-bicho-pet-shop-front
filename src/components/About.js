import styled from "styled-components";

export default function About () {

    return (
        <Container>
            <h1>
                É o bicho é uma pet shop criada para você que ama o seu animal.
                Diversos produtos de alta qualidade e preço imbatível!
            </h1>
            <h1>
                Criada em 2008. Possui a missão de levar alegria para os nossos pets.
                Conte com a gente e os nossos produtos!
            </h1>
            <div>
                <ion-icon name="paw-outline"></ion-icon>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    width: 80vw;
    margin-bottom: 20px;
    color: white;
    background-color: orange;
    border-radius: 0px 10px 10px 10px;
    box-shadow: 1px 1px 1px grey;
    padding: 10px;

    && h1 {
        margin-bottom: 10px;
    }

    && div {
        width: 30px;
        margin: 10px auto;
    }

    && ion-icon {
        font-size: 30px;
        color: white;
    }
`