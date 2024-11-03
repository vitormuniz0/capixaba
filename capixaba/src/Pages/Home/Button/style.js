import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    background-color: 	#623c16;
    font-size: 23px;
    color: white;
    width: 75%;
    height: 7%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    transition: background-color 0.3s;

    @media (max-width: 768px) {
        font-size: 20px;
  }

    &:hover{
        background-color: #714b25;
    }

`