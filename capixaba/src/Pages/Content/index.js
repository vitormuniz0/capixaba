import React from 'react'
import { Container, ContentProducts, Header, ImageHeader, Location, TextLogo } from './styles';
import ImgPadaria from '../../Assets/image/logoCapixaba.jpg'
import MyHours from './Hours';
import NavBar from '../../Components/MenuScroll';

const Content = () => {
  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt='Logo Padaria Capixaba'/>
        <Location>Avenida Capitão Casa | Numero 00</Location>
        <MyHours/>
      </Header>
      <NavBar/>
    </Container>
  )
}

export default Content;
