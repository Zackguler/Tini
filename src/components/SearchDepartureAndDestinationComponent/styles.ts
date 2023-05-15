import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const useStyles = () => {
  const style = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
    },
    search: {
      borderRadius: 8,
      backgroundColor: 'white',
      borderColor: colors.searchBackgroundColor,
      borderWidth: 1,
    },
    inputStyle: {
      color: colors.searchColor,
      fontSize: 14,
      fontWeight: '400',
    },

    popularItem: {
      marginTop: 8,
    },
    popularTextItem: {
      fontSize: 14,
      fontWeight: '400',
    },
    popularItemSeperator: {
      height: 1,
      backgroundColor: colors.border,
      marginTop: 8,
    },
  });
  return style;
};

export default useStyles;
