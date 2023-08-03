import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  texto: {
    color: Colors.black,
    fontSize: 32,
    fontWeight: 'bold',
  },
  paragrafo: {
    color: Colors.gray[0],
    fontSize: 16,
  },
});

export default styles;
