import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp, handleForm } from "../services/api";
import { Input, Button, Text } from "../styles/SignIn&UpStyles";
import Logo from "../components/Logo";

export default function SignUp() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const [load, setLoad] = useState("Cadastrar");
  const [disabled, setDisabled] = useState("");
  const [background, setBackground] = useState("#FFFFFF");
  const [color, setColor] = useState("#02c39a");

  async function userRegistration(event) {
    event.preventDefault();
    disabledForm();
    setTimeout(sendRegistration, 1000);
  }

  async function sendRegistration() {
    const { name, password, confirmPassword } = form;

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

    try {
      await postSignUp(form);
      navigate("/");
    } catch (error) {
      enabledForm();
      const status = error.response.status;
      if (status === 409) {
        alert("Já existe um usuário com esse email");
        return;
      }
      if (status === 422) {
        alert(
          "Preencha os campos corretamente. O nome deve conter no máximo 15 caracteres"
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
          <Input
            placeholder="Nome"
            type="text"
            name="name"
            required
            disabled={disabled}
            background={background}
            color={color}
            onChange={(event) =>
              handleForm(
                { name: event.target.name, value: event.target.value },
                form,
                setForm
              )
            }
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            required
            disabled={disabled}
            background={background}
            color={color}
            onChange={(event) =>
              handleForm(
                { name: event.target.name, value: event.target.value },
                form,
                setForm
              )
            }
          />
          <Input
            placeholder="Endereço"
            type="text"
            name="address"
            required
            disabled={disabled}
            background={background}
            color={color}
            onChange={(event) =>
              handleForm(
                { name: event.target.name, value: event.target.value },
                form,
                setForm
              )
            }
          />
          <Input
            placeholder="Cpf (somente números)"
            type="text"
            name="cpf"
            required
            disabled={disabled}
            background={background}
            color={color}
            onChange={(event) =>
              handleForm(
                { name: event.target.name, value: event.target.value },
                form,
                setForm
              )
            }
          />
          <Input
            placeholder="Senha"
            type="password"
            name="password"
            required
            disabled={disabled}
            background={background}
            color={color}
            onChange={(event) =>
              handleForm(
                { name: event.target.name, value: event.target.value },
                form,
                setForm
              )
            }
          />
          <Input
            placeholder="Confirme a senha"
            type="password"
            name="confirmPassword"
            required
            disabled={disabled}
            background={background}
            color={color}
            onChange={(event) =>
              handleForm(
                { name: event.target.name, value: event.target.value },
                form,
                setForm
              )
            }
          />
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