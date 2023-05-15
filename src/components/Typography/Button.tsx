import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../../themes/colors';

type ButtonTypes = 'primary' | 'icon';

export interface ButtonProps {
  type: ButtonTypes;
  value: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Button = ({type, value, icon, onClick}: ButtonProps) => {
  if (type === 'primary') {
    return (
      <Pressable onPress={onClick} style={{...styles[type]}}>
        <Text style={styles.text}>{value}</Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={onClick} style={{...styles[type]}}>
        {icon}
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  primary: {
    backgroundColor: colors.blue,
    height: 40,
    borderRadius: 4,
  },
  icon: {
    borderWidth: 1,
    padding: 4,
    borderColor: colors.blue,
    borderRadius: 13,
  },
});

export default Button;
