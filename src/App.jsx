
import { Hero } from "./compo/Hero/Hero"
import { Nav } from "./compo/navBar/Nav"
import { Ourspecialities } from "./compo/OurSpecialities/Ourspecialities"
import { Ourwork } from "./compo/OurWork/ourwork"
import { DiningEvents } from "./compo/Dinig Events/Dining-events"
import { Ourstory } from "./compo/OurStory/Ourstory"
import { Footer } from "./compo/Footer/Footer"
function App() {
 

  return (
    <section className="min-h-[10000px]">  
      <Nav></Nav>
      <Hero></Hero>
      <Ourwork></Ourwork>
      <Ourspecialities></Ourspecialities>
      <DiningEvents></DiningEvents>
      <Ourstory></Ourstory>
      <Footer></Footer>
    
    </section>
      
  )
}

export default App
   