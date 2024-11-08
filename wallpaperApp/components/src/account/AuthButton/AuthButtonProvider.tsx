import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AuthButton from "./AuthButton";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, useColorScheme } from "react-native";

export default function AuthButtonProvider(){
    const theme = useColorScheme() ?? "light"
    return(
        <ThemedView style={styles.authButtons}>
          <AuthButton
            label="Google"
            Logo={
              <Ionicons
                name="logo-google"
                size={20}
                color={Colors[theme].icon}
              />
            }
          />
          <AuthButton
            label="Apple"
            Logo={
              <Ionicons
                name="logo-apple"
                size={20}
                color={Colors[theme].icon}
              />
            }
          />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    
  authButtons: {
    paddingVertical: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 5,
    gap: 7,
  },
})