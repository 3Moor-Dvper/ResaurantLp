import { motion } from "framer-motion"
export function Bg({children}) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0,scale:.8 }}
                animate={{ opacity: 1, scale:1}}
                transition={{duration:1}}
            
                className={`relative
                before:content-['']
                before:absolute
                before:bottom-[-5px] 
                before:left-0 
                before:w-full
                before:h-20 
                before:bg-linear-to-t
                before:from-black before:to-transparent `}
            >
                <img className="w-full " src="/ResaurantLp/imgs/bg.png"  alt="" />
                {children}
                
            </motion.div>
        </>
    )
}