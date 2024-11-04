import ParallaxScrollView from "@/components/ParallaxScrollView"
import DownloadPhoto from "@/components/src/DownloadPhoto"
import ImageCard from "@/components/src/ImageCard"
import SplitView from "@/components/src/SplitView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import useWallpaper, { Wallpaper } from "@/hooks/useWallpaper"
import { useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

const explore = () => {
  const wallpapers = useWallpaper()
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null,
  )
  return (
    <ThemedView style={{ flex: 1 }}>
      {/* //ParallaxScrollView with a single image */}
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{ uri: wallpapers[5]?.url ?? "" }}
          />
        }
      >
        {/* //Wallpapers */}
        <SplitView wallpapers={wallpapers} />
        
      </ParallaxScrollView>
      
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", flex: 1 },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
})
export default explore
