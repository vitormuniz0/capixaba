import React, { useEffect, useRef, useState } from "react";
import {
  BodyContent,
  Container,
  Header,
  ImageHeader,
  Location,
  Section,
} from "./styles";
import ImgPadaria from "../../Assets/image/logoCapixaba.jpg";
import MyHours from "./Hours";
import NavBar from "../../Components/MenuScroll";
import CardProducts from "../../Components/CardProducts";
import Footer from "../../Components/Footer";
import api from "../../Services/api";

const Content = () => {
  const sectionRefs = {
    salgados: useRef(null),
    doces: useRef(null),
    paes: useRef(null),
    bebidas: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("");
  const [cart, setCart] = useState([]);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/product");

        // Verificar se a resposta foi bem-sucedida
        if (response.status === 200) {
          console.log("Resposta da API:", response.data);
          setMyProducts(response.data);
        } else {
          console.log("Erro na requisição:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    // Observa cada seção
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const addToCart = (products) => {
    setCart((prevCart) => [...prevCart, products]); // Adicionando produto ao carrinho
  };

  // Função para remover do carrinho
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const filterProductsByCategory = (category) => {
    if (Array.isArray(myProducts)) {
      return myProducts.filter(
        (product) => product.type.toLowerCase() === category
      );
    }
    console.error("Produtos não são um array:", myProducts);
    return [];
  };

  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt="Logo Padaria Capixaba" />
        <Location>Avenida Capitão Casa | Numero 00</Location>
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
          <CardProducts
            products={filterProductsByCategory("salgados")}
            addToCart={addToCart}
          />
        </Section>
        <Section ref={sectionRefs.doces} id="doces">
          <CardProducts
            products={filterProductsByCategory("doces")}
            addToCart={addToCart}
          />
        </Section>
        {/* <Section ref={sectionRefs.paes} id="paes">
          <h2>Pães</h2>
          <CardProducts
            products={filterProductsByCategory("paes")}
            addToCart={addToCart}
          />
        </Section> */}
        {/* <Section ref={sectionRefs.bebidas} id="bebidas">
          <h2>Bebidas</h2>
          <CardProducts
            products={filterProductsByCategory("bebidas")}
            addToCart={addToCart}
          />
        </Section> */}
      </BodyContent>
      <Footer cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
    </Container>
  );
};

export default Content;
