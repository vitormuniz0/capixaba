import React from 'react'
import { BodyContent, Container, Header, ImageHeader, Location} from './styles';
import ImgPadaria from '../../Assets/image/logoCapixaba.jpg'
import MyHours from './Hours';
import NavBar from '../../Components/MenuScroll';
import CardProducts from '../../Components/CardProducts';

const Content = () => {
  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt='Logo Padaria Capixaba'/>
        <Location>Avenida Capitão Casa | Numero 00</Location>
        <MyHours/>
      </Header>
      <NavBar/>
    <BodyContent>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>

      
    </BodyContent>
    </Container>
  )
}

export default Content;
