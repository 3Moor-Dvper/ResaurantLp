import { motion } from "framer-motion"

export function Text() {
    return (<motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [50,-20,10,0] }}
        transition={{ duration: .7, delay: .5, ease:'easeInOut' }}
        viewport={{once:true,amount:.5}}
        
        className="mt-10 flex flex-col space-y-5 flex-center m-auto w-[clamp(250px,42.7vw,834px)]">

        <h5 className="text-yellow font-dmserif text-[clamp(16px,3.3vw,65px)] ">Dining Events</h5>
        <h4 className="font-dmsans text-white  text-[clamp(12px,2.3vw,45px)] text-center">We provide dining event for your special day with your important people</h4>
        <div className="space-x-10 max-sm:space-x-3 tracking-widest">
        <button className=" border-2 border-red xsm:p-2  text-[clamp(10px,1.5vw,45px)]              p-5 hover:bg-red ease-in-out duration-200 transition-all rounded-xl">Private Events</button>
        <button className=" border-2 border-red xsm:p-2  text-[clamp(10px,1.5vw,45px)]             p-5 hover:bg-red ease-in-out duration-200 transition-all rounded-xl">Corporate Events</button>

        </div>
        
    </motion.section>)
}