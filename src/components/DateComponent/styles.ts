import {StyleSheet} from 'react-native';

const useStyles = () => {
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
      marginTop: 16,
    },
    subContainer: {
      flexDirection: 'column',
      marginTop: 2,
      marginLeft: 8,
    },
    space: {
      height: 8,
    },
  });
  return style;
};

export default useStyles;
