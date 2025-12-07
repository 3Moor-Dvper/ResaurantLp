import { motion } from "framer-motion"
import { filters } from "../../Data"

export function Filters() {

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: .5,  
            }

        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
       
        
    }
    return (
        <>
            <motion.div
                variants={containerVariants}
                initial='hidden'
                whileInView='show'
                viewport={{once:true}}
                className="text-white flex gap-10 text-h3 flex-center font-dmsans mt-20 w-full">
                {filters.map((item) => (
                    <motion.button
                        className=" p-5 rounded-lg hover:bg-red transition-colors duration-300 ease-in-out border-2 border-red "
                        variants={itemVariants}
                    >{item}</motion.button>
                ))}
            </motion.div>
        </>
       
    )
}
