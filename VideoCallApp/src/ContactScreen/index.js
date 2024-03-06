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

const ContactScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  const navigation = useNavigation();
  const voximplant = Voximplant.getInstance();

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
    navigation.navigate('Calling', {user});
  };

  if(dummyContacts.length === 0 ){
    return (
        <View>
            <Text>NO contacts</Text>
            <Pressable onPress={console.log("Add contact")}>
                <View>
                    <Text>Create Contact</Text>
                </View>
            </Pressable>
        </View>
    )
  }

  return (
    <View style={styles.page}>
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
            <Text style={styles.contactName}>{item.user_display_name}</Text>
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
});

export default ContactScreen;
