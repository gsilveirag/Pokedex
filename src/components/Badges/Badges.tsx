import React from 'react';
import {Image, Text, View} from 'react-native';

//Styles
import styles from './styles';
import Colors from '../../constants/Colors';

interface IBadges {
  texto: string;
  cordeFundo: keyof typeof Colors;
}

function Badges({texto, cordeFundo}: IBadges) {
  return (
    <View style={[styles.viewBadges, {backgroundColor: cordeFundo}]}>
      <Image
        source={require('../../assets/img/Grass.png')}
        style={styles.iconBadges}
      />
      <Text style={styles.textBadges}>{texto}</Text>
    </View>
  );
}
export default Badges;
