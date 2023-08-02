import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable, View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

//Styles
import styles from './styles';
import ModalScreen from '../Modal/Modal';

function Icons() {
  const {navigate, goBack}: NavigationProp<ParamListBase> = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Icon name="filter-outline" style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <Icon name="sort" style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <Icon name="creation" style={styles.icon} />
        </Pressable>
      </View>

      <ModalScreen
        visible={modalVisible}
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </>
  );
}

export default Icons;
