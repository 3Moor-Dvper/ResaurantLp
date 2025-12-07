import { Logs } from "lucide-react";
import { Button } from "./button";
import { Icon } from "./icon";
import { Navlinks } from "./navLinks";
import { motion } from "framer-motion";
import { useState } from "react";
export function Nav() {
    const [isopen,setisopen]= useState(false)
    return (<>
            <motion.header
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration:.7,ease:"easeInOut"}}
                className=" bg-gray sticky top-0 z-10 w-full flex max-sm:justify-between max-sm:px-5 justify-around items-center text-white font-inter lg:text-h1  ">
            
            <Icon></Icon>
                
            <Navlinks isopen={isopen} ></Navlinks>

            <div className="flex-center gap-5">
            
            <Button></Button>
            <Logs onClick={()=>setisopen(!isopen)} className="w-5 h-5 sm:hidden" ></Logs>
                
            </div>  
        </motion.header>



    </>)
}