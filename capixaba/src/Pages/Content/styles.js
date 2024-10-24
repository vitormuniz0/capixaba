import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex-direction: column;
  margin: 0;
  z-index: 1;
  padding-top: 20px;
  background-image: url(${require("../../Assets/image/backgroundPadaria.jpg")});
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
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
  font-weight: bold;
  margin-top: 8px;
  font-size: 18px;
  font-family: "Lucida Console", "Courier New", monospace;
`;

export const BodyContent = styled.div`
  width: 100%;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 40px;
`;

export const Section = styled.div`
  width: 100%;
  border-bottom: solid 3px silver;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: auto;
  flex-wrap: wrap;
  display: flex;
`
