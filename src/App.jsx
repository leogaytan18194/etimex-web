import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Segmentos from "./components/segmentos/Segmentos"
import Informacion from "./components/informacion/Informacion"
import Impresiones from "./components/informacion/Impresiones"
import Works from "./components/works/Works"
import Clientes from "./components/clientes/Clientes"
import Contact from "./components/contact/Contact"
import Servicios from "./components/servicios/Servicios"
import Print from "./components/informacion/Print"
import Video from "./components/video/Video"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
        <Video/>
        <Works/>
       <Intro/>
       <Print/>
       <Informacion/>
       <Segmentos/>
       <Servicios/>
       <Impresiones/>
       <Clientes/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
