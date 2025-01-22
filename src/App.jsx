import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"



function App() {


  return (
    <>
    <div className="h-screen">
      <Navbar/>
      <div>
        <Hero/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
