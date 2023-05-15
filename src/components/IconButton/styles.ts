import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const useStyles = () => {
  const style = StyleSheet.create({
    button: {
      paddingRight: 12,
      borderRadius: 16,
      overflow: 'hidden',
    },
    iconContainer: {
      backgroundColor: colors.iconBackgrounColor,
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.iconBorderColor,
    },
  });
  return style;
};

export default useStyles;
