import { motion } from "framer-motion"

export function Text() {
    return (<>
        <div className=" text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.h5
                initial={{ y: 50, opacity:0 }}
                animate={{ y: 0 ,opacity:1}}
                transition={{ duration: .5 ,delay:1}}
                
                className=" tracking-widest font-dmserif text-yellow m-30  max-sm:m-5  sm:m-5 md:m-6 lg:m-8 xl:m-10  text-[clamp(16px,3.3vw,65px)]"
            >Taste the rich flavour of high quality meals</motion.h5>
            <motion.h4
                initial={{ y: 50, opacity:0 }}
                animate={{ y: 0 ,opacity:1}}
                transition={{ duration: .5 ,delay:1.3}}
            
                className="tracking-widest font-sans text-white text-[clamp(10px,2.3vw,45px)] ">We only use the five star quality for our menu, come and get the richness in every meals we serve.</motion.h4>
        </div>

    
    </>)
}