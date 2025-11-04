import { useEffect, useRef, useState, useCallback } from "react";
import clsx from "clsx";

// Изображения
import banner1 from "../../assets/image 1.png";
import banner2 from "../../assets/image 2.png";
import daticyIconHeader from "../../assets/Dentistry/image 7.png";
import daticyIconFooter from "../../assets/Dentistry/image 8.png";
// import mainPage from "../../assets/MindSpace/main-page.png";
// import newWorkspace from "../../assets/MindSpace/new-warkspace.png";
// import workspace from "../../assets/MindSpace/workspace.png";
import estateIn from "../../assets/estatein/Снимок экрана 2025-04-23 235117.png";
import estateIn1 from "../../assets/estatein/Снимок экрана 2025-04-23 235153.png";
import estateIn2 from "../../assets/estatein/Снимок экрана 2025-04-23 235213.png";
import white from "../../assets/neza/multi/white/Снимок экрана 2025-10-11 225043.png";
import white1 from "../../assets/neza/multi/white/Снимок экрана 2025-10-11 225213.png";
import black from "../../assets/neza/multi/black/Снимок экрана 2025-10-11 225640.png";
import black1 from "../../assets/neza/multi/black/Снимок экрана 2025-10-11 225748.png";
import rainbow from "../../assets/neza/multi/rainbow/Снимок экрана 2025-10-11 225936.png";
import rainbow1 from "../../assets/neza/multi/rainbow/Снимок экрана 2025-10-11 230135.png";
import rainbow2 from "../../assets/neza/multi/rainbow/Снимок экрана 2025-10-11 230214.png";
import soueast from "../../assets/neza/mono/soueast/Снимок экрана 2025-10-11 225313.png";
import soueast1 from "../../assets/neza/mono/soueast/Снимок экрана 2025-10-11 225343.png";
import soueast2 from "../../assets/neza/mono/soueast/Снимок экрана 2025-10-11 225413.png";

import { Project } from "./components/Project";
import { ProjectDto } from "./types";

export const Projects = () => {
  const [data, setData] = useState<ProjectDto[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  const friction = 0.95;
  const minVelocity = 0.5;

  useEffect(() => {
    setData([
      {
        pics: [rainbow, rainbow1, rainbow2],
        webSiteName: "rainbow multibrand",
        link: "https://percar.ru",
        clarification: "commercial project",
      },

      // {
      //   pics: [mainPage, newWorkspace, workspace],
      //   webSiteName: "MindSpace",
      //   link: "https://mindspace.tl.bibizyana.ru/",
      //   clarification: "A project written in the likeness of notion",
      // },
      {
        pics: [white, white1],
        webSiteName: "white multibrand",
        link: "https://n-avtosalon.ru/",
        clarification: "commercial project",
      },
      {
        pics: [black, black1],
        webSiteName: "black multibrand",
        link: "https://auto-brg.ru/",
        clarification: "commercial project",
      },

      {
        pics: [soueast, soueast1, soueast2],
        webSiteName: "soueast monobrand",
        link: "https://soueast-nzv.ru/",
        clarification: "commercial project",
      },
      {
        pics: [banner1, banner2],
        webSiteName: "Sharix Sport Friend",
        link: "https://guessler.github.io/SportFriend/",
        clarification:
          "A good, and most importantly quality multi-page project written in HTML, CSS and JS.",
      },
      {
        pics: [daticyIconHeader, daticyIconFooter],
        webSiteName: "Dentistry of Dr. Ordzhonikidze",
        link: "https://dr-ordzhonikidze.ru/",
        clarification:
          "The header and footer are not particularly attractive, but they are written very well.",
      },
      {
        pics: [estateIn, estateIn1, estateIn2],
        webSiteName: "estateIn",
        link: "https://estatein.tl.bibizyana.ru/",
        clarification: "a project with good animations",
      },
    ]);
  }, []);

  const stopInertia = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    isScrollingRef.current = false;
  }, []);

  const startInertiaScroll = useCallback(() => {
    if (Math.abs(velocityRef.current) < minVelocity) {
      isScrollingRef.current = false;
      return;
    }
    isScrollingRef.current = true;

    const scroll = () => {
      if (!containerRef.current) return;
      containerRef.current.scrollLeft += velocityRef.current;
      velocityRef.current *= friction;

      if (Math.abs(velocityRef.current) > minVelocity) {
        rafRef.current = requestAnimationFrame(scroll);
      } else {
        rafRef.current = null;
        isScrollingRef.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(scroll);
  }, [friction, minVelocity]);

  // === МЫШЬ ===
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDownRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    lastXRef.current = e.pageX;
    velocityRef.current = 0;
    stopInertia();
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // чуть выше чувствительность
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
    velocityRef.current = lastXRef.current - e.pageX;
    lastXRef.current = e.pageX;
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    document.body.style.userSelect = "";
    startInertiaScroll();
  };

  const handleMouseLeave = () => {
    if (isDownRef.current) {
      isDownRef.current = false;
      document.body.style.userSelect = "";
      startInertiaScroll();
    }
  };

  // === ТАЧ ===
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    isDownRef.current = true;
    const touch = e.touches[0];
    startXRef.current = touch.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    lastXRef.current = touch.pageX;
    velocityRef.current = 0;
    stopInertia();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDownRef.current || !containerRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
    velocityRef.current = lastXRef.current - touch.pageX;
    lastXRef.current = touch.pageX;
  };

  const handleTouchEnd = () => {
    isDownRef.current = false;
    startInertiaScroll();
  };

  // === КОЛЕСО МЫШИ (ГОРИЗОНТАЛЬНО) ===
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!containerRef.current) return;
    // Только если горизонтальная прокрутка возможна
    if (containerRef.current.scrollWidth > containerRef.current.clientWidth) {
      e.preventDefault();
      containerRef.current.scrollBy({
        left: e.deltaY,
        behavior: "instant", // мгновенно, чтобы не конфликтовать с инерцией
      });
    }
  }, []);

  // === КОНТЕКСТНОЕ МЕНЮ ===
  const handleContextMenu = (e: MouseEvent) => {
    if (isDownRef.current) {
      e.preventDefault();
    }
  };

  // === ПОДПИСКИ ===
  useEffect(() => {
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("wheel", handleWheel, { passive: false });
      ref.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("wheel", handleWheel);
        ref.removeEventListener("contextmenu", handleContextMenu);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleWheel]);

  // === ЗАПРЕТ ВЫДЕЛЕНИЯ ===
  useEffect(() => {
    const handleSelectStart = (e: Event) => {
      if (isDownRef.current) e.preventDefault();
    };
    document.addEventListener("selectstart", handleSelectStart);
    return () => document.removeEventListener("selectstart", handleSelectStart);
  }, []);

  return (
    <>
      <h2>Latest projects</h2>
      <div className="latest-project-wrapper">
        <div
          ref={containerRef}
          className={clsx("latest-project-container", {
            "is-scrolling": isScrollingRef.current,
          })}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDownRef.current ? "grabbing" : "grab" }}
        >
          {data.map((item) => (
            <Project key={item.webSiteName} value={item} />
          ))}
        </div>
      </div>
    </>
  );
};