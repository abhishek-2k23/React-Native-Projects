import SplitView from '@/components/src/SplitView'
import useLibrary from '@/hooks/useLibrary';
import useLiked from '@/hooks/useLiked';
import useWallpaper from '@/hooks/useWallpaper'
import { View, Text } from 'react-native'

const Library = () => {
  const wallpapers = useLibrary();
  return (

      <SplitView wallpapers={wallpapers}/>
  )
}

export default Library