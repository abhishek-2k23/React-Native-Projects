import { Pressable, StyleSheet, useColorScheme } from "react-native"
import { ThemedView } from "../ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { ThemedText } from "../ThemedText"
import { TouchableOpacity } from "react-native-gesture-handler"
import * as expomedia from 'expo-media-library';
export function DownloadButton({url} : {url: string}) {
    const theme = useColorScheme() ?? "light"
    return (
      <Pressable onPress={async () => {
        const response  = await expomedia.getPermissionsAsync(true);
        if(response.granted){
          const downloadResonse = await expomedia.saveToLibraryAsync(url);
          console.log('download completed', downloadResonse)
        }else{
          console.log('response not granted')
          console.log(response)
        }
      }}>

      
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
      </Pressable>
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