import React from 'react'
import { Container, Header, ImageHeader, Location, TextLogo } from './styles';
import ImgPadaria from '../../Assets/image/logoCapixaba.jpg'
import MyHours from './Hours';

const Content = () => {
  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt='Logo Padaria Capixaba'/>
        <TextLogo>
          Bella Capixaba
        </TextLogo>
        <Location>Avenida Capitão Casa</Location>
        <MyHours/>
        
      </Header>
    </Container>
  )
}

export default Content;
