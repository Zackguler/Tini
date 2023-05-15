import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const useStyles = () => {
  const style = StyleSheet.create({
    container: {
      marginTop: 12,
      marginLeft: 16,
    },
    headerText: {
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 12,
    },
    itemContainer: {
      width: 273,
      backgroundColor: colors.white,
      borderRadius: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingVertical: 12,
      marginRight: 8,
      alignSelf: 'flex-start',
    },
    placeText: {
      color: colors.blue,
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
    },
    dateText: {
      fontSize: 12,
      color: colors.searchColor,
    },
    textContainer: {
      flexDirection: 'column',
    },
  });
  return style;
};

export default useStyles;
