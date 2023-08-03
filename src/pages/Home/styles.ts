import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 40,
    backgroundColor: Colors.white,
    justifyContent: 'flex-start',
  },
  viewIcon: {
    alignItems: 'flex-end',
  },
  viewTitle: {
    paddingVertical: 25,
    justifyContent: 'flex-end',
  },
});

export default styles;
