import styled from "styled-components";
import {ProductsData} from "../../Constant/Data.js"
import Product from "./Product.jsx";


// Styled Css Part

const Container=styled.div`
padding: 15px 20px;
display: flex;
flex-wrap: wrap;

`

const Products = () => {
  console.log(ProductsData)
  return (
    <Container>
     {
      ProductsData.map((elem)=>(
        <Product elem={elem} key={elem.id} />
      ))
     }
    </Container>
  )
}

export default Products;