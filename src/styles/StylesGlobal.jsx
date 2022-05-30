import { Button, Card, Image } from 'react-bootstrap';
import styled, { createGlobalStyle } from 'styled-components';

export const ButtonGreen = styled(Button)`
  background-color: #24B26B;
`;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  body {
    margin: 0px;
    padding: 0px;
    background: #F0EFE9;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 110%;
    text-align: justify;
    color: #333333; 
`;

export const SubInfo = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    text-align: justify;
    color: #333333;
`;

export const DivBanner = styled.div`
    overflow: hidden;
    height: 100vh;
    background-image: url('https://res.cloudinary.com/gartners/image/upload/v1653856951/Reto-1-Sprint-2/Vector_1_qupq6y.svg');
    background-repeat: no-repeat;
    background-position: 100% 100%;
`;

export const EditedCard = styled(Card)`

width: 176px;
height: 240px;

filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));
`;

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #FAFAFA;
`;

export const InfoCardStyled = styled(Card)`

width: 268px;
height: 200px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.04);
border-radius: 8px;
`;

export const SearchInput = styled.input`
  
width: 382px;
height: 40px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 4px;
`;

export const IconsImage = styled(Image)`
  width: 15px;
`;

export const AgentImage = styled(Image)`
  width: 80px;
`;

export const CardParagraph = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  color: #666666;
`;