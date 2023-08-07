import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable, View} from 'react-native';

//Styles
import styles from './styles';

interface IIcon {
  name: string;
  pressable?: () => void;
}

function Icons({name, pressable}: IIcon) {
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={pressable}>
          <Icon name={name} style={styles.icon} />
        </Pressable>
      </View>
    </>
  );
}

export default Icons;
