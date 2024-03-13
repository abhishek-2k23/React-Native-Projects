import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {Voximplant} from 'react-native-voximplant';
import {dummyContacts} from '../assets/Contacts/contacts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import CallingScreen from '../CallingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);
  const [visibleUser, setVisibleUser] = useState(false);

  const navigation = useNavigation();
  const voximplant = Voximplant.getInstance();

  const getCallVisibleStatus = async() => {
    const callVisible = await AsyncStorage.getItem('callVisible');
    setVisibleUser(callVisible);
  }

  useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
      navigation.navigate('IncomingCall', {call: incomingCallEvent.call});
    });

    return () => {
      voximplant.off(Voximplant.ClientEvents.IncomingCall);
    };
  }, []);

  //for updated filtered contacts
  useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

  //on user_name press calling the user
  const callUser = user => {
    console.log('calling the user : ', user);
    navigation.navigate('Calling', {user});
  };

  if (dummyContacts.length === 0) {
    return (
      <View>
        <Text>NO contacts</Text>
        <Pressable onPress={console.log('Add contact')}>
          <View>
            <Text>Create Contact</Text>
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      {visibleUser && <View style={styles.callingScreen}> <CallingScreen /></View>}
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
        placeholder="Search..."
      />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Pressable onPress={() => callUser(item)}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                gap: 15,
                alignItems: 'center',
              }}>
              <Text style={styles.contactName}>{item.user_display_name}</Text>
              <Icon name="phone-alt" size={15} color="#01ff10" />
            </View>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  callingScreen: {
    position: 'absolute',
    top: 10, 
    right: 10, 
    width: 190, 
    height: 250, 
    backgroundColor: 'red',
  }
});

export default ContactScreen;
