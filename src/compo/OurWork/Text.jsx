import { motion } from "framer-motion"
import { Arrowlft } from "../icons/Arrowlft"
import { Arrowrit } from "../icons/Arrowrit"
export function Text() {
    return (<>
        <div
           
            className="flex-center text-center p-16 max-sm:p-5 ">
            <Arrowlft></Arrowlft>
            <motion.div
                 initial={{y:50, opacity: 0}}
            whileInView={{ y: 0, opacity:1}}
            viewport={{once: true }}
            transition={{ duration: .5,delay:1 }}
            
                className="flex flex-col">
                <h5 className="font-dmserif text-yellow text-[clamp(20px,3.3vw,65px)]">
                    Today's Special
                </h5>
                <h4 className="tracking-widest font-dmsans text-white text-[clamp(10px,2.3vw,45px)]">
                    Special menu oftenly comes different everyday,
                        this is our special food for today
                </h4>
            </motion.div>
            <Arrowrit></Arrowrit>

        </div>

    </>)
}