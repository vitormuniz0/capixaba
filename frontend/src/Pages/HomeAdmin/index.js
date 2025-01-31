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
  const sectionRefs = {
    salgados: useRef(null),
    doces: useRef(null),
    paes: useRef(null),
    bebidas: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("");
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const fetchProducts = async () => {
    try {
      if (!admin) return;
      const response = await api.get(`/product/?id_adm=${admin.id}`);

      if (response.status === 200) {
        setMyProducts(response.data || []);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [admin]);

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowModal(true); // No need for setTimeout anymore
  };

  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/product/${id}`);
      alert("Produto excluído com sucesso!");
      fetchProducts();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      alert("Erro ao excluir produto.");
    }
  };

  const handleAddOrUpdateProduct = async (formData) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id_adm", admin.id);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("price", formData.price);
      if (formData.file) formDataToSend.append("image", formData.file);

      if (formData.id) {
        await api.put(`/product/${formData.id}`, formDataToSend);
        alert("Produto atualizado com sucesso!");
      } else {
        await api.post("/product", formDataToSend);
        alert("Produto criado com sucesso!");
      }

      fetchProducts();
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      alert("Erro ao salvar produto.");
    }
  };

  const handleSaveProduct = (formData) => {
    console.log("handleSaveProduct chamado com formData:", formData);
  };

  const filterProductsByCategory = (category) => {
    return myProducts
      ? myProducts.filter((product) => product.type.toLowerCase() === category)
      : [];
  };

  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt="Logo Padaria Capixaba" />
        <Location>Avenida Capitão Casa | Número 00</Location>
        <MyHours />
      </Header>
      <NavBar
        scrollToSection={(category) =>
          sectionRefs[category]?.current?.scrollIntoView({ behavior: "smooth" })
        }
        activeSection={activeSection}
      />
      <BodyContent>
        <Section ref={sectionRefs.salgados} id="salgados">
          <CardProductsAdm
            products={filterProductsByCategory("salgados")}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </Section>
        <Section ref={sectionRefs.doces} id="doces">
          <CardProductsAdm
            products={filterProductsByCategory("doces")}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </Section>
      </BodyContent>
      <FooterAdmin />
      {showModal && ( // Renderiza apenas se showModal for true
        <ModalAdmin
          show={showModal}
          handleClose={() => setShowModal(false)}
          productToEdit={productToEdit}
          onSave={handleSaveProduct}
        />
      )}
    </Container>
  );
};
export default HomeAdmin;
