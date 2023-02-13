import styled from "styled-components";

const Container=styled.div`
height: 32px;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 15px;
        font-weight: 400;
        color: #FFFFFF;
    }
`

const Announcement = () => {
  return (
    <Container>
      {/* <p>  Diwali & Chhat Dhamaka ! Free Delevery On Order Above 599 Rs.</p> */}
      <p> This Site is Under Construction, Backend Integration work is going on, Stay Tuned... </p>
    </Container>
  )
}

export default Announcement;