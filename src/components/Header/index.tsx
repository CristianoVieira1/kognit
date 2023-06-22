import React, { useEffect, useMemo, useState } from 'react';

import { getConsultNotify } from '../../services/network/RequesteNotifications/getNotifications';
import theme from '../../styles/theme';
import emojis from '../../utils/emojis';
import NotificationModal from '../ModalNotificacao';
import Title from '../Title';
import * as S from './styles';

export const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [countNotifications, setCountNotifications] = useState<number>(0);

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    handleNotifications();
  }, []);

  const handleNotifications = async () => {
    try {
      const response = await getConsultNotify();
      setCountNotifications(response.length);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  return (
    <S.Container>
      <S.NotificationIconWrapper onClick={handleOpenModal}>
        <S.BellIcon />
        <S.Count>{countNotifications}</S.Count>
      </S.NotificationIconWrapper>
      <S.Profile>
        <Title label="Olá, Bem vindo" color={theme.colors.white} />

        <S.Welcome>{emoji}</S.Welcome>
      </S.Profile>
      {showModal && (
        <NotificationModal
          setCountNotifications={setCountNotifications}
          onClose={handleCloseModal}
        />
      )}
    </S.Container>
  );
};
