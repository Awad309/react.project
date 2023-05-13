import {Component} from "react";
import "./foottwo.css";



class foottwo extends Component{
    render(){
        return(
            <>
            <div className="foottwo">
    <ul className="one-one">
      <li>
        <a href="#">INFO</a>
      </li>
      <li>
        <a href="#">Formats</a>
      </li>
      <li>
        <a href="#">Compression</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">Status</a>
      </li>
    </ul>
    <ul className="two-two">
      <li>
        <a href="#">RESOURCES</a>
      </li>
      <li>
        <a href="#">Developer API</a>
      </li>
      <li>
        <a href="#">Tools</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </ul>
    <ul className="three-three">
      <li>
        <a href="#">COMPANY</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Sustainability</a>
      </li>
      <li>
        <a href="#">Terms Of Service</a>
      </li>
      <li>
        <a href="#">Privacy</a>
      </li>
    </ul>
  </div> 
   <div className="inter-email">
    <label>Doctors Contact With Us</label>
    <input type="text" placeholder="Your email"/>
    <button>SUBSCRIBE</button>
  </div> 
  </>
        )
    }
}

export default foottwo;

