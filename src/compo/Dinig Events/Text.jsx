import { motion } from "framer-motion"

export function Text() {
    return (<motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [50,-20,10,0] }}
        transition={{ duration: .7, delay: .5, ease:'easeInOut' }}
        viewport={{once:true,amount:.5}}
        
        className="mt-10 flex flex-col space-y-5 flex-center m-auto max-w-[850px] xsm:max-w-[250px] sm:max-w-[500px]">

        <h5 className="text-yellow font-dmserif xsm:text-[20px] mdm:text-[30px] ">Dining Events</h5>
        <h4 className="font-dmsans text-white   xsm:text-[10px] mdm:text-[20px] ">We provide dining event for your special day with your important people</h4>
        <div className="space-x-10 tracking-widest">
        <button className=" border-2 border-red xsm:p-2 xsm:text-[10px] mdm:text-[12px]                   p-5 hover:bg-red ease-in-out duration-200 transition-all rounded-xl">Private Events</button>
        <button className=" border-2 border-red xsm:p-2 xsm:text-[10px] mdm:text-[12px]                   p-5 hover:bg-red ease-in-out duration-200 transition-all rounded-xl">Corporate Events</button>

        </div>
        
    </motion.section>)
}