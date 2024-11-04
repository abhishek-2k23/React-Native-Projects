import useWallpaper, { FullWallpaper } from "./useWallpaper";

export default function useSuggested(): FullWallpaper[]{
    const wallpaper = useWallpaper()
    return wallpaper.filter((w) => w.suggested);
}