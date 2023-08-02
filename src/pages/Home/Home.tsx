import React from 'react';

import Icons from '../../components/Icons/Icons';
import {View} from 'react-native';
import styles from './styles';
import Title from '../../components/Title/Title';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.viewIcon}>
        <Icons />
      </View>
      <View style={styles.viewTitle}>
        <Title />
      </View>
    </View>
  );
}

export default Home;
