import { motion } from "framer-motion"


export function Title() {
    return (<>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [-100, 10, 0] }}
            transition={{ duration: .5 }}
            viewport={{once:true,amount:.5}}

            className="text-center mt-20 max-w-[1139px] sm:max-w-[500px] m-auto max-sm:px-20 ">
            <h5 className="text-yellow font-dmserif text-[clamp(16px,3.3vw,65px)] ">Our Specialities</h5>
            <h4 className="tracking-widest text-white text-[clamp(10px,2.3vw,45px)]         ">Authentic meals from our restaurant served with high quality ingredients.</h4>
            

        </motion.div>
    
    </>
    )
}