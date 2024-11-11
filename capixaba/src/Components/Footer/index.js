import React, { useState } from 'react'
import { ContainerFooter, TextFooter } from './style';
import { AiOutlineShoppingCart } from "react-icons/ai";
import CustomModal from '../Modal';

const Footer = ({cart, removeFromCart, setCart}) => {

  const [showModal , setShowModal] = useState(false);

    const handleClose = () => {
      console.log("Fechar modal")
      setShowModal(false);
    }
    const handleShow = () => {
      console.log("Abrir Modal")
      setShowModal(true);
    }

  return (
    <ContainerFooter>
        <TextFooter onClick={handleShow}>Minhas Compras <AiOutlineShoppingCart/></TextFooter>
        <CustomModal show={showModal} handleClose={handleClose} cart={cart} setCart={setCart} removeFromCart={removeFromCart}/>
    </ContainerFooter>
  )
}

export default Footer;