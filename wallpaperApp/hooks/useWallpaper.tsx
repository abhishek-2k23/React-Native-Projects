export interface Wallpaper  {
    url: string, 
    name: string,
}

export interface FullWallpaper extends Wallpaper{
    liked: boolean,
    library: boolean,
    suggested: boolean,
}

export default function useWallpaper():FullWallpaper[]{
    return [
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/NfyMrHObTXGlg4H-IbCkKg', 
            name: 'boy',
            liked: true,
            suggested: false,
            library: true,
        }, 
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/gTtgj8_CRvit1nk-14lxtw', 
            name: 'girl',
            liked: true,
            suggested: true,
            library: false,
        },
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/IZB5O2edSy-UuzuKb70mUw', 
            name: 'design',
            liked: false,
            suggested: false,
            library: true,
        }, 
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/OlJ_VXViQueeFlC4Rt4bnA', 
            name: 'cat',
            liked: false,
            suggested: true,
            library: false,
        },
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/XbBGIBSuRvaWD1Y4hFHz-Q', 
            name: 'robot',
            liked: true,
            suggested: true,
            library: true,
        },
        {
            url: 'https://ideogram.ai/assets/image/lossless/response/HdX6W5fcRyiXQrZGeHaUCg', 
            name: 'sea',
            liked: true,
            suggested: false,
            library: false,
        }

    ]
}