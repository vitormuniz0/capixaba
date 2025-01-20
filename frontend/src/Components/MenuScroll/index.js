import React from "react";
import { NavBarContainer, NavItem } from "./style";

const NavBar = ({ scrollToSection, activeSection }) => {
  const sections = ["salgados", "doces", "paes", "bebidas"];

  return (
    <NavBarContainer>
      {sections.map((section) => (
        <NavItem
          key={section}
          onClick={() => scrollToSection(section)}
          isActive={activeSection === section}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </NavItem>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;