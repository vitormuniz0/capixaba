import React from 'react'
import { NavBarContainer, NavItem } from './style';

const NavBar = ({scrollToSectionSalgados,scrollToSectionDoces, activeSection, scrollToSectionPaes, scrollToSectionBebidas}) => {
  return (
    <NavBarContainer>
        <NavItem onClick={scrollToSectionSalgados} style={{backgroundColor: activeSection === 'salgados' ? 'silver' : 'white'}}>Salgados</NavItem>
        <NavItem onClick={scrollToSectionDoces} style={{backgroundColor: activeSection === 'doces' ? 'silver' : 'white'}}>Doces</NavItem>
        <NavItem onClick={scrollToSectionPaes} style={{backgroundColor: activeSection === 'paes' ? 'silver' : 'white'}}
        >Pães</NavItem>
        <NavItem onClick={scrollToSectionBebidas} style={{backgroundColor: activeSection === 'bebidas' ? 'silver' : 'white'}}>Bebidas</NavItem>
        <NavItem >Promoção</NavItem>
    </NavBarContainer>
  )
}

export default NavBar;