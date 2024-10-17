import React from 'react'
import { NavBarContainer, NavItem } from './style';

const NavBar = () => {
  return (
    <NavBarContainer>
        <NavItem>Salgados</NavItem>
        <NavItem>Doces</NavItem>
        <NavItem>Pães</NavItem>
        <NavItem>Bebidas</NavItem>
        <NavItem>Promoção</NavItem>
    </NavBarContainer>
  )
}

export default NavBar;