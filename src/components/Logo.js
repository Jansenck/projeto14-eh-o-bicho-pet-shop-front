import styled from "styled-components";

export default function Logo () {

    return (
        <Container>
            <h1>É o bicho!</h1>
            <p>Pet Shop</p>
        </Container>
    )
}

const Container = styled.div`
    width: 200px;
    margin: 100px auto;
    font-family: 'Kalam', cursive;
    
    && h1 {
        font-size: 40px;
        color: #00a896;
    }

    && p {
        color: #05668d;
    }
    
`