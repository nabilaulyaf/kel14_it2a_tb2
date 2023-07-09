import './App.css';
import { Routes, Route } from "react-router-dom"
import Index from "./views/Index"
import Exhibitions from "./views/Exhibitions"
import Location from "./views/Location"
import About from "./views/About"
import Navbar from "./components/Navbar"
import { MENUS } from './constants/pages';

function App(){
  return(
    <div className="App">
        <Navbar menus={MENUS}></Navbar>
        <Routes>
        <Route path="/" element={ <Index/> }></Route>
        <Route path="/exhibitions" element={ <Exhibitions/> }></Route>
        <Route path="/location" element={ <Location/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        </Routes>
    </div>
  )
}

export default App