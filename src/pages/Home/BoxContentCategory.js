import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowDown from '../../assets/ArrowDown'
import ArrowUp from '../../assets/ArrowUp'
import api from '../../services/api'

export default function BoxContentCategory(){
  const [click, setClick] = useState(true)
  const [list, setList] = useState(undefined)

  useEffect(()=>{
    const promise =  api.findCategory()
    promise.then((res)=>{
      setList(res.data)
    })
  },[])
  
  if (!list) {
    return 'Loading...'
  }
  let listCategory = []
  console.log(list[0])
  for (let i = 0; i < list.length; i++) {
    const element = list[i].teachersDisciplines.disciplines.terms.number;
    listCategory.push(element)
  }

  let newListCategory = listCategory.filter(function(el, i) {
    return listCategory.indexOf(el) === i;
  });

  console.log(list[0].teachersDisciplines.disciplines.terms.number)

  return(
    <>
    {newListCategory.map((item)=>{return(
      <>
      <Box >
        <h1>{item} Período</h1>
        <div onClick={()=> setClick(!click)}>
          {click ? <ArrowDown /> : <ArrowUp /> }
        </div>
      </Box>
      {!click && <BoxExtend category={item} list={list}/>}
      </>
    )})}
    </>
  )
}

function BoxExtend({category, list}){
  return(
  <Big>
  {list.map((item)=>{
    if(item.teachersDisciplines.disciplines.terms.number === category){
    return(
      <>
      <CategoryBox>
        <p>{item.teachersDisciplines.disciplines.name}</p>
      </CategoryBox>
      <Conteiner>
        <h1>{item.categories.name}</h1>
        <h2>{item.name}</h2>
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
  h2{
    color: grey;
  }
`
const Big = styled.div`
  margin-bottom: 20px;
`