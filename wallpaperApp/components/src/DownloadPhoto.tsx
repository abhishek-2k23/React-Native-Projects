import {StyleSheet} from "react-native";
import Modal from "react-native-modal";
import BottomSheetContent from "./BottomSheetContent";
import { Wallpaper } from "@/hooks/useWallpaper";

const DownloadPhoto = ({onClose, isVisible, wallpaper}: {onClose: () => void; isVisible: boolean; wallpaper: Wallpaper}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modalContainer} onModalHide={onClose} onSwipeCancel={onClose} onBackButtonPress={onClose}>
       
       <BottomSheetContent wallpaper={wallpaper} onClose={onClose}/>
      </Modal>
  )
}

export default DownloadPhoto

const styles = StyleSheet.create({
    modalContainer: {
        ...StyleSheet.absoluteFillObject,
        margin:0,
        position: 'absolute',
        flex: 1, 
        height: '100%', 
        bottom: 0, 
        width: '100%'     
    }
})