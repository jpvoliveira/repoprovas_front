import { useState } from 'react'
import api from '../../services/api'
import { Form, Input, StyledLink } from '../../assets/FormComponents'
import { Box, Container, Button, Line } from './styled'
import Logo from '../../assets/Logo'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    const user = { email, password }

    try {
      await api.login(user)
      navigation('/home')
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Box>
      <Container>
        <Logo />
        <h1>Login</h1>
        <Button>ENTRAR COM O GITHUB</Button>
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
          <div>
            <StyledLink to="/sign-up">Não possuo cadastro</StyledLink>
            <button type="submit">ENTRAR</button>
          </div>
        </Form>
      </Container>
    </Box>
  )
}