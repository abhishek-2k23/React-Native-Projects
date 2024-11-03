export interface Wallpaper  {
    url: string, 
    name: string,
}

export default function useWallpaper():Wallpaper[]{
    return [
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/NfyMrHObTXGlg4H-IbCkKg', 
            name: 'boy',
        }, 
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/gTtgj8_CRvit1nk-14lxtw', 
            name: 'girl'
        },
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/IZB5O2edSy-UuzuKb70mUw', 
            name: 'design',
        }, 
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/OlJ_VXViQueeFlC4Rt4bnA', 
            name: 'cat'
        },
        {
            url: 'https://ideogram.ai/assets/progressive-image/balanced/response/XbBGIBSuRvaWD1Y4hFHz-Q', 
            name: 'robot'
        },
        {
            url: 'https://ideogram.ai/assets/image/lossless/response/HdX6W5fcRyiXQrZGeHaUCg', 
            name: 'sea'
        }

    ]
}