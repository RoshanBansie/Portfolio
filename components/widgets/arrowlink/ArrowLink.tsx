import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import type { ArrowLinkProps } from "@/app/types";
import "./arrowlink.css"

export default function ArrowLink({innerText, dst}: ArrowLinkProps) {
    return (
        <Link 
            href={dst} 
            target="_blank" 
            className="arrow-link"
        >
            {innerText}
            <MdOutlineArrowOutward className="arrow-topright" />
        </Link>
    )
}