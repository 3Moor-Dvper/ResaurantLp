import { motion } from "framer-motion"
export function Img() {
    return (
        <>
            <motion.img
            initial={{ scale: 0, opacity: .5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        scale: { duration: 1 },
                        opacity:{duration:1,delay:.5}
                    }}
                viewport={{
                    once: true
                }}
                src="/ResaurantLp/imgs/Rectangle 13.png" className="max-sm:mt-15 w-full object-cover max-h-[510px] "></motion.img>
        </>
    )
}

