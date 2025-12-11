import { motion } from "framer-motion";
import { boxes } from "../../Data"
export function Boxes() {
    return (<section className="mt-0 p-16 space-y-10">
        {boxes.map((box, i) => {
            const isEven = i % 2 === 0;
            return (<>
                <div className    ={`${isEven ?' flex-row':' flex-row-reverse'} flex justify-between items-center gap-x-8 `}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            x:isEven?[5,-10,5,0]:[-5,10,-5,0]
                        }}
                        transition={{ duration: .5, delay: .9 ,ease:"backOut" }}
                        viewport={{once:true,amount:.5}}
                        
                        className="text-white space-y-1 tracking-widest">
                        <h5 className=" text-[clamp(10px,3.3vw,65px)] ">{box.title}</h5>
                        <h4 className=" text-[clamp(6px,1.4vw,28px)]  ">{box.desc}</h4>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            x: isEven ?[-20,20,-10,0]:[20,-20,10,0]
                        }}
                        viewport={{amount:.5,once:true}}
                        transition={{ duration: .55 ,ease:"backOut",delay:.6}}
                    
                        className={`
                        relative rounded-lg overflow-hidden 
                        before:content-[''] before:absolute 
                        ${isEven ?'before:bg-linear-to-r before:left-0':'before:bg-linear-to-l before:right-0'}
                        before:from-black
                        before:to-transparent
                        before:h-full
                        before:w-[50px]
                        
                    `}
                    
                  
                    >
                        <img src={box.img} alt="" className=" w-[clamp(300px,65.5vw,1278px)]  h-[clamp(60px,18vw,350px)]" />
                        <span className={`
                        text-[clamp(10px,3.3vw,65px)]
                        
                        text-yellow
                             absolute bottom-0
                              ${isEven ? 'left-0' : 'right-0'}
                                `}>{box.price}</span>
                    </motion.div>
                </div>
            
            </>)

        })}


    </section>)
}