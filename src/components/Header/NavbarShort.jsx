import "./styles/navbarShort.css";
import Navbox from "./Navbox";
import { FaBars, FaSearchengin } from "react-icons/fa";

export default function NavbarShort() {

  function showNav(){
    document.getElementById("nav-box").classList.toggle("show");
  }

  return (
    
    <div className="nav-container">
      <Navbox/>
      <FaBars onClick={showNav} className="icons" size={35} />
      <a href = "/home"><img src="https://www.bain.com/contentassets/0b88e3e10a7b4592809517c28b75847e/logo_red_bain.svg" /></a>
      <FaSearchengin className="icons" size={35} />
    </div>
  );
}
