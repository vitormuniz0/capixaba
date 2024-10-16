import styled from 'styled-components';

export const NavBarContainer = styled.div`
    width: 100%;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0;
    justify-content: center;
`
export const NavItem = styled.a`
    display: inline-block;
    padding: 8px;
    color: black;
    min-width: 25%;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    justify-content: space-between;
    &:hover {
    background-color: silver;
  }
`
