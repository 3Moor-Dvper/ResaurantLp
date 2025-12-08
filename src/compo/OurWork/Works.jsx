

// import { Star } from "lucide-react"
import { Star } from "../icons/Star"
import { works } from "../../Data"
import { motion } from "framer-motion"
import { IndentIcon } from "lucide-react"
export function Works() {
    
    return (
        <motion.div
            className="grid grid-cols-4 p-16 max-sm:p-5 max-sm:grid-cols-1 max-sm:gap-20  sm:grid-cols-2 lg:grid-cols-4">
            {works.map((work, index) => (
                <motion.div
                    initial={{ opacity: 0 ,y:30 }}
                    whileInView={{ opacity: 1 ,y:0}}
                    transition={{duration:.7, delay:index * .2}}
                    viewport={{
                        once: true, amount:.5
                    }}
                    
                    key={index} className="card p-5 text-white flex flex-col gap-5 justify-between max-h-[550px]">
                    <img src={work.img} alt={work.title}/>
                    <h2 className="max-mdm:text-[20px]">{work.title}</h2>
                    <div className="flex gap-3">
                    {Array.from({ length: work.stars }).map((_, index) => (
                            <motion.div 
                                className="hover:scale-120 duration-300"
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView  ={{ opacity: 1 }}
                            transition={{ duration: .5, delay: index * .2 }}
                            viewport={{once:true ,amount:.5}}
                            >
                                <Star></Star>
                            </motion.div>
                        ))}
                            </div>
                    <button className="bg-orange shadow-sm hover:scale-120 max-sm:hover:scale-105 duration-300 shadow-yellow p-2 text-[20px] rounded-[20px]">{work.btn}</button>
                </motion.div>
            ))}
        </motion.div>
    )
}
