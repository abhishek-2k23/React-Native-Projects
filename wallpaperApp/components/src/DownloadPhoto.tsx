import React, { useCallback, useRef } from "react"
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { Wallpaper } from "@/hooks/useWallpaper"
import BottomSheetContent from "./BottomSheetContent"

const DownloadPhoto = ({
  wallpaper,
  onClose,
}: {
  onClose: () => void
  wallpaper: Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  // renders
  return (
    <BottomSheet
      snapPoints={["99%"]}
      enablePanDownToClose={true}
      onClose={onClose}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={{ flex: 1 }}>
        <BottomSheetContent wallpaper={wallpaper} onClose={onClose}/>
      </BottomSheetView>
    </BottomSheet>
  )
}



export default DownloadPhoto
