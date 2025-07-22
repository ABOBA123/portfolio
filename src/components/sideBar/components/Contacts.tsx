import { Markup } from "../../markup";

import { FC, useEffect, useState } from "react";
import { MapToMarkupDto } from "../types";
import { contacts } from "../consts";
import clsx from "clsx";


interface PropsMarkup{
    activeSideBar: boolean;
}

export const Contacts: FC<PropsMarkup> = ({ activeSideBar }) => {

    const [data, setData] = useState<MapToMarkupDto[]>([])

    useEffect(() => {
        setData(contacts)
    }, [])

    return (
        data.map(item =>
            <Markup 
                key={item.name}
                leftRender={
                    <div className="grey-color-circle main-circle">
                        <img src={item.image} alt={item.image} />
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