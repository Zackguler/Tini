import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Class from '../../svg/Class';
import Passenger from '../../svg/Passenger';
import Button from '../Typography/Button';
import Title from '../Typography/Title';
import useStyles from './styles';
import BottomSheet from '../BottomSheet';
import AddPassanger from '../AddPassangerComponent';
import Adult from '../../svg/Adult';

const {container, subContainer, space} = useStyles();

const Cabin = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  return (
    <View style={{flexDirection: 'column', paddingBottom: 12}}>
      <View style={container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={openBottomSheet}>
            <ImageWithTitles
              title="Passenger"
              subtitle="1 passenger"
              icon={<Passenger />}
            />
          </TouchableOpacity>
          <ImageWithTitles title="Class" subtitle="Economy" icon={<Class />} />
        </View>
      </View>

      <Button type="primary" value="Search" onClick={() => {}} />
      <BottomSheet
        isModalVisible={isBottomSheetVisible}
        title="Add passenger"
        handleClose={closeBottomSheet}>
        <AddPassanger
          type="Adult"
          years="Above 12 years old"
          icon={<Adult />}
        />
        <AddPassanger
          type="Child"
          years="From 2 to 12 years old"
          icon={<Adult />}
        />
        <AddPassanger type="Baby" years="Below 2 years old" icon={<Adult />} />
      </BottomSheet>
    </View>
  );
};

interface ImageWithTitleProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const ImageWithTitles = ({title, subtitle, icon}: ImageWithTitleProps) => {
  return (
    <View style={{flexDirection: 'row', width: 147.5}}>
      {icon}
      <View style={subContainer}>
        <Title type="subtitle" value={title} />
        <View style={space} />
        <Title type="subtitle" value={subtitle} fontWeight="bold" />
      </View>
    </View>
  );
};

export default Cabin;
