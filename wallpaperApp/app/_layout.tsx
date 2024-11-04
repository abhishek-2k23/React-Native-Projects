import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <GestureHandlerRootView>
      
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(nobottombar)/accountInfo"
          options={{
            headerShown: true,
            headerTitle: "Account info",
            headerBackTitleVisible: true,
          }}
        />
      </Stack>
      </GestureHandlerRootView>
  )
}

export default Layout