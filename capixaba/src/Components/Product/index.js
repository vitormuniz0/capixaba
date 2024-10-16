import React from 'react'
import { ContainerProduct,ImageProduct,Product } from './style';
import imgProduct from '../../Assets/image/hambuguer.jpg'

const ProductStore = () =>{
  return (
    <ContainerProduct>
        <ImageProduct src={imgProduct}/>
        
    </ContainerProduct>
    
  )
};

export default ProductStore; 