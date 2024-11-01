import CardImg from 'react-bootstrap/esm/CardImg';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import CardTitle from 'react-bootstrap/esm/CardTitle';


export const ContentProduct = styled(Card)`
  width: 32%;
  height: 400px; /* Altura fixa para todos os containers */
  align-items: center;
  text-align: center;
  border: none;
  justify-content: space-between;
  font-family: "Lucida Console", "Courier New", monospace;
  margin-top: 20px;
  margin-bottom: 20px;

  @media(max-width: 990px) {
    width: 50%;
  }

  @media(max-width: 680px) {
    width: 100%;
  }
`;

export const ImgProduct = styled(CardImg)`
    width: 50%;
    height: 60%;
    

`
export const  BtnCar = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: auto;
    border: none;
    font-size: 25px;
    background-color: #623c16;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #714b25;
    }
`
export const TitleProduct = styled(CardTitle)`
    font-weight: bold;
`
export const PriceProduct = styled.h3`
    font-size: 20px ;
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: bold;
`


