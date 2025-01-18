import {
  BodyModal,
  BtnCar,
  ContainerImg,
  ContentProduct,
  DescProduct,
  ImgProduct,
  InforProtuct,
  InputModal,
  InputText,
  LabelModal,
  PriceObs,
  PriceProduct,
  QuantityButton,
  QuantityContainer,
  TitleProduct,
} from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { MyAlert } from "../Alert/style";
import { Buttons, ModalCar } from "../Modal/style";

const CardProducts = ({ products , addToCart }) => {
  const [showAlert, setShowAlert] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState("");

  const handleNotification = (productName) => {
    setShowAlert(productName);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  // funcao que abre o modal de observacao
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  // funcao que fecha o modal de observacao
  const closeModal = () => {
    setModalIsOpen(false);
    setQuantity(1);
    setObservation("");
  };

  // Função para adicionar ao carrinho com quantidade e observação
  const handleAddToCart = () => {
    const productWithDetails = {
      ...selectedProduct,
      quantity,
      observation,
    };
    addToCart(productWithDetails);
    handleNotification(selectedProduct.nameProduct);
    closeModal();
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      {products.map((product) => (
        <ContentProduct key={product.id}>
          <ContainerImg>
            <ImgProduct src={`http://localhost:3001${product.img}`} alt={product.name} />
          </ContainerImg>
          <InforProtuct>
            <TitleProduct>{product.name}</TitleProduct>
            <DescProduct>{product.description}</DescProduct>
            <PriceProduct>{product.price},00 R$</PriceProduct>
            <BtnCar onClick={() => openModal(product)}>
              <AiOutlineShoppingCart />
              {showAlert === product.name && (
                <MyAlert variant="success">
                  {product.name} Adicionado com Sucesso!
                </MyAlert>
              )}
            </BtnCar>
          </InforProtuct>
        </ContentProduct>
      ))}

      {/* Se o selecionar o produto vai abrir este modal */}

      {selectedProduct && (
        <ModalCar show={modalIsOpen} onHide={closeModal}>
          <ModalCar.Header closeButton onHide={closeModal}>
            <ModalCar.Title>{selectedProduct?.name}</ModalCar.Title>
          </ModalCar.Header>
          <BodyModal>
            <PriceObs>R${selectedProduct.price},00</PriceObs>
            <LabelModal>Quantidade:</LabelModal>
            <QuantityContainer>
              <QuantityButton onClick={handleDecrement}>-</QuantityButton>
              <InputModal
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <QuantityButton onClick={handleIncrement} isIncrement>
                +
              </QuantityButton>
            </QuantityContainer>

            <LabelModal>Observações:</LabelModal>
            <InputText
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              rows="4" 
            />
          </BodyModal>
          <ModalCar.Footer>
            <Buttons onClick={handleAddToCart}>Adicionar ao Carrinho</Buttons>
          </ModalCar.Footer>
        </ModalCar>
      )}
    </>
  );
};

export default CardProducts;
