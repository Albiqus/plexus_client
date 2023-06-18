import styled, { keyframes } from "styled-components";
import { SliderImageProps } from "../../../../types/SliderImageProps";


export const Div = styled.div`
    position: relative;
    width: 1000px;
    height: 500px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
    pointer-events: none;
      @media (max-width: 1200px) {
    width: 500px;
    height: 250px;
  }

  @media (max-width: 600px) {
  width: 250px;
    height: 125px;
  }
`

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
   transform: scale(1.1);
  }
  100% {
   transform: scale(1);
  }
`

const slide = styled.div`
position: absolute;
width: 1000px;
height: 500px;
 transition: all 2s;
 background:  url(${(props: SliderImageProps) => props.url}) no-repeat center center;
 background-size: cover;
 animation: ${scale} 10s infinite linear;
       @media (max-width: 1200px) {
           width: 500px;
    height: 250px;
  }

  @media (max-width: 600px) {
  width: 250px;
    height: 125px;
  }
`

export const Prev = styled(slide)`
transform: translateX(-100%);
`
export const Current = styled(slide)`

`
export const Next = styled(slide)`
   transform: translateX(100%); 
`

const textAnimation = keyframes`
  0% {
    left: 60px;
  }
  10%{
    opacity: 1;
  }
  35%{
     opacity: 1;
  }
    50%{
     opacity: 0;
  }
  100% {
   left: 200px;
  }
`

export const Text = styled.p`
opacity: 0;
position: absolute;
left: 60px;
bottom: 150px;
text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
font-family: custom;
font-size: 60px;
animation: ${textAnimation} 10s forwards linear;

@media (max-width: 1200px) {
left: 30px;
bottom: 75px;
text-shadow: 0px 2px 1px rgba(0,0,0,0.4),
             0px 4px 6px rgba(0,0,0,0.1),
             0px 9px 11px rgba(0,0,0,0.1);
font-size: 30px;
  }

  @media (max-width: 600px) {
left: 15px;
bottom: 37px;
text-shadow: 0px 1px 1px rgba(0,0,0,0.4),
             0px 2px 3px rgba(0,0,0,0.1),
             0px 4px 5px rgba(0,0,0,0.1);
font-size: 15px;
  }
`

export const FirText = styled(Text)`
top: 50px;
color: white;
@media (max-width: 1200px) {
top: 25px;
  }

  @media (max-width: 600px) {
top: 12px;
  }
`

export const SecText = styled(Text)`
color: rgb(252, 204, 219);
`

export const ThrText = styled(Text)`
color: white;
`