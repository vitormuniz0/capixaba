import {
  ButtonRemove,
  Buttons,
  ContainerButton,
  ContainerEndereco,
  ContainerInput,
  ContentCar,
  ContentInfo,
  InfoPedido,
  MessageTaxa,
  ModalCar,
  PedidoInput,
  RadioInput,
  RadioLabel,
  SubContainer,
  TitleProdutos,
} from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from "react";
import { ModalTitle } from "react-bootstrap";

const CustomModal = ({ show, handleClose, cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const [deliveryMethod, setDeliveryMethod] = useState("Retirada");
  const [showSecondModal, setShowSecundModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [clientInfo, setClientInfo] = useState({
    street: "", // Rua
    neighborhood: "", // Bairro
    number: "", // Número
    complement: "", // Logradouro ou Complemento
    name: "",
    phone: "",
  });

  const resetClientInfo = () => {
    setClientInfo({
      street: "",
      neighborhood: "",
      number: "",
      complement: "",
      name: "",
      phone: "",
    });
  };

  const handleDeliveryChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  const hadleAdvance = () => {
    if (deliveryMethod === "Delivery" && (clientInfo.street === "" || clientInfo.neighborhood === "" || clientInfo.number === "")) {
      alert("Por favor, insira o endereço completo para a entrega.");
      return; // Impede a abertura do segundo modal se o endereço não for preenchido
    }
    handleClose();
    setShowSecundModal(true);
  };

  const handleCloseSecondModal = () => {
    resetClientInfo(); // Limpa as informações ao fechar o segundo modal
    setShowSecundModal(false);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setShowSecundModal(false);
    setShowConfirmationModal(true);
  };

  return (
    <>
      <ModalCar show={show} onHide={() => {resetClientInfo(); handleClose()}}>
        <ModalCar.Header closeButton>
          <ModalCar.Title>
            Suas Compras <AiOutlineShoppingCart />
          </ModalCar.Title>
        </ModalCar.Header>
        <ModalCar.Body>
          {cart.length === 0 ? (
            <p>Seu Carrinho está Vazio!</p>
          ) : (
            cart.map((product, index) => (
              <ContentCar>
                <SubContainer>
                  <div key={index}>
                    <h3>{product.nameProduct}</h3>
                    <p>{product.desc}</p>
                    <p>R$ {product.price},00</p>
                  </div>
                </SubContainer>
                <ContainerButton>
                  <ButtonRemove onClick={() => removeFromCart(product.id)}>
                    <BsFillTrash3Fill />
                  </ButtonRemove>
                </ContainerButton>
              </ContentCar>
            ))
          )}
          <h3>Total: R$ {totalPrice},00</h3>
          {deliveryMethod === "Delivery" && (<MessageTaxa>*Consultar Taxa de Entrega Após Envio do Pedido*</MessageTaxa>)}
          <ContainerInput>
            <RadioInput
              type="radio"
              id="Retirada"
              value="Retirada"
              checked={deliveryMethod === "Retirada"}
              onChange={handleDeliveryChange}
            />
            <RadioLabel htmlFor="Retirada">Retirada</RadioLabel>
            <RadioInput
              type="radio"
              id="Delivery"
              value="Delivery"
              checked={deliveryMethod === "Delivery"}
              onChange={handleDeliveryChange}
            />
            <RadioLabel htmlFor="Delivery">Delivery</RadioLabel>
          </ContainerInput>
          {deliveryMethod === "Delivery" && (
            <ContainerEndereco>
              <PedidoInput
                type="text"
                name="street"
                value={clientInfo.street}
                onChange={handleInputChange}
                placeholder="Rua"
              />
              <PedidoInput
                type="text"
                name="neighborhood"
                value={clientInfo.neighborhood}
                onChange={handleInputChange}
                placeholder="Bairro"
              />
              <PedidoInput
                type="text"
                name="number"
                value={clientInfo.number}
                onChange={handleInputChange}
                placeholder="Numero"
              />
              <PedidoInput
                type="text"
                name="complement"
                value={clientInfo.complement}
                onChange={handleInputChange}
                placeholder="Complemento"
              />
            </ContainerEndereco>
          )}
        </ModalCar.Body>
        <ModalCar.Footer>
          <Buttons variant="primary" onClick={hadleAdvance} >
            Avancar
          </Buttons>
          <Buttons variant="secondary" onClick={() => {resetClientInfo(); handleClose();}}>
            Fechar
          </Buttons>
        </ModalCar.Footer>
      </ModalCar>

      {/* Segundo Modal - ADD Informações do Cliente */}
      <ModalCar show={showSecondModal} onHide={handleCloseSecondModal}>
        <ModalCar.Header>
          <ModalTitle>Confirmar Pedido</ModalTitle>
        </ModalCar.Header>
        <ModalCar.Body>
          <InfoPedido>
            Por Favor, Preencha Suas Informações Para Finalizar o Pedido!
          </InfoPedido>
          <ContentInfo>
            <PedidoInput
              type="text"
              name="name"
              value={clientInfo.name}
              onChange={handleInputChange}
              placeholder="Nome"
            />
            <PedidoInput
              type="tel"
              name="phone"
              value={clientInfo.phone}
              onChange={handleInputChange}
              placeholder="Telefone"
            />
          </ContentInfo>
          <h3>Total: R$ {totalPrice},00</h3>
        </ModalCar.Body>
        <ModalCar.Footer>
          <Buttons variant="primary" onClick={handleSubmit}>
            Confirmar Pedido
          </Buttons>
        </ModalCar.Footer>
      </ModalCar>

      {/* Terceiro Modal - Confirmar Pedido */}
      <ModalCar show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
          <ModalCar.Header>
            <ModalTitle>Resumo Do Pedido</ModalTitle>
          </ModalCar.Header>
          <ModalCar.Body>
            <TitleProdutos>Detalhes Do Pedido</TitleProdutos>
            <InfoPedido>Nome: {clientInfo.name}</InfoPedido>
            <InfoPedido>Telefone: {clientInfo.phone}</InfoPedido>
            <InfoPedido>Método de Entrega: {deliveryMethod}</InfoPedido>
            {deliveryMethod === 'Delivery' && (
              <>
                <TitleProdutos>Endereço</TitleProdutos>
                <InfoPedido>{clientInfo.street}, {clientInfo.number}</InfoPedido>
                <InfoPedido>{clientInfo.neighborhood} - {clientInfo.complement}</InfoPedido>
              </>
            )}
            <TitleProdutos>Produtos</TitleProdutos>
            {cart.map((product, index) => (
              <div key={index}>
                  <InfoPedido>{product.nameProduct} - R$ {product.price},00</InfoPedido>
              </div>
            ))}
            <h3>Total: R$ {totalPrice},00</h3>
            {deliveryMethod === 'Delivery' && (
              <MessageTaxa>*Consultar Taxa de Entrega Após Envio do Pedido*</MessageTaxa>
            )}
          </ModalCar.Body>
          <ModalCar.Footer>
            <Buttons variant="primary" onClick={handleCloseConfirmationModal}>
              Finalizar Pedido
            </Buttons>
          </ModalCar.Footer>
      </ModalCar>
    </>
  );
};

export default CustomModal;
