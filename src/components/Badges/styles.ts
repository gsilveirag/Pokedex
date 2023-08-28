import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  viewBadges: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.grass,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 15,
  },
  iconBadges: {
    width: 10,
    height: 10,
  },
  textBadges: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
