
import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { useState } from "react";
import {data} from "../Constant/Data.js"

// Styled css

const Container=styled.div`
height: 100vh;
width: 100%;
/* background-color: red; */
display: flex;
position: relative;
overflow: hidden;
`
const ArrowIcons=styled.div`
    height: 50px;
    width: 50px;
    background-color: #c8c2c2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${ props => props.direction === "left" && "12px"};
    right: ${ props => props.direction === "right" && "12px"};
    opacity: 0.5;
    z-index: 2;

`
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=> props.slideno * -100}vw);

`
const SlideContainer=styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
height: 100vh;
width: 100vw;
background-color: #${props=> props.bgcolor};

`
const ImgContainer=styled.div`
/* background-color: blue; */
flex: 1;
display: flex;
justify-content: center;
align-items: center;

`
const Imagecon=styled.img`
    height: 90vh;
`
const InfoContainer=styled.div`
/* background-color: red; */
flex: 1;
padding: 60px;

h1{
    font-size: 50px;
}
p{
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 30px
    ;
}
button{
    padding: 6px 20px;
    font-size: 16px;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
}
button:hover{
    color: #1313df;
}
`





const Slider = () => {

const[slideno, setSlideno]=useState(0)

const handleClick=(direction)=>{

    if(direction==="left"){
        setSlideno( slideno>0 ? slideno-1 : 2 )
    }
    if(direction==="right"){
        setSlideno( slideno<2 ? slideno+1 :0 )
    }
    

}

  return (
    <Container>
     <ArrowIcons direction="left" onClick={()=> handleClick("left")}>
     <ArrowLeftOutlinedIcon/>
     </ArrowIcons>
     <Wrapper slideno={slideno}>

    {
        data.map((item)=>(

     <SlideContainer bgcolor={item.bgcolor}>
     <ImgContainer>
       <Imagecon src={item.img} alt="" />
     </ImgContainer>
     <InfoContainer>
        <h1>{item.title}</h1>
        <p>{item.dis}</p>
        <button> Shop It Now</button>
     </InfoContainer>
     </SlideContainer>
        ))
    }

     </Wrapper>

     <ArrowIcons direction="right"  onClick={()=> handleClick("right")}>
     <ArrowRightOutlinedIcon/>
     </ArrowIcons>

    </Container>
  )
}

export default Slider