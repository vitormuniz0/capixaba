import {
    ContainerImg,
    ContentProduct,
    DescProduct,
    ImgProduct,
    InforProtuct,
    PriceProduct,
    TitleProduct,
  } from "../CardProducts/style";
  import { Buttons } from "../Modal/style";
  
  const CardProductsAdm = ({ products, onEdit, onDelete }) => {
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
              <div>
                <Buttons onClick={() => onEdit(product)}>Atualizar</Buttons>
                <Buttons onClick={() => onDelete(product.id)}>Excluir</Buttons>
              </div>
            </InforProtuct>
          </ContentProduct>
        ))}
      </>
    );
  };
  
  export default CardProductsAdm;