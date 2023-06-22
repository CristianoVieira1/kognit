import { FaBell } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  position: relative;
  justify-content: end;
  align-items: center;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 3px 8px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NotificationIconWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacings.xsmall};
  cursor: pointer;

  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

export const BellIcon = styled(FaBell)`
  right: 12px;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.white};
`;

export const Welcome = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.bold};
  line-height: 1.2;
`;

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.bold};
  line-height: 1.2;
`;
export const Count = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.bold};
  background: ${({ theme }) => theme.colors.red};
  padding: 2px;
  border-radius: 12px;
`;
