import CardImg from "react-bootstrap/esm/CardImg";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import CardTitle from "react-bootstrap/esm/CardTitle";
import {
  CardBody,
  CardText,
  FormLabel,
  ModalBody,
  ModalTitle,
} from "react-bootstrap";

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

  @media (max-width: 990px) {
    width: 50%;
  }

  @media (max-width: 680px) {
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
`;

export const BtnCar = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  font-size: 16px; /* Reduz o tamanho do botão */
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

export const DescProduct = styled(CardText)`
  font-size: 14px;
`;

export const PriceProduct = styled.h3`
  font-size: 16px;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
  margin: 6px 0;
`;

export const PriceObs = styled.h3`
  font-size: 16px;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
  text-align: center;
  color: green;
`;

export const BodyModal = styled(ModalBody)`
  flex-direction: column;
  display: flex;
`;
export const LabelModal = styled(FormLabel)`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 14px;
  margin-top: 14px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 60%;
  border: 1px solid black;  // cor da borda
  border-radius: 5px;
  overflow: hidden; // oculta bordas internas ao arredondar
  width: fit-content;
  margin: 0 auto; // centraliza o container
`;

export const QuantityButton = styled.button`
  padding: 5px 10px;
  font-size: 20px; /* Aumenta o tamanho para destacar o sinal */
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isIncrement ? "#28a745" : "#dc3545")};
  color: white;
  border: none;
  border-radius: 3px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isIncrement ? "#218838" : "#c82333"}; // cores mais escuras ao passar o mouse
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const InputModal = styled.input`
  width: 300px;
  text-align: center;
  border: none;
  font-size: 16px;
  color: #333;
  outline: none;

  @media (max-width:515px){
    width: 150px;
  }
`
export const InputText = styled.textarea`
  width: 60%;
  align-items: center;
  display: flex;
  margin: auto;
`
