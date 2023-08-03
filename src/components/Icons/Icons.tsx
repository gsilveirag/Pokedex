import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Alert, Pressable, View} from 'react-native';

//Styles
import styles from './styles';

// Components
import ModalScreen from '../Modal/ModalScreen';
import {Modalize} from 'react-native-modalize';

function Icons() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={onOpen}>
          <Icon name="filter-outline" style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => Alert.alert('TEste, Teste')}>
          <Icon name="sort" style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => Alert.alert('Teste')}>
          <Icon name="creation" style={styles.icon} />
        </Pressable>
        <ModalScreen modalizeRef={modalizeRef} />
      </View>
    </>
  );
}

export default Icons;
