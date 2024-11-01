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

const Content = () => {
  const sectionSalgados = useRef(null);
  const sectionDoces = useRef(null);
  const sectionPaes = useRef(null);
  const sectionBebidas = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [cart, setCart] = useState([]);

  const MyProducts = [
    {
      id: 1,
      nameProduct: "Hamburguer",
      desc: "Carne Bovina, Alface, Tomate, Molho Caseiro e queijo de sua preferencia",
      tipo: "Salgados",
      price: 15.0,
      image: require("../../Assets/image/hamburguer.jpg")
    },
    {
      id: 2,
      nameProduct: "Coxinha",
      desc: "Frango desfiado, temperos caseiros, e massa crocante",
      tipo: "Salgados",
      price: 8.0,
      image: require("../../Assets/image/coxinha.jpeg")
    },
    {
      id: 3,
      nameProduct: "Empada de Frango",
      desc: "Recheio de frango desfiado com catupiry em massa leve e amanteigada",
      tipo: "Salgados",
      price: 10.0,
      image: require("../../Assets/image/EMPADA-DE-FRANGO.jpg")
    },
    {
      id: 4,
      nameProduct: "Quibe",
      desc: "Carne moída, trigo para quibe, temperos árabes, recheio de catupiry",
      tipo: "Salgados",
      price: 12.0,
      image: require("../../Assets/image/quibe.jpg")
    },
    {
      id: 5,
      nameProduct: "Pastel de Carne",
      desc: "Carne moída temperada, cebola e azeitona envoltos em massa frita",
      tipo: "Salgados",
      price: 7.0,
      image: require("../../Assets/image/pastel.png")
    },
    {
      id: 6,
      nameProduct: "Esfirra de Carne",
      desc: "Carne moída temperada com especiarias, assada em massa macia",
      tipo: "Salgados",
      price: 9.0,
      image: require("../../Assets/image/esfiha.jpeg")
    },
    {
      id: 7,
      nameProduct: "Brigadeiro",
      desc: "Chocolate, leite condensado, e granulado",
      tipo: "Doces",
      price: 5.0,
      image: require("../../Assets/image/brigadeiro.jpeg")
    },
    {
      id: 8,
      nameProduct: "Beijinho",
      desc: "Leite condensado, coco ralado, e açúcar cristal",
      tipo: "Doces",
      price: 5.0,
      image: require("../../Assets/image/beijinho.jpg")
    },
    {
      id: 9,
      nameProduct: "Bolo de Cenoura",
      desc: "Bolo macio de cenoura com cobertura de chocolate",
      tipo: "Doces",
      price: 12.0,
      image: require("../../Assets/image/bolo-cenoura.jpg")

    },
    {
      id: 10,
      nameProduct: "Quindim",
      desc: "Gema de ovo, coco ralado e açúcar, assado e caramelizado",
      tipo: "Doces",
      price: 6.0,
      image: require("../../Assets/image/quindim.png")

    },
    {
      id: 11,
      nameProduct: "Torta de Limão",
      desc: "Base de biscoito, recheio de limão e cobertura de merengue",
      tipo: "Doces",
      price: 10.0,
      image: require("../../Assets/image/torta-de-limao.jpg")


    },
    {
      id: 12,
      nameProduct: "Churros",
      desc: "Massa frita recheada com doce de leite e coberta com açúcar e canela",
      tipo: "Doces",
      price: 8.0,
      image: require("../../Assets/image/churros.png")

    },
  ];

  const salgados = MyProducts.filter((product) => product.tipo === "Salgados");
  const doces = MyProducts.filter((product) => product.tipo === "Doces");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Define a seção ativa
          }
        });
      },
      { threshold: 0.6 } // Só considera a seção ativa se mais de 60% dela estiver visível
    );

    // Observa as seções
    if (sectionSalgados.current) {
      observer.observe(sectionSalgados.current);
    }
    if (sectionDoces.current) {
      observer.observe(sectionDoces.current);
    }

    if (sectionPaes.current) {
      observer.observe(sectionPaes.current);
    }

    if (sectionBebidas.current) {
      observer.observe(sectionBebidas.current);
    }

    return () => {
      // Limpa o observer ao desmontar
      observer.disconnect();
    };
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

  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt="Logo Padaria Capixaba" />
        <Location>Avenida Capitão Casa | Numero 00</Location>
        <MyHours />
      </Header>
      <NavBar
        scrollToSectionSalgados={() =>
          sectionSalgados.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToSectionDoces={() =>
          sectionDoces.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToSectionPaes={() =>
          sectionPaes.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToSectionBebidas={() =>
          sectionBebidas.current.scrollIntoView({ behavior: "smooth" })
        }
        activeSection={activeSection}
      />

      <BodyContent>
        <Section ref={sectionSalgados} id="salgados">
          <CardProducts products={salgados} addToCart={addToCart} />
        </Section>

        <Section ref={sectionDoces} id="doces">
          <CardProducts products={doces} addToCart={addToCart} />
        </Section>
        {/* <Section ref={sectionPaes} id="paes">
          <CardProducts />
        </Section>
        <Section ref={sectionBebidas} id="bebidas">
          <CardProducts />
        </Section> */}
      </BodyContent>
      <Footer cart={cart} removeFromCart={removeFromCart} />
    </Container>
  );
};

export default Content;
