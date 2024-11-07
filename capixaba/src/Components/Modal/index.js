import {
  ButtonConfirm,
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
  const [deliveryMethod, setDeliveryMethod] = useState("Retirada");
  const [showSecondModal, setShowSecundModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  //Funcao para fazer a soma dos precos dos produtos
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  //const que armazena os dados do cliente na hora da compra
  const [clientInfo, setClientInfo] = useState({
    street: "", // Rua
    neighborhood: "", // Bairro
    number: "", // Número
    complement: "", // Logradouro ou Complemento
    name: "",
    phone: "",
  });

  //const para resetar os dados do cliente
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

  //funcao para quando o input perder o foco ele armazenar o valor inserido nele
  const handleDeliveryChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  // funcao para avancar ao clicar no botao de avancar do primeiro modal com algumas validacoes
  const hadleAdvance = () => {
    if (
      deliveryMethod === "Delivery" &&
      (clientInfo.street === "" ||
        clientInfo.neighborhood === "" ||
        clientInfo.number === "")
    ) {
      alert("Por favor, insira o endereço completo para a entrega.");
      return; // Impede a abertura do segundo modal se o endereço não for preenchido
    } else if (cart.length === 0) {
      alert("Por favor, insira algum Produto ao seu carrinho.");
      return;
    }
    handleClose(); //fecha o primeiro modal
    setShowSecundModal(true); //Abre o segundo modal
  };

  // funcao para avancar ao clicar no botao de avancar do segundo modal com algumas validacoes
  const hadleAdvanceSecondModal = () => {
    if (clientInfo.name === "" || clientInfo.phone === "") {
      alert("Por favor, insira suas Informações Para Confirmar seu Pedido.");
      return;
    }
    handleSubmit(); // chama essa funcao que fecha um modal e abre o ultimo
  };

  // funcao para fechar o segundo modal e limpa as informacoes inseridas nele
  const handleCloseSecondModal = () => {
    resetClientInfo(); // Limpa as informações ao fechar o segundo modal
    setShowSecundModal(false);
  };

  // funcao para enviar o pedido para a empresa com as descricoes do pedido e fechar o modal no final
  const handleCloseConfirmationModal = () => {
    try {
      const formatMessage = () => {
        let message = `*Resumo do Pedido:*\n\n`;
        message += `*Nome:* ${clientInfo.name}\n`;
        message += `*Telefone:* ${clientInfo.phone}\n`;
        message += `*Método de Entrega:* ${deliveryMethod}\n`;
      
        if (deliveryMethod === "Delivery") {
          message += `\n*Endereço:*\n`;
          message += `${clientInfo.street}, ${clientInfo.number}\n`;
          message += `${clientInfo.neighborhood} - ${clientInfo.complement}\n`;
        }
      
        message += `\n*Produtos:*\n`;
        cart.forEach((product) => {
          message += `- *Produto:* ${product.nameProduct}\n`;
          message += `  *Descrição:* ${product.desc}\n`;
          message += `  *Preço:* R$ ${product.price},00\n`;
        });
      
        message += `\n*Total:* R$ ${totalPrice},00\n`;
      
        if (deliveryMethod === "Delivery") {
          message += `\n*Consultar Taxa de Entrega De Acordo com o Endereço do Cliente.*\n`;
        }
      
        return encodeURIComponent(message); // Encode the message to be URL-safe
      };
      
      const whatsappNumber = "5581996804847"; // Substitua pelo número da empresa no formato internacional
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${formatMessage()}`;
      
      // Abrir o link do WhatsApp
      window.open(whatsappLink, "_blank");
      alert('Seu Pedido Foi Enviado Com Sucesso, Muito Obrigado!');
      setShowConfirmationModal(false);
    } catch (error) { 
      alert('Erro ao Enviar Pedido! ', error)
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  //funcao que fecha o segundo modal e abre o ultimo
  const handleSubmit = () => {
    setShowSecundModal(false);
    setShowConfirmationModal(true);
  };

  return (
    <>
      <ModalCar
        show={show}
        onHide={() => {
          resetClientInfo();
          handleClose();
        }}
      >
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
                    <h4>{product.nameProduct}</h4>
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
          <h4>Total: R$ {totalPrice},00</h4>
          {deliveryMethod === "Delivery" && (
            <MessageTaxa>
              *Consultar Taxa de Entrega Após Envio do Pedido*
            </MessageTaxa>
          )}
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
          <Buttons variant="primary" onClick={hadleAdvance}>
            Avancar
          </Buttons>
          <Buttons
            variant="secondary"
            onClick={() => {
              resetClientInfo();
              handleClose();
            }}
          >
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
          <ButtonConfirm variant="primary" onClick={hadleAdvanceSecondModal}>
            Confirmar Pedido
          </ButtonConfirm>
        </ModalCar.Footer>
      </ModalCar>

      {/* Terceiro Modal - Confirmar Pedido */}
      <ModalCar
        show={showConfirmationModal}
        onHide={handleCloseConfirmationModal}
      >
        <ModalCar.Header>
          <ModalTitle>Resumo Do Pedido</ModalTitle>
        </ModalCar.Header>
        <ModalCar.Body>
          <TitleProdutos>Detalhes Do Pedido</TitleProdutos>
          <InfoPedido>Nome: {clientInfo.name}</InfoPedido>
          <InfoPedido>Telefone: {clientInfo.phone}</InfoPedido>
          <InfoPedido>Método de Entrega: {deliveryMethod}</InfoPedido>
          {deliveryMethod === "Delivery" && (
            <>
              <TitleProdutos>Endereço</TitleProdutos>
              <InfoPedido>
                {clientInfo.street}, {clientInfo.number}
              </InfoPedido>
              <InfoPedido>
                {clientInfo.neighborhood} - {clientInfo.complement}
              </InfoPedido>
            </>
          )}
          <TitleProdutos>Produtos</TitleProdutos>
          {cart.map((product, index) => (
            <div key={index}>
              <InfoPedido>
                {product.nameProduct} - R$ {product.price},00
              </InfoPedido>
            </div>
          ))}
          <h3>Total: R$ {totalPrice},00</h3>
          {deliveryMethod === "Delivery" && (
            <MessageTaxa>
              *Consultar Taxa de Entrega Após Envio do Pedido*
            </MessageTaxa>
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
