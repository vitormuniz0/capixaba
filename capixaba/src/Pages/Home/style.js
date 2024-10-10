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
  }
`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 100%;
  background-color: transparent;
`;
export const LogoContent = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
  margin: 0;
  flex-wrap: wrap;
`;
export const ButtonContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const LogoImage = styled.img`
    width: 60%;
    height: 80%;
`
export const SocialContent = styled.div`
    align-items: center;
    width: 80%;
    font-size: 25px;
    background-color: transparent;
    color: white;
    text-align: right;
`


export const Instagram = styled(FaInstagram)`
    margin-left: 20px;
    cursor: pointer;
    
`
export const WhatsApp = styled(FaWhatsapp)`
    margin-left: 20px;
    cursor: pointer;
`
export const Tell = styled(BsFillTelephoneFill)`
  margin-left: 20px;
  cursor: pointer;
`



