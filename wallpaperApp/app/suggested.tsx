import { View, Text, Button } from "react-native"
import React, { useState } from "react"
import DownloadPhoto from "@/components/src/DownloadPhoto"
import { SafeAreaView } from "react-native-safe-area-context"

const Suggested = () => {
  const [showDownloadPhoto, setShowDownloadPhoto] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => setShowDownloadPhoto(true)}
        title="Download Photo"
      />

      {showDownloadPhoto && (
        <DownloadPhoto onClose={() => setShowDownloadPhoto(false)} />
      )}
    </View>
  )
}

export default Suggested
