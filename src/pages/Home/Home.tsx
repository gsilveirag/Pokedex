import React, {useRef} from 'react';
import Icons from '../../components/Icons/Icons';
import {Pressable, Text, View} from 'react-native';

//Styles
import styles from './styles';

//Components
import Title from '../../components/Title/Title';
import {Modalize} from 'react-native-modalize';
import ModalSreen from '../../components/Modal/ModalScreen';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';

function Home() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

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
          <Card />
        </View>
      </View>

      <ModalSreen modalizeRef={modalizeRef} />
    </>
  );
}

export default Home;
