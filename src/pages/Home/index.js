import Logo from '../../assets/Logo'
import Logout from '../../assets/Logout'
import styled from 'styled-components'
import { useState } from "react"
import BoxContentAdd from "./BoxContentAdd"
import BoxContentCategory from "./BoxContentCategory"
import BoxContentTeacher from "./BoxContentTeacher"
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [filter, setFilter] = useState("category")
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('auth')
    navigate('/')
    window.location.reload()
  }

  return (
    <>
      <Header>
        <Logo />
        <div onClick={logout}>
          <Logout />
        </div>
      </Header>
      <Search>
        {filter === 'category' && <Input placeholder="Pesquisa por disciplina" />}
        {filter === 'teacher' && <Input placeholder="Pesquisa por professor(a)" />}
        {filter === 'add' && <FilterAdd></FilterAdd>}
        <Line />
        <FilterBox>
          <Button onClick={() => setFilter('category')} className={filter === 'category' && 'select'}>DISCIPLINAS</Button>
          <Button onClick={() => setFilter('teacher')} className={filter === 'teacher' ? 'big select' : 'big'}>PESSOA INSTRUTORA</Button>
          <Button onClick={() => setFilter('add')} className={filter === 'add' && 'select'}>ADICIONAR</Button>
        </FilterBox>
      </Search>
      <Contents>
        <Container>
          {filter === 'category' && <BoxContentCategory />}
          {filter === 'teacher' && <BoxContentTeacher />}
          {filter === 'add' && <BoxContentAdd />}
        </Container>
      </Contents>
    </>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 30px 50px;
`
const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #C4C4C4;
`

const FilterBox = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  display: flex;
  gap: 150px;
  .big{
    width: 160px;
  }
  .select{
    border: none;
    background-color: #1976D2;
    color: #E5E5E5;
  }
`

const Button = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px; 
  width: 119px;
  height: 36px;
  background-color: #E5E5E5;
  border: 1px solid #1976D2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #1976D2;
  
`

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
const FilterAdd = styled.div`
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
`

const Container = styled.div`
  width: 700px;
`
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
