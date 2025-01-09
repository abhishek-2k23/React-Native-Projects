import useWallpaper from "@/hooks/useWallpaper"
import { useUser } from "@clerk/clerk-expo"
import { useEffect, useState } from "react"
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import axiosClient from "../../services/GlobalApi"
import useUserStore from "@/zustand/useUserStore"
import Header from "@/components/src/home/Header"
import Body from "@/components/src/home/Body"
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemedView } from "@/components/ThemedView"

const explore = () => {

  //using zustand
  const { userData, addUser, removeUser } = useUserStore()

  //user on clerk session
  const { user } = useUser()

  //call the when there is user available
  useEffect(() => {
    user && VerifyUser()
  }, [user])

  const VerifyUser = async () => {
    try {
      const result = await axiosClient.getUserInfo(
        user?.primaryEmailAddress?.emailAddress || "",
      )
      if (result?.data?.data.length !== 0) {
        const { userEmail, userName, userCredits } = result.data.data[0]
        addUser({ userEmail, userName, userCredits })
        console.log('userData-> ',userData);
        return
      } else {
        const res = await axiosClient.createUser({
          userEmail: user?.primaryEmailAddress?.emailAddress || "",
          userName: user?.fullName || "",
        })
        addUser({userEmail: user?.primaryEmailAddress?.emailAddress || '', userName: user?.fullName || '', userCredits:10 })
      }
    } catch (e) {
      console.log("Error in user signup : ",e)
    }
  }
  return (
    <ThemedView style={{flex:1}}>
      
      {/* Header  */}
      <Header />

      {/* Body  */}
      <Body />
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
3e4
