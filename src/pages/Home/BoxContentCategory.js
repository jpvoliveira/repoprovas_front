import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import ArrowDown from '../../assets/ArrowDown'
import ArrowUp from '../../assets/ArrowUp'
import api from '../../services/api'
import TokenContext from '../../contexts/tokenContext'
import { useNavigate } from 'react-router-dom'

export default function BoxContentCategory() {
  const [click, setClick] = useState(true)
  const [list, setList] = useState(undefined)
  const { token } = useContext(TokenContext)
  const navigate = useNavigate();

  useEffect(() => {
    const promise = api.findCategory(token)
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
  }
    , [navigate, token])

  if (!list) {
    return 'Loading...'
  }
  let listCategory = []
  for (let i = 0; i < list.length; i++) {
    const element = list[i].teachersDisciplines.disciplines.terms.number;
    listCategory.push(element)
  }

  let newListCategory = listCategory.filter(function (el, i) {
    return listCategory.indexOf(el) === i;
  });

  return (
    <>
      {newListCategory.map((item) => {
        return (
          <>
            <Box >
              <h1>{item} PERÍODO</h1>
              <div onClick={() => setClick(!click)}>
                {click ? <ArrowDown /> : <ArrowUp />}
              </div>
            </Box>
            {!click && <BoxExtend category={item} list={list} />}
          </>
        )
      })}
    </>
  )
}

function BoxExtend({ category, list }) {
  return (
    <Big>
      {list.map((item) => {
        if (item.teachersDisciplines.disciplines.terms.number === category) {
          return (
            <>
              <CategoryBox>
                <p>{item.teachersDisciplines.disciplines.name}</p>
              </CategoryBox>
              <Conteiner>
                <h1>{item.categories.name}</h1>
                <div>
                  <h2>{item.name}</h2>
                  <p>({item.teachersDisciplines.teachers.name})</p>
                </div>
              </Conteiner>
            </>
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
  h1{
    font-size: 18px;
  }
`
const CategoryBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-left: 30px;
  font-size: 18px;
`
const Conteiner = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 50px;
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