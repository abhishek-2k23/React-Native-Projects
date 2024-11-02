import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const account = () => {
  return (
    <SafeAreaView>
        <Text> account tab</Text>
        <Link href={'/accountInfo'}>
          <Text> Go to accountInfo </Text>
        </Link>
    </SafeAreaView>
  )
}

export default account