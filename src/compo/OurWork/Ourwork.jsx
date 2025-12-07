
import { motion } from "framer-motion"
import { Text } from "./Text"
import { Works } from "./Works"



export function Ourwork() {
    return (
        <>
            <Text></Text>
            <Works></Works> 
            <motion.img
                initial={{ scale: 0, opacity: .5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                    scale: { duration: 1 },
                    opacity:{duration:1,delay:.5}
                }}
                viewport={{
                    once:true
                }}
                    
                className=" lg:w-full "
                src="/ResaurantLp/imgs/Rectangle 13.png"></motion.img>
            
        </>
    )
}