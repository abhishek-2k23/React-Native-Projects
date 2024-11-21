import SplitView from "@/components/src/SplitView"
import { ThemedView } from "@/components/ThemedView"
import useCrousel from "@/hooks/useCrousel"
import useWallpaper from "@/hooks/useWallpaper"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { Dimensions, Image, StyleSheet, Text } from "react-native"
import Animated from "react-native-reanimated"
import Carousel from "react-native-reanimated-carousel"

const explore = () => {
  const wallpapers = useWallpaper()
  const carousel = useCrousel()
  const width = Dimensions.get("window").width
  const [yOffSet, setYOffSet] = useState(0)

 
  const TOPBAR_HEIGHT = 350
   return (
    <ThemedView style={{ flex: 1 }}>
      {/* //ParallaxScrollView with a single image */}
      <Animated.View style={[{height: Math.max(0, TOPBAR_HEIGHT - yOffSet)}]}>
        <Carousel
          loop
          width={width}
          autoPlay={true}
          data={carousel}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <>
              <Image source={{ uri: item?.image }} style={{ height: TOPBAR_HEIGHT}} />

              <LinearGradient
                // Background Linear Gradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: TOPBAR_HEIGHT / 3,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 30,
                    fontWeight: "600",
                    textAlign: "center",
                    height: TOPBAR_HEIGHT / 3,
                    textAlignVertical: "center",
                  }}
                >
                  {item?.title}
                </Text>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>

      {/* //Wallpapers */}
      <SplitView wallpapers={wallpapers} setYOffSet={setYOffSet} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
})
export default explore
