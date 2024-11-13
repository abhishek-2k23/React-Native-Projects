import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Suggested from "../suggested"
import Liked from "../liked"
import Library from "../library"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "react-native"

const Tab = createMaterialTopTabNavigator()
export default function ForYouTabs() {
  const theme = useColorScheme() ?? "light"
  return (
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
  )
}
