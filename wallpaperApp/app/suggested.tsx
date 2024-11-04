import { View, Button } from "react-native"
import React, { useState } from "react"
import DownloadPhoto from "@/components/src/DownloadPhoto"
import SplitView from "@/components/src/SplitView";
import useSuggested from "@/hooks/useSuggested";

const Suggested = () => {
  const wallpapers = useSuggested();
  return (

      <SplitView wallpapers={wallpapers}/>
  )
}

export default Suggested
