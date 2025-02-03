import { ContainerFooter, TextFooter } from "../Footer/style";

const FooterAdmin = ({ onAdd }) => {
  return (
    <ContainerFooter>
      <TextFooter onClick={onAdd}>Adicionar Produtos</TextFooter>
    </ContainerFooter>
  );
};

export default FooterAdmin;