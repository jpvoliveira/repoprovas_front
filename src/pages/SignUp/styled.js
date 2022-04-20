import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 464px;
  height: 100vh;

  svg{
    margin-bottom: 30px;
  }

  h1{
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: black;
    margin-bottom: 30px;
  }
`
const Button = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 36px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  background: #424445;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  margin-bottom: 30px;
`

const Line = styled.div`
  height: 1px;
  background-color: #C4C4C4;;
  width: 100%;
  margin-bottom: 30px;
`

export{
  Box,
  Container,
  Button,
  Line
}