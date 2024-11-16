import About from "@/components/src/account/about/About"
import AppInfo from "@/components/src/account/AppInfo"
import AuthButtonProvider from "@/components/src/account/AuthButton/AuthButtonProvider"
import IconBoxes from "@/components/src/account/icon-setting/IconBoxes"
import ThemeBoxProvider from "@/components/src/account/theme-setting/ThemeBoxProvider"
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import {
  ScrollView,
  StyleSheet,
} from "react-native"

const account = () => {
  
  return (
    <ScrollView>
      <ThemedSafeAreaView style={styles.container}>
        {/* top bar  */}
        <ThemedView style={{ flexDirection: "column", gap: 2 }}>
          <ThemedText style={styles.bigText}>Panel</ThemedText>
          <ThemedText>Sign in to save your data</ThemedText>
        </ThemedView>

        {/* signin buttons */}
          <AuthButtonProvider />

        {/* settings  */}
        <ThemedView>
          <ThemedText style={styles.bigText}>Setting</ThemedText>
          <ThemedText>Choose your Theme</ThemedText>
        </ThemedView>

        {/* theme setting box */}
          <ThemeBoxProvider />

        {/* app icon setting  */}
        <ThemedText style={{ fontSize: 20 }}>App Icon</ThemedText>
        <IconBoxes />

        {/* app copyright text  */}
          <AppInfo />

        {/* About section  */}
          <About />
      </ThemedSafeAreaView>
    </ScrollView>
  )
}


export default account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 15,
  },
  bigText: {
    fontSize: 25,
  },
  themeBox: {
    borderWidth: 1,
    paddingHorizontal: 30,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
})
