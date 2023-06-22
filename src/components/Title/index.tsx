import * as S from './styles';

type ITitleProps = {
  label: string;
  color?: string;
};

const Title = ({ label, color }: ITitleProps) => <S.Label color={color}>{label}</S.Label>;

export default Title;
