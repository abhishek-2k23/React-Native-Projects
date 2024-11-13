import { FlatList, StyleSheet, useColorScheme, View } from "react-native"
import { ThemedView } from "../ThemedView"
import ImageCard from "./ImageCard"
import { Wallpaper } from "@/hooks/useWallpaper"
import { useState } from "react"
import DownloadPhoto from "./DownloadPhoto"

const SplitView = ({ wallpapers, setYOffSet }: { wallpapers: Wallpaper[]; setYOffSet: (yOffSet: number) => void }) => {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null)
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={{flex:1, zIndex: 2}}>
      <FlatList
        onScroll={(e) => {
          setYOffSet(e.nativeEvent.contentOffset.y/1)
        }}
        data={wallpapers}
        keyExtractor={(item, index) => item?.toString() + index}
        numColumns={2}  // Set the number of columns you want in your grid
        renderItem={({ item }) => (
          <ThemedView style={styles.imageContainer}> 
            <ImageCard onPress={() => setSelectedWallpaper(item)} wallpaper={item} />
          </ThemedView>
        )}
      />
      {selectedWallpaper && (
          <DownloadPhoto
          onClose={() => setSelectedWallpaper(null)} isVisible={selectedWallpaper !== null} wallpaper={selectedWallpaper}
          />
      )}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    width: '100%'
  },
  imageContainer: {
    width: '50%',
    padding: 10,
  },
  iconBox: {
    borderWidth: 1,
    paddingHorizontal: 30,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
})

export default SplitView;
