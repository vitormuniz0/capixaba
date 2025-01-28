import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../context/auth";
import api from "../../services/api";

const ModalAdmin = ({ show, handleClose, productToEdit, onSave }) => {
  const { admin } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    type: "",
    price: "",
    file: null,
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData({ ...productToEdit, file: null });
    } else {
      setFormData({ id: null, name: "", description: "", type: "", price: "", file: null });
    }
  }, [productToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSave = () => {
    onSave(formData);  // Chama a função onSave (passada pelo pai) para salvar o produto
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{formData.id ? "Editar Produto" : "Adicionar Produto"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Nome do Produto"
          className="mb-3"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          placeholder="Descrição"
          className="mb-3"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          placeholder="Categoria"
          className="mb-3"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
        />
        <Form.Control
          type="number"
          placeholder="Preço"
          className="mb-3"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <Form.Control
          type="file"
          className="mb-3"
          onChange={handleFileChange}
        />
        <Button variant="primary" onClick={handleSave}>
          {formData.id ? "Atualizar" : "Salvar"}
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAdmin;
