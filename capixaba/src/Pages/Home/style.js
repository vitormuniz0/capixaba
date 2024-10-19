import styled from "styled-components";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${require("../../Assets/image/backgroundPadaria.jpg")});
    background-position: center;
    background-size: cover;
    filter: blur(6px);
    overflow: hidden;
    z-index: -1;
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row; /* Coloca lado a lado em telas médias ou maiores */
  }
`;
export const LogoContent = styled.div`
  display: flex;
  width: 100%; /* Ocupa 100% em telas pequenas */
  height: auto; /* Ajusta a altura de acordo com o conteúdo */
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 60%; /* Ocupa 50% em telas maiores */
    height: 80%;
  }
`;
export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column; /* Mantém os botões em coluna */
  flex-wrap: wrap;
  height: auto; /* Ajusta a altura automaticamente */
  gap: 40px;
  width: 100%; /* Ocupa 100% em telas pequenas */
  align-items: center;
  justify-content: center;

  

  @media (min-width: 768px) {
    width: 50%; /* Ocupa 50% em telas médias ou maiores */
    height: 80%; /* Ajusta a altura em telas maiores */
  }
`;

export const LogoImage = styled.img`
  width: 50%;
  height: 70%;
`;
export const SocialContent = styled.div`
  align-items: center;
  width: 80%;
  font-size: 30px;
  background-color: transparent;
  color: white;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Instagram = styled(FaInstagram)`
  margin-left: 30px;
  cursor: pointer;
`;
export const WhatsApp = styled(FaWhatsapp)`
  margin-left: 30px;
  cursor: pointer;
`;
export const Tell = styled(BsFillTelephoneFill)`
  margin-left: 30px;
  cursor: pointer;
`;
