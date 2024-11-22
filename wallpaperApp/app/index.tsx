import { View, Text } from "react-native"
import React from "react"
import { Redirect } from "expo-router"
import { useUser } from "@clerk/clerk-expo"

const index = () => {
  const user = useUser()
  return (
    <View>
      {!user ? <Redirect href={"/login"} /> : <Redirect href={"/(tabs)"} />}
    </View>
  )
}

export default index
