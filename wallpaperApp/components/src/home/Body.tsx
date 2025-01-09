import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/login/images'

const Body = () => {
  return (
    <View style={{flex: 1,paddingHorizontal: 5, marginTop: 10,}}>
        
        <View>
            <Image source={{uri: images.banner}} style={{width: '100%', height: 150,objectFit: 'cover', borderRadius: 10}} />
            <View style={{position: 'absolute', bottom: '50%', left: '5%'}}>
                <Text style={{color: 'white', fontSize: 25}}>Turn Words</Text>
                <Text style={{color: 'yellow', fontSize: 25}}>into Art</Text>
            </View>
            <TouchableOpacity style={{width: 70, paddingVertical: 8, backgroundColor: '#fd3', position: 'absolute', right: '5%', bottom: '2%', borderRadius: 5, }}>
                <Text style={{color: 'black', textAlign: 'center'}}>Explore</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Body