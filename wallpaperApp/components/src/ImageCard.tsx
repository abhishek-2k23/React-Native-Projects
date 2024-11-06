import { Wallpaper } from "@/hooks/useWallpaper"
import { Image, Pressable, StyleSheet, View } from "react-native"
import { ThemedText } from "../ThemedText"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

export default function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper
  onPress: () => void
}) {
  return (
    <Pressable onPress={onPress}> 
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.labelContainer}>
        <ThemedText style={styles.label}> {wallpaper?.name} </ThemedText>
        <Ionicons style={styles.icon} name="heart" color={"white"} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    borderRadius: 10,
  },
  label: {
    color: "red",
  },
  labelContainer: {
    color: "white",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    fontSize: 18,
  },
})
