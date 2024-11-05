import { ThemedView } from '@/components/ThemedView'
import React, { useState } from 'react'
import ThemeBox from './ThemeBox'
import { Appearance, StyleSheet, useColorScheme } from 'react-native';

const ThemeBoxProvider = () => {
    const [selectedTheme, setSelectedTheme] = useState<'light'|'dark'|null>(null);
    const handleThemeChange = (themeName : 'light'|'dark'| null) => {
        setSelectedTheme(themeName);
        Appearance.setColorScheme(themeName);
      }

      const theme = useColorScheme() ?? 'light';
  return (
    <ThemedView style={styles.themeContainer}>
        <ThemeBox
        name="system"
        theme={theme}
        themeName={null}
        selectedTheme={selectedTheme}
        onSelect={() => handleThemeChange(null)}
      />
      <ThemeBox
        name="light"
        theme="light"
        themeName={"light"}
        selectedTheme={selectedTheme}
        onSelect={() => handleThemeChange("light")}
      />
      <ThemeBox
        name="dark"
        theme="dark"
        themeName={"dark"}
        selectedTheme={selectedTheme}
        onSelect={() => handleThemeChange("dark")}
      />
    </ThemedView>
  )
}

export default ThemeBoxProvider

const styles = StyleSheet.create({
    
  themeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    flexWrap: "wrap",
  },
})