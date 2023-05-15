import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DepartureDate from '../../svg/DepartureDate';
import ReturnDate from '../../svg/ReturnDate';
import Title from '../Typography/Title';
import useStyles from './styles';

type DateTypes = 'departure' | 'return';

export interface DateProps {
  type: DateTypes;
}

const ReturnComponent = ({type}: DateProps) => {
  const [departure, setDeparture] = useState<string | null>(null);
  const [returnDate, setReturnDate] = useState<string | null>(null);

  const {container, subContainer, space} = useStyles();
  if (type === 'departure') {
    return (
      <View style={container}>
        <DepartureDate />
        <View style={subContainer}>
          <Text>Departure Date</Text>
          <View style={space} />
          <Title
            type="boldSubtitle"
            value={departure ? departure : 'Select your departure date'}
            color={departure ? '#000' : '#808089'}
            fontWeight="bold"
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={container}>
        <ReturnDate />
        <View style={subContainer}>
          <Text>Return Date</Text>
          <View style={space} />
          <Title
            type="boldSubtitle"
            value={returnDate ? returnDate : 'Select your return date'}
            color={returnDate ? '#000' : '#808089'}
            fontWeight="bold"
          />
        </View>
      </View>
    );
  }
};

export default ReturnComponent;
