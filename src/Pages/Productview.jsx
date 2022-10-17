import Navbar from '../Component/Navbar'
import Notification from '../Component/Notification'
import Footer from "../Component/Footer"

// Component Import 

import styled from "styled-components";
import { Add, Remove } from '@mui/icons-material';

const Container=styled.div` 

`
const Wrapper=styled.div` 
padding: 25px;
display: flex;
`
const ImgItem=styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
img{
  width: 70%;
  height: 80vh;
  cursor: all-scroll;
}
    
`
  
const InfoItem=styled.div`
flex: 1;
padding: 20px;
    
`
const Title=styled.h2`
font-size: 35px;
font-weight: 600;
    
`
const Disc=styled.p `
font-size: 18px;
font-weight: 400;
margin-bottom: 10px;
    
`
const Span=styled.span `

font-size: 35px;
font-weight: 600;
    
`
const FilterContainer=styled.div` 
  display: flex;
  gap: 8rem;
  margin-top: 20px;
  
`

const Filter=styled.div`
display: flex;
justify-content: center;
align-items: center;

`

const FilterTitle=styled.span`
font-size:20px;
font-weight: 800;
opacity: 0.6;


`

const Filtercolor=styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
margin: 0px 6px;

`

const FilterSelect=styled.select`
margin-left: 4px;
padding: 4px 8px;
`

const FilterOption=styled.option` `

const AddRemoveContainer=styled.div` 
display: flex;
align-items: center;
gap: 12rem;
margin-top: 25px
;

`

const AddContainer=styled.div`
display: flex;
align-items: center;
`

const Amount=styled.span`
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0px 5px;
 height: 30px;
 width: 30px;
 border-radius: 12px;
 border: 1px solid gray;
`

const Button=styled.button`
padding: 7px 20px;
border: 2px solid teal;
background-color: #FFFFFF;
font-weight: 500;
font-size: 14px;
cursor: pointer;

&:hover{
  background-color: #fbf7f7;
  /* transition: all 0.5s ease; */
}
`

const Productview = () => {
  return (
   <Container>
      <Navbar/>
      <Wrapper>
       <ImgItem>
       <img src="https://assets.ajio.com/medias/sys_master/root/h1d/h2e/15885260521502/dennislingo_premium_attire_blue_checked_slim_fit_shirt.jpg" alt="" />
       </ImgItem>
       <InfoItem>
        <Title> Shirt Men</Title>
        <Disc> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores cum eum praesentium nam voluptate, quibusdam dolore aliquid quis officia, ut ratione nostrum?</Disc>
        <Span> $20 </Span> 
        <FilterContainer>
        <Filter>
          <FilterTitle>Color</FilterTitle>
          <Filtercolor color="purple"/>
          <Filtercolor color="black"/>
          <Filtercolor color="gray"/>
        </Filter>
        <Filter>
          <FilterTitle>Size</FilterTitle>
          <FilterSelect>
            <FilterOption>XS</FilterOption>
            <FilterOption>S</FilterOption>
            <FilterOption>M</FilterOption>
            <FilterOption>L</FilterOption>
            <FilterOption>XL</FilterOption>
          </FilterSelect>
        </Filter>
        </FilterContainer>

        <AddRemoveContainer>
          <AddContainer>
            <Remove  style={{cursor:"pointer"}}/>
            <Amount>30</Amount>
            <Add  style={{cursor:"pointer"}}/>
          </AddContainer>
          <Button> Add To Cart.</Button>
        </AddRemoveContainer>
       </InfoItem>
      </Wrapper>
      <Notification/>
      <Footer/>
   </Container>
  )
}

export default Productview;