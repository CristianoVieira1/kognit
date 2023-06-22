import * as S from './styles';

export interface INotificationProps {
  userId?: number;
  id?: number;
  title: string;
  body: string;
  onClose?: () => void;
}

const CardNotification = ({ userId, id, title, body, onClose }: INotificationProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.TextArea>
          <S.Title>{title}</S.Title>
          <S.Close onClick={onClose} />
        </S.TextArea>
        <S.Body>{body}</S.Body>
      </S.Content>
    </S.Container>
  );
};

export default CardNotification;
