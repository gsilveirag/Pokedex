import React from 'react';
import {Text, View} from 'react-native';

//Styles
import styles from './styles';

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pokédex</Text>
    </View>
  );
}

export default Title;
