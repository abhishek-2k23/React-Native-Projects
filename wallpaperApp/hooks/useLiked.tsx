import useWallpaper, { FullWallpaper } from "./useWallpaper";

export default function useLiked(): FullWallpaper[]{
    const wallpaper = useWallpaper()
    return wallpaper.filter((w) => w.liked);
}