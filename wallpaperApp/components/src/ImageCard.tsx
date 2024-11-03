import { Wallpaper } from "@/hooks/useWallpaper";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";

export default function ImageCard({wallpaper} : {wallpaper: Wallpaper}){
    return(
        <View>
            <Image source={{uri: wallpaper.url}} style={styles.image} />
            <View style={styles.labelContainer}>
                <ThemedText style={styles.label}> {wallpaper?.name} </ThemedText>
                <Ionicons style={styles.icon} name="heart" color={'white'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1, 
        height: 250,
        borderRadius: 10,
    }, 
   label: {
        color: 'red'
    },
    labelContainer: {
        color:'white',
        position: 'absolute', 
        bottom: 0,
        backgroundColor : 'rgba(0,0,0,0.7)', 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    icon: {
        fontSize: 18
    }
})