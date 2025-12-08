
import { motion } from "framer-motion";
import { cards } from "../../Data"
export function Cards() {
    


    return (
        <section className="bg-[url('/ResaurantLp/imgs/unsplash_aAiy88ytl0c.png')]  w-full bg-center bg-no-repeat bg-contain">
            <div className="flex flex-col mt-[100px] gap-10 ">
                {cards.map((card, i) => {
                    const isEven = i % 2 === 0;
                    const maxsm = window.innerWidth <= 640;
                    const max510 = window.innerWidth <= 510;
                    const max410 = window.innerWidth <= 410;
                    return (
                        <motion.div
                            className={`flex justify-around items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                            <motion.img
                                className="max-sm:w-[150px] sm:w-[300px]"
                                initial={{ opacity: 0, x:0 }}
                                whileInView={{
                                    opacity: 1,
                                    x:
                                        max410?isEven?[0, -10, 3, 0]:[0, 10, -3, 0]:
                                        max510?isEven?[0, -20, 7, 0]:[0, 20, -7, 0]:
                                        maxsm ? isEven ? [0, -40, 15, 0] : [0, 40, -15, 0] : isEven ? [0, -60, 20, 0] : [0, 60, -20, 0]
                                }}
                                transition={{ duration: .7, ease:"backOut" }}
                                viewport={{once:true,amount:.5}}
                                src={card.img} alt="Error" />
                            <motion.div
                                className="text-white max-w-[462px] max-sm:max-w-[150px] max-sm:space-y-1 space-y-5 sm:max-w-[250px]"
                                initial={{ opacity: 0, x:0 }}
                                whileInView={{
                                    opacity: 1,
                                    x:
                                        max410?isEven ? [-20, 3, 0] : [20, -3, 0]:
                                        max510?isEven ? [-35, 7, 0] : [35, -7, 0]:
                                        maxsm ? isEven ? [-70, 15, 0] : [70, -15, 0] :
                                        isEven ? [-100, 30, 0] : [100, -30, 0]
                                }}
                                transition={{ duration: .5, delay: .3 ,ease:"backOut"}}
                                viewport={{once:true,amount:.5}}
                            >
                                <h4 className="xsm:text-[10px] mdm:text-[20px] sm:text-h1  ">{card.title}</h4>
                                <h1 className="xsm:text-[7px]  mdm:text-[10px] sm:text-[15px] ">{card.desc}</h1>
                                <span className="text-yellow">{card.price}</span>
                            </motion.div>
                        </motion.div>
                    )   
                })}

            </div>
            
    
    </section>
    )
}