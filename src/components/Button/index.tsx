import React, { ButtonHTMLAttributes, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import * as S from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children, disabled, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <S.Container disabled={disabled || isLoading} onClick={handleOnClick} {...rest}>
      {isLoading ? (
        <S.LoaderContainer>
          <FiLoader />
        </S.LoaderContainer>
      ) : (
        <S.Content>{children}</S.Content>
      )}
    </S.Container>
  );
};

export default Button;
