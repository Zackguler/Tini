import React from 'react';
import {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import Cross from '../../svg/Cross';
import useStyles from './styles';

interface BottomSheetProps {
  children: React.ReactNode;
  isModalVisible: boolean;
  paddingTop?: number;
  title: string;
  handleClose: () => void;
}

const BottomSheet = ({
  isModalVisible,
  children,
  paddingTop,
  title,
  handleClose,
}: BottomSheetProps) => {
  const [animationRealValue, setAnimationRealValue] = useState<number>(0);
  const [animationValue] = useState<Animated.Value>(new Animated.Value(0));
  const [isVisible, setIsVisible] = useState<boolean>(isModalVisible);
  const {container, text, subContainer, topContainer, seperator, dummyView} =
    useStyles({opacity: animationRealValue});
  const openAnimation = Animated.timing(animationValue, {
    toValue: 0.5,
    useNativeDriver: true,
    delay: 300,
    duration: 300,
  });

  const closeAnimation = Animated.timing(animationValue, {
    toValue: 0,
    useNativeDriver: true,
    duration: 20,
  });

  useEffect(() => {
    animationValue.addListener(({value}) => {
      console.log(value);
      setAnimationRealValue(value);
    });
    return () => {
      animationValue.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    animationValue.setValue(0);
    if (isModalVisible) {
      setIsVisible(true);
      openAnimation.start();
    } else {
      closeAnimation.start(() => {
        setIsVisible(false);
      });
    }

    return () => {
      openAnimation.stop();
    };
  }, [isModalVisible]);

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <Animated.View style={dummyView} />
      <SafeAreaView style={container} {...{paddingTop: paddingTop}}>
        <View>
          <View style={subContainer}>
            <Text style={text}>{title}</Text>
            <View style={topContainer}>
              <TouchableOpacity onPress={handleClose}>
                <Cross />
              </TouchableOpacity>
            </View>
            <View style={seperator} />
            {children}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default BottomSheet;
