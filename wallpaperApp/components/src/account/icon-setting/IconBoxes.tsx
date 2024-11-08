import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const IconBoxes = () => {
    const theme = useColorScheme() ?? 'light';
  return (
    <ThemedView style={styles.iconContainer}>
          <FlatList
            horizontal
            data={[1, 2, 3, 4]}
            keyExtractor={(item) => item?.toString()}
            renderItem={({ item }) => (
              <ThemedView
                style={[
                  styles.iconBox,
                  {
                    borderColor: Colors[theme].background,
                    marginHorizontal: 10,
                  },
                ]}
              >
                <ThemedText>{item}</ThemedText>
              </ThemedView>
            )}
          />
        </ThemedView>
  )
}

export default IconBoxes

const styles = StyleSheet.create({
    
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    flexWrap: "wrap",
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