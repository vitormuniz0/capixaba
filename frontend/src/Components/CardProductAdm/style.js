import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ButtonAdm = styled(Button)`
  /* Estilização do botao de fechar e avancar */
  width: 130px;
`;

export const ContainerButtonAdm = styled.div`
  /* Estilização do container do  botao de remover o item do carrinho */
  display: flex;
  width: 10%;
  align-items: right;
  gap: 8px;

  justify-content: center;
  margin: auto;
`;