import styled, { css } from 'styled-components';

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;

  @media (max-width: 992px) {
    padding-left: 20px;
    z-index: 2;
    height: ${(props) => (props.menuIsOpen ? '100vh' : '70px')};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
      `};
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const LogImg = styled.img`
  width: 50%;
  padding: ${({ theme }) => theme.spacings.xsmall};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.menu};
  text-decoration: none;
  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }
`;

export const MenuItemButton = styled.button`
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  color: ${({ theme }) => theme.colors.info};
  border: none;
  background: none;
  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 22px;
  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s;
  display: none;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
