import { FlatList, StyleSheet } from "react-native"
import { ThemedView } from "../ThemedView"
import ImageCard from "./ImageCard"
import { Wallpaper } from "@/hooks/useWallpaper"
import { useState } from "react"
import DownloadPhoto from "./DownloadPhoto"

const SplitView = ({ wallpapers }: { wallpapers: Wallpaper[] }) => {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null,
  )
  return (
    <ThemedView style={{flex:1}}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 0)}
            renderItem={({ item }) => (
              <ThemedView style={styles.imageContainer}>
                <ImageCard
                  onPress={() => setSelectedWallpaper(item)}
                  wallpaper={item}
                />
              </ThemedView>
            )}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 1)}
            renderItem={({ item }) => (
              <ThemedView style={styles.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => setSelectedWallpaper(item)}
                />
              </ThemedView>
            )}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
      </ThemedView>
      {selectedWallpaper && (
        <DownloadPhoto
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </ThemedView>
  )
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: "row",
    flexWrap: "wrap", 
},
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
})
export default SplitView
