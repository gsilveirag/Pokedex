import React from 'react';
import {Image, Text, View} from 'react-native';

//Styles
import styles from './styles';
import Img from '../../constants/Img';

interface IBadges {
  texto: string;
}

function Badges({texto}: IBadges) {
  return (
    <View style={[styles.viewBadges]}>
      <Image source={Img.grass} />
      <Text style={styles.textBadges}>{texto}</Text>
    </View>
  );
}
export default Badges;
