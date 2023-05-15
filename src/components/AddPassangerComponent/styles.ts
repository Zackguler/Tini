import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const useStyles = () => {
  const style = StyleSheet.create({
    container: {
      paddingTop: 8,
      flexDirection: 'row',
    },
    textContainer: {
      flexDirection: 'column',
      marginLeft: 8,
    },
    typeText: {
      marginBottom: 4,
      fontSize: 14,
      fontWeight: 'bold',
    },
    infoText: {
      marginBottom: 8,
      fontSize: 12,
      fontWeight: '400',
    },
    seperator: {
      backgroundColor: colors.border,
      height: 1,
    },
    buttonContainer: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.border,
      paddingLeft: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      alignSelf: 'center',
    },
  });
  return style;
};

export default useStyles;
