import styled from "styled-components";


export const Div = styled.div`
position: relative;
width: 1000px;
height: 500px;
margin-top: 150px;
box-shadow: rgba(0,0,0,0.8) -20px 20px, rgba(0,0,0,0.6) -40px 40px, rgba(0,0,0,0.4) -60px 60px, rgba(0,0,0,0.2) -80px 80px, rgba(0,0,0,0.1) -100px 100px;
@media (max-width: 1200px) {
width: 500px;
height: 250px;
box-shadow: rgba(0,0,0,0.8) -10px 10px, rgba(0,0,0,0.6) -20px 20px, rgba(0,0,0,0.4) -30px 30px, rgba(0,0,0,0.2) -40px 40px, rgba(0,0,0,0.1) -50px 50px;
  }

@media (max-width: 600px) {
width: 250px;
height: 125px;
margin-top: 50%;
box-shadow: rgba(0,0,0,0.8) -5px 5px, rgba(0,0,0,0.6) -10px 10px, rgba(0,0,0,0.4) -15px 15px, rgba(0,0,0,0.2) -20px 20px, rgba(0,0,0,0.1) -25px 25px;
  }

`

export const RegButton = styled.button`
position: absolute;
bottom: 50px;
right: 50px;
border-radius: 60px;
height: 50px;
font-family: custom;
border: none;
color: white;
font-size: 18px;
width: 200px;
outline: 2px solid white;
background-color: rgb(24, 161, 47);
    transition: .5s;
  @media (max-width: 1200px) {
width: 100px;
border-radius: 30px;
font-size: 9px;
height: 25px;
bottom: 25px;
right: 25px;

  }
  @media (max-width: 600px) {
width: 50px;
border-radius: 15px;
font-size: 5px;
height: 12px;
bottom: 12px;
right: 12px;
  }
  &:hover{
    cursor: pointer;
    transform: scale(1.1)
  }
  &:active{
    color: gray;
  }
`
