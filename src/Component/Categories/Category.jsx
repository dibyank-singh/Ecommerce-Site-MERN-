import { Link } from "react-router-dom"
import styled from "styled-components"


// Styled css


const Container=styled.div`
    flex: 1;
    margin: 8px;
    height: 65vh;
    position: relative;
`
const Image=styled.img`
height: 100%;
width: 100%;
/* object-fit: cover; */

 
`


const InfoWrapper=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Title=styled.h1`
color: #FFFFFF;

    
`
const Button=styled.button`
border: none;
padding: 10px 20px;
background-color:#FFFFFF ;
color:gray;
cursor: Pointer;
`

const Category = ({elem}) => {
  return (
  <Container>
    <Link to={`/products/${elem.cat}`}>
    <Image src={elem.img} alt="Categories Image"/>
    <InfoWrapper>
    <Title>{elem.title}</Title>
    <Button>Shop Now</Button>
    </InfoWrapper>
    </Link>
  </Container>
  )
}

export default Category