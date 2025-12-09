import { motion } from "framer-motion"


export function Title() {
    return (<>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [-100, 10, 0] }}
            transition={{ duration: .5 }}
            viewport={{once:true,amount:.5}}

            className="text-center mt-20 max-w-[1139px] sm:max-w-[500px] m-auto max-sm:px-20 ">
            <h5 className="text-yellow font-dmserif max-sm:text-h1 sm:text-h4 ">Our Specialities</h5>
            <h4 className="tracking-widest text-white max-sm:text-[15px]           sm:text-h2               ">Authentic meals from our restaurant served with high quality ingredients.</h4>
            

        </motion.div>
    
    </>
    )
}