import { useColorScheme } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const AppInfo = () => {
    const theme = useColorScheme() ?? 'light'
  return (
    <ThemedView
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedText style={{ flexDirection: "row", gap: 10 }}>
            <FontAwesome
              name="copyright"
              size={16}
              color={Colors[theme].icon}
            />
            <ThemedText> 2024,</ThemedText>
          </ThemedText>
          <ThemedText>Pannel Wallpaper Mobile APP LLC.</ThemedText>
        </ThemedView>
  )
}

export default AppInfo