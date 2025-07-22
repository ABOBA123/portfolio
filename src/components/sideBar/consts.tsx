import { MapToMarkupDto, ThemesType } from "./types";

import email from "../../assets/svg/email.svg"
import website from "../../assets/svg/website.svg"
import phone from "../../assets/svg/phone.svg"
import address from "../../assets/svg/Address.svg"

import telegram from "../../assets/svg/telegram.svg"
import vk from "../../assets/svg/vk.svg"

import gitIcon from "../../assets/gitIcon.png"

import Russia from "../../assets/svg/Russia.svg"
import greatBritain from "../../assets/svg/greatBritain.svg"

import ShariXLogo from "../../assets/svg/big-sharix 1.svg" 
export const contacts: MapToMarkupDto[] = [
    {
        image: email,
        name: "Email",
        desc: "tlfwrk803@gmail.com",
        link: "https://mail.google.com/mail/u/0/#inbox?compose=new&to=tlfwrk803@gmail.com"
    },
    {
        image: website,
        name: "Website",
        desc: "https://drive.google.com",
        link: "https://drive.google.com/file/d/1Z8cd3YdbUjyVFyxrCHDKutXXz66zzgDS/view?usp=drive_link"
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
        image: gitIcon,
        name: "git hub",
        desc: "https://github.com/Guessler",
        link: "https://github.com/Guessler"
    },
    {
        image: telegram,
        name: "telegram",
        desc: "@tlfwrk",
        link: "https://t.me/tlfwrk "
    },
    {
        image: vk,
        name: "vk",
        desc: "@absolute223",
        link: "https://vk.com/absolute223 "
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