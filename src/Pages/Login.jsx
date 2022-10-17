
import { Link } from "@mui/material"
import styled from "styled-components"
import Register from "./Register"

// Styled css part


const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background: url("https://freedesignfile.com/upload/2018/02/Indoor-fashion-girl-taking-photos-Stock-Photo-01.jpg") ;
object-fit: cover;
background-size: cover;
background-repeat: no-repeat;
opacity: 0.8;
/* background-color: red; */
    
`
const ContainWrapper=styled.div`
padding: 25px 60px;
display: flex;
flex-direction: column;
background-color: #f4eded;
/* border: 1px solid gray; */
    
`
const Title=styled.h2`
text-align: center;
font-weight: 600;

    
`
const Form=styled.form`
display: flex;
flex-direction: column;

    
`
const Input=styled.input`
padding: 10px 15px;
margin-top: 10px;
border-radius: 15px 0px 15px 0px;
    
`
const Span=styled.span`
font-size: 18px;
font-weight: 500;
margin-top: 8px;
    
`
const Button=styled.button`
margin-top: 15px;
padding: 8px 10px;
font-size: 16px;
font-weight: 600;
background-color: #f0e6e6;
border: none; 
cursor: pointer;
&:hover{
    background-color: #d2cdcd;
    /* border: 1px solid gray; */
}
    
`

const Login = () => {
  return (
    <Container>
    <ContainWrapper>
        <Title>Login In</Title>
        <Form>
            <Input type="text" placeholder='Name' />
            <Input type="text" placeholder='Username' />  
        </Form>
        <Span>
           Do you have account ? <Link style={{textDecoration:"none" , cursor:"pointer"}} > Create Now</Link> 
        </Span>
        <Button> Login </Button>
    </ContainWrapper>
</Container>
  )
}

export default Login;