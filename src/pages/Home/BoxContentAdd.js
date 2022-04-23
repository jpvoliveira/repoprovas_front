import { Form } from '../../assets/FormComponents'
import styled from 'styled-components'
import { useState } from 'react'
import api from '../../services/api'

export default function BoxContentAdd() {
  const [name, setName] = useState('')
  const [teacher, setTeacher] = useState(0)
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState(0)

  let testData = { name, pdfUrl: url, categoryId: parseInt(category), teacherDisciplineId: parseInt(teacher) }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(testData)

    try {
      await api.addTest(testData)
      setName('')
      setUrl('') 
      setTeacher('')
      setCategory('') 
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <BoxAdd >
      <h1>Insira os dados da prova:</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
          required
        />
        <Input
          placeholder="Professor"
          onChange={(e) => setTeacher(e.target.value)}
          name="teacher"
          value={teacher}
          required
        />
        <Input
          placeholder="Categoria"
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
  height: 360px;
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