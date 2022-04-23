import styled from 'styled-components'
import ArrowDown from '../../assets/ArrowDown'

export default function BoxContentCategory(){
  return(
    <Box >
      <h1 >10 Período</h1>
      <ArrowDown />
    </Box>
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
`
