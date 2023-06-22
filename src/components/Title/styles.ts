import styled from 'styled-components';

type InputProps = {
  color?: string;
};

export const Label = styled.span<InputProps>`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme, color }) => (color ? color : theme.colors.darkGray)};
  font-family: ${({ theme }) => theme.font.bold};
  line-height: 1.2;
  text-align: left;
  margin-bottom: 0;

  @media screen and (max-width: 992px) {
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }
`;
