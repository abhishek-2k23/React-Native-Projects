import { ThemedText } from "@/components/ThemedText"
import { FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Layout() {
  return (
    <SafeAreaView style={{flex:1}}>
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown:false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "For you",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "explore",
          tabBarIcon: ({ color }) => <FontAwesome name="cog" size={28} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "account",
          tabBarIcon: ({ color }) => <FontAwesome name="cog" size={28} color={color}/>,
        }}
      />
    </Tabs></SafeAreaView>
  )
}