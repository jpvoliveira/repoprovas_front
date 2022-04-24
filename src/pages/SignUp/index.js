import { useState } from 'react'
import api from '../../services/api'
import { Form, Input, StyledLink } from '../../assets/FormComponents'
import { Box, Container, Button, Line } from './styled'
import Logo from '../../assets/Logo'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== password1) {
      alert("As senhas devem ser iguais")
      setPassword("")
      setPassword1("")
      return;
    }

    const user = { email, password }

    try {
      await api.register(user)
      navigation('/')
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Box>
      <Container>
        <Logo />
        <h1>Cadastro</h1>
        <Button onClick={() => alert("Opção indisponivel no momento :(")}>ENTRAR COM O GITHUB</Button>
        <Line></Line>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            required
          />
          <Input
            placeholder="Confirme sua senha"
            type="password"
            onChange={(e) => setPassword1(e.target.value)}
            name="password"
            value={password1}
            required
          />
          <div>
            <StyledLink to="/sign-in">Já possuo cadastro</StyledLink>
            <button type="submit">CADASTRAR</button>
          </div>
        </Form>
      </Container>
    </Box>
  )
}