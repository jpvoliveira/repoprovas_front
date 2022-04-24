import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import ArrowDown from '../../assets/ArrowDown'
import ArrowUp from '../../assets/ArrowUp'
import api from '../../services/api'
import TokenContext from '../../contexts/tokenContext'
import { useNavigate } from 'react-router-dom'

export default function BoxContentTeacher() {
  const [list, setList] = useState(undefined)
  const [click, setClick] = useState(true)
  const { token } = useContext(TokenContext)
  const navigate = useNavigate();

  useEffect(() => {
    const promise = api.findTeacher(token)
    promise.then((res) => {
      setList(res.data)
    }).catch((error) => {
      const erro = error.response.data
      alert(erro)
      if (erro === 'Voce não esta logado') {
        navigate('/')
      }
    }
    )
  }, [token, navigate])

  if (!list) {
    return 'Loading...'
  }
  let listTeachers = []

  for (let i = 0; i < list.length; i++) {
    const element = list[i].teachersDisciplines.teachers.name;
    listTeachers.push(element)
  }

  let newListTeachers = listTeachers.filter(function (el, i) {
    return listTeachers.indexOf(el) === i;
  });

  return (
    <>
      {newListTeachers.map((item) => {
        return (
          <>
            <Box >
              <h1>{item}</h1>
              <div onClick={() => setClick(!click)}>
                {click ? <ArrowDown /> : <ArrowUp />}
              </div>
            </Box>
            {!click && <BoxExtend teacher={item} list={list} />}
          </>
        )
      })}
    </>
  )
}

function BoxExtend({ teacher, list }) {
  return (
    <Big>
      {list.map((item) => {
        console.log(item)
        if (item.teachersDisciplines.teachers.name === teacher) {
          return (
            <Conteiner>
              <h1>{item.categories.name}</h1>
              <div>
                <h2>{item.name}</h2>
                <p>({item.teachersDisciplines.disciplines.name})</p>
              </div>
            </Conteiner>
          )
        }
      })}
    </Big>
  )
}

const Box = styled.div`
  width: 100%;
  height: 56px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 19px;
`

const Conteiner = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 40px;
  padding-right: 20px;
  h1{
    font-weight: bold;
  }
  div{
    display: flex;
    align-items: center;
    gap: 7px;
  }
  p{
    color: grey;
    font-size: 12px;
  }
`
const Big = styled.div`
  margin-bottom: 20px;
`