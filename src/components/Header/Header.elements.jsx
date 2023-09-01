import styled, { css } from 'styled-components';

export const Headerbar = styled.div`
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--main-color);
  z-index: var(--z-fixed);

  i {
    margin-left: ${(props) => (!props.active ? '180px' : 'var(--nav-width)')};
    transition: 0.5s;
  }
  @media only screen and (max-width: 768px) {
    i {
      margin-left: ${(props) => (!props.active ? '58px' : '0px')};
      margin-right: 50px;
      padding: 0 1rem;
    }
  }
`;

export const Toggle = styled.div`
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  background-color: green;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
`;
