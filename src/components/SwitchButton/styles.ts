import {StyleSheet} from 'react-native';

const useStyles = () => {
  const style = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    textStyle: {
      marginRight: 4,
      fontSize: 12,
      fontWeight: '400',
    },
  });
  return style;
};

export default useStyles;
