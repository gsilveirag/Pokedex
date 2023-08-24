import React from 'react';
import {Text, View} from 'react-native';

//Styles
import styles from './styles';

interface IBadges {
  texto: string;
}

function Badges({texto}: IBadges) {
  return (
    <View style={[styles.viewBadges]}>
      <Text style={styles.textBadges}>{texto}</Text>
    </View>
  );
}
export default Badges;
