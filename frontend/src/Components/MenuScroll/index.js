import React from "react";
import { NavBarContainer, NavItem } from "./style";

const NavBar = ({
  scrollToSectionSalgados,
  scrollToSectionDoces,
  activeSection,
  scrollToSectionPaes,
  scrollToSectionBebidas,
}) => {
  return (
    <NavBarContainer>
      <NavItem
        onClick={scrollToSectionSalgados}
        isActive={activeSection === "salgados"}
      >
        Salgados
      </NavItem>
      <NavItem
        onClick={scrollToSectionDoces}
        isActive={activeSection === "doces"}
      >
        Doces
      </NavItem>
      <NavItem
        onClick={scrollToSectionPaes}
        isActive={activeSection === "paes"}
      >
        Pães
      </NavItem>
      <NavItem
        onClick={scrollToSectionBebidas}
        isActive={activeSection === "bebidas"}
      >
        Bebidas
      </NavItem>
      <NavItem>Promoção</NavItem>
    </NavBarContainer>
  );
};

export default NavBar;
