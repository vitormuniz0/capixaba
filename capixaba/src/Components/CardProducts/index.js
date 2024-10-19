import CardBody from 'react-bootstrap/esm/CardBody';
import CardText from 'react-bootstrap/esm/CardText';
import Img from '../../Assets/image/hamburguer.jpg'
import { BtnCar, ContentProduct, ImgProduct, TitleProduct } from './style';
import { AiOutlineShoppingCart } from "react-icons/ai";

const CardProducts = () =>{
    return(
        <ContentProduct>
            <ImgProduct src={Img}/>
            <CardBody>
                <TitleProduct>Hamburguer</TitleProduct>
                <CardText>
                    Carne Bovina, Alface, Tomate, Molho Caseiro e queijo de sua preferencia.
                </CardText>
                <BtnCar><AiOutlineShoppingCart/></BtnCar>
            </CardBody>
        </ContentProduct>
    )
}

export default CardProducts;