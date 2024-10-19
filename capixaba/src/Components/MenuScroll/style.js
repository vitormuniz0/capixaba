import styled from 'styled-components';

export const NavBarContainer = styled.div`
    width: 100%;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    position: sticky;
    top: 0;
    background-color: silver;
    margin-bottom: 3px;
    border-left: 3px solid silver;
    z-index: 1000;
    padding:  6px 0px;
    justify-content: center;  
    -webkit-overflow-scrolling: touch; /* Suaviza a rolagem em dispositivos móveis */
    scrollbar-width: none; /* Para esconder a barra de rolagem no Firefox */
    &::-webkit-scrollbar {
      display: none; /* Para esconder a barra de rolagem no Chrome, Safari e Edge */
    }
`
export const NavItem = styled.a`
    display: inline-block;
    padding: 8px;
    color: black;
    min-width: 25%;
    text-align: center;
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: bold;
    text-decoration: none;
    border-left: 1px solid silver;
    font-size: 20px;
    background-color: white;
    justify-content: space-between;
    &:hover {
    background-color: silver;
  }
`
