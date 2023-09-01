import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  background-color: var(--main-color);
  // height: 100vh - 68px;
  // width: 100vw - 180px;

  padding: ${(props) =>
    !props.active ? '200px' : 'calc(var(--nav-width))'};
  transition: 2s;
  padding-top: calc(var(--header-height));
  padding-left: 190px;
  padding-right: 20px;
  @media only screen and (max-width: 768px) {

    padding: ${(props) => (props.active ? '0px' : '78px')};
    padding-top: 50px;
  
  }
`;
//
