import { motion } from "motion/react"
import Link from "next/link"

type NavLinkProps = {
    path: string,
    children: React.ReactNode
}

export default function ToggleLink({path, children}: NavLinkProps) {
    return (
        <motion.li
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
        <Link href={path}>{children}</Link>
        </motion.li>
    )
}