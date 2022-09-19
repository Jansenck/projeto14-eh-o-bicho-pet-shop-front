import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp, handleForm } from "../services/api";
import { Input, Button, Text } from "../styles/SignIn&UpStyles";
import Logo from "../components/Logo";

export default function SignUp() {

  const [form, setForm] = useState({});
  const [load, setLoad] = useState("Cadastrar");
  const [disabled, setDisabled] = useState("");
  const [background, setBackground] = useState("#FFFFFF");
  const [color, setColor] = useState("#02c39a");
  const captureForm = (event) => handleForm({ name: event.target.name, value: event.target.value },form,setForm);
  const navigate = useNavigate();

  const inputData = [
    {placeholder: "Nome", type: "text", name: "name", functionForm:  captureForm},
    {placeholder: "Email", type: "email", name: "email", functionForm:  captureForm},
    {placeholder: "Endereço", type: "text", name: "address", functionForm:  captureForm},
    {placeholder: "CEP (Somente números)", type: "text", name: "cep", functionForm:  captureForm},
    {placeholder: "CPF (Somente números)", type: "text", name: "cpf", functionForm:  captureForm},
    {placeholder: "Senha", type: "password", name: "password", functionForm:  captureForm},
    {placeholder: "Confirme sua senha", type: "password", name: "confirmPassword", functionForm:  captureForm}
  ]

  async function userRegistration(event) {
    event.preventDefault();
    disabledForm();
    setTimeout(sendRegistration, 1000);
  }

  async function sendRegistration() {
    const { name, password, confirmPassword, cpf, cep} = form;
    console.log(form)

    if (!isNaN(Number(name))) {
      alert("Digite um nome válido");
      enabledForm();
      return;
    }
    if (password !== confirmPassword) {
      alert("Confirme sua senha corretamente");
      enabledForm();
      return;
    }
    if(cpf.length != 11) {
      alert("Digite um cpf válido")
      enabledForm();
      return
    }
    if(cep.length != 8) {
      alert("Digite um cep válido")
      enabledForm();
      return
    }

    try {
      await postSignUp(form);
      navigate("/signin");
    } catch (error) {
      enabledForm();
      const status = error.response.status;
      if (status === 409) {
        alert("Já existe um usuário com esse email ou cpf");
        return;
      }
      if (status === 422) {
        alert(
          "O nome deve conter no máximo 15 caracteres e os dados devem ser válidos"
        );
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
    setLoad("Cadastrar");
    setDisabled("");
    setBackground("#FFFFFF");
    setColor("#000000");
  }

  return (
    <>
      <Logo />
      <Container>
        <form onSubmit={userRegistration}>
          {inputData.map((value, index) => <Input key = {index} placeholder = {value.placeholder} type = {value.type} name = {value.name}
          disabled = {disabled} background = {background} color = {color} onChange = {value.functionForm}/>)}
          <Button type="submit" disabled={disabled}>
            {load}
          </Button>
        </form>
        <Link to={"/signin"}>
          <Text>Já tem uma conta? Entre agora!</Text>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 80px auto;
  width: 327px;
`;