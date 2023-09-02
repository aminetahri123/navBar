import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import './App.css'
function App() {
  return (
    <div
      className="myPage"
      data-spy="scroll"
      data-target=".navbar"
      data-offset="60"
    >
      <Nav />

      <About />
      <Services />
      <Portfolio />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
