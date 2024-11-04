import CardImg from 'react-bootstrap/esm/CardImg';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import { CardBody } from 'react-bootstrap';


export const ContentProduct = styled(Card)`
  width: 25%; /* Reduz a largura */
  height: 300px; /* Altura reduzida */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  border-top: none;
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
  width: 100%;
  height: 55%; /* Ocupa o restante do espaço */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 45%; /* Altura menor para o contêiner da imagem */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ImgProduct = styled(CardImg)`
  width: auto;
  height: 100%;
  object-fit: contain;
`


export const BtnCar = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  font-size: 18px; /* Reduz o tamanho do botão */
  background-color: #623c16;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
      background-color: #714b25;
  }
`;


export const TitleProduct = styled(CardTitle)`
  font-weight: bold;
  font-size: 16px; /* Reduz o tamanho da fonte */
  margin: 4px 0;
`;

export const PriceProduct = styled.h3`
  font-size: 18px;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
  margin: 6px 0;
`;


