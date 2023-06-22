import PropTypes from 'prop-types';
import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
};

const Input: React.FC<IInputProps> = ({ type, ...rest }) => (
  <S.Container>
    {type === 'email' && <S.MailIcon />}
    {type === 'password' && <S.LockIcon />}
    <S.Input type={type} {...rest} />
  </S.Container>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
