import styled from "styled-components";
import {Link} from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column; 
  width:100%;
  gap: 15px; 

  div{
    display: flex;
    justify-content:space-between;
  }

  button{
    all: unset;
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 36px;
    background: #1976D2;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 14px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;

  all: unset;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;

  width: 100%;

  border: 1px solid #C4C4C4;
  padding: 15px 16px;
  border-radius: 5px;
`

const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  color: rgba(70, 115, 202, 0.8);
  font-weight: 500;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  text-decoration-line: underline;
  line-height: 24px;
`;

export{
  Form,
  Input,
  StyledLink
}