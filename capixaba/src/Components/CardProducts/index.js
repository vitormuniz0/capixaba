import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/esm/CardText";
import Img from "../../Assets/image/hamburguer.jpg";
import { BtnCar, ContentProduct, ImgProduct, PriceProduct, TitleProduct } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { MyAlert } from "../Alert/style";

const CardProducts = ({ products = [], addToCart }) => {
  const [showAlert, setShowAlert] = useState(null);

  const handleNotification = (productName) => {
    setShowAlert(productName);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      {products.map((product) => (
        <ContentProduct key={product.id}>
          <ImgProduct src={Img} alt={product.nameProduct} />
          <CardBody>
            <TitleProduct>{product.nameProduct}</TitleProduct>
            <CardText>{product.desc}</CardText>
            <PriceProduct>{product.price},00 R$</PriceProduct>
            <BtnCar
              onClick={() => {
                addToCart(product);
                handleNotification(product.nameProduct);
              }}
            >
              <AiOutlineShoppingCart />
              {showAlert === product.nameProduct && (
                <MyAlert variant="success">
                  {product.nameProduct} Adicionado com Sucesso!
                </MyAlert>
              )}
            </BtnCar>
          </CardBody>
        </ContentProduct>
      ))}
    </>
  );
};

export default CardProducts;
