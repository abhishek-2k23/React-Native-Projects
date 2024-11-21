import { Pressable, StyleSheet, ToastAndroid, useColorScheme } from "react-native"
import { ThemedView } from "../ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { ThemedText } from "../ThemedText"
import * as MediaLibrary from "expo-media-library"
import * as FileSystem from 'expo-file-system';
import { toastMessage } from "@/constants/toastMessages"
import Toast from "react-native-root-toast"

export function DownloadButton({ url }: { url: string }) {

  // Add a Toast on screen.
let toastTest = Toast.show('Request failed to send.', {
  duration: Toast.durations.LONG,
});

// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
setTimeout(function hideToast() {
  Toast.hide(toastTest);
}, 500);
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
              // toastMessage.error("Permission not granted")
              ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
            }
          } else {
          console.log(status);
          //download the image
          const date = new Date().getTime();
          const fileUri: string=  FileSystem.documentDirectory+`${date}_download.jpg`;
          
          const {uri} = await FileSystem.downloadAsync(url,fileUri);
          
          //save the downloaded image to gallery
          const asset = await MediaLibrary.createAssetAsync(fileUri);
          console.log("downloaded")
          Toast.show('Download', {
            duration: Toast.durations.LONG,
          });
          
          // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
          setTimeout(function hideToast() {
            Toast.hide(toastTest);
          }, 500);
          }
        } catch (e){
          console.log("error: ", e)
          toastMessage.error("something went wrong. Try again")
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
