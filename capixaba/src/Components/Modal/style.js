import styled from "styled-components";
import { Button, InputGroup, Modal } from "react-bootstrap";

export const ModalCar = styled(Modal)`
  .modal-dialog {
    max-width: 50vw; /* Estilização do Modal Completo/Container */
    max-height: 50vh;
    margin: auto;

    @media (max-width: 760px) {
      max-width: 80vw;
      max-height: 70vh;
    }
  }

  .modal-content {
    /* Estilização do conteudo do modal */
    border-radius: 10px;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
  }

  .modal-title {
    /* Estilização do titulo do modal */
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

  .modal-body {
    /* Estilização do corpo do modal */
    font-size: 20px;
    @media (max-width: 875px) {
      font-size: 17px;
    }
  }
  .modal-header {
    /* Estilização do cabeçalho do modal */
    border-bottom: none; /* Remove a borda inferior */
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    position: relative;
  }

  .modal-footer {
    /* Estilização do rodapé do modal */
    border-top: none; /* Remove a borda superior */
  }
`;

export const ContentCar = styled.div`
  /* Estilização dos conteudos do carrinho/content */
  width: 100%;
  border-top: 1px solid black;
  padding-top: 8px;
  display: flex;
  align-items: center;

  .titleProduct {
    font-size: 30px;
  }
`;
export const ContainerInput = styled.div`
  /* Estilização container do input de retirada e delivery */
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 20px;
`;

export const RadioInput = styled.input`
  /* Estilização do input de retirada e delivery */
  display: none;

  &:checked + label {
    background-color: #007bff; /* Cor de fundo quando selecionado */
    color: white; /* Cor do texto quando selecionado */
    border-radius: 5px; /* Borda arredondada */
  }
`;

export const RadioLabel = styled.label`
  /* Estilização do label de retirada e delivery */
  padding: 10px 15px;
  width: 25%;
  margin-top: 5px;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 15px;

  &:hover {
    background-color: #0056b3;
    color: white;
  }

  @media (max-width: 455px) {
    font-size: 11px;
    width: 25%;
  }
`;

export const Buttons = styled(Button)`
  /* Estilização do botao de fechar e avancar */
  width: 25%;

  @media (max-width: 510px) {
    width: 30%;
  }

  @media (max-width: 390px) {
    font-size: 9px;
  }
`;
export const ButtonRemove = styled.p`
  /* Estilização do botao de remover o item do carrinho */
  display: block;
  width: 100%;
  margin: auto;
  cursor: pointer;
  font-size: 25px;

  &:hover {
    color: red;
  }
`;

export const ContainerButton = styled.div`
  /* Estilização do container do  botao de remover o item do carrinho */
  display: flex;
  width: 10%;
  align-items: right;

  justify-content: center;
  margin: auto;
`;
export const SubContainer = styled.div`
  /* Estilização do subcontainer do  botao de remover o item do carrinho */
  display: flex;
  width: 80%;
`;

export const ContainerEndereco = styled(InputGroup)`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const PedidoInput = styled.input`
  /* Estilização do input de endereco do carrinho */
  padding: 10px;
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  margin-top: 5px;
  cursor: pointer;

  @media (max-width: 510px) {
    font-size: 10px;
  }
`;

export const MessageTaxa = styled.p`
  color: red;
`;

export const InfoPedido = styled.p`
  font-weight: bold;
  font-family: "Lucida Console", "Courier New", monospace;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
`;
export const TitleProdutos = styled.h3`
  color: red;
  font-weight: bold;
  font-family: "Lucida Console", "Courier New", monospace;
`;
export const ButtonConfirm = styled(Button)`
  width: 25%;

  @media (max-width: 510px) {
    width: 40%;
  }

  @media (max-width: 390px) {
    font-size: 9px;
  }
`;
