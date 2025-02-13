import { MapToMarkupDto, ThemesType } from "./types";

import email from "../../assets/svg/email.svg"
import website from "../../assets/svg/website.svg"
import phone from "../../assets/svg/phone.svg"
import address from "../../assets/svg/Address.svg"

import instagram from "../../assets/svg/Instagram.svg"
import telegram from "../../assets/svg/telegram.svg"
import vk from "../../assets/svg/vk.svg"

import Russia from "../../assets/svg/Russia.svg"
import greatBritain from "../../assets/svg/greatBritain.svg"

import ShariXLogo from "../../assets/svg/big-sharix 1.svg" 
export const contacts: MapToMarkupDto[] = [
    {
        image: email,
        name: "Email",
        desc: "@tarasovlevworkout@gmail.com"
    },
    {
        image: website,
        name: "Website",
        desc: "guessler.github.io/portfolio/"
    },
    {
        image: phone,
        name: "Phone",
        desc: "+ 7 (964) 794 39-23"
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
        desc: "@GUESSLER7"
    },
    {
        image: telegram,
        name: "telegram",
        desc: "@Guessler"
    },
    {
        image: vk,
        name: "vk",
        desc: "@absolute223"
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
    },
}