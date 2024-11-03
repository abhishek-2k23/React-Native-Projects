import { View, Button } from "react-native"
import React, { useState } from "react"
import DownloadPhoto from "@/components/src/DownloadPhoto"

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
