import React from "react";

import Navbarlogin from "../components/navbarlogin";
import './relax.css'
import Foot from "../components/foot";
import image from "../images/Union.png"


const Relax = () => {
    return (
<>
<Navbarlogin />
<h3>Daily support for your mental health</h3>
<a href="/homelogin">Home</a>
<span>>></span>
<span className="spn">Relax</span>
<input className="search">
</input>
<img src={image} className="back-image" alt="" />
<Foot />
</>

    );
    }  
    export default Relax;