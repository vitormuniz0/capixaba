import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";

export const ModalCar = styled(Modal)`

  .modal-dialog{
    max-width: 50vw;
    max-height: 50vh;
    margin: auto;

    @media (max-width: 760px) {  
      max-width: 80vw;
      max-height: 70vh; 
    }

  }

  .modal-content {
    border-radius: 10px; /* Borda arredondada */
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .modal-title{
    font-size: 35px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: bold;
    
    @media (max-width: 475px) {  
      font-size: 25px;
    }

  }

  .modal-body{
    font-size: 20px;

    @media(max-width: 875px ){
    font-size: 17px;
  }
  }
  .modal-header {
    border-bottom: none; /* Remove a borda inferior */
  }

  .modal-footer {
    border-top: none; /* Remove a borda superior */
  }
`;

export const ContentCar = styled.div`
  width: 100%;
  border-top: 1px solid black;
  padding-top: 8px;
  display: flex;
  align-items: center;

  .titleProduct{
    font-size: 30px;
  }
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px 0;
  justify-content: center;
  text-align: center;

`

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #007bff; /* Cor de fundo quando selecionado */
    color: white; /* Cor do texto quando selecionado */
    border-radius: 5px; /* Borda arredondada */
  }
`

export const RadioLabel = styled.label`
  padding: 10px 15px;
  border: 1px solid #007bff; /* Borda do botão */
  border-radius: 5px; /* Borda arredondada */
  margin-bottom: 10px; /* Espaço entre os botões */
  cursor: pointer; /* Cursor de pointer ao passar o mouse */
  transition: background-color 0.3s;
  font-size: 15px;

  &:hover {
    background-color: #0056b3; /* Cor de fundo ao passar o mouse */
    color: white; /* Cor do texto ao passar o mouse */
  }

  @media(max-width: 455px ){
    font-size: 12px
  }
`;

export const Buttons = styled(Button)`
  width: 20%;

  @media(max-width: 510px ){
    width: 25%
  }
  
  @media(max-width: 390px ){
    font-size: 9px;
  }
`
export const ButtonRemove = styled(Button)`
  display: block;
  width: 100%;
  margin: auto;

  

  @media(max-width: 400px ){
    font-size: 9px ;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  width: 20%;
  align-items: center;

  justify-content: center; 
  margin: auto;
  
  @media(max-width: 545px ){
    width: 32%;
  }
`
export const SubContainer = styled.div`
  display: flex;
  width: 80%;
`