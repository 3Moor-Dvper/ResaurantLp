
import MediaQuery, { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { cards } from "../../Data"
export function Cards() {

    const min1025 = useMediaQuery({minWidth:1024})
    const max1024 = useMediaQuery({maxWidth:1024})


    return (
        <section className="bg-[url('/ResaurantLp/imgs/unsplash_aAiy88ytl0c.png')]  w-full bg-center bg-no-repeat bg-contain">
            <div className="flex flex-col mt-[100px] gap-10 max-sm:p-5 ">
                {cards.map((card, i) => {
                    
                    const isEven = i % 2 === 0;
                    
                    
                    return (
                        <motion.div
                            className={`flex justify-around items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                            <motion.img
                                className="xsm:w-[150px] mdm:w-[170px] lgm:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[450px]  2xl:w-[600px]"
                                initial={{ opacity: 0, x:0 }}
                                whileInView={{
                                    opacity: 1,
                                    x:
                                        min1025 ? isEven ? [0, -100, 20, 0] : [0, 100, -20, 0] :
                                            max1024 ? isEven ? [0, -15, 10, 0] : [0, 15, -10, 0] :undefined          
                                                            
                                }}
                                transition={{ duration: .7, ease:"backOut" }}
                                viewport={{once:true,amount:.5}}
                                src={card.img} alt="Error" />
                            

                            
                            <motion.div
                                className="text-white max-w-[462px] max-sm:max-w-[150px] max-sm:space-y-1 space-y-5 sm:max-w-[200px] lg:max-w-[350px] 2xl:max-w-[600px]"
                                initial={{ opacity: 0, x:0 }}
                                whileInView={{
                                    opacity: 1,
                                    x:
                                        min1025 ? isEven ? [-60, 20, 0] : [60, -20, 0] :
                                        max1024?isEven ? [-40, 10, 0] : [40, -10, 0] :undefined
                                        
                                }}
                                transition={{ duration: .5, delay: .3 ,ease:"backOut"}}
                                viewport={{once:true,amount:.5}}
                            >
                                <h4 className="xsm:text-[10px] mdm:text-[15px] lgm:text-[18px]  sm:text-[20px] md:text-h2      lg:text-[40px] 2xl:text-h4         ">{card.title}</h4>
                                <h1 className="xsm:text-[7px]  mdm:text-[8px]                   sm:text-[10px] md:text-[15px]  lg:text-[20px] 2xl:text-h1       tracking-widest leading-6 max-sm:leading-3 ">{card.desc}</h1>
                                <span className="text-yellow sm:text-h1">{card.price}</span>
                            </motion.div>
                        </motion.div>
                    )   
                })}

            </div>
            
    
    </section>
    )
}




