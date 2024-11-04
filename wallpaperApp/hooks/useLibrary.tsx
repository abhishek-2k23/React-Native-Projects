import useWallpaper, { FullWallpaper } from "./useWallpaper";

export default function useLibrary(): FullWallpaper[]{
    const wallpaper = useWallpaper()
    return wallpaper.filter((w) => w.library);
}