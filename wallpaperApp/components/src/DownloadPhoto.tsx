import React, { useCallback, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  useColorScheme,
} from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { Wallpaper } from "@/hooks/useWallpaper"
import { ThemedView } from "../ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { ThemedText } from "../ThemedText"
import { Colors } from "@/constants/Colors"

const DownloadPhoto = ({
  wallpaper,
  onClose,
}: {
  onClose: () => void
  wallpaper: Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  // renders
  return (
    <BottomSheet
      snapPoints={["99%"]}
      enablePanDownToClose={true}
      onClose={onClose}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={{ flex: 1 }}>
        <ThemedView style={styles.contentContainer}>
          <Image style={styles.image} source={{ uri: wallpaper.url ?? "" }} />

          {/* top bar on the image  */}
          <View style={styles.topBar}>
            {/* close icon  */}
            <Pressable onPress={onClose} style={styles.closeIcon}>
              <Ionicons name="close-outline" size={18} color={"black"} />
            </Pressable>

            {/* right view  */}
            <View style={styles.topBarRight}>
              <Pressable onPress={onClose} style={styles.closeIcon}>
                <Ionicons name="heart-outline" size={18} color={"black"} />
              </Pressable>
              <Pressable onPress={onClose} style={styles.closeIcon}>
                <Ionicons name="share-outline" size={18} color={"black"} />
              </Pressable>
            </View>
          </View>

          {/* image name  */}
          <ThemedText
            style={{
              textAlign: "center",
              fontSize: 24,
              textTransform: "capitalize",
              letterSpacing: 2,
            }}
          >
            {wallpaper?.name}
          </ThemedText>

          {/* download button  */}
          <ThemedView
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <DownloadButton />
          </ThemedView>
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  )
}

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
      <Text
        style={{ color: theme === "dark" ? "black" : "white", fontSize: 20 }}
      >
        Download
      </Text>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    objectFit: "cover",
    height: "80%",
  },
  topBar: {
    position: "absolute",
    padding: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeIcon: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
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
})

export default DownloadPhoto
