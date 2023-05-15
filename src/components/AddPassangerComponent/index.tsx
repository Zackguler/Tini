import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';

interface AddPassangerProps {
  type: string;
  years: string;
  icon?: React.ReactNode;
}

const AddPassanger = ({type, years, icon}: AddPassangerProps) => {
  const {
    container,
    typeText,
    infoText,
    textContainer,
    seperator,
    buttonContainer,
    buttonText,
  } = useStyles();
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={container}>
        {icon}
        <View style={textContainer}>
          <Text style={typeText}>{type}</Text>
          <Text style={infoText}>{years}</Text>
        </View>
        <TouchableOpacity onPress={handleDecrease} style={buttonContainer}>
          <Text style={buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={buttonText}>{count}</Text>
        <TouchableOpacity onPress={handleIncrease} style={buttonContainer}>
          <Text style={buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={seperator} />
    </View>
  );
};

export default AddPassanger;
