import React from 'react';
import {View, Text, Switch} from 'react-native';
import {colors} from '../../themes/colors';
import useStyles from './styles';

interface SwitchButtonProps {
  text: string;
  isEnable: boolean;
  onToggle: () => void;
}

const SwitchButton = ({text, isEnable, onToggle}: SwitchButtonProps) => {
  const toggleSwitch = () => {
    onToggle();
  };

  const {container, textStyle} = useStyles();

  return (
    <View style={[container]}>
      <Text style={textStyle}>{text}</Text>
      <Switch
        trackColor={{false: '#767577', true: colors.blue}}
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  );
};

export default SwitchButton;
