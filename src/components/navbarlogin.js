import { Component } from "react"
import "./Navbar.Styles.css";


class Navbarlogin extends Component{
render(){
    return(
        <nav className="navbar">
    <h2>Talk Up</h2>
    <ul className="ulone">
      <li>
        <a href="#community">Community</a>
      </li>
      <li>
        <a href="/relax">Relax</a>
      </li>
      <li>
        <a href="/knowmore">Know More</a>
      </li>
      <li>
        <a href="/homelogin">Talk Up</a>
      </li>
    </ul>
    <ul className="ultwo">
      <li>
      <i class="fa-solid fa-moon"></i>
      </li>
      <span>|</span>
      <li>
        <a href="#عربي">عربي</a>
      </li>
      <span>|</span>
      <li>
        <a href="/settingprofile"><i class="fa-solid fa-gear"></i></a>
      </li>
      <span>|</span>
      <li>
        <a href="#login"><i class="fa-regular fa-user"></i></a>
      </li>
    </ul>
  </nav>
    )
}
}

export default Navbarlogin;