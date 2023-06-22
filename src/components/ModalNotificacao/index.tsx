import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getConsultNotify } from '../../services/network/RequesteNotifications/getNotifications';
import CardNotification from './components/CardNotification';
import * as S from './styles';

interface Notification {
  id: number;
  title: string;
  body: string;
}

interface NotificationModalProps {
  onClose: () => void;
  setCountNotifications: (count: number) => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  onClose,
  setCountNotifications,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    handleNotifications();
  }, []);

  const handleNotifications = async () => {
    try {
      const response = await getConsultNotify();
      setNotifications(response);
      setCountNotifications(response.length);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const handleCloseNotification = (notificationId: number) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
    setCountNotifications(updatedNotifications.length);
    handleSuccessToast();
  };

  const handleSuccessToast = () => {
    toast.success('Notificação excluída com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <S.ModalContainer>
      <S.CloseButton onClick={onClose}>X</S.CloseButton>
      {notifications.map((notification) => (
        <CardNotification
          key={notification.id}
          title={notification.title}
          body={notification.body}
          onClose={() => handleCloseNotification(notification.id)}
        />
      ))}
    </S.ModalContainer>
  );
};

export default NotificationModal;
