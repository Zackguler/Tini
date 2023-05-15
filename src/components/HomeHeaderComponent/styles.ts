import {StyleSheet, Dimensions} from 'react-native';

const useStyles = () => {
  const {width} = Dimensions.get('window');
  const style = StyleSheet.create({
    image: {
      height: 125,
      width: width,
    },
    container: {
      alignItems: 'center',
      paddingTop: 58.5,
      left: 12,
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      flexDirection: 'row',
      paddingRight: 27,
    },
  });
  return style;
};

export default useStyles;
