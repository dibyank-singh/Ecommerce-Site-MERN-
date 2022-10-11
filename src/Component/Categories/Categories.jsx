import Category from "./Category";
import styled from "styled-components";
import {CategoriesData} from "../../Constant/Data.js"

// Styled Css 

const Container=styled.div`
height: 60vh;
display: flex;

`

const Categories = () => {
  return (
    <Container>
       {
         CategoriesData.map((elem)=>(
           <Category elem={elem} />
         ))
       }

    </Container>
  )
}

export default Categories;