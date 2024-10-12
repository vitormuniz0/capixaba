import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Header = styled.header`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

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
