import React from "react";
import { ButtonContent, Container, Content,Instagram,LogoContent, LogoImage, SocialContent, Tell, WhatsApp } from "./style";
import MyButton from "./Button";
import logo from '../../Assets/image/logoCapixaba.jpg'

const Home = () => {

  const handleWhatsAppClick = () =>{
    const whatsappNumber = "5581996804847";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
  }

  const handleInstagramClick = () => {
    const instagramLink = "https://www.instagram.com/viitor.muniiz"; 
    window.open(instagramLink, '_blank'); 
  };


  return (
    <Container>
      <Content>
        <LogoContent>
          <LogoImage src = {logo} alt='Logo'/>
        </LogoContent>
        <ButtonContent>
          <MyButton to='/content'>Delivery Capixaba</MyButton>
          <MyButton>Ifood Capixaba</MyButton>
          <MyButton>Nossa Localização</MyButton>
          <MyButton onClick={handleWhatsAppClick}>Tire Suas Duvidas Aqui</MyButton>
          <SocialContent>
            <WhatsApp onClick={handleWhatsAppClick}/>
            <Instagram onClick={handleInstagramClick}/>
            <Tell/>
          </SocialContent>
        </ButtonContent>
      </Content>
    </Container>
  );
};

export default Home;
