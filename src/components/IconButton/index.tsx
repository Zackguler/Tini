import {useState} from 'react';
import {View, Pressable} from 'react-native';
import useStyles from './styles';

interface IconProps {
  onPress: () => void;
  icon: React.ReactNode;
}

export default function IconButton({onPress, icon}: IconProps) {
  const [isPressed, setIsPressed] = useState(false);

  const {button, iconContainer} = useStyles();

  return (
    <Pressable
      style={button}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}>
      {({pressed}) => <View style={[iconContainer]}>{icon}</View>}
    </Pressable>
  );
}
