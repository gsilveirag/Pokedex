import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

//Styles
import styles from './styles';
import Icons from '../Icons/Icons';

interface IIput {
  texto: string;
}

function Input({texto}: IIput) {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.inputView}>
      <Icons name="magnify-close" />

      <TextInput
        style={styles.inputTexto}
        onChangeText={onChangeText}
        placeholder={texto}
        value={text}
      />
    </View>
  );
}
export default Input;
