import Navbars from "./Components/Navbar/Navbar";
import './App.css';
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme =useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App" style={{background : darkMode?'black':'',color:darkMode?'white':''}}>
       <Navbars/>
       <About/>
       <Skills/>
       <Works/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
   
  );
}

export default App;
