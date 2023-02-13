import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge'
import {Link} from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


// Styled component css
const Container = styled.nav`
    height: 10vh;
    /* background-color: gray; */  
`
const NavWrapper = styled.div`
/* padding: 10px 20px; */
display: flex;
justify-content: space-between;

`
const LeftNav = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
h4{
    margin-right: 10px;
}
    
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
justify-content: center;
align-items: center;
padding: 3px;
`
const Input = styled.input`
border: none;
outline:none

`
const CenterNav = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightNav = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
`
const MenuItems= styled.div`
font-size: 16px;
cursor: pointer;
margin-right: 24px;
`
const NavbarLink = styled(Link)`
color: black;
 font-size: 22px;
 font-weight: 600;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
}`;

const Navbar = () => {
    return (
        <Container>
            <NavWrapper>
                <LeftNav>
                    <h4>Home</h4>
                    <SearchContainer>
                        <Input placeholder='Search a product'/>
                        <SearchIcon style={{color:"gray", fontSize:15}} />
                    </SearchContainer>
                </LeftNav>
                <CenterNav>
                    <h3 style={{fontweight:900}} >Shop Shine</h3>
                </CenterNav>
                <RightNav>
                   <NavbarLink to={"/register"}> <MenuItems>Register</MenuItems> </NavbarLink>
                   <NavbarLink to={"login"}><MenuItems>SignIn</MenuItems> </NavbarLink> 
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>

                    </MenuItems>
                </RightNav>

            </NavWrapper>
        </Container>
    )
}

export default Navbar