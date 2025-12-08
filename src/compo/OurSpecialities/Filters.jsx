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
                className="max-sm:hidden  sm:grid-cols-2 text-h3 md:grid-cols-3 xl:grid-cols-6 gap-10 grid text-white p-16 font-dmsans mt-20 w-full">
                {filters.map((item) => (
                    <motion.button
                        className=" p-5 sm:p-2 rounded-lg hover:bg-red transition-colors duration-300 ease-in-out border-2 border-red "
                        variants={itemVariants}
                    >{item}</motion.button>
                ))}
            </motion.div>
        </>
       
    )
}
