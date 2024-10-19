import React from 'react'
import { NavBarContainer, NavItem } from './style';

const NavBar = ({scrollToSectionSalgados,scrollToSectionDoces, activeSection}) => {
  return (
    <NavBarContainer>
        <NavItem onClick={scrollToSectionSalgados} style={{backgroundColor: activeSection === 'salgados' ? 'silver' : 'white'}}>Salgados</NavItem>
        <NavItem onClick={scrollToSectionDoces} style={{backgroundColor: activeSection === 'doces' ? 'silver' : 'white'}}>Doces</NavItem>
        <NavItem >Pães</NavItem>
        <NavItem >Bebidas</NavItem>
        <NavItem >Promoção</NavItem>
    </NavBarContainer>
  )
}

export default NavBar;