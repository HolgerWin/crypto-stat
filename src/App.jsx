import Home from "./pages/Home.jsx"
import LiveMarket from "./pages/LiveMarket.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./components/Navbar.jsx"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/market" element={<LiveMarket/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App
