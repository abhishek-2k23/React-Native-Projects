import ParallaxScrollView from "@/components/ParallaxScrollView"
import ImageCard from "@/components/src/ImageCard"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import useWallpaper, { Wallpaper } from "@/hooks/useWallpaper"
import { Image, StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

const explore = () => {
  const wallpapers = useWallpaper()
  return (
    <ThemedView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{ uri: wallpapers[5]?.url ?? "" }}
          />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                  <ThemedView style={styles.imageContainer}><ImageCard wallpaper={item} /></ThemedView>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <ThemedView style={styles.imageContainer}><ImageCard wallpaper={item} /></ThemedView>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
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
