import {StyleSheet} from 'react-native';
const useStyles = () => {
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
      marginTop: 16,
    },
    spacing: {
      height: 8,
    },
    subContainer: {
      paddingLeft: 8,
      paddingTop: 2,
      flexDirection: 'column',
    },
  });
  return style;
};

export default useStyles;
