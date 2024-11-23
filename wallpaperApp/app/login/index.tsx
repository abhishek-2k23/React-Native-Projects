import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  Touchable,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"
import { Colors } from "@/constants/Colors"

import * as WebBrowser from "expo-web-browser"
import { useOAuth } from "@clerk/clerk-expo"
import * as Linking from "expo-linking"

export default function Index() {
  const theme = useColorScheme() || "light"

  //sign in flow with clerk
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(tabs)", { scheme: "myapp" }),
        })

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err)
    }
  }, [])
  return (
    <ThemedView style={styles.container}>
      <Image
        source={{
          uri: "https://ideogram.ai/assets/progressive-image/balanced/response/QOUXNKchQ9iJE7VsprIWfg",
        }}
        style={[
          styles.image,
          { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
        ]}
        resizeMode="cover" // Optional: Controls how the image is scaled
      />

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 5,
          marginTop: 20,
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <ThemedText style={{ fontSize: 30, fontWeight: "bold" }}>
          Welcome to imagineAi
        </ThemedText>
        <ThemedText style={{ fontSize: 16 }}>
          Generate Your own AI Wallpaper
        </ThemedText>

        {/* //continue button  */}
        <TouchableOpacity
          onPress={onPress}
          style={{
            paddingHorizontal: 75,
            marginTop: 15,
            paddingVertical: 10,
            borderRadius: 8,
            backgroundColor: Colors[theme].background,
            borderColor: Colors[theme].text,
            borderWidth: 1,
          }}
        >
          <ThemedText>Continue</ThemedText>
        </TouchableOpacity>

        <ThemedText style={{ fontSize: 13, marginTop: 5 }}>
          By continuing you are agree to our terms and condition
        </ThemedText>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "70%",
  },
})

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()
