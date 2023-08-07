import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  texto: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragrafo: {
    color: Colors.gray[0],
    fontSize: 13,
  },
});

export default styles;
