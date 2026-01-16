import React from "react"
import "./menu.css"

export default function Menu() {

    const [open, setOpen] = React.useState<boolean>(false)
    
    function handleToggle(): void {
        setOpen(prev => !prev)
    }

    return (
        <div 
            className="menu-btn-container"
            onClick={handleToggle}
        >
            <div 
                className="menu-upper" 
                style={{
                    transform: open ? "rotate(45deg)" : "rotate(0)"
            }}>
            </div>
            <div 
                className="menu-lower" 
                style={{
                    transform: open ? "rotate(-45deg)" : "rotate(0)"
                }}>
            </div>
        </div>
    )
}