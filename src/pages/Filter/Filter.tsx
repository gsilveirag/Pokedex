import React from 'react';
import {View} from 'react-native';

//Styles
import styles from './styles';
import Title from '../../components/Title/Title';

//Components

function Filter() {
  return (
    <View style={styles.container}>
      <Title
        title="Filtros"
        paragraph="
Use a pesquisa avançada para explorar Pokémon por tipo, fraqueza, altura e muito mais!"
      />
    </View>
  );
}

export default Filter;
