import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 35%;
  right: 20px;
  width: 300px;
  height: 500px;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  animation: ${fadeIn} 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.9) 5px 4px 16px;
  overflow: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 18px;
  cursor: pointer;
`;
