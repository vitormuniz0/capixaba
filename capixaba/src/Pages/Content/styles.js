import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex-direction: column;
  margin: 0;
  z-index: 1;


  &::before {
    height: 30%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${require("../../Assets/image/backgroundPadaria.jpg")});
    background-position: center;
    background-size: cover;
    filter: blur(4px);
    overflow: hidden;
    z-index: -1;
    border: none;
  }

`;

export const ImageHeader = styled.img`
  width: 14%;
  height: 50%;
  border-radius: 50%;
  display: flex;


  @media (max-width: 950px) {
    height: 50%;
    width: 40%;
  }

  @media (max-width: 450px) {
    height: 30%;
  }

`;


export const Location = styled.p`
  justify-content: center;
  color: white;
  margin-top: 8px;
  font-size: 18px;
`
export const ContentProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 50%;
  background-color: black;
  z-index: 0;
  padding-top: 20px; /* Adiciona um espaçamento para que os produtos não fiquem sobre o Header */
  margin: o;
`
