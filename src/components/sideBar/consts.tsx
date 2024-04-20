import { MapToMarkupDto, ThemesType } from "./types";

import email from "../../assets/email.svg"
import website from "../../assets/website.svg"
import phone from "../../assets/phone.svg"
import address from "../../assets/svg/Address.svg"

import instagram from "../../assets/Instagram.svg"
import telegram from "../../assets/telegram.svg"
import vk from "../../assets/vk.svg"

import Russia from "../../assets/Russia.svg"
import greatBritain from "../../assets/greatBritain.svg"

import ShariXLogo from "../../assets/big-sharix 1.svg" 
export const contacts: MapToMarkupDto[] = [
    {
        image: email,
        name: "Email",
        desc: "@gmail.com"
    },
    {
        image: website,
        name: "Website",
        desc: "https://sports.sharix.org"
    },
    {
        image: phone,
        name: "Phone",
        desc: "+ 7 (000) 000 00-00"
    },
    {
        image: address,
        name: "Address",
        desc: "Russian, Moscow"
    },
]

export const socials: MapToMarkupDto[] = [
    {
        image: instagram,
        name: "instagram",
        desc: "@Root"
    },
    {
        image: telegram,
        name: "telegram",
        desc: "@Root"
    },
    {
        image: vk,
        name: "vk",
        desc: "@Root"
    },
]
export const languages: MapToMarkupDto[] = [
    {
        image: greatBritain,
        name: "English",
        desc: "B2"
    },
    {
        image: Russia,
        name: "Russian",
        desc: "Professional working"
    },
]
export const experience: MapToMarkupDto = {
        image: ShariXLogo,
        name: "Frontend developer",
        desc: "ShariX"
}

export const anotherInformation: MapToMarkupDto[] = [
    {
        image: "sadasd",
        name: "Dec 22, still working",
        desc: "Moscow, Russia"
    }
]

export const themes: ThemesType = {
    ligth:{
        "--main-bg": "#F5F5F5",
        "--accent-color": "#FFFFFF",
        "--side-bar-color": "#EFEFEF",
        "--main-text-color": "#666666",
        "--main-fat-text-color": "#333333",
    },
    dark:{
        "--main-bg": "#232339",
        "--accent-color": "#2E2E48",
        "--side-bar-color": "#2E2E48",
        "--main-text-color": "#fff",
        "--main-fat-text-color": "#f5f5f5",
        // "--border-color": "#"
    },
}