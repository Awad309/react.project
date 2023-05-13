import { Component } from "react"
import "./Navbar.Styles.css";

class Navbar extends Component{
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
        <a href="#know more">Know More</a>
      </li>
      <li>
        <a href="#talk up">Talk Up</a>
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
        <a href="#signup">Signup</a>
      </li>
      <span>|</span>
      <li>
        <a href="#login">Login</a>
      </li>
    </ul>
  </nav>
    )
}
}

export default Navbar;