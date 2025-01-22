import { FormGroup, FormLabel } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 500px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleForm = styled.h2`
    color: black;
    text-align: center;
`

export const StyledFormGroup = styled(FormGroup)`
  width: 100%;
  margin-top: 1rem;

  .form-label {
    color: #333;
    font-weight: bold;
  }

  .form-control {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .btn-login {
    margin-top: 1.5rem;
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;