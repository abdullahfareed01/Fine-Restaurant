import './App.css'
import {  AboutUs, FindUs, Header, SpecialMenu, Chef, Intro, Laurels, Gallery, Footer   } from './container'
import { Navbar } from './components'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AboutUs></AboutUs>
      <SpecialMenu></SpecialMenu>
      <Chef></Chef>
      <Intro></Intro>
      <Laurels></Laurels>
      <Gallery></Gallery>
      <FindUs></FindUs>
      <Footer></Footer>
    </>
  )
}

export default App
