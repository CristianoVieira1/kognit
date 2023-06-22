import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 5px;
  border: none;
  padding-left: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-weight: 500;
  animation: ${fadeIn} 0.5s ease-in;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const MailIcon = styled(AiOutlineMail)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.gray};
`;

export const LockIcon = styled(AiOutlineLock)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.gray};
`;
