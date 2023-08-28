import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  cardView: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.green[0],
    marginBottom: 8,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 145,
  },
  cardInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2,
    width: '50%',
  },
  numeroInfo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.gray[13],
  },
  titleInfo: {
    fontSize: 27,
    color: Colors.white,
    fontWeight: 'bold',
  },
  cardImg: {
    position: 'absolute',
    left: '38%',
    transform: [{translateX: 50}],
    width: '50%',
    bottom: 5,
    height: '140%',
  },
  badges: {
    flexDirection: 'row',
    gap: 5,
    fontSize: 20,
  },
});

export default styles;
