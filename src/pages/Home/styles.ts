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
    gap: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewTitle: {
    paddingVertical: 14,
    justifyContent: 'flex-end',
  },
  viewInput: {
    backgroundColor: Colors.gray[1],
    borderRadius: 5,
  },
  viewCards: {
    paddingVertical: 8,
  },
});

export default styles;
