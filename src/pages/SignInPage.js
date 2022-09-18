import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { postSignIn, handleForm } from "../services/api";
import { Input, Button, Text } from "../styles/SignIn&UpStyles";
import Logo from "../components/Logo";

export default function SignInPage() {
  
  const { userData, setUserData, config, setConfig } = useContext(UserContext);
  const [form, setForm] = useState({});
  const [load, setLoad] = useState("Entrar");
  const [disabled, setDisabled] = useState("");
  const [background, setBackground] = useState("#FFFFFF");
  const [color, setColor] = useState("#02c39a");
  const captureForm = (event) => handleForm({ name: event.target.name, value: event.target.value },form,setForm);
  const navigate = useNavigate();

  const inputData = [
    {placeholder: "Email", type: "email", name: "email", functionForm:  captureForm},
    {placeholder: "Senha", type: "password", name: "password", functionForm:  captureForm},
  ]

  function userLogin(event) {
    event.preventDefault();
    disabledForm();
    setTimeout(sendLogin, 1000);
  }

  async function sendLogin() {
    try {
      const response = await postSignIn(form);
      const { token, name, address, cpf} = response.data;
      const { email } = form;
      delete form.password

      localStorage.setItem("user", JSON.stringify({ ...form, token, name , address, cpf}));
      setUserData({ ...userData, email, token, name, address, cpf });
      setConfig({
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");
    } catch (error) {
      const status = error.response.status;
      enabledForm();

      if (status !== 500) {
        alert("Usuário ou senha inválidos.");
        return;
      }
      alert("Ops! Tivemos um problema e estamos trabalhando nisso.");
    }
  }

  function disabledForm() {
    setLoad(<ThreeDots color="#FFFFFF" height={80} width={80} />);
    setDisabled("disabled");
    setBackground("#02c39a");
    setColor("#FFFFFF");
  }

  function enabledForm() {
    setLoad("Entrar");
    setDisabled("");
    setBackground("#FFFFFF");
    setColor("#02c39a");
  }

  return (
    <>
      <Logo />
      <Container>
        <form onSubmit={userLogin}>
        {inputData.map((value, index) => <Input key = {index} placeholder = {value.placeholder} type = {value.type} name = {value.name}
          disabled = {disabled} background = {background} color = {color} onChange = {value.functionForm}/>)}
          <Button type="submit" disabled={disabled}>
            {load}
          </Button>
        </form>
        <Link to={"/signup"}>
          <Text>Primeira vez? Cadastre-se!</Text>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 140px auto;
  width: 327px;
`;
