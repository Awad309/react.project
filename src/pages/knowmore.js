import React from "react";

import Navbarlogin from "../components/navbarlogin";
import Navknowmore from "../components/navknowmore";
import './knowmore.css'
import image from "../images/Union.png"
import imageone from "../images/Rectangle 64.png"
import imagetwo from "../images/Rectangle 66.png"
import Foot from "../components/foot";
import video from "../video/12.02.03.mp4"

const Knowmore = () => {
    return (
<>
<Navbarlogin />
<h3>Your Mental Health is a Priority.</h3>
<a href="/homelogin">Home</a>
<span>{'>>'}</span>
<span className="spn">Know more</span>
<h3 className="most">Most popular</h3>
<input className="search">
</input>
<div className="search-icon-two-one">
<i class="fa-solid fa-magnifying-glass"></i>
</div>
<Navknowmore />
<img src={image} className="back-image" alt="" />
<h3 className="why">Why Writing Can Help Heal Depression</h3>
<p className="str">The subtitle of Storied Mind used to be Writing to Recover Life from Depression, and I’ve often wondered why it is specifically that writing can help heal depression, especially when so many other approaches to treatment have failed me... read more</p>
<img src={imageone} className="imageone-ar" alt="" />
<video src={video} className="video-one" controls alt="" />
<h3 className="in">In a world full of noise, music can help calm your mind</h3>
<p className="this">In this week’s Anxiety Slayer podcast, we’re discussing how music has the power to transport you to a peaceful place, which is one of the reasons why it is so helpful for managing anxiety. This episode includes a guided breathing practice with relaxing music from our Tranquility album.</p>

<img src={imagetwo} className="imagetwo-ar" alt="" />
<h3 className="book">Book: The Body Keeps the Score</h3>
<p className="mind">The subtitle of Storied Mind used to be Writing to Recover Life from Depression, and I’ve often wondered why it is specifically that writing can help heal depression, especially when so many other approaches to treatment have failed me... read more</p>


 <Foot />
</>

    );
    }  
    export default Knowmore;