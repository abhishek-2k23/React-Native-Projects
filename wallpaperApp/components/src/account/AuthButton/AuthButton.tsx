import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, useColorScheme } from "react-native";

export default function AuthButton({ label, Logo }: { label: string; Logo: any }) {
    const theme = useColorScheme() ?? "light"
    return (
      <ThemedView style={[styles.downloadButton]}>
        {Logo}
        <ThemedText>{label}</ThemedText>
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

