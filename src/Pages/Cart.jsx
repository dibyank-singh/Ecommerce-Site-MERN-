import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"

// Styled part

const Container = styled.div` 
padding: 20px;

`
const Wrapper = styled.div`
padding: 25px;
    
`
const TopContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
    
`
const Title = styled.h2`
font-size: 25px;
font-weight: 600;
text-align: center;
    
`
const Leftbutton = styled.button`
    padding: 10px 20px;
    /* font-size: 18px; */
    font-weight: 600;
    background-color: black;
    border: none;
    color: #FFFFFF;
`
const Rightbutton = styled.button`
    padding: 6px 14px;
    font-size: 18px;
    background-color: #FFFFFF;
    /* border: none; */
    /* color: #FFFFFF; */
`
const CentContain = styled.div`
/* display: flex; */
    
`
const Centext = styled.span`
text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
`
const MainContainer = styled.div` 
padding: 30px 10px ;
display: flex;
justify-content: space-between;
`
const InfoContainer = styled.div` 
flex: 3;
`
const ProductsItems = styled.div` 
display: flex;
justify-content: space-between;
`
const ProductsDetails = styled.div` 
flex: 2;
display: flex;
/* justify-content: space-between; */

`
const Image = styled.img` 
 /* height: 300px; */
 width: 200px;

`
const ItemDetails = styled.div` 
padding: 30px;
display: flex;
flex-direction: column;
gap: 20px;

`
const Productname = styled.span` 
/* font-size: 16px;
font-weight: 500; */

`
const ProductId = styled.span` 
/* font-size: 16px;
font-weight: 500; */
`
const ProductColor = styled.div` 
height: 20px;
width: 20px;
border-radius: 50%;
background-color: #1e0106;

`
const ProductSize = styled.span` 
/* font-size: 16px;
font-weight: 500; */

`
const PriceDetails = styled.div` 
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;


`
const AmountContainer = styled.div` 
display: flex;
font-size: 18px;
font-weight: 600;
margin-bottom: 25px;

`

const PriceAmount = styled.span` 
margin: 0px 5px;

`
const ActualPrice = styled.span`
 font-size: 25px
 ;

`
const Hr=styled.hr`
    border: none;
    background-color: #eee;
    height: 1px;
`

const PaymentContainer = styled.div` 
flex: 1;
padding: 20px;
border: 1.5px solid lightgray;
border-radius: 12px;
height: 55vh;
`
const ContainerHead=styled.h2`
    
    font-weight: 400;
`
const PriceContainer=styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0px;
font-weight: ${props=> props.type==="total" && "500"};
font-size: ${props=> props.type==="total" && "20px"};
    
`
const ItemText=styled.span`
    /* font-size: 18px;
    font-weight: 400; */
`
const ItemPrice=styled.span`
    
`
const Buttton=styled.button`
    padding: 8px 20px;
    font-weight: 600;
    background-color: #222121;
    color: #FFFFFF;
    cursor: pointer;
`


const Cart = () => {
    return (
        <Container>
            <Wrapper>
                <Title> Your Bag </Title>
                <TopContainer>
                    <Leftbutton> Continue Shopping</Leftbutton>
                    <CentContain>
                        <Centext>Shopping Items(4)</Centext>
                        <Centext> Wishlist Items</Centext>
                    </CentContain>
                    <Rightbutton> Checkout Now </Rightbutton>
                </TopContainer>

                <MainContainer>
                    <InfoContainer>
                        <ProductsItems>
                            <ProductsDetails>
                                <Image src="https://rukminim1.flixcart.com/image/332/398/xif0q/shoe/k/r/n/-original-imagfzhqekgxbnap-bb.jpeg?q=50" />
                                <ItemDetails>
                                    <Productname><b>Product:</b>  Nike Shoes</Productname>
                                    <ProductId><b>Id:</b>  8709448779</ProductId>
                                    <ProductColor></ProductColor>
                                    <ProductSize> <b>Size:</b>  XL</ProductSize>
                                </ItemDetails>
                            </ProductsDetails>
                            <PriceDetails>
                                <AmountContainer>
                                    <Add />
                                    <PriceAmount> 200</PriceAmount>
                                    <Remove />
                                </AmountContainer>
                                <ActualPrice> 500</ActualPrice>
                            </PriceDetails>
                        </ProductsItems>

                     <Hr/>

                        <ProductsItems>
                            <ProductsDetails>
                                <Image src="https://rukminim1.flixcart.com/image/332/398/xif0q/shoe/k/r/n/-original-imagfzhqekgxbnap-bb.jpeg?q=50" />
                                <ItemDetails>
                                    <Productname><b>Product:</b>  Nike Shoes</Productname>
                                    <ProductId><b>Id:</b>  8709448779</ProductId>
                                    <ProductColor></ProductColor>
                                    <ProductSize> <b>Size:</b>  XL</ProductSize>
                                </ItemDetails>
                            </ProductsDetails>
                            <PriceDetails>
                                <AmountContainer>
                                    <Add />
                                    <PriceAmount> 200</PriceAmount>
                                    <Remove />
                                </AmountContainer>
                                <ActualPrice> 500</ActualPrice>
                            </PriceDetails>
                        </ProductsItems>
                    </InfoContainer>
                    <PaymentContainer>
                        <ContainerHead>Amount Summery </ContainerHead>
                        <PriceContainer>
                            <ItemText>Subtotal</ItemText>
                            <ItemPrice>300</ItemPrice>
                        </PriceContainer>
                        <PriceContainer>
                            <ItemText>Discount</ItemText>
                            <ItemPrice>100</ItemPrice>
                        </PriceContainer>
                        <PriceContainer>
                            <ItemText>Dilevery Cost</ItemText>
                            <ItemPrice>50</ItemPrice>
                        </PriceContainer>
                        <PriceContainer type="total">
                            <ItemText>Total</ItemText>
                            <ItemPrice>150 Rs </ItemPrice>
                        </PriceContainer>
                        <Buttton> Proceed To Payment </Buttton>
                    </PaymentContainer>
                </MainContainer>
            </Wrapper>

        </Container>
    )
}

export default Cart;