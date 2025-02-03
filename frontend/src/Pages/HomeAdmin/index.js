import { useContext, useEffect, useRef, useState } from "react";
import CardProductsAdm from "../../Components/CardProductAdm";
import NavBar from "../../Components/MenuScroll";
import MyHours from "../Content/Hours";
import {
  BodyContent,
  Container,
  Header,
  ImageHeader,
  Location,
  Section,
} from "../Content/styles";
import api from "../../services/api";
import ImgPadaria from "../../Assets/image/logoCapixaba.jpg";
import { AuthContext } from "../../context/auth";
import FooterAdmin from "../../Components/FooterAdmin";
import ModalAdmin from "../../Components/ModalAdmin";


const HomeAdmin = () => {
  const { admin } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const fetchProducts = async () => {
    try {
      if (!admin) return;
      const response = await api.get(`/product/?id_adm=${admin.id}`);
      setMyProducts(response.data || []);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [admin]);

  const handleUpdateProduct = async (productData) => {
    try {
      const formData = new FormData();
      formData.append("id_adm", admin.id);
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("type", productData.type);
      formData.append("price", productData.price);
      if (productData.file) {
        formData.append("image", productData.file);
      }

      await api.put(`/product/${productData.id}`, formData);
      setShowModal(false);
      fetchProducts(); // Atualiza lista de produtos
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/product/${id}`);
      alert("Produto excluído com sucesso!");
      fetchProducts(); // Atualiza a lista
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      alert("Erro ao excluir produto.");
    }
  };

  const handleCreateProduct = async (productData) => {
    try {
      const formData = new FormData();
      formData.append("id_adm", admin.id);
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("type", productData.type);
      formData.append("price", productData.price);
      if (productData.file) {
        formData.append("image", productData.file);
      }

      await api.post("/product", formData);
      setShowModal(false);
      fetchProducts(); // Atualiza a lista
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  const handleSaveProduct = (productData) => {
    if (productData.id) {
      handleUpdateProduct(productData);
    } else {
      handleCreateProduct(productData);
    }
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowModal(true);
  };

  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt="Logo Padaria Capixaba" />
        <Location>Avenida Capitão Casa | Número 00</Location>
        <MyHours />
      </Header>
      <NavBar />
      <BodyContent>
        <Section>
          <CardProductsAdm
            products={myProducts}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </Section>
      </BodyContent>
      <FooterAdmin onAdd={() => setShowModal(true)} />
      {showModal && (
        <ModalAdmin
          key={productToEdit?.id || "new"}
          show={showModal}
          handleClose={() => setShowModal(false)}
          productToEdit={productToEdit}
          onSave={handleSaveProduct} // Passando onSave para o ModalAdmin
        />
      )}
    </Container>
  );
};

export default HomeAdmin;
