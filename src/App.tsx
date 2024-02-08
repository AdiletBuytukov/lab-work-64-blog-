import './App.css'
import Appbar from "./components/Appbar/Appbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Add from "./components/Add/Add";
import Contacts from "./components/Contacts/Contacts";

function App() {

  return (
    <>
      <header>
        <Appbar/>
        <Routes>
          <Route path='/' element={(<Home/>)}/>
          <Route path='/Add' element={(<Add/>)}/>
          <Route path='/About' element={(<About/>)}/>
          <Route path='/Contacts' element={(<Contacts/>)}/>
        </Routes>
      </header>
    </>
  )
}

export default App
