import React from 'react';
import {Image, Text, View} from 'react-native';

//Styles
import styles from './styles';
import Img from '../../constants/Img';
import Colors from '../../constants/Colors';

interface IBadges {
  texto: string;
}

function Badges({texto}: IBadges) {
  const mudaElemento=(elemnto:string)=>{
switch(elemnto) {
  case elemnto == "fire" return
  {color: Colors.grass, image: Img.grass}

  
}
}

  return (
    <View style={[styles.viewBadges]}>
      <Image source={Img.grass} />
      <Text style={styles.textBadges}>{texto}</Text>
    </View>
  );
}
export default Badges;
