import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  viewBadges: {
    flexDirection: 'row',
    padding: 5,
    gap: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  iconBadges: {
    width: 10,
    height: 10,
  },
  textBadges: {
    color: Colors.white,
    fontSize: 10,
  },
});

export default styles;
