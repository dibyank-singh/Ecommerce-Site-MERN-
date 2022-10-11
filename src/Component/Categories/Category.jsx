import styled from "styled-components"


// Styled css


const Container=styled.div`
    
`
const Image=styled.div`
    
`
const Title=styled.div`
    
`
const Button=styled.div`
    
`

const Category = ({elem}) => {
  return (
  <Container>
    <Image>{elem.img}</Image>
    <Title>{elem.title}</Title>
    <Button>Shop Now</Button>
  </Container>
  )
}

export default Category