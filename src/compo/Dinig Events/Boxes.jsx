
import { boxes } from "../../Data"
export function Boxes() {
    return (<section className="mt-0 p-16 space-y-10">
        {boxes.map((box, i) => {
            const isEven = i % 2 === 0;
            return (<>
                <div className={`${isEven ?' flex-row':' flex-row-reverse'} flex justify-between items-center gap-x-8 `}>
                    <div className="text-white space-y-1 tracking-widest">
                        <h5 className="xsm:text-[8px] smm:text-[15px] lgm:text-[20px] sm:text-[30px] lg:text-[40px] xl:text-[50px]  2xl:text-h5 ">{box.title}</h5>
                        <h4 className="xsm:text-[5px] smm:text-[8px] lgm:text-[10px] sm:text-[14px] lg:text-[20px]  xl:text-[30px]     2xl:text-h4 ">{box.desc}</h4>
                    </div>

                    <div className={`
                        relative rounded-lg overflow-hidden 
                        before:content-[''] before:absolute 
                        ${isEven ?'before:bg-linear-to-r before:left-0':'before:bg-linear-to-l before:right-0'}
                        before:from-black
                        before:to-transparent
                        before:h-full
                        before:w-[50px]
                        
                    `}
                    
                  
                    >
                        <img src={box.img} alt="" className="xsm:max-w-[150px] smm:max-w-[200px] lgm:max-w-[300px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[1278px]" />
                        <span className={`
                        xsm:text-[15px]
                        sm:text-[30px]
                        lg:text-[40px]
                        text-yellow
                             absolute bottom-0
                              ${isEven ? 'left-0' : 'right-0'}
                               xsm:text-[10px] `}>{box.price}</span>
                    </div>
                </div>
            
            </>)

        })}


    </section>)
}