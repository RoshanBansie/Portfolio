"use client"

import React from "react"
import Skeleton from "@/components/layout/skeleton/Skeleton"
import Image from "next/image"

type ImageUIProps = {
    src: string,
    originalHeight: number,
    originalWidth: number,
    height: string,
    width: string,
    alt: string,
    className?: string,
}

// Extension of Next.js' Image component that also
// keeps state of the loading status of the image.
// I.e. while the image is still loading, a skeleton
// image appears on the frontend.
// If the image is fully loaded, it will be displayed.
export default function ImageUI({src, width, height, alt, className, originalHeight, originalWidth}: ImageUIProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    return (
        <div>
            {isLoading && <Skeleton type="image" width={width} height={height} />}
            <Image
                src={src}
                width={originalWidth}
                height={originalHeight}
                alt={alt}
                style={{
                    opacity: isLoading ? "0" : "100",
                    height: isLoading ? "0" : height,
                    width: isLoading ? "0" : width
                }}
                onLoad={() => setIsLoading(false)}
                className={className}
            />
        </div>
    )
}