import { useEffect, useRef, useState, useCallback } from "react";

import banner1 from "../../assets/image 1.png";
import banner2 from "../../assets/image 2.png";

import daticyIconHeader from "../../assets/Dentistry/image 7.png";
import daticyIconFooter from "../../assets/Dentistry/image 8.png"

import mainPage from "../../assets/MindSpace/main-page.png"
import newWorkspace from "../../assets/MindSpace/new-warkspace.png"
import workspace from "../../assets/MindSpace/workspace.png"

import estateIn from "../../assets/estatein/Снимок экрана 2025-04-23 235117.png"
import estateIn1 from "../../assets/estatein/Снимок экрана 2025-04-23 235153.png"
import estateIn2 from "../../assets/estatein/Снимок экрана 2025-04-23 235213.png"
import TinyLine from "../../assets/TinyLine.png"


import { Project } from "./components/Project";
import { ProjectDto } from "./types";
import clsx from "clsx";

export const Projects = () => {
  const [data, setData] = useState<ProjectDto[]>([]);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickX, setClickX] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isMoved, setIsMoved] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDown(true);
    setClickX(e.clientX);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    document.body.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    document.body.style.userSelect = '';
  };

  const handleMouseUp = () => {
    setIsDown(false);
    document.body.style.userSelect = '';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    if (e.pageX === clickX) {
      setIsMoved(false);
      return;
    }
    setIsMoved(true);
    const walk = (x - startX) * 0.8;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!ref.current) return;
    const touch = e.touches[0];
    setIsDown(true);
    setStartX(touch.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!ref.current) return;
    if (!isDown) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    ref.current.scrollLeft = scrollLeft - walk;
  }, [isDown, startX, scrollLeft]);

  const handleTouchEnd = () => {
    setIsDown(false);
  };

  useEffect(() => {
    const handleSelectStart = (e: Event) => {
      if (isDown) e.preventDefault();
    };
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, [isDown]);

  useEffect(() => {
    const refCurrent = ref.current;

    if (refCurrent) {
      refCurrent.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [handleTouchMove]);

  useEffect(() => {
    setData([
      {
        pics: [estateIn, estateIn1, estateIn2],
        webSiteName: 'estateIn',
        link: 'https://estatein.tl.bibizyana.ru/',
        clarification: "a project with good animations"
      },
      {
        pics: [banner1, banner2],
        webSiteName: 'Sharix Sport Friend',
        link: 'https://guessler.github.io/SportFriend/',
        clarification: "A good, and most importantly quality multi-page project written in HTML, CSS and JS."
      },
      {
        pics: [TinyLine],
        webSiteName: 'TinyLine',
        link: 'https://github.com/Guessler/Messenger-frontend',
        clarification: "Chat app with auth and real-time messaging. Built with React, TypeScript, Material UI, JWT Auth. "
      },
      {
        pics: [daticyIconHeader, daticyIconFooter],
        webSiteName: 'Dentistry of Dr. Ordzhonikidze',
        link: 'https://dr-ordzhonikidze.ru/',
        clarification: "The header and footer are not particularly attractive, but they are written very well."
      },
      {
        pics: [mainPage, newWorkspace, workspace],
        webSiteName: 'MindSpace',
        link: 'https://github.com/Guessler/mind-space',
        clarification: "A project written in the likeness of notion"
      },
    ]);
  }, []);

  return (
    <>
      <h2>Latest projects</h2>
      <div className="latest-project-wrapper">
        <div
          ref={ref}
          className={clsx("latest-project-container")}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {data.map(item => <Project key={item.webSiteName} value={item} />)}
        </div>
      </div>
    </>
  );
};
