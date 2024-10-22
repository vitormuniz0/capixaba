import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/esm/CardText";
import Img from "../../Assets/image/hamburguer.jpg";
import { BtnCar, ContentProduct, ImgProduct, TitleProduct } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { MyAlert } from "../Alert/style";

const CardProducts = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleNotification = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <ContentProduct>
      <ImgProduct src={Img} />
      <CardBody>
        <TitleProduct>Hamburguer</TitleProduct>
        <CardText>
          Carne Bovina, Alface, Tomate, Molho Caseiro e queijo de sua
          preferencia.
        </CardText>
        <BtnCar onClick={handleNotification}>
          <AiOutlineShoppingCart />
          {showAlert && (
            <MyAlert variant="success">Item Adicionado com Sucesso!</MyAlert>
          )}
        </BtnCar>
      </CardBody>
    </ContentProduct>
  );
};

export default CardProducts;
