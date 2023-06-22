import { useState } from 'react';
import logoImg from '../../assets/icons/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { useAuth } from '../../hooks/auth';
import theme from '../../styles/theme';
import * as S from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signIn(email, password);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Header>
            <S.Logo src={logoImg} alt="Logo da Kognit" />
          </S.Header>
          <S.Subtitle>Digite os seus dados de acesso no campo abaixo.</S.Subtitle>
          <S.Content>
            <Input
              type="email"
              placeholder="e-mail"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.Content>

          <S.SubmitButton>
            <Button type="submit">Acessar</Button>
          </S.SubmitButton>

          <S.AccessData>
            <Title label="Dados de acesso" color={theme.colors.red} />
            <Title label="email: kognit@gmail.com" />
            <Title label="senha: 123456" />
          </S.AccessData>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default SignIn;
