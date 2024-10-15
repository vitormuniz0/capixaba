import React from "react";
import { ButtonContent, Container, Content,Instagram,LogoContent, LogoImage, SocialContent, Tell, WhatsApp } from "./style";
import MyButton from "./Button";
import logo from '../../Assets/image/logoCapixaba.jpg'

const Home = () => {
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
          <MyButton>Tire Suas Duvidas Aqui</MyButton>
          <SocialContent>
            <WhatsApp/>
            <Instagram/>
            <Tell/>
          </SocialContent>
        </ButtonContent>
      </Content>
    </Container>
  );
};

export default Home;
