import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import 'bootstrap/dist/css/bootstrap.css';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App