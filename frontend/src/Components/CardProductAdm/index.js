import {
  ContainerImg,
  ContentProduct,
  DescProduct,
  ImgProduct,
  InforProtuct,
  PriceProduct,
  TitleProduct,
} from "../CardProducts/style";
import { ButtonAdm, ContainerButtonAdm } from "./style";

const CardProductsAdm = ({ products = [], onEdit, onDelete }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <ContentProduct key={product.id}>
            <ContainerImg>
              <ImgProduct
                src={`http://localhost:3001${product.img}`}
                alt={product.name}
              />
            </ContainerImg>
            <InforProtuct>
              <TitleProduct>{product.name}</TitleProduct>
              <DescProduct>{product.description}</DescProduct>
              <PriceProduct>{product.price},00 R$</PriceProduct>
              <ContainerButtonAdm>
                <ButtonAdm onClick={() => onEdit(product)}>Atualizar</ButtonAdm>
                <ButtonAdm onClick={() => onDelete(product.id)}>Excluir</ButtonAdm>
              </ContainerButtonAdm>
            </InforProtuct>
          </ContentProduct>
        ))
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </>
  );
};

export default CardProductsAdm;
