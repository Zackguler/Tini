import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../themes/colors';

interface IBottomSheetStyleProps {
  opacity: number;
}

const useStyles = ({opacity}: IBottomSheetStyleProps) => {
  const style = StyleSheet.create({
    dummyView: {
      flex: 1,
      backgroundColor: '#000',
      opacity,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    text: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '700',
      paddingTop: 12,
      paddingBottom: 8,
    },
    subContainer: {
      width: Dimensions.get('window').width,
      backgroundColor: 'white',
      paddingLeft: 16,
      paddingRight: 16,
    },
    topContainer: {
      position: 'absolute',
      flexDirection: 'row',
      top: 8,
      right: 12,
    },
    seperator: {
      backgroundColor: colors.border,
      height: 1,
      marginLeft: -16,
      marginRight: -16,
      marginBottom: 8,
    },
  });
  return style;
};
export default useStyles;
