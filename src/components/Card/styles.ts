import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: Colors.green[0],
    marginBottom: 4,
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  cardInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2,
    width: '50%',
  },
  numeroInfo: {
    fontSize: 12,
    color: Colors.gray[13],
  },
  titleInfo: {
    fontSize: 23,
    color: Colors.white,
    fontWeight: 'bold',
  },
  cardImg: {
    position: 'absolute',
    left: 160,
    bottom: 5,
    width: 110,
    height: 110,
  },
  cardBadges: {
    flexDirection: 'row',
    gap: 5,
  },
});

export default styles;
