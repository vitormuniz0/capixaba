import CardImg from 'react-bootstrap/esm/CardImg';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import CardText from 'react-bootstrap/esm/CardText';


export const ContentProduct = styled(Card)`
    width: 32%;
    align-items: center;
    text-align: center;
    border: none;
    justify-content: space-between;
    margin-top: 6px;

`

export const ImgProduct = styled(CardImg)`
    width: 50%;
    height: 60%;

`
export const  BtnCar = styled(Button)`
    display: flex;
    align-items: center;
    color: white;
    margin: auto;
    border: none;
    background-color: brown;
    cursor: pointer;
    transition: background-color 0.3s;

    &:focus {
        outline: none; /* Remove o contorno ao focar */
    }
`
export const TextCard = styled(CardText)`
    
`


