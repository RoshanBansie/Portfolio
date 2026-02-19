"use client"

import React from "react";
import { IoSunny } from "react-icons/io5"
import { IoMoon } from "react-icons/io5"
import "./switch.css"

export default function Switch() {
    const [theme, setTheme] = React.useState<"dark" | "light">("dark")

    React.useEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light")
    }, [theme])

    function handleToggle(): void {
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }

    return (
        <button 
            className="switch-container"
            onClick={() => handleToggle()}
            aria-label="toggle light-mode"
            style={{backgroundColor: theme === "light" ? "#696969" : "transparent"}}
        >
            <div 
                className="switch-slider"
                style={{
                    transform: `translateX(${theme === "light" ? "65%" : "-65%"})`,
                    transition: "0.3s"
                }}
            >
                {theme === "light" ? <IoSunny /> : <IoMoon />}
            </div>
        </button>
    )
}