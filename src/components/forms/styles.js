import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export default StyleSheet.create({
  formStyle: {
    paddingHorizontal: 10,
  },
  padding: {
    paddingBottom: 10,
  },
  containerStyle: {
    backgroundColor: colors.white,
    borderRadius: 6,
  },
  textLabelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 8,
    marginTop: 10,
  },
  contentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
