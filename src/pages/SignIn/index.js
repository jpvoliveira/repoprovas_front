import { useState, useContext } from 'react'
import api from '../../services/api'
import { Form, Input, StyledLink } from '../../assets/FormComponents'
import { Box, Container, Button, Line } from './styled'
import Logo from '../../assets/Logo'
import { useNavigate } from 'react-router-dom'
import TokenContext from '../../contexts/tokenContext'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const {setToken} = useContext(TokenContext)

  async function handleSubmit(e) {
    e.preventDefault()
    const user = { email, password }

    try {
      const {data} = await api.login(user)
      setToken(data)
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
        <Button onClick={()=>alert("Opção indisponivel no momento :(")}>ENTRAR COM O GITHUB</Button>
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