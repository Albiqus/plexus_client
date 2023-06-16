import styled from "styled-components";

export const Div = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 800px;
height: auto;
margin-top: 100px;
background-color: rgba(80,180,80, 0.9);
  @media (max-width: 1200px) {
width: 400px;
margin-top: 50px;
  }
  @media (max-width: 600px) {
width: 200px;
margin-top: 25px;
  }
`

export const Form = styled.form`
width: 600px;
height: auto;
background-color: pink;
display: flex;
flex-wrap: wrap;
justify-content: center;
  @media (max-width: 1200px) {
width: 300px;
  }
  @media (max-width: 600px) {
width: 150px;
  }
`

export const Label = styled.label`
width: 60%;
height: 10%;
margin-top: 30px;
font-family: custom;
font-size: 18px;
vertical-align: bottom;
  @media (max-width: 1200px) {
margin-top: 15px;
font-size: 9px;
  }
  @media (max-width: 600px) {
margin-top: 8px;
font-size: 5px;
  }
`


export const Input = styled.input`
width: 60%;
height: 10%;
font-family: custom;
font-size: 18px;

 @media (max-width: 1200px) {
font-size: 9px;
  }
  @media (max-width: 600px) {
font-size: 5px;
  }

`
