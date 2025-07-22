import clsx from "clsx";
import { FC, ReactNode } from "react";

interface MarkupProps {
    leftRender: ReactNode;
    rightRender: ReactNode;
    hideRight?: boolean;
    contanerStyles?: string;
    link?: string
}

export const Markup: FC<MarkupProps> = ({leftRender, rightRender, hideRight,contanerStyles, link}) => (
    <a className={clsx("information-container", contanerStyles)} target="_blank" href={link}>
        <div className="main-circle ">
            {leftRender}
        </div>
        <div className={hideRight ? "display-none" :"information-indent"}>
            {rightRender}
        </div>
    </a>
)