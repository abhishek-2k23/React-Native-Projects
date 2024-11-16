import { useColorScheme } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

const ThemedSafeAreaView = ({children, style={}}:{
    children: React.ReactNode;
    style ?: any
}) => {

    const theme = useColorScheme() ?? 'light';
  return (
    <SafeAreaView style={{backgroundColor: Colors[theme].background, ...style}}>
        {children}
    </SafeAreaView>
  )
}

export default ThemedSafeAreaView