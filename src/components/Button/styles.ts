import { FiLoader } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGray};
  transition: opacity 0.3s;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled(FiLoader)`
  animation: ${spin} 1s linear infinite;
`;
