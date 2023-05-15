import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Fly from '../../svg/Fly';
import BottomSheet from '../BottomSheet';
import SearchDepartureAndDestination from '../SearchDepartureAndDestinationComponent';
import Title from '../Typography/Title';
import useStyles from './styles';
type DepartureAndDestionationTypes = 'departure' | 'destination';

export interface DepartureAndDestionationProps {
  type: DepartureAndDestionationTypes;
}

const DepartureComponent = ({type}: DepartureAndDestionationProps) => {
  const [departure, setDeparture] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleDeparturePress = () => {
    setModalVisible(true);
  };

  const {container, spacing, subContainer} = useStyles();

  if (type === 'departure') {
    return (
      <View style={container}>
        <Fly type="down" />
        <View style={subContainer}>
          <Title type="subtitle" value="Departure" color="#000" />
          <View style={spacing} />
          <TouchableOpacity onPress={handleDeparturePress}>
            <Title
              type="boldSubtitle"
              value={departure ? departure : 'Select your departure'}
              color={departure ? '#000' : '#808089'}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>
        <BottomSheet
          title="Select departure"
          isModalVisible={modalVisible}
          paddingTop={116}
          handleClose={() => setModalVisible(false)}>
          <SearchDepartureAndDestination />
        </BottomSheet>
      </View>
    );
  } else {
    return (
      <View style={container}>
        <Fly type="up" />
        <View style={subContainer}>
          <Text>Destination</Text>
          <View style={spacing} />
          <TouchableOpacity onPress={handleDeparturePress}>
            <Title
              type="boldSubtitle"
              value={destination ? destination : 'Select your destination'}
              color={destination ? '#000' : '#808089'}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>
        <BottomSheet
          title="Select destination"
          isModalVisible={modalVisible}
          paddingTop={116}
          handleClose={() => setModalVisible(false)}>
          <SearchDepartureAndDestination />
        </BottomSheet>
      </View>
    );
  }
};

export default DepartureComponent;
