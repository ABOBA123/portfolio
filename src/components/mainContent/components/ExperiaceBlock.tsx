import { Experience } from "./Experience";
import place from "../../../assets/svg/place.svg";
import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import hell from "../../../assets/videoplayback.mp4";
import { useSidebar } from "../../../utils/useSidebar";
import { experience, experienceNeza } from "../../sideBar/consts";

interface ExperienceItemProps {
  data: typeof experience;
  url: string;
  period: string;
  activeSideBar: boolean;
  isDark: boolean;
  smallScreen: boolean;
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  data,
  url,
  period,
  activeSideBar,
  isDark,
  smallScreen,
}) => {
  const [isHover, setIsHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHover) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isHover]);

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={clsx(
        activeSideBar
          ? "Experience-proto ordinary-width"
          : "Experience-proto closed-sidebar-width",
        isDark ? "enable-animation unShadow" : "enable-animation"
      )}
    >
      {isDark && (
        <video
          muted
          className={clsx(isDark && isHover ? "opacity-1" : "opacity-0")}
          ref={videoRef}
          src={hell}
        />
      )}
      <Experience data={data} />
      {smallScreen && (
        <div className="small-margin" style={{ width: "150px" }}>
          <span>{period}</span>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <img src={place} alt="place" />
            <span className="name-props">Moscow, Russia</span>
          </div>
        </div>
      )}
    </div>
  );
};

interface SocialProps {
  activeSideBar: boolean;
}

export const ExperiaceBlock: FC<SocialProps> = ({ activeSideBar }) => {
  const { isDark } = useSidebar();
  const [smallScreen, setSmallScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth > 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ExperienceItem
        data={experience}
        url="https://sharix.org/"
        period="2024 – 2025"
        activeSideBar={activeSideBar}
        isDark={isDark}
        smallScreen={smallScreen}
      />
      <ExperienceItem
        data={experienceNeza}
        url="https://nezavisimost.ru/"
        period="2025 – now"
        activeSideBar={activeSideBar}
        isDark={isDark}
        smallScreen={smallScreen}
      />
    </div>
  );
};