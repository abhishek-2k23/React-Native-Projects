import { StyleSheet, useColorScheme } from "react-native"
import { ThemedView } from "../ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { ThemedText } from "../ThemedText"

export function DownloadButton() {
    const theme = useColorScheme() ?? "light"
    return (
      <ThemedView
        style={[
          styles.downloadButton,
          { backgroundColor: theme === "dark" ? "white" : "black" },
        ]}
      >
        <Ionicons
          style={{ color: theme === "dark" ? "black" : "white" }}
          name="download-outline"
          size={20}
        />
        <ThemedText
          style={{ color: theme === "dark" ? "black" : "white", fontSize: 20 }}
        >
          Download
        </ThemedText>
      </ThemedView>
    )
  }
  
  const styles = StyleSheet.create({
    downloadButton: {
      width: "90%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      borderRadius: 10,
      paddingVertical: 10,
    },
  })