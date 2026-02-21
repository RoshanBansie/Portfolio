"use client"

import React from "react"
import { MdFileDownloadDone } from "react-icons/md"
import { HiDownload } from "react-icons/hi"
import type { DownloadBtnProps } from "@/app/types"
import "./downloadbtn.css"

export default function DownloadBtn({innerText, src, style}: DownloadBtnProps) {
    const [hasDownloaded, setHasDownloaded] = React.useState<boolean>(false)
    return (
        <a href={src} download={true} className="download-btn">
            <button 
                className={style + "-button"}
                onClick={() => setHasDownloaded(true)}
            >
                {
                    hasDownloaded ? <MdFileDownloadDone className="download-btn-icon" /> 
                    : <HiDownload className="download-btn-icon" />
                }
                {innerText}
            </button>
        </a>
    )
}