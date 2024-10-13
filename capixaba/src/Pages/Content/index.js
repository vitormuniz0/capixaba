import React from 'react'
import { Container, Header, ImageHeader, Location, SubContainer, TextLogo } from './styles';
import ImgPadaria from '../../Assets/image/logoCapixaba.jpg'

const Content = () => {
  return (
    <Container>
      <Header>
        <ImageHeader src={ImgPadaria} alt='Logo Padaria Capixaba'/>
        <TextLogo>
          Bella Capixaba
        </TextLogo>
        <Location>Avenida Capitão Casa</Location>
        
      </Header>
    </Container>
  )
}

export default Content;
