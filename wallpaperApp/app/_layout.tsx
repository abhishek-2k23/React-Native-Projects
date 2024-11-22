import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from "@/constants/login/tokenCache";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  //tokenCache
  tokenCache;
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file')
  }
  const theme = useColorScheme() || 'light';
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{flex: 1}}>
      <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>

      <StatusBar
        style={theme === "dark" ? "light" : "dark"}
        backgroundColor={Colors[theme].background}
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="/(tabs)/index"
          options={{
            headerShown: true,
            headerTitle: "Account info",
          }}
        />
        <Stack.Screen name="login/index" ></Stack.Screen>
      </Stack>

      </ClerkLoaded>
      </ClerkProvider></SafeAreaView>
      </GestureHandlerRootView>
  )
}

export default Layout