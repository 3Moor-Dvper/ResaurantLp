
import { Hero } from "./compo/Hero/Hero"
import { Nav } from "./compo/navBar/Nav"
import { Ourspecialities } from "./compo/OurSpecialities/Ourspecialities"
import { Ourwork } from "./compo/OurWork/ourwork"
import { DiningEvents } from "./compo/Dinig Events/Dining-events"
function App() {
 

  return (
    <div className="min-h-[2000px]">  
      <Nav></Nav>
      <Hero></Hero>
      <Ourwork></Ourwork>
      <Ourspecialities></Ourspecialities>
      <DiningEvents></DiningEvents>
    
    </div>
      
  )
}

export default App
   