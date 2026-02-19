import React from "react";
import { IoSunny } from "react-icons/io5"
import { IoMoon } from "react-icons/io5"
import "./switch.css"

export default function Switch() {
    const [toggled, setToggled] = React.useState<boolean>(false)

    function handleToggle(): void {
        setToggled(prev => !prev)
    }

    return (
        <button 
            className="switch-container"
            onClick={() => handleToggle()}
            style={{backgroundColor: toggled ? "#696969" : "transparent"}}
        >
            <div 
                className="switch-slider"
                style={{
                    transform: `translateX(${toggled ? "65%" : "-65%"})`,
                    transition: "0.3s"
                }}
            >
                {toggled ? <IoSunny /> : <IoMoon />}
            </div>
        </button>
    )
}