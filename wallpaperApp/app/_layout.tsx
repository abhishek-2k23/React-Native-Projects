import { Link, Slot } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Layout() {
  return (
    <SafeAreaView>
      <Slot />
      <View>
        <Link href={"/account"}>
          <Text>Account Tab</Text>
        </Link>

        <Link href={"/foryou"}>
          <Text>for you tab</Text>
        </Link>

        <Link href={"/explore"}>
          <Text>explore tab</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}
