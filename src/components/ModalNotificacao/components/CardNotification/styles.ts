import { VscChromeClose } from 'react-icons/vsc';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 5px 3px 8px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const TextArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
`;

export const Close = styled(VscChromeClose)`
  position: relative;
  top: -10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Title = styled.h2`
  max-width: 80%;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  color: ${({ theme, color }) => (color ? color : theme.colors.darkGray)};
`;

export const Body = styled.p`
  line-height: 1.2;
  font-family: ${({ theme }) => theme.font.normal};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  color: ${({ theme, color }) => (color ? color : theme.colors.darkGray)};
`;
