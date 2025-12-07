import { motion } from "framer-motion"

export function Arrowrit() {
    return (<>
        <svg width="332" height="278" viewBox="0 0 332 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{ pathLength: 1,pathOffset:1 }}
                    animate={{ pathLength: 1,pathOffset:0 }}
                    transition={{ duration: 1 }}
                
                d="M0.54829 255.377C107.022 279.313 179.372 272.86 190.069 189.236C200.766 105.612 251.296 40.1232 327.004 2.2357" stroke="white" stroke-opacity="0.5" stroke-width="5" />
</svg>

    </>)
}
{/* <svg width="329" height="270" viewBox="0 0 329 270" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.54829 255.377C107.022 279.313 179.372 272.86 190.069 189.236C200.766 105.612 251.296 40.1232 327.004 2.2357" stroke="white" stroke-opacity="0.5" stroke-width="5"/>
</svg> */}
