import React from 'react';
import {Image, Text, View} from 'react-native';

//Component
import Badges from '../Badges/Badges';

//Styles
import styles from './styles';

interface IPoke {
  data: any;
  index: number;
}

function Card({data, index}: IPoke) {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardInfo}>
        <Text style={styles.numeroInfo}>#00{index + 1}</Text>
        <Text style={styles.titleInfo}>
          {data.charAt(0).toUpperCase() + data.slice(1)}
        </Text>
        <View style={styles.badges}>
          <Badges texto="Grass" />
        </View>
      </View>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`,
        }}
        style={styles.cardImg}
      />
    </View>
  );
}
export default Card;
