import styled from "styled-components";
import logo_large from '../../images/logo/logo-large.png'
import logo_middle from '../../images/logo/logo-middle.png'
import logo_small from '../../images/logo/logo-small.png'


export const Div = styled.div`
width: 100%;
height: 124px;
background-color: rgba(0,0,0,0.9);
display: flex;
align-content: flex-start;
align-items: center;
padding-left: 50px;
  @media (max-width: 1200px) {
height: 62px;
padding-left: 25px;
  }
  @media (max-width: 600px) {
height: 31px;
padding-left: 12px;
  }
`

export const Logo = styled.div`
width: 330px;
height: 55px;
background-image: url(${logo_large});
  @media (max-width: 1200px) {
width: 165px;
height: 28px;
background-image: url(${logo_middle});
  }
  @media (max-width: 600px) {
width: 82px;
height: 14px;
background-image: url(${logo_small});
  }
`

export const Wrapper = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 5%;
`

export const LogButton = styled.button`
width: 140px;
height: 40%;
border-radius: 60px;
background: none;
color: white;
font-family: custom;
font-size: 18px;
border: none;
margin-right: 2%;
  @media (max-width: 1200px) {
width: 70px;
border-radius: 30px;
font-size: 9px;
  }
  @media (max-width: 600px) {
width: 35px;
border-radius: 15px;
font-size: 5px;
  }
 &:hover{
    cursor: pointer;
   background-color: rgba(89, 97, 96, 0.5);
  }
    &:active{
    color: gray;
  }
`

export const RegButton = styled.button`
width: 180px;
border-radius: 60px;
height: 40%;
border: none;
font-family: custom;
font-size: 18px;
color: white;
background-color: rgb(89, 97, 96);
  @media (max-width: 1200px) {
width: 90px;
border-radius: 30px;
font-size: 9px;
  }
  @media (max-width: 600px) {
width: 45px;
border-radius: 15px;
font-size: 5px;
  }
  &:hover{
    cursor: pointer;
    outline: 2px solid white;
  }
  &:active{
    color: gray;
  }
`