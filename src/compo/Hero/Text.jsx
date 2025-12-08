import { motion } from "framer-motion"

export function Text() {
    return (<>
        <div className=" text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.h5
                initial={{ y: 50, opacity:0 }}
                animate={{ y: 0 ,opacity:1}}
                transition={{ duration: .5 ,delay:1}}
                
                className=" font-dmserif text-yellow m-30  xsm:text-[10px] mdm:text-[15px]   max-sm:m-5 sm:text-h1 sm:m-5 md:text-h3 lg:text-h4 md:m-6  lg:m-8 xl:text-h5 xl:m-10  "
            >Taste the rich flavour of high quality meals</motion.h5>
            <motion.h4
                initial={{ y: 50, opacity:0 }}
                animate={{ y: 0 ,opacity:1}}
                transition={{ duration: .5 ,delay:1.3}}
            
                className="font-sans text-white sm:text-[16px] md:text-[20px] lg:text-h3 xl:text-h4 xsm:text-[7px] mdm:text-[10px] ">We only use the five star quality for our menu, come and get the richness in every meals we serve.</motion.h4>
        </div>

    
    </>)
}