import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  const colorScheme = useColorScheme();
  return (
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
  )
}

export default Layout
