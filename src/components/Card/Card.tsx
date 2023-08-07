import React from 'react';
import {Image, Text, View} from 'react-native';

//Styles
import styles from './styles';

//Components
import Badges from '../Badges/Badges';
import useAxios from '../../hook/use-axios';

const [pokemonList] = useAxios();

function Card() {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardInfo}>
        <Text style={styles.numeroInfo}>#001</Text>
        <Text style={styles.titleInfo}>Bulbasaur </Text>
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
