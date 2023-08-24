import React, {useEffect, useRef, useState} from 'react';
import Icons from '../../components/Icons/Icons';
import {FlatList, View} from 'react-native';

//Styles
import styles from './styles';

//Components
import Title from '../../components/Title/Title';
import {Modalize} from 'react-native-modalize';
import ModalSreen from '../../components/Modal/ModalScreen';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';
import GetNome from '../../services/GetNome';

function Home() {
  const modalizeRef = useRef<Modalize>(null);
  const [pokemons, setPokemons] = useState<string[]>([]);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  ///////////////////////////////Rota de pegar o Nome do pokemon
  const getPokemons = async () => {
    try {
      const response = await GetNome.GetNome();
      setPokemons(() => response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);
  ////////////////////////////////////////////////////////////////

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewIcon}>
          <Icons
            name="text-search"
            pressable={() => {
              onOpen();
            }}
          />
          <Icons
            name="sort"
            pressable={() => {
              onOpen();
            }}
          />
          <Icons
            name="format-list-bulleted"
            pressable={() => {
              onOpen();
            }}
          />
        </View>
        <View style={styles.viewTitle}>
          <Title
            title="Pokédex"
            paragraph="Procure pelo nome do Pokémon ou pelo numero dele."
          />
        </View>

        <View style={styles.viewInput}>
          <Input texto="Qual Pokémon voce está procurando?" />
        </View>

        <View style={styles.viewCards}>
          <FlatList
            data={pokemons.slice(0, 4)}
            renderItem={({item, index}) => <Card data={item} index={index} />}
            keyExtractor={item => item}
          />
        </View>
      </View>

      <ModalSreen modalizeRef={modalizeRef} />
    </>
  );
}

export default Home;
