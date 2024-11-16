import { Pressable, StyleSheet, useColorScheme } from "react-native"
import { ThemedView } from "../ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { ThemedText } from "../ThemedText"
import { TouchableOpacity } from "react-native-gesture-handler"
import * as MediaLibrary from "expo-media-library"
import * as FileSystem from 'expo-file-system';

export function DownloadButton({ url }: { url: string }) {
  const theme = useColorScheme() ?? "light"
  const [status, requestPermission] = MediaLibrary.usePermissions()
  return (
    <Pressable
      onPress={async () => {
        try {

          // check for the permissions
          if (!status?.granted) {
            const permissionRes = await requestPermission()
            if (!permissionRes.granted) {
              console.log("Permission not granted")
            }
          } else {
          console.log(status);
          //download the image
          const date = new Date().getTime();
          const fileUri: string=  FileSystem.documentDirectory+`${date}_download.jpg`;
          console.log("file uri: ", fileUri);
          const {uri} = await FileSystem.downloadAsync(url,fileUri);
          console.log(uri)
          //save the downloaded image to gallery
          const asset = await MediaLibrary.createAssetAsync(fileUri);
          console.log("downloaded")
          }
        } catch (e){
          console.log("error: ", e)
        }
      }}
    >
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
