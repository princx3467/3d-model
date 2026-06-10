import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import StudioLights from './components/three/StudioLights'
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/all';
import Showcase from './components/Showcase'
import Highlights from './components/Highlights'
import Performance from './components/Performance'
import Footer from './components/Footer'


gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <ProductViewer />
    <Showcase />
    <Performance />
    <Highlights />
    <Footer />
   </main>
  )
}

export default App
