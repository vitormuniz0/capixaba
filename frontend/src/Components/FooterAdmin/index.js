import { useState } from "react";
import { ContainerFooter, TextFooter } from "../Footer/style";
import ModalAdmin from "../ModalAdmin";

const FooterAdmin = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ContainerFooter>
      <TextFooter onClick={() => setShowModal(true)}>Adicionar Produtos</TextFooter>
      <ModalAdmin
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </ContainerFooter>
  );
};

export default FooterAdmin;
