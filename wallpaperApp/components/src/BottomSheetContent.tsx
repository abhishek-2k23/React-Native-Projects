import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { DownloadButton } from './DownloadPhoto'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { Ionicons } from '@expo/vector-icons'
import { Wallpaper } from '@/hooks/useWallpaper'

const BottomSheetContent = ({wallpaper,onClose} : {wallpaper: Wallpaper; onClose: () => void}) => {
  return (
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
  )
}

export default BottomSheetContent

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
  
  