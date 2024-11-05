import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function ThemeBox({
    name,
    theme,
    themeName,
    selectedTheme,
    onSelect,
  }: {
    name: string;
    theme: 'light'|'dark';
    themeName: "light" | "dark" | null;
    selectedTheme: "light" | "dark" | null;
    onSelect: () => void;
  }) {
    // Determine if this box is selected
    const isSelected = themeName === selectedTheme;
    const backgroundColor = isSelected ? (themeName === "dark" ? Colors.dark.background : Colors.light.background) : "transparent";
    const textColor = themeName === "light" ? Colors.dark.text : Colors.light.text;
  
    return (
      <Pressable onPress={onSelect}>
        <ThemedView
          style={[
            styles.themeBox,
            {
              backgroundColor,
              borderColor: theme === "dark" ? Colors.light.background : Colors.dark.background,
            },
          ]}
        >
          <ThemedText
            style={{
              textTransform: "capitalize",
              color: textColor,
            }}
          >
            {name}
          </ThemedText>
        </ThemedView>
      </Pressable>
    );
  }

export default ThemeBox;

const styles = StyleSheet.create({
  themeBox: {
    borderWidth: 1,
    paddingHorizontal: 30,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
})