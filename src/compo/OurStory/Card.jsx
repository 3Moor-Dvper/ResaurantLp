import { story } from "../../Data"

export function Card() {
    return (<section className="flex justify-around mt-10">
        <div>
            <img src={story.img} alt="" className="w-[clamp(200px,44.4vw,865px)]" />
        </div>

        <div className="text-white w-[clamp(100px,24vw,460px)] flex flex-col justify-between gap-3">
            <h1 className="text-[clamp(10px,1.4vw,28px)]">{story.t1 }</h1>
            <h1 className="text-[clamp(10px,1.4vw,28px)] max-sm:hidden">{story.t2 }</h1>
            <button className="text-yellow">{story.btn }</button>
        </div>
        
    </section>)
}