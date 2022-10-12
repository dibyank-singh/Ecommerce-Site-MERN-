import { Send } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

// Styled Css Part

const Container=styled.div`
height: 50vh;
background-color: #f7ebeb;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title=styled.h1`
font-size: 35px;
font-weight: 800;
`
const Discription=styled.p`
font-size: 16px;
font-weight: 600;

`
const InsideContainer=styled.div`
    width: 50%;
    height: 35px;
    background-color: #faf7f7;
   display: flex;
   justify-content: space-between;
`
const Input=styled.input`
flex: 7;
padding-left: 15px;
border: none;

`
const Button=styled.button`
flex: 1;
border: none;
background-color: #2110df;
color: #ffffff;
`

const Notification = () => {
  return (
    <Container>
   <Title>Subscribe To Get Early Update</Title>
   <Discription>Hey, To Gen Notifiction of newly lunch products, Please Subscribe to our newsletter</Discription>
   <InsideContainer>
    <Input placeholder=' Enter Your Email...'/>
    <Button> <Send/></Button>
   </InsideContainer>
    </Container>
  )
}

export default Notification;