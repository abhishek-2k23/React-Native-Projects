import { View, Text } from 'react-native'
import React from 'react'
import useLiked from '@/hooks/useLiked';
import SplitView from '@/components/src/SplitView';

const Liked = () => {
  const wallpapers = useLiked();
  return (

      <SplitView wallpapers={wallpapers}/>
  )
}

export default Liked