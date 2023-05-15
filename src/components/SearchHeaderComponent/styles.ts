import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const useStyles = () => {
  const style = StyleSheet.create({
    recentContainer: {
      marginTop: 24,
    },
    recentTitle: {
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 16,
    },
    recentItem: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    recentSubItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 9.5,
    },
    recentSeperator: {
      height: 1,
      backgroundColor: colors.border,
      marginTop: 8,
    },
    recentTextItem: {
      fontSize: 14,
      fontWeight: '400',
    },
    popularTitle: {
      marginTop: 12,
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 12,
    },
    seperator: {
      height: 8,
      backgroundColor: colors.border,
      marginTop: 21.5,
    },
  });
  return style;
};

export default useStyles;
