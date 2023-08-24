import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import GetPokemonData from '../../services/GetNome';

//Styles
import styles from './styles';

//Components
import Badges from '../Badges/Badges';
import Colors from '../../constants/Colors';
import Img from '../../constants/Img';

interface IPoke {
  data: any;
  index: number;
}

function Card({data, index}: IPoke) {
  const [skill, setSkill] = useState<Array<any>>([]);

  const getType = async () => {
    try {
      const response = await GetPokemonData.GetPokemonData(index + 1);
      console.log('Resporta' + response.types);
      setSkill(response.types);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <View style={styles.cardView}>
      <View style={styles.cardInfo}>
        <Text style={styles.numeroInfo}>#00{index + 1}</Text>
        <Text style={styles.titleInfo}>
          {data.name.charAt(0).toUpperCase() + data.name.slice(1)}{' '}
        </Text>

        <FlatList
          data={skill}
          style={styles.listBadges}
          renderItem={({item}) => {
            return (
              <Badges
                texto={
                  item.type.name.charAt(0).toUpperCase() +
                  item.type.name.slice(1)
                }
              />
            );
          }}
          keyExtractor={item => item.type.name}
        />
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
