import Button from 'react-bootstrap/Button';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardText from 'react-bootstrap/esm/CardText';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import Img from '../../Assets/image/hamburguer.jpg'
import { BtnCar, ContentProduct, ImgProduct } from './style';
import { AiOutlineShoppingCart } from "react-icons/ai";

const CardProducts = () =>{
    return(
        <ContentProduct>
            <ImgProduct src={Img}/>
            <CardBody>
                <CardTitle>Hamburguer</CardTitle>
                <CardText>
                    Carne Bovina, Alface, Tomate, Molho Caseiro e queijo de sua preferencia.
                </CardText>
                <BtnCar><AiOutlineShoppingCart/></BtnCar>
            </CardBody>
        </ContentProduct>
    )
}

export default CardProducts;