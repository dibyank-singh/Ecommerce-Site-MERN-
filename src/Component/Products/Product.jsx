import styled from "styled-components";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


// Styled Css Part

// Defining on top to use it for opacity in container
const InfoContainer=styled.div`
height: 100%;
width: 100%;
/* border-radius: 50%; */
background-color: rgba(0,0,0,0.2);
position: absolute;
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
transition: all 0.5 ease;
cursor: pointer;

`
const Container=styled.div`
background-color: #e5ebe5;
flex: 1;
margin: 15px;
height: 60vh;
min-width: 20vw;
display: flex;
justify-content: center;
align-items: center;
position: relative;

&:hover ${InfoContainer}{
    opacity: 1;
    
}


`
const Circle=styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;


`
const Image=styled.img`
height: 100%;
width: 100%;
z-index: 2;

`

const Icon=styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
margin: 6px;
transition: all 0.4s ease;
&:hover{
    background-color: #f9ebeb;
    transform: scale(1.1);
}
    
`

const Product = ({elem}) => {

    console.log(elem)

  return (

    <Container>
        <Circle/>
        
        <Image src={elem.img} />
        <InfoContainer>
            <Icon><AddShoppingCartOutlinedIcon/></Icon>
            <Icon><SearchOutlinedIcon/> </Icon>
            <Icon><FavoriteBorderOutlinedIcon/></Icon>
        </InfoContainer>

    </Container>
  )
}

export default Product;