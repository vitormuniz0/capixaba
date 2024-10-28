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
    display: flex;
    
  }

  .modal-title{
    font-size: 35px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    
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
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100% ;
    text-align: center;
    position: relative;
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
  flex-direction: row;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  text-align: center;
  align-items:center;
  gap: 20px; 
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
  width: 25%;
  margin-top: 5px;
  border: 1px solid #007bff; /* Borda do botão */
  border-radius: 5px; /* Borda arredondada */
  cursor: pointer; /* Cursor de pointer ao passar o mouse */
  transition: background-color 0.3s;
  font-size: 15px;

  &:hover {
    background-color: #0056b3; /* Cor de fundo ao passar o mouse */
    color: white; /* Cor do texto ao passar o mouse */
  }

  @media(max-width: 455px ){
    font-size: 11px;
    width:25%;
  }
`;

export const Buttons = styled(Button)`
  width: 25%;

  @media(max-width: 510px ){
    width: 30%
  }
  
  @media(max-width: 390px ){
    font-size: 9px;
  }
`
export const ButtonRemove = styled.p`
  display: block;
  width: 100%;
  margin: auto;
  cursor: pointer;
  font-size: 25px;

  &:hover{
    color: red;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  width: 10%;
  align-items: right;

  justify-content: center; 
  margin: auto;
`
export const SubContainer = styled.div`
  display: flex;
  width: 80%;
`