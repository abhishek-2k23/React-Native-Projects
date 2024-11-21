import ThemedSafeAreaView from "@/components/ThemedSafeAreaView"
import { ThemedView } from "@/components/ThemedView"
import { Colors } from "@/constants/Colors"
import { FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { RootSiblingParent } from "react-native-root-siblings"

export default function Layout() {
  const theme = useColorScheme() ?? "light"
  return (
    <ThemedView style={{ flex: 1 }}>
      <RootSiblingParent>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[theme].tint,
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors[theme].background,
              borderTopColor: Colors[theme].text,
            },
          }}
        >
          <Tabs.Screen
            name="foryou"
            options={{
              title: "foryou",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="podcast" size={28} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: "Explore",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="home" size={28} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="account"
            options={{
              title: "account",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user" size={28} color={color} />
              ),
            }}
          />
        </Tabs>
      </RootSiblingParent>

      {/* //reference for the  messages */}
    </ThemedView>
  )
}
