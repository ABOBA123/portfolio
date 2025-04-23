import { useEffect, useRef, useState, useCallback } from "react"
import { EducationDto } from "../projects/types"
import { Education } from "./Education"
import kp11 from "../../assets/svg/kp-11-logo.svg"
import w3schools from "../../assets/svg/w3schools.svg"
import learnJs from "../../assets/favicon.png"
import linux from "../../assets/svg/Linux.png"

export const Educations = () => {
    const [data, setData] = useState<EducationDto[]>([])
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [clickX, setClickX] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setData([
            {
                pics: learnJs,
                name: "learn js",
                time: "April 2024",
                moreInf: "completed the entire course",
                link: "https://learn.javascript.ru/"
            },
            {
                pics: linux,
                name: "Astra Linux",
                time: "April 2025",
                moreInf: "completed the entire course",
                pdfLink: "https://drive.google.com/file/d/1lXppo82rlZBV6O96pwqEAw9L5f6Y-3_Z/view?usp=sharing"
            },
            {
                pics: w3schools,
                name: "w3schools",
                time: "April 2024",
                moreInf: "got three certifications in Js, Bootstrap, React ",
                link: "https://pathfinder.w3schools.com/",
            },
            {
                pics: kp11,
                name: "kp-11",
                time: "enforced from September 2023 to present",
                moreInf: "College of Entrepreneurship 11",
                link: "https://kp11.mskobr.ru/"
            },
        ])
    }, [])

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!ref.current) return
        setIsDown(true)
        setClickX(e.clientX)
        setStartX(e.pageX - ref.current.offsetLeft)
        setScrollLeft(ref.current.scrollLeft)
        document.body.style.userSelect = 'none'
    }

    const handleMouseLeave = () => {
        setIsDown(false)
        document.body.style.userSelect = ''
    }

    const handleMouseUp = () => {
        setIsDown(false)
        document.body.style.userSelect = ''
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current || !isDown) return
        e.preventDefault()
        const x = e.pageX - ref.current.offsetLeft
        if (e.pageX === clickX) {
            return
        }
        const walk = (x - startX) * 8
        ref.current.scrollLeft = scrollLeft - walk
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!ref.current) return
        const touch = e.touches[0]
        setIsDown(true)
        setStartX(touch.pageX - ref.current.offsetLeft)
        setScrollLeft(ref.current.scrollLeft)
    }

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!ref.current || !isDown) return
        e.preventDefault()
        const touch = e.touches[0]
        const x = touch.pageX - ref.current.offsetLeft
        const walk = (x - startX) * 0.8
        ref.current.scrollLeft = scrollLeft - walk
    }, [isDown, startX, scrollLeft])

    const handleTouchEnd = () => {
        setIsDown(false)
    }

    useEffect(() => {
        const handleSelectStart = (e: Event) => {
            if (isDown) e.preventDefault()
        }
        document.addEventListener('selectstart', handleSelectStart)

        return () => {
            document.removeEventListener('selectstart', handleSelectStart)
        }
    }, [isDown])

    useEffect(() => {
        const refCurrent = ref.current

        if (refCurrent) {
            refCurrent.addEventListener('touchmove', handleTouchMove, { passive: false })
        }

        return () => {
            if (refCurrent) {
                refCurrent.removeEventListener('touchmove', handleTouchMove)
            }
        }
    }, [handleTouchMove])

    return (
        <>
            <div className="education-wrapper-container">
                <div
                    ref={ref}
                    className="education-wrapper"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {data.map((item, index) => <Education key={index} value={item} />)}
                </div>
            </div>
        </>
    )
}
