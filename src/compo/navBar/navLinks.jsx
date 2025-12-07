
import { navLinks } from "../../Data";


export function Navlinks({isopen}) {
    return (
        <>
            <ul
  className={`
    flex flex-col gap-5 flex-center
    fixed top-7 right-5 bg-black/30
    transition-all duration-300 overflow-hidden
    sm:text-base
    sm:static sm:flex-row  sm:overflow-visible sm:bg-transparent sm:gap-5 md:gap-9 lg:gap-12 xl:gap-15

    ${isopen ? "max-h-96 p-10" : "max-h-0 p-0 text-[5px]"}
  `}
>
  {navLinks.map(({ label }) => (
    <li key={label}>
      <a href={label}>{label}</a>
    </li>
  ))}
</ul>

        
        </>
    
        
    )
    
}


// sm:gap-5 md:gap-9 lg:gap-12 xl:gap-15