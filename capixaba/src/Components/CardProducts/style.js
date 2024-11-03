import CardImg from 'react-bootstrap/esm/CardImg';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import { CardBody } from 'react-bootstrap';


export const ContentProduct = styled(Card)`
  width: 33.3%;
  height: 400px; /* Altura fixa para todos os containers */
  align-items: center;
  border-top: none;
  padding: 10px 0;
  text-align: center;
  justify-content: space-between;
  font-family: "Lucida Console", "Courier New", monospace;

  @media(max-width: 990px) {
    width: 50%;
  }

  @media(max-width: 680px) {
    width: 100%;
  }
`;

export const InforProtuct = styled(CardBody)`
  width: 70%;
  height: auto;
  flex: 1;
`;

export const ImgProduct = styled(CardImg)`
  width: 100%;
  height: 200px; /* Altura fixa para a imagem */
  object-fit: contain; /* Garante que a imagem se ajuste sem distorção */
`;


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


