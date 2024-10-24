import { Button } from "react-bootstrap";
import { ContainerInput, ContentCar, ModalCar, RadioInput, RadioLabel } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

const CustomModal = ({ show, handleClose, cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const [deliveryMethod, setDeliveryMethod] = useState('retirada');

  const handleDeliveryChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  return (
    <ModalCar show={show} onHide={handleClose}>
      <ModalCar.Header closeButton>
        <ModalCar.Title>Suas Compras <AiOutlineShoppingCart/></ModalCar.Title>
      </ModalCar.Header>
      <ModalCar.Body>
        {cart.length === 0 ? (
          <p>Seu Carrinho está Vazio!</p>
        ) : (
          cart.map((product, index) => (
            <ContentCar>
            <div key={index}>
              <h3>{product.nameProduct}</h3>
              <p>{product.desc}</p>
              <p>R$ {product.price},00</p>
            </div>
            </ContentCar>
          ))
        )}
        <h3>Total: R$ {totalPrice},00</h3>
        <ContainerInput>
          <RadioInput
            type="radio"
            id="retirada"
            value="retirada"
            checked={deliveryMethod === 'retirada'}
            onChange={handleDeliveryChange}
          />
          <RadioLabel htmlFor="retirada">Retirada</RadioLabel>
          <RadioInput
            type="radio"
            id="entrega"
            value="entrega"
            checked={deliveryMethod === 'entrega'}
            onChange={handleDeliveryChange}
          />
          <RadioLabel htmlFor="entrega">Entrega</RadioLabel>
        </ContainerInput>
      </ModalCar.Body>
      <ModalCar.Footer>
        <Button variant="primary">Avancar</Button>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </ModalCar.Footer>
    </ModalCar>
  );
};

export default CustomModal;
