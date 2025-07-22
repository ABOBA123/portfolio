
export type MapToMarkupDto = {
    image: string;
    name: string;
    desc: string;
    link?: string
}

export type ThemeTypes = "ligth" | "dark"

export type ThemeType = {
    "--main-bg": string
    "--accent-color": string
    "--side-bar-color" : string
    "--main-text-color": string;
    "--main-fat-text-color": string;
}

export type ThemesType = Record<ThemeTypes, ThemeType>

