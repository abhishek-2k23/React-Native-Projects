import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { FlatList } from 'react-native-gesture-handler'

const About = () => {
  return (
    <ThemedView>
          <ThemedText style={styles.bigText}>About</ThemedText>
          <FlatList
            data={[
              "account",
              "privacy policy",
              "terms of services",
              "licences",
              "version",
            ]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <ThemedText
                style={{ textTransform: "capitalize", marginTop: 20 }}
              >
                {item}
              </ThemedText>
            )}
          />
          <ThemedText> 1.0.0 </ThemedText>
        </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    bigText: {
      fontSize: 25,
    }
  })