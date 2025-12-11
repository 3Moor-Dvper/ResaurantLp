import { assets } from "../../assets/assets"
import { Call } from "../icons/call"
import { Map } from "../icons/map"
export function Footer() {
    return (
        <section>

            <div
                className="bg-contain aspect-1950/658 mt-50 max-sm:mt-20 relative text-white "
                style={{ backgroundImage: `url(${assets.foot})` }}> 
                
                    <div className="text-[clamp(15px,3.3vw,65px)] m-auto text-center w-[clamp(100px,50vw,1557px)]">
                         We are always ready to surprise you with new flavours
                </div>
                

                 <div className="flex flex-col gap-3 absolute bottom-3 left-5 sm:bottom-7 text-[clamp(7px,1vw,20px)]">
                    <div className="flex gap-4">
                        <div className="w-[clamp(15px,1vw,50px)]">
                            <Map></Map>
                        </div>
                        Flavo, (Copenhagen, Denmark)
                    </div>
                    

                    <div className="flex gap-4">
                        <div className="w-[clamp(15px,1vw,50px)]">
                             <Call></Call>
                        </div>
                    0122
                </div>
                </div> 


                </div>



        </section>
    )
}