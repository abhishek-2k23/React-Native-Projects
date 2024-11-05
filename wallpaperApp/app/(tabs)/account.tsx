import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Colors } from "@/constants/Colors"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

const account = () => {
  const theme = useColorScheme() ?? "light"
  const themeArray = ["system", "light", "dark"]
  return (
    <ScrollView>
      
    <ThemedView style={styles.container}>
      {/* top bar  */}
      <ThemedView style={{ flexDirection: "column", gap: 2 }}>
        <ThemedText style={styles.bigText}>Panel</ThemedText>
        <ThemedText>Sign in to save your data</ThemedText>
      </ThemedView>

      {/* signin buttons */}
      <ThemedView style={styles.authButtons}>
        <AuthButton
          label="Google"
          Logo={
            <Ionicons
              name="logo-google"
              size={20}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          }
        />
        <AuthButton
          label="Apple"
          Logo={
            <Ionicons
              name="logo-apple"
              size={20}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          }
        />
      </ThemedView>

      {/* settings  */}
      <ThemedView>
        <ThemedText style={styles.bigText}>Setting</ThemedText>
        <ThemedText>Choose your Theme</ThemedText>
      </ThemedView>

      {/* theme setting box */}
      <ThemedView style={styles.themeContainer}>
        <ThemedView
          style={[
            styles.themeBox,
            { borderColor: theme === "light" ? "black" : "white" },
          ]}
        >
          <ThemedText>System</ThemedText>
        </ThemedView>
        <ThemedView
          style={[
            styles.themeBox,
            { borderColor: theme === "light" ? "black" : "white" },
          ]}
        >
          <ThemedText>Light</ThemedText>
        </ThemedView>
        <ThemedView
          style={[
            styles.themeBox,
            { borderColor: theme === "light" ? "black" : "white" },
          ]}
        >
          <ThemedText>Dark</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedText style={{ fontSize: 20 }}>App Icon</ThemedText>
      {/* app icon setting  */}
      <ThemedView style={styles.themeContainer}>
        <FlatList
          horizontal
          data={[1, 2, 3, 4]}
          keyExtractor={(item) => item?.toString()}
          renderItem={({ item }) => (
            <ThemedView
              style={[
                styles.themeBox,
                {
                  borderColor: theme === "light" ? "black" : "white",
                  marginHorizontal: 10,
                },
              ]}
            >
              <ThemedText>{item}</ThemedText>
            </ThemedView>
          )}
        />
      </ThemedView>

      {/* app copyright text  */}
      <ThemedView
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemedText style={{ flexDirection: "row", gap: 10 }}>
          <FontAwesome
            name="copyright"
            size={16}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <ThemedText> 2024,</ThemedText>
        </ThemedText>
        <ThemedText>Pannel Wallpaper Mobile APP LLC.</ThemedText>
      </ThemedView>

      {/* About section  */}
      <ThemedView>

        <ThemedText style={styles.bigText}>
          About
        </ThemedText>
        <FlatList
          data={['account', 'privacy policy', 'terms of services', 'licences','version']}
          keyExtractor={item=> item}
          renderItem={({item}) => (
              <ThemedText style={{textTransform: 'capitalize', marginTop: 20}}>{item}</ThemedText>
          )}
          />
          <ThemedText> 1.0.0 </ThemedText>
      </ThemedView>
    </ThemedView>
    </ScrollView>
  )
}

export function AuthButton({ label, Logo }: { label: string; Logo: any }) {
  const theme = useColorScheme() ?? "light"
  return (
    <ThemedView
      style={[
        styles.downloadButton,
        { borderWidth: 1, borderColor: theme === "dark" ? "grey" : "black" },
      ]}
    >
      {Logo}
      <ThemedText>{label}</ThemedText>
    </ThemedView>
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
  downloadButton: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  authButtons: {
    paddingVertical: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 5,
    gap: 7,
  },
  themeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    flexWrap: "wrap",
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
