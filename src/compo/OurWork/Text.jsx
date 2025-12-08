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
                <h5 className="font-dmserif text-yellow max-sm:text-[20px] sm:text-h3 md:text-h5">
                    Today's Special
                </h5>
                <h4 className="font-dmsans text-white max-sm:text-[10px] sm:text-[20px] md:text-h3 lg:text-h4">
                    Special menu oftenly comes different everyday,
                        this is our special food for today
                </h4>
            </motion.div>
            <Arrowrit></Arrowrit>

        </div>

    </>)
}