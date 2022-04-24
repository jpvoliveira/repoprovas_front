import { Form } from '../../assets/FormComponents'
import styled from 'styled-components'
import { useState, useContext } from 'react'
import api from '../../services/api'
import TokenContext from '../../contexts/tokenContext'
import { useNavigate } from 'react-router-dom'

export default function BoxContentAdd() {
  const [name, setName] = useState('')
  const [teacher, setTeacher] = useState('')
  const [url, setUrl] = useState('')
  const [discipline, setDiscipline] = useState('')
  const [category, setCategory] = useState()
  const { token } = useContext(TokenContext)
  const navigate = useNavigate();

  let testData = { name, pdfUrl: url, categoryId: parseInt(category), teacherName: teacher, disciplineName: discipline }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(testData)

    const promise =  api.addTest(testData, token)
    promise.then((res) => {
      console.log(res)
      setName('')
      setUrl('')
      setTeacher('')
      setCategory('')
      setDiscipline('')
    }).catch((error) => {
      const erro = error.response.data
      alert(erro)
      if (erro === 'Voce não esta logado') {
        navigate('/')
      }
    }
    )
  }

  return (
    <BoxAdd >
      <h1>Insira os dados da prova:</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Materia"
          onChange={(e) => setDiscipline(e.target.value)}
          name="name"
          value={discipline}
          required
        />
        <Input
          placeholder="Conteudo da prova"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
          required
        />
        <Input
          placeholder="Nome do professor(a)"
          onChange={(e) => setTeacher(e.target.value)}
          name="teacher"
          value={teacher}
          required
        />
        <Input
          placeholder="Prova 1, 2 ou 3"
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          value={category}
          required
        />
        <Input
          placeholder="Url da prova"
          onChange={(e) => setUrl(e.target.value)}
          name="url"
          value={url}
          required
        />
        <button type="submit">ENVIAR</button>
      </Form>
    </BoxAdd>
  )
}

const Input = styled.input`
  all: unset;
  width: 400px;
  height: 40px;

  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;

  border: 1px solid #C4C4C4;
  padding: 15px 16px;
  border-radius: 5px;

  margin-bottom: 20px;
`

const BoxAdd = styled.div`
  width: 100%;
  height: 420px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  h1{
    margin: 20px;
    font-size: 20px;
  }
  form{
    gap: 0px;
    display: flex;
    align-items: center;
  }
`