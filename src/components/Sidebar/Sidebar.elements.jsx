
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  width: ${(props) => (props.act ? '0px' : '68px')};
  padding: ${(props) => (props.act ? '0px' : '1rem 1rem 0 0')};

  height: 100vh;
  background-color: #0A323D;
  transition: 0.5s;
  z-index: var(--z-fixed);

  @media only screen and (min-width: 768px) {
    padding: 1rem 1rem 0 0;
    background-color: #0A323D;
    width: ${(props) => (!props.act ? '280px' : '210px')};
    margin: 5px;
    border-radius: 20px;
  }
`;

export const SidebarMenuContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const StyledNavLink = styled(Link)`

display: grid;
grid-template-columns: max-content max-content;
column-gap: 1rem;
padding: 1rem 0 0.5rem 1.5rem;
margin-top: 1rem;
text-decoration: none;
border-color: white;
i {
  font-size: 1.25rem;
  color: var(--white-color);
}

span {
  color: var(--white-color);
  font-weight: 700;
}
&:hover {
  opacity: 100%;
}
  &:hover {
    text-decoration: underline;
  }
 &[aria-current] {
    color: red;
  }
  
`;

export const LogoContainer = styled(StyledNavLink)`
  opacity: 100%;
  text-decoration: none;
  padding-bottom: 2rem;

  margin: -7px;
  margin-left: 0px;
  img {
    width:100px;
 
  }

`;

export const LogoOut = styled(StyledNavLink)`
  padding-top: 30%;
  text-decoration: none;
  border-style: none;
  padding-bottom: 2rem;
`;

//Version 5 de react router
export const ItemContainer = styled.a`
  background-colors: none;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 1rem;
  padding: 1rem 0 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  border-left-style: solid;
  border-left-width: 2px;
  border-color: white;
  i {
    font-size: 1.25rem;
    color: var(--white-color);
  }
  span {
    color: var(--white-color);
    font-weight: 700;
  }
  &:hover {
    opacity: 100%;
  }
`;
