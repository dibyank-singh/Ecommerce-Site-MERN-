import { Facebook, GitHub, LinkedIn, MailOutline, Phone, Room, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import  styled from "styled-components"

// Styled Css part

const Container=styled.div`
display: flex;
justify-content: center;

`
const Left=styled.div`
flex: 1;
padding: 0px 20px;

`
const LogoHead=styled.h1`
font-size: 35px;
font-weight: 800;
`
const DisPaara=styled.p`
font-size: 18px;
font-weight: 600;
opacity: 0.6;
`
const IconContainer=styled.div`
display: flex;

`
const SocialItems=styled.div`
background-color: #${Props => Props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
width: 35px;
height: 35px;
border-radius: 50%;
/* color: #FFFFFF; */
cursor: pointer;


`

const Center=styled.div`
flex: 1;
`
const Title=styled.h2 `
font-size: 30px;
font-weight: 600;

`
const LinkUl=styled.ul `
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
list-style: none;

`
const Linklist=styled.li `
font-size: 15px;
font-weight: 600;
width: 50%;
margin-bottom: 8px;
cursor: pointer;

`
const Right=styled.div`
flex: 1;
`

const Items=styled.p `
font-size: 15px;
font-weight: 600;
display: flex;
align-items: center;
margin-bottom: 10px; 
opacity: 0.8;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <LogoHead>Shop Shine</LogoHead>
            <DisPaara>No-1 Ecommerce Site Based In India, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, similique.</DisPaara>
            <IconContainer>
            <SocialItems color="#287ce3F">
                <Twitter/>
            </SocialItems>
            <SocialItems color="#032863ea">
                <LinkedIn/>
            </SocialItems>
            <SocialItems color="black">
                <GitHub/>
            </SocialItems>
            <SocialItems color="#e80a0a545">
                <YouTube/>
            </SocialItems>
            </IconContainer>
        </Left>
        <Center>
            <Title>Site Links</Title>
            <LinkUl>
             <Linklist>Social icon</Linklist>
             <Linklist>Social icon</Linklist>
             <Linklist>Social icon</Linklist>
             <Linklist>Social icon</Linklist>
             <Linklist>Social icon</Linklist>
             <Linklist>Social icon</Linklist>
             <Linklist>Social icon</Linklist>
             <Linklist>Social icon</Linklist>
            </LinkUl>
        </Center>
        <Right>
            
                <Title> Contact Us </Title>
                <Items> <Room/> Parsa Nagar, West Champaran, Bihar 845454</Items>
                <Items> <Phone/> 8709448779</Items>
                <Items> <MailOutline/> Dibyankkumarsingh@gmail.com</Items>
            
        </Right>

    </Container>
  )
}

export default Footer;