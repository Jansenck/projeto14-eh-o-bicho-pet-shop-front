import styled from "styled-components";

const Input = styled.input`
  height: 46px;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #02c39a;
  outline: none;
  font-family: "Arial";
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: ${(props) => props.color};
  padding-left: 10px;
  box-sizing: border-box;
  background-color: ${(props) => props.background};

  &&::placeholder {
    font-family: "Arial";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: #02c39a;
    padding-left: 10px;
  }
`;
// TODO:Excluir e mudar o caminho de importação onde é utilizado
const Button = styled.button`
  margin-top: 10px;
  height: 46px;
  width: 100%;
  border-radius: 5px;
  background-color: #02c39a;
  color: #ffffff;
  font-family: "Arial";
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &&:hover {
    filter: brightness(1.1);
  }
`;

const Text = styled.p`
  font-family: "Arial";
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  margin-top: 20px;
  text-align: center;
  color: #02c39a;
`;

export { Input, Button, Text };
