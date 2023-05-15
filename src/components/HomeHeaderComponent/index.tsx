import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import IconButton from '../IconButton';
import Title from '../Typography/Title';
import Close from '../../svg/Close';
import Save from '../../svg/Save';
import Ticket from '../../svg/Ticket';
import Options from '../../svg/Options';
import useStyles from './styles';

const HomeHeaderComponent = () => {
  const {image, container, buttonContainer, iconContainer, icon} = useStyles();
  return (
    <ImageBackground style={image} source={require('../../image/Home.jpg')}>
      <View style={container}>
        <View style={buttonContainer}>
          <View style={iconContainer}>
            <IconButton
              onPress={() => console.log('Button pressed!')}
              icon={<Close />}
            />
            <Title
              type="title"
              value="Welcome"
              color="#fff"
              fontSize={18}
              fontWeight="bold"
            />
          </View>
          <View style={icon}>
            <IconButton
              onPress={() => console.log('Save pressed!')}
              icon={<Save />}
            />
            <IconButton
              onPress={() => console.log('Ticket pressed!')}
              icon={<Ticket />}
            />
            <IconButton
              onPress={() => console.log('Options pressed!')}
              icon={<Options />}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default HomeHeaderComponent;
