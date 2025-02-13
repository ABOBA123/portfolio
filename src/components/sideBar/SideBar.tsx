import "./style.css"

import icon from "../../assets/icon.png"
// import icon from "../../assets/icon.jpg"
// import icon from "../../assets/main-icon.jpg"

import { Contacts } from "./components/Contacts"
import { Socials } from "./components/Socials"
import { Languages } from "./components/Languages"
import { useSidebar } from "../../utils/useSidebar"
import { ThemeButton } from "./components/ThemeButton"
import clsx from "clsx"

export const SideBar = () => {
    const { state: activeSideBar, toggleState: toggleActiveSideBar } = useSidebar()

    return (
        <div className={clsx('side-bar-content', activeSideBar ? "side-bar-normal-width" : "side-bar-small-width")}>
            <div className={activeSideBar ? "flex-row avatar-close-sidebar" : "flex-col-rev  avatar-close-sidebar"}>
                <img  className={activeSideBar ? "big-icon" : "small-icon"} src={icon} alt={icon} />
                <svg onClick={toggleActiveSideBar} className={activeSideBar?"small-arrow": "small-arrow-reverce"} width="17" height="31" viewBox="0 0 17 31"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.585786 16.9142C-0.195262 16.1332 -0.195262 14.8668 0.585786 14.0858L13.3137 1.35786C14.0948 0.576816 15.3611 0.576816 16.1421 1.35786C16.9232 2.13891 16.9232 3.40524 16.1421 4.18629L4.82843 15.5L16.1421 26.8137C16.9232 27.5948 16.9232 28.8611 16.1421 29.6421C15.3611 30.4232 14.0948 30.4232 13.3137 29.6421L0.585786 16.9142ZM3 17.5H2V13.5H3V17.5Z"  />
                </svg>

            </div>
            <h1 className={activeSideBar ? "" : "display-none"}>Tarasov Leo</h1>
            <h2 className={activeSideBar ? "job-color" : "display-none"}>Frontend-developer</h2>
            <div className="line"></div>
            <Contacts activeSideBar={activeSideBar} />
            <div className="line"></div>
            <p className={activeSideBar ? "" : "display-none"}>Socials</p>
            <Socials activeSideBar={activeSideBar} />
            <div className="line"></div>
            <p className={activeSideBar ? "" : "display-none"}>Languages</p>
            <Languages activeSideBar={activeSideBar} />
            <div className={activeSideBar ? "" : "button-adaptive-position"}>
                <ThemeButton activeSideBar={activeSideBar}/>
            </div>
        </div>
    )
}