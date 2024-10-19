import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    background-color: 	#623c16;
    font-size: 23px;
    color: white;
    width: 75%;
    height: 9%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    transition: background-color 0.3s;

    &:hover{
        background-color: #714b25;
    }

`