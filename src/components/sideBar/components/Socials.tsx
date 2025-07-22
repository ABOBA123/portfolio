import { Markup } from "../../markup";
import { MapToMarkupDto } from "../types";
import {FC, useEffect, useState } from "react";
import { socials } from "../consts";
import clsx from "clsx";

interface SocialProps {
    activeSideBar: boolean;
}
export const Socials:FC<SocialProps> = ({ activeSideBar }) => {
    const [data, setData] = useState<MapToMarkupDto[]>([])
    useEffect(() => {
        setData(socials)
    }, [])

    return(
        data.map(item=>
            <Markup 
                key={item.name}
                leftRender={
                    <div className="main-circle">
                        <img className="social-image" src={item.image} alt={item.image} />
                    </div>
                }
                rightRender={
                    <div className={activeSideBar ? "small-margin": "display-none"}>
                        <p>{item.name}</p>
                        <a className="name-props">{item.desc}</a>
                    </div>
                }
                link={item.link}
                hideRight={!activeSideBar}
                contanerStyles={clsx(!activeSideBar && "justify-center")}
            />
        )
    )
}