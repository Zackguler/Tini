import React from 'react';
import {Text, StyleSheet} from 'react-native';

type TitleTypes = 'title' | 'subtitle' | 'boldSubtitle';

export interface TitleProps {
  type: TitleTypes;
  value: string;
  color?: string;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
}

const Title = ({
  type,
  value,
  color = '#000',
  fontSize,
  fontWeight,
}: TitleProps) => {
  return (
    <Text style={[styles[type], {color, fontSize, fontWeight}]}>{value}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
  },
  boldSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    flexWrap: 'wrap',
  },
});

export default Title;
