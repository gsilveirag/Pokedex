import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

//Styles
import styles from './styles';

//Components
import Badges from '../Badges/Badges';
import GetNome from '../../services/GetNome';

interface IPoke {
  data: any;
  index: number;
}

function Card({data, index}: IPoke) {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardInfo}>
        <Text style={styles.numeroInfo}>#00{index + 1}</Text>
        <Text style={styles.titleInfo}>{data.name} </Text>
        <View style={styles.cardBadges}>
          <Badges cordeFundo="green" texto="Grama" />
          <Badges cordeFundo="purple" texto="Toxico" />
        </View>
      </View>
      <Image
        source={require('../../assets/img/01.png')}
        style={styles.cardImg}
      />
    </View>
  );
}
export default Card;
