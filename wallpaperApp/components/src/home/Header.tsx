import { View, Text, useColorScheme, Image } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "@/constants/Colors"
import useUserStore from "@/zustand/useUserStore"

const Header = () => {
  const theme = useColorScheme() || "light"
  const {userData} = useUserStore();
  return (
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
        }}
      >
        <View>
          <ThemedText>ScreenSkin</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: Colors[theme].text,
              backgroundColor: Colors[theme].background,
              flexDirection: 'row',
              gap: 10,
            }}
          >
            <Image source={require('../../../assets/images/coin.png')} alt="coin " style={{height: 22, width: 22, }}/>
            
            <ThemedText >{userData?.userCredits}</ThemedText>
          </View>

          {/* user icon  */}
          
          <View
            style={{
                padding: 6,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: Colors[theme].text,
              backgroundColor: Colors[theme].background,
            }}
          >
            <Ionicons name="person" size={20} color={Colors[theme].text} />
          </View>
        </View>
      </ThemedView>
  )
}

export default Header
