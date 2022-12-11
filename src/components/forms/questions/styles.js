import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export default StyleSheet.create({
  imageContainerStyle: {
    width: 120,
    height: 120,
    marginTop: 12,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageInputStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 6,
  },
  imageDeleteStyle: {
    backgroundColor: colors.black,
    opacity: 0.8,
    borderRadius: 20,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 8,
    right: 8,
  },
  inputLabelStyle: {
    width: '100%',
    borderRadius: 6,
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 0,
    margin: 0,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 15,
    color: colors.text,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    marginVertical: 10,
  },
});
