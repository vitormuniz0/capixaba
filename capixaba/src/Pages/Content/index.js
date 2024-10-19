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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Define a seção ativa
        }
      });
    });

    // Observa as seções
    if (sectionSalgados.current) {
      observer.observe(sectionSalgados.current);
    }
    if (sectionDoces.current) {
      observer.observe(sectionDoces.current);
    }

    return () => {
      // Limpa o observer ao desmontar
      observer.disconnect();
    };
  }, []);

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
        activeSection={activeSection}
      />

      <BodyContent>
        <Section ref={sectionSalgados} id="salgados">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </Section>

        <Section ref={sectionDoces} id="doces">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </Section>
      </BodyContent>
      <Footer></Footer>
    </Container>
  );
};

export default Content;
