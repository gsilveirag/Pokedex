import React from 'react';
import {Modalize} from 'react-native-modalize';

//Styles
import styles from './styles';

//Components
import Filter from '../../pages/Filter/Filter';

interface IModalScreen {
  modalizeRef?: React.RefObject<Modalize>;
}

const ModalSreen = ({modalizeRef}: IModalScreen) => {
  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={180}
      modalStyle={styles.modalizeContainer}>
      <Filter />
    </Modalize>
  );
};

export default ModalSreen;
