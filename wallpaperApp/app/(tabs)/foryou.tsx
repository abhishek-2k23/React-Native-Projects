import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Suggested from "../suggested"
import Liked from "../liked"
import Library from "../library"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "react-native"
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView"
import { NavigatorContext } from "expo-router/build/views/Navigator"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemedView } from "@/components/ThemedView"

const Tab = createMaterialTopTabNavigator()
export default function ForYouTabs() {
  const theme = useColorScheme() ?? "light"
  return (
    <NavigationContainer>
    <ThemedView style={{flex:1}}>
      
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        tabBarStyle: { backgroundColor: Colors[theme].background },
        tabBarIndicatorStyle: {
          height:2,
          backgroundColor: Colors[theme].indicator
        }
      }}
    >
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
    </ThemedView>
    
    </NavigationContainer>
  )
}
