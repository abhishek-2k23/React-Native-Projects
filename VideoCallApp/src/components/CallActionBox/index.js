import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Voximplant} from 'react-native-voximplant';

const CallActionBox = ({onHangupPress}) => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [cameraType, setCameraType] = useState('BACK');

  const onReverseCamera = () => {
    if(cameraType === 'FRONT'){
      setCameraType('BACK');
      Voximplant.Hardware.CameraManager.getInstance().switchCamera(Voximplant.Hardware.CameraType.BACK);
    }else{
      setCameraType('FRONT');
      Voximplant.Hardware.CameraManager.getInstance().switchCamera(Voximplant.Hardware.CameraType.FRONT);
    }
    
  };

  const onToggleCamera = async () => {
    setIsCameraOn(curr => !curr);
  };

  const onToggleMicrophone = () => {
    setIsMicOn(currentValue => !currentValue);
  };

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name="camera-reverse-outline" size={30} color={'white'} />
      </Pressable>

      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <MaterialIcons
          name={!isCameraOn ? 'camera-off' : 'camera'}
          size={30}
          color={'white'}
        />
      </Pressable>

      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialIcons
          name={!isMicOn ? 'microphone-off' : 'microphone'}
          size={30}
          color={'white'}
        />
      </Pressable>

      <Pressable
        onPress={onHangupPress}
        style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MaterialIcons name="phone-hangup" size={30} color={'white'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});

export default CallActionBox;
