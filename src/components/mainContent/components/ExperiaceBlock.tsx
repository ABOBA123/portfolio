import { Experience } from "./Experience";
import place from "../../../assets/svg/place.svg";
import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import hell from "../../../assets/videoplayback.mp4";
import { useSidebar } from "../../../utils/useSidebar";

interface SocialProps {
  activeSideBar: boolean;
}

const handleMainDivClick = () => {
  window.open("https://sharix.org/", "_blank");
};

export const ExperiaceBlock: FC<SocialProps> = ({ activeSideBar }) => {
  const { isDark } = useSidebar();
  const [isHover, setIsHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [smallScreen, setSmallScreen] = useState<boolean>(true);

  useEffect(() => {
    if (isHover) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isHover]);

  useEffect(() => {
    videoRef.current?.pause();
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 780) {
        setSmallScreen(false);
      } else {
        setSmallScreen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onClick={handleMainDivClick}
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
      <Experience />
      {smallScreen && (
        <div className="small-margin" style={{ width: "150px" }}>
          <span>2024 - 2025 years</span>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <img src={place} alt="place" />
            <span className="name-props">Moscow, Russia</span>
          </div>
        </div>
      )}
    </div>
  );
};
