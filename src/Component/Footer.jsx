import { Facebook, GitHub, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
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

`
const LinkUl=styled.ul `

`
const Linklist=styled.li `

`
const Right=styled.div`
flex: 1;
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
             <Linklist></Linklist>
            </LinkUl>
        </Center>
        <Right></Right>

    </Container>
  )
}

export default Footer;