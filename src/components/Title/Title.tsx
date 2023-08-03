import React from 'react';
import {Text, View} from 'react-native';

//Styles
import styles from './styles';

interface ITitle {
  title: string;
  paragraph: string;
}

const Title = ({title, paragraph}: ITitle) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
      <Text style={styles.paragrafo}>{paragraph}</Text>
    </View>
  );
};

export default Title;
