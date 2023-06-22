import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(270deg, #8942a8, #4439a7);
`;

export const Logo = styled.img`
  width: 40%;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 40%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  padding: 30px;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
  gap: 5px;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 0 ${({ theme }) => theme.spacings.xsmall};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Subtitle = styled.p`
  display: inline-block;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 25px;
  font-family: ${({ theme }) => theme.font.bold};
  line-height: 1.5;

  @media screen and (max-width: 992px) {
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }
`;

export const SubmitButton = styled.div`
  padding: 0 ${({ theme }) => theme.spacings.xxlarge};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccessData = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  gap: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;
