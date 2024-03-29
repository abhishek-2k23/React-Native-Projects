import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  PermissionsAndroid,
  Alert,
  Platform,
  BackHandler,
} from 'react-native';
import CallActionBox from '../components/CallActionBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/core';
import {Voximplant} from 'react-native-voximplant';
import AsyncStorage from '@react-native-async-storage/async-storage';

//permissions we need for video call
const permissions = [
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];

//start
const CallingScreen = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [callStatus, setCallStatus] = useState('Initializing...');
  const [localVideoStreamId, setLocalVideoStreamId] = useState('');
  const [remoteVideoStreamId, setRemoteVideoStreamId] = useState('');
  const [audioDevice, setAudioDevice] = useState('Speaker');
  const [isMini, setIsMini] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const {user, call: incomingCall, isIncomingCall} = route?.params;

  //instance of voximplant
  const voximplant = Voximplant.getInstance();

  const call = useRef(incomingCall);
  const endpoint = useRef(null);

  //for audio device setup
  const AudioDeviceManager =
    Voximplant.Hardware.AudioDeviceManager.getInstance();

  const selectAudioDevice = async () => {
    await AudioDeviceManager.selectAudioDevice(audioDevice);
  };

  //on going back
  const goBack = () => {
    navigation.pop();
    setIsMini(true);
  };

  //as move to call gets the permission
  useEffect(() => {
    const getPermissions = async () => {
      const granted = await PermissionsAndroid.requestMultiple(permissions);
      const recordAudioGranted =
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
      const cameraGranted =
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
      if (!cameraGranted || !recordAudioGranted) {
        Alert.alert('Permissions not granted');
      } else {
        setPermissionGranted(true);
      }
    };

    if (Platform.OS === 'android') {
      getPermissions();
    } else {
      setPermissionGranted(true);
    }
    // setIsMini(false);
  }, []);

  //if no permission return else call
  useEffect(() => {
    if (!permissionGranted) {
      return;
    }

    const callSettings = {
      video: {
        sendVideo: true,
        receiveVideo: true,
      },
    };

    //select the audio device : by default speaker
    selectAudioDevice();

    const makeCall = async () => {
      console.log('calling the user whose name is : ', user.user_name);
      call.current = await voximplant.call(user.user_name, callSettings);
      subscribeToCallEvents();
    };

    const answerCall = async () => {
      subscribeToCallEvents();
      endpoint.current = call.current.getEndpoints()[0];
      subscribeToEndpointEvent();
      call.current.answer(callSettings);
    };

    const subscribeToCallEvents = () => {
      call.current.on(Voximplant.CallEvents.Failed, callEvent => {
        showError(callEvent.reason);
      });
      call.current.on(Voximplant.CallEvents.ProgressToneStart, callEvent => {
        setCallStatus('Calling...');
      });
      call.current.on(Voximplant.CallEvents.Connected, callEvent => {
        setCallStatus('Connected');
      });
      call.current.on(Voximplant.CallEvents.Disconnected, callEvent => {
        navigation.navigate('Contacts');
      });
      call.current.on(
        Voximplant.CallEvents.LocalVideoStreamAdded,
        callEvent => {
          setLocalVideoStreamId(callEvent.videoStream.id);
        },
      );
      call.current.on(Voximplant.CallEvents.EndpointAdded, callEvent => {
        endpoint.current = callEvent.endpoint;
        subscribeToEndpointEvent();
      });
    };

    const subscribeToEndpointEvent = async () => {
      endpoint.current.on(
        Voximplant.EndpointEvents.RemoteVideoStreamAdded,
        endpointEvent => {
          setRemoteVideoStreamId(endpointEvent.videoStream.id);
        },
      );
    };

    const showError = reason => {
      Alert.alert('Call failed', `Reason: ${reason}`, [
        {
          text: 'Ok',
          onPress: navigation.navigate('Contacts'),
        },
      ]);
    };

    if (isIncomingCall) {
      answerCall();
    } else {
      makeCall();
    }

    return () => {
      call.current.off(Voximplant.CallEvents.Failed);
      call.current.off(Voximplant.CallEvents.ProgressToneStart);
      call.current.off(Voximplant.CallEvents.Connected);
      call.current.off(Voximplant.CallEvents.Disconnected);
    };
  }, [permissionGranted]);

  const onHangupPress = () => {
    call.current.hangup();
  };

  //set call visible in async storage
  async function setUserVisible(){
    await AsyncStorage.setItem('callVisible', true);
    navigation.navigate('Contacts');
  }
  
  if(callStatus === 'Initializing...'){
    return null;
  }else{
    setUserVisible();
  }
  return (
    
    <View style={styles.page}>
      {/* <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25} />
      </Pressable> */}

      <Voximplant.VideoView
        videoStreamId={remoteVideoStreamId}
        style={styles.remoteVideo}
      />

      {/* <Voximplant.VideoView
        videoStreamId={localVideoStreamId}
        style={styles.localVideo}
      /> */}

      {/* <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>{callStatus}</Text>
      </View>

      <CallActionBox onHangupPress={onHangupPress} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  miniView: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 150,
    height: 300,
  },
  page: {
    height: 250, 
    width: 140,
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  localVideo: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',

    borderRadius: 10,

    position: 'absolute',
    right: 10,
    top: 100,
  },
  remoteVideo: {
    backgroundColor: '#7b4e80',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 100,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
  },
});

export default CallingScreen;
