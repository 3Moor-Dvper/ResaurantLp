import { motion } from "framer-motion"

export function Arrowlft() {

    return (
        <>
            <svg className="max-sm:w-[150px] sm:w-[400px] md:w-[500px]"
      
                width="332" height="278" viewBox="0 0 414 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial={{ pathLength: 1, pathOffset: 1 }}
                
                    animate={{ pathLength: 1,pathOffset:0 }}
                    transition={{ duration: 1 }}
                    d="M413.389 311C285.496 321.531 197.192 304.957 179.05 216.153C160.909 127.349 95.4844 52.0751 1.16849 2.21008" stroke="white" stroke-opacity="0.5" stroke-width="5" />
</svg>

            
        </>

    )
}


